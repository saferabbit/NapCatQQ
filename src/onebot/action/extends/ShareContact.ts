import BaseAction from '../BaseAction';
import { ActionName } from '../types';
import { FromSchema, JSONSchema } from 'json-schema-to-ts';

const SchemaData = {
    type: 'object',
    properties: {
        user_id: { type: 'string' },
        group_id: { type: 'string' },
        phoneNumber: { type: 'string' },
    },
} as const satisfies JSONSchema;

type Payload = FromSchema<typeof SchemaData>;


export class SharePeer extends BaseAction<Payload, any> {
    actionName = ActionName.SharePeer;
    PayloadSchema = SchemaData;

    async _handle(payload: Payload) {
        const NTQQUserApi = this.CoreContext.apis.UserApi;
        const NTQQGroupApi = this.CoreContext.apis.GroupApi;
        if (payload.group_id) {
            return await NTQQGroupApi.getGroupRecommendContactArkJson(payload.group_id);
        } else if (payload.user_id) {
            return await NTQQUserApi.getBuddyRecommendContactArkJson(payload.user_id, payload.phoneNumber || '');
        }
    }
}

const SchemaDataGroupEx = {
    type: 'object',
    properties: {
        group_id: { type: 'string' },
    },
    required: ['group_id'],
} as const satisfies JSONSchema;

type PayloadGroupEx = FromSchema<typeof SchemaDataGroupEx>;

export class ShareGroupEx extends BaseAction<PayloadGroupEx, any> {
    actionName = ActionName.ShareGroupEx;
    PayloadSchema = SchemaDataGroupEx;

    async _handle(payload: PayloadGroupEx) {
        const NTQQGroupApi = this.CoreContext.apis.GroupApi;
        return await NTQQGroupApi.getArkJsonGroupShare(payload.group_id);
    }
}
