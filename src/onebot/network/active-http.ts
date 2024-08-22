import { IOB11NetworkAdapter, OB11EmitEventContent } from '@/onebot/network/index';
import { createHmac } from 'crypto';
import { LogWrapper } from '@/common/utils/log';
import { QuickAction, QuickActionEvent } from '../types';
import { NapCatCore } from '@/core';
import { handleQuickOperation } from '../helper/quick';
import { NapCatOneBot11Adapter } from '..';

export class OB11ActiveHttpAdapter implements IOB11NetworkAdapter {
    logger: LogWrapper;
    isOpen: boolean = false;

    constructor(
        public url: string,
        public secret: string | undefined,
        public coreContext: NapCatCore,
        public obContext: NapCatOneBot11Adapter
    ) {
        this.logger = coreContext.context.logger;
    }

    onEvent<T extends OB11EmitEventContent>(event: T) {
        if (!this.isOpen) {
            return;
        }
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'x-self-id': this.coreContext.selfInfo.uin,
        };
        const msgStr = JSON.stringify(event);
        if (this.secret && this.secret.length > 0) {
            const hmac = createHmac('sha1', this.secret);
            hmac.update(msgStr);
            const sig = hmac.digest('hex');
            headers['x-signature'] = 'sha1=' + sig;
        }
        fetch(this.url, {
            method: 'POST',
            headers,
            body: msgStr,
        }).then(async (res) => {
            let resJson: QuickAction;
            try {
                resJson = await res.json();
                //logDebug('新消息事件HTTP上报返回快速操作: ', JSON.stringify(resJson));
            } catch (e) {
                this.logger.logDebug('[OneBot] [Http Client] 新消息事件HTTP上报没有返回快速操作，不需要处理');
                return;
            }
            try {
                handleQuickOperation(this.coreContext, this.obContext, event as QuickActionEvent, resJson).then().catch(this.logger.logError);
            } catch (e: any) {
                this.logger.logError('[OneBot] [Http Client] 新消息事件HTTP上报返回快速操作失败', e);
            }
        }).catch((e) => {
            this.logger.logError('[OneBot] [Http Client] 新消息事件HTTP上报失败', e);
        });
    }

    open() {
        this.isOpen = true;
    }

    close() {
        this.isOpen = false;
    }
}
