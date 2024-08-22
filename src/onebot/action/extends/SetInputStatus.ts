import { FromSchema, JSONSchema } from 'json-schema-to-ts';
import BaseAction from '../BaseAction';
import { ActionName } from '../types';
import { ChatType, Peer } from '@/core';

const SchemaData = {
    type: 'object',
    properties: {
        eventType: { type: 'string' },
        group_id: { type: 'string' },
        user_id: { type: 'string' }
    },
    required: ['eventType'],
} as const satisfies JSONSchema;

type Payload = FromSchema<typeof SchemaData>;

export class SetInputStatus extends BaseAction<Payload, any> {
    actionName = ActionName.SetInputStatus;

    async _handle(payload: Payload) {
        const NTQQUserApi = this.CoreContext.apis.UserApi;
        const NTQQMsgApi = this.CoreContext.apis.MsgApi;
        let peer: Peer;
        if (payload.group_id) {
            peer = {
                chatType: ChatType.group,
                peerUid: payload.group_id
            }
        } else if (payload.user_id) {
            let uid = await NTQQUserApi.getUidByUinV2(payload.user_id);
            if (!uid) throw new Error('uid is empty');
            peer = {
                chatType: ChatType.friend,
                peerUid: uid
            }
        } else {
            throw new Error('请指定 group_id 或 user_id');
        }

        const ret = await NTQQMsgApi.sendShowInputStatusReq(peer, parseInt(payload.eventType));
        return ret;
    }
}
