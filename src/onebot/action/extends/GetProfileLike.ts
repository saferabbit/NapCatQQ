import BaseAction from '../BaseAction';
import { ActionName } from '../types';

export class GetProfileLike extends BaseAction<void, any> {
    actionName = ActionName.GetProfileLike;

    async _handle(payload: void) {
        const NTQQUserApi = this.CoreContext.apis.UserApi;
        const ret = await NTQQUserApi.getProfileLike(this.CoreContext.selfInfo.uid);
        const listdata: any[] = ret.info.userLikeInfos[0].favoriteInfo.userInfos;
        for (let i = 0; i < listdata.length; i++) {
            listdata[i].uin = parseInt((await NTQQUserApi.getUinByUidV2(listdata[i].uid)) || '');
        }
        return listdata;
    }
}
