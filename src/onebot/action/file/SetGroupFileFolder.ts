import { FromSchema, JSONSchema } from 'json-schema-to-ts';
import BaseAction from '../BaseAction';
import { ActionName } from '../types';

const SchemaData = {
    type: 'object',
    properties: {
        group_id: { type: ['string', 'number'] },
        folder_name: { type: 'string' },
    },
    required: ['group_id', 'folder_name'],
} as const satisfies JSONSchema;

type Payload = FromSchema<typeof SchemaData>;

export class SetGroupFileFolder extends BaseAction<Payload, any> {
    actionName = ActionName.SetGroupFileFolder;
    PayloadSchema = SchemaData;

    async _handle(payload: Payload) {
        const NTQQGroupApi = this.CoreContext.apis.GroupApi;
        return (await NTQQGroupApi.CreatGroupFileFolder(payload.group_id.toString(), payload.folder_name)).resultWithGroupItem;
    }
}
