import BaseAction from '../BaseAction';
import { ActionName } from '../types';
import { ChatType, Peer, SendFileElement } from '@/core/entities';
import fs from 'fs';
import { sendMsg } from '@/onebot/action/msg/SendMsg';
import { uri2local } from '@/common/utils/file';
import { FromSchema, JSONSchema } from 'json-schema-to-ts';
import { SendMsgElementConstructor } from '@/onebot/helper/msg';

const SchemaData = {
    type: 'object',
    properties: {
        user_id: { type: ['number', 'string'] },
        file: { type: 'string' },
        name: { type: 'string' },
    },
    required: ['user_id', 'file', 'name'],
} as const satisfies JSONSchema;

type Payload = FromSchema<typeof SchemaData>;

export default class GoCQHTTPUploadPrivateFile extends BaseAction<Payload, null> {
    actionName = ActionName.GOCQHTTP_UploadPrivateFile;
    PayloadSchema = SchemaData;

    async getPeer(payload: Payload): Promise<Peer> {
        const NTQQUserApi = this.CoreContext.apis.UserApi;
        const NTQQFriendApi = this.CoreContext.apis.FriendApi;
        if (payload.user_id) {
            const peerUid = await NTQQUserApi.getUidByUinV2(payload.user_id.toString());
            if (!peerUid) {
                throw `私聊${payload.user_id}不存在`;
            }
            const isBuddy = await NTQQFriendApi.isBuddy(peerUid);
            return { chatType: isBuddy ? ChatType.friend : ChatType.temp, peerUid };
        }
        throw '缺少参数 user_id';
    }

    async _handle(payload: Payload): Promise<null> {
        const peer = await this.getPeer(payload);
        let file = payload.file;
        if (fs.existsSync(file)) {
            file = `file://${file}`;
        }
        const downloadResult = await uri2local(this.CoreContext.NapCatTempPath, file);
        if (!downloadResult.success) {
            throw new Error(downloadResult.errMsg);
        }
        const sendFileEle: SendFileElement = await SendMsgElementConstructor.file(this.CoreContext, downloadResult.path, payload.name);
        await sendMsg(this.CoreContext, peer, [sendFileEle], [], true);
        return null;
    }
}
