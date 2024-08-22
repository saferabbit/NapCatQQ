import BaseAction from '../BaseAction';
import { ActionName } from '../types';
import { FromSchema, JSONSchema } from 'json-schema-to-ts';

const SchemaData = {
    type: 'object',
    properties: {
        group_id: { type: ['number', 'string'] },
        user_id: { type: ['number', 'string'] },
        duration: { type: ['number', 'string'] },
    },
    required: ['group_id', 'user_id', 'duration'],
} as const satisfies JSONSchema;

type Payload = FromSchema<typeof SchemaData>;

export default class SetGroupBan extends BaseAction<Payload, null> {
    actionName = ActionName.SetGroupBan;
    PayloadSchema = SchemaData;

    async _handle(payload: Payload): Promise<null> {
        const NTQQGroupApi = this.CoreContext.apis.GroupApi;
        const NTQQUserApi = this.CoreContext.apis.UserApi;
        const uid = await NTQQUserApi.getUidByUinV2(payload.user_id.toString());
        if (!uid) throw new Error('uid error');
        await NTQQGroupApi.banMember(payload.group_id.toString(),
            [{ uid: uid, timeStamp: parseInt(payload.duration.toString()) }]);
        return null;
    }
}
