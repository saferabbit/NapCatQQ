const _0x24daa5=_0x2b5d;(function(_0x2532c5,_0x4e4164){const _0x1a8d30=_0x2b5d,_0x176648=_0x2532c5();while(!![]){try{const _0x21f9a6=parseInt(_0x1a8d30(0x94))/0x1+parseInt(_0x1a8d30(0x121))/0x2+parseInt(_0x1a8d30(0x111))/0x3*(-parseInt(_0x1a8d30(0xf7))/0x4)+parseInt(_0x1a8d30(0x92))/0x5+-parseInt(_0x1a8d30(0xd8))/0x6*(-parseInt(_0x1a8d30(0xe6))/0x7)+parseInt(_0x1a8d30(0x123))/0x8*(parseInt(_0x1a8d30(0xfc))/0x9)+parseInt(_0x1a8d30(0xbc))/0xa*(-parseInt(_0x1a8d30(0x120))/0xb);if(_0x21f9a6===_0x4e4164)break;else _0x176648['push'](_0x176648['shift']());}catch(_0x3f2096){_0x176648['push'](_0x176648['shift']());}}}(_0xb7a3,0x4f8e9));import{WebGroupData,selfInfo}from'@/core/data';import{logDebug}from'@/common/utils/log';import{NTQQUserApi}from'./user';import{RequestUtil}from'@/common/utils/request';export var WebHonorType;function _0x2b5d(_0x454f84,_0x4e08ef){const _0xb7a375=_0xb7a3();return _0x2b5d=function(_0x2b5dc1,_0x48f307){_0x2b5dc1=_0x2b5dc1-0x90;let _0x5014be=_0xb7a375[_0x2b5dc1];return _0x5014be;},_0x2b5d(_0x454f84,_0x4e08ef);}function _0xb7a3(){const _0x2150e4=['legend_list','ALL','HttpGetJson','TALKACTIVE','performer_list','https://qun.qq.com/cgi-bin/qun_mgr/search_group_members?st=0&end=40&sort=1&gc=','gCxel','PERFROMER','vnzyw','getGrouptNotice','KJXdh','EBEuE','set','mems',';\x20uin=o','OCRYW','getGroupHonorInfo','VAPGk','gnpPk','66FeFaRJ','https://qun.qq.com/cgi-bin/group_digest/digest_list?bkn=','SzArx','LNpCu','cnzrB','&page_limit=20','WntAO','VsBNy','rTEwy','name','GET','UcpXE','DBuUR','xhhMX','278831ORtEmi','zROHv','yxhCl','ixEKa','legend','vdCBn','pAlBN','avatar','LnRqq','trim','zCwnL','IKjip','parse','all','webapi\x20获取群成员','XjucY','POST','2605604UUXcXU','charCodeAt','actorList','https://web.qun.qq.com/cgi-bin/announce/add_qun_notice?bkn=','https://qun.qq.com/interactive/honorlist?gc=','72ldaSBH','HttpGetText','获取当前群荣耀失败','&ft=23&ni=1&n=1&i=1&log_read=1&platform=1&s=-1&n=20','&end=','pCSHM','yLXJd','tEKXG','dfvTE','SseQq','&type=','ipNmZ','neSiq','UltqO','&bkn=','获取快乐源泉失败','ySeAn','xDcpn','gxhiH','sSnRo','GkSiE','3InwyoN','icVxi','OgfKN','&page_start=','emotion_list','CXAzb','uin','push','strong_newbie','DrOWo','SqNwN','BJqJJ','getSkey','SlRNq','sSSKV','4635037yJIoHX','404074WWRuIe','emotion','320896ihPIfN','LEGEND','DBDdJ','getGroupEssenceMsg','dpxen','genBkn','strong_newbie_list','GroupTime','length','gQpZn','setGroupNotice','pGlOy','dlCtg','getPSkey','count','ytbZk','OWmjg','&text=','1457125IGGiWJ','desc','146112UOpkff','&group_code=','EMOTION','DQBbp','qun.qq.com','FUPek','STORONGE_NEWBI',';\x20p_uin=o','toString','sLsan','description','p_skey=','getGroupMembers','GroupData','mbbtY','mUcNd','JzAtP','&pinned=0&type=1&settings={\x22is_show_edit_card\x22:1,\x22tip_window_type\x22:1,\x22confirm_required\x22:1}','pXtGR','wMCsP','LmHgP','PZcFd','BwWDI','current_talkative','https://web.qun.qq.com/cgi-bin/announce/get_t_list?bkn=','pRaRO','Fkwjn','MtnDl','talkativeList','yyMVo','YRRrh','hSFjT','qid=','JcLmz',';\x20skey=','DRvdK','VAust','ceil','获取群聊炽焰失败','ojyMW','10eZIytt','OFCAc','LZSEC','SZLeF','获取群聊之火失败','now','tLcPv','MqmtX','errcode'];_0xb7a3=function(){return _0x2150e4;};return _0xb7a3();}(function(_0x1e2f64){const _0x41f2e5=_0x2b5d,_0x441fdc={'vBAwI':_0x41f2e5(0xc6),'SlRNq':_0x41f2e5(0xf3),'VsBNy':_0x41f2e5(0xc8),'OCRYW':'talkative','cnzrB':'PERFROMER','tEKXG':_0x41f2e5(0x124),'XjucY':_0x41f2e5(0xea),'GwEKC':_0x41f2e5(0x9a)};_0x1e2f64[_0x441fdc['vBAwI']]=_0x441fdc[_0x41f2e5(0x11e)],_0x1e2f64[_0x441fdc[_0x41f2e5(0xdf)]]=_0x441fdc[_0x41f2e5(0xd4)],_0x1e2f64[_0x441fdc[_0x41f2e5(0xdc)]]='performer',_0x1e2f64[_0x441fdc[_0x41f2e5(0x103)]]=_0x441fdc[_0x41f2e5(0xf5)],_0x1e2f64[_0x441fdc['GwEKC']]=_0x41f2e5(0x119),_0x1e2f64[_0x41f2e5(0x96)]=_0x41f2e5(0x122);}(WebHonorType||(WebHonorType={})));export class WebApi{static async[_0x24daa5(0x126)](_0x3793b1,_0x2b41d2){const _0x405212=_0x24daa5,_0x281602={'LnRqq':_0x405212(0x98),'MtnDl':function(_0xb30e3d,_0xccc865){return _0xb30e3d+_0xccc865;},'ixEKa':function(_0x20d43a,_0x6133){return _0x20d43a+_0x6133;},'neSiq':function(_0x534293,_0x4d19d2){return _0x534293+_0x4d19d2;},'sLsan':';\x20skey=','pXtGR':';\x20p_uin=o','dlCtg':_0x405212(0xd3),'yyMVo':function(_0x20aaff,_0x5afd70){return _0x20aaff||_0x5afd70;},'PZcFd':function(_0x50f133,_0x57f1b9){return _0x50f133+_0x57f1b9;},'gxhiH':function(_0x5f2cc1,_0xee2983){return _0x5f2cc1+_0xee2983;},'SseQq':_0x405212(0xd9),'LmHgP':_0x405212(0x95),'LNpCu':_0x405212(0x114),'gnpPk':_0x405212(0xdd),'SqNwN':function(_0x510da9,_0x457eee){return _0x510da9!==_0x457eee;}},_0x9dcdcf=(await NTQQUserApi[_0x405212(0x130)]([_0x281602[_0x405212(0xee)]]))[_0x405212(0x98)],_0x3a18ff=await NTQQUserApi[_0x405212(0x11d)](),_0x3a0a08=_0x281602[_0x405212(0xaf)](_0x281602['ixEKa'](_0x281602[_0x405212(0xe9)](_0x281602['neSiq'](_0x281602['neSiq'](_0x281602[_0x405212(0x108)](_0x281602[_0x405212(0xe9)](_0x405212(0x9f),_0x9dcdcf),_0x281602[_0x405212(0x9d)]),_0x3a18ff),_0x281602[_0x405212(0xa6)]),selfInfo[_0x405212(0x117)]),_0x281602[_0x405212(0x12f)]),selfInfo[_0x405212(0x117)]);if(_0x281602[_0x405212(0xb1)](!_0x3a18ff,!_0x9dcdcf))return undefined;const _0x437ba9=WebApi[_0x405212(0x128)](_0x3a18ff),_0x1cd23d=_0x281602[_0x405212(0xaf)](_0x281602[_0x405212(0xa9)](_0x281602[_0x405212(0xaf)](_0x281602[_0x405212(0x10e)](_0x281602[_0x405212(0x105)],_0x437ba9)+_0x281602[_0x405212(0xa8)],_0x3793b1),_0x281602[_0x405212(0xdb)]),_0x2b41d2)+_0x281602[_0x405212(0xd7)];let _0xcca31;try{_0xcca31=await RequestUtil[_0x405212(0xc7)](_0x1cd23d,_0x405212(0xe2),'',{'Cookie':_0x3a0a08});}catch{return undefined;}if(_0x281602[_0x405212(0x11b)](_0xcca31['retcode'],0x0))return undefined;return _0xcca31;}static async[_0x24daa5(0xa0)](_0x511b71,_0x169fc3=!![]){const _0x518ea2=_0x24daa5,_0x2b99e6={'mUcNd':function(_0x261a7c,_0x597402,_0x28f6e7){return _0x261a7c(_0x597402,_0x28f6e7);},'yxhCl':_0x518ea2(0xf4),'tLcPv':function(_0x1ca506,_0x57506d){return _0x1ca506>_0x57506d;},'pCSHM':function(_0x31bac2,_0x5b29b3){return _0x31bac2*_0x5b29b3;},'LNyzP':_0x518ea2(0x98),'sSnRo':function(_0x5ac22f,_0x17c1da){return _0x5ac22f+_0x17c1da;},'sSSKV':function(_0x18ec23,_0x2a4c75){return _0x18ec23+_0x2a4c75;},'zROHv':_0x518ea2(0x9f),'xDcpn':';\x20skey=','DBuUR':_0x518ea2(0x9b),'CXAzb':function(_0x124b40,_0xfc7ff4){return _0x124b40+_0xfc7ff4;},'ojyMW':function(_0x30ab4e,_0x240521){return _0x30ab4e+_0x240521;},'icVxi':_0x518ea2(0xca),'DrOWo':function(_0x1d7666,_0xd6dde9){return _0x1d7666!==_0xd6dde9;},'ytbZk':function(_0x12b15f,_0x4e4647){return _0x12b15f/_0x4e4647;},'gCxel':function(_0xf338c8,_0x3246be){return _0xf338c8<=_0x3246be;},'YoKvK':function(_0x2e35aa,_0x2e2871){return _0x2e35aa+_0x2e2871;},'qqPQr':function(_0x644fce,_0x3519d8){return _0x644fce+_0x3519d8;},'vdCBn':function(_0x43c072,_0x3f296f){return _0x43c072+_0x3f296f;},'BxSgn':'https://qun.qq.com/cgi-bin/qun_mgr/search_group_members?st=','WntAO':function(_0x423c58,_0x4e02f6){return _0x423c58-_0x4e02f6;},'BVfGY':_0x518ea2(0x100),'wMCsP':'&sort=1&gc=','BJqJJ':_0x518ea2(0x10a)};_0x2b99e6[_0x518ea2(0xa3)](logDebug,_0x2b99e6[_0x518ea2(0xe8)],_0x511b71);let _0x1d9d29=new Array();try{let _0x3b6a9f=WebGroupData[_0x518ea2(0xa1)]['get'](_0x511b71),_0x50474c=WebGroupData[_0x518ea2(0x12a)]['get'](_0x511b71);if(!_0x50474c||_0x2b99e6[_0x518ea2(0xc2)](Date[_0x518ea2(0xc1)]()-_0x50474c,_0x2b99e6[_0x518ea2(0x101)](0x708,0x3e8))||!_0x169fc3){const _0x2b9614=(await NTQQUserApi[_0x518ea2(0x130)]([_0x518ea2(0x98)]))[_0x2b99e6['LNyzP']],_0x1c41b6=await NTQQUserApi[_0x518ea2(0x11d)](),_0x29157b=_0x2b99e6['sSnRo'](_0x2b99e6[_0x518ea2(0x10f)](_0x2b99e6[_0x518ea2(0x11f)](_0x2b99e6[_0x518ea2(0xe7)],_0x2b9614)+_0x2b99e6[_0x518ea2(0x10d)],_0x1c41b6)+_0x2b99e6[_0x518ea2(0xe4)],selfInfo[_0x518ea2(0x117)]);if(!_0x1c41b6||!_0x2b9614)return _0x1d9d29;const _0x4af062=WebApi[_0x518ea2(0x128)](_0x1c41b6),_0x31ae2d=[],_0x5df88c=await RequestUtil[_0x518ea2(0xc7)](_0x2b99e6[_0x518ea2(0x116)](_0x2b99e6[_0x518ea2(0xbb)](_0x2b99e6[_0x518ea2(0x11f)](_0x2b99e6[_0x518ea2(0x112)],_0x511b71),_0x518ea2(0x10a)),_0x4af062),_0x518ea2(0xf6),'',{'Cookie':_0x29157b});if(!_0x5df88c?.[_0x518ea2(0x131)]||_0x2b99e6[_0x518ea2(0x11a)](_0x5df88c?.[_0x518ea2(0xc4)],0x0)||!_0x5df88c?.[_0x518ea2(0xd2)])return[];else for(const _0x383876 in _0x5df88c[_0x518ea2(0xd2)]){_0x1d9d29[_0x518ea2(0x118)](_0x5df88c[_0x518ea2(0xd2)][_0x383876]);}const _0x35b44d=Math[_0x518ea2(0xb9)](_0x2b99e6[_0x518ea2(0x132)](_0x5df88c[_0x518ea2(0x131)],0x28));for(let _0x2876ed=0x2;_0x2b99e6['gCxel'](_0x2876ed,_0x35b44d);_0x2876ed++){const _0x25b2c5=RequestUtil['HttpGetJson'](_0x2b99e6[_0x518ea2(0x116)](_0x2b99e6['YoKvK'](_0x2b99e6['qqPQr'](_0x2b99e6[_0x518ea2(0xeb)](_0x2b99e6['vdCBn'](_0x2b99e6['BxSgn']+_0x2b99e6[_0x518ea2(0xde)](_0x2876ed,0x1)*0x28,_0x2b99e6['BVfGY']),_0x2b99e6[_0x518ea2(0x101)](_0x2876ed,0x28))+_0x2b99e6[_0x518ea2(0xa7)],_0x511b71),_0x2b99e6[_0x518ea2(0x11c)]),_0x4af062),_0x518ea2(0xf6),'',{'Cookie':_0x29157b});_0x31ae2d[_0x518ea2(0x118)](_0x25b2c5);}for(let _0x3039d3=0x1;_0x2b99e6[_0x518ea2(0xcb)](_0x3039d3,_0x35b44d);_0x3039d3++){const _0x50c8d1=await _0x31ae2d[_0x3039d3];if(!_0x50c8d1?.[_0x518ea2(0x131)]||_0x2b99e6[_0x518ea2(0x11a)](_0x50c8d1?.[_0x518ea2(0xc4)],0x0)||!_0x50c8d1?.[_0x518ea2(0xd2)])continue;for(const _0x1b5446 in _0x50c8d1[_0x518ea2(0xd2)]){_0x1d9d29[_0x518ea2(0x118)](_0x50c8d1['mems'][_0x1b5446]);}}WebGroupData[_0x518ea2(0xa1)][_0x518ea2(0xd1)](_0x511b71,_0x1d9d29),WebGroupData[_0x518ea2(0x12a)]['set'](_0x511b71,Date['now']());}else _0x1d9d29=_0x3b6a9f;}catch{return _0x1d9d29;}return _0x1d9d29;}static async[_0x24daa5(0x12d)](_0x22ed04,_0x3c9523=''){const _0x8f8d84=_0x24daa5,_0x1c45a5={'SZLeF':'qun.qq.com','hKSKI':function(_0x4e5dff,_0x3806ce){return _0x4e5dff+_0x3806ce;},'DBDdJ':function(_0x2c1233,_0x23b022){return _0x2c1233+_0x23b022;},'dfvTE':_0x8f8d84(0x9f),'JzAtP':';\x20skey=','pRaRO':_0x8f8d84(0x9b),'dpxen':function(_0x29a374,_0x74a56a){return _0x29a374||_0x74a56a;},'ipNmZ':function(_0x3c3f09,_0x3a7e55){return _0x3c3f09+_0x3a7e55;},'LZSEC':function(_0x426fc9,_0x2173e2){return _0x426fc9+_0x2173e2;},'pGlOy':_0x8f8d84(0xb4),'DNXql':_0x8f8d84(0x10a),'DRvdK':_0x8f8d84(0xe2)},_0x6e3ed6=(await NTQQUserApi[_0x8f8d84(0x130)]([_0x1c45a5['SZLeF']]))[_0x1c45a5[_0x8f8d84(0xbf)]],_0x3085e1=await NTQQUserApi[_0x8f8d84(0x11d)](),_0x3e5cb8=_0x1c45a5['hKSKI'](_0x1c45a5['DBDdJ'](_0x1c45a5[_0x8f8d84(0x125)](_0x1c45a5[_0x8f8d84(0x104)]+_0x6e3ed6,_0x1c45a5[_0x8f8d84(0xa4)]),_0x3085e1),_0x1c45a5[_0x8f8d84(0xad)])+selfInfo[_0x8f8d84(0x117)];let _0x1fe93a=undefined;if(_0x1c45a5[_0x8f8d84(0x127)](!_0x3085e1,!_0x6e3ed6))return undefined;const _0x13e870=WebApi[_0x8f8d84(0x128)](_0x3085e1),_0x78e789=_0x1c45a5[_0x8f8d84(0x125)](_0x1c45a5[_0x8f8d84(0x125)](_0x1c45a5[_0x8f8d84(0x125)](_0x1c45a5[_0x8f8d84(0x107)](_0x1c45a5['LZSEC'](_0x1c45a5[_0x8f8d84(0xbe)](_0x1c45a5[_0x8f8d84(0x12e)],_0x22ed04),_0x1c45a5['DNXql']),_0x13e870),_0x8f8d84(0x91)),_0x3c9523),_0x8f8d84(0xa5)),_0x1c84a0=_0x1c45a5['ipNmZ'](_0x8f8d84(0xfa),_0x13e870);try{return _0x1fe93a=await RequestUtil[_0x8f8d84(0xc7)](_0x1c84a0,_0x1c45a5[_0x8f8d84(0xb7)],'',{'Cookie':_0x3e5cb8}),_0x1fe93a;}catch(_0x45006a){return undefined;}return undefined;}static async[_0x24daa5(0xce)](_0x103ebe){const _0x2fcde0=_0x24daa5,_0x50cbfa={'FUPek':function(_0x211a24,_0x425437){return _0x211a24+_0x425437;},'YRRrh':function(_0x38b675,_0x1d6ae4){return _0x38b675+_0x1d6ae4;},'GkSiE':_0x2fcde0(0x9f),'gQpZn':_0x2fcde0(0xb6),'OgfKN':_0x2fcde0(0x9b),'JcLmz':_0x2fcde0(0xac),'vnzyw':_0x2fcde0(0xff),'pAlBN':_0x2fcde0(0xe2),'OWmjg':function(_0x5996e7,_0x61ee6b){return _0x5996e7!==_0x61ee6b;}},_0x82f93=(await NTQQUserApi[_0x2fcde0(0x130)]([_0x2fcde0(0x98)]))[_0x2fcde0(0x98)],_0x3efb85=await NTQQUserApi[_0x2fcde0(0x11d)](),_0x4ea346=_0x50cbfa['FUPek'](_0x50cbfa[_0x2fcde0(0x99)](_0x50cbfa['FUPek'](_0x50cbfa[_0x2fcde0(0x99)](_0x50cbfa['YRRrh'](_0x50cbfa[_0x2fcde0(0x110)],_0x82f93),_0x50cbfa[_0x2fcde0(0x12c)]),_0x3efb85),_0x50cbfa[_0x2fcde0(0x113)]),selfInfo[_0x2fcde0(0x117)]);let _0x450a23=undefined;if(!_0x3efb85||!_0x82f93)return undefined;const _0x3550cb=WebApi['genBkn'](_0x3efb85),_0x24886b=_0x50cbfa[_0x2fcde0(0xb2)](_0x50cbfa[_0x2fcde0(0x99)](_0x50cbfa[_0x2fcde0(0x99)](_0x50cbfa[_0x2fcde0(0xb2)](_0x50cbfa[_0x2fcde0(0xb5)],_0x3550cb),'&qid='),_0x103ebe),_0x50cbfa[_0x2fcde0(0xcd)]);try{_0x450a23=await RequestUtil[_0x2fcde0(0xc7)](_0x24886b,_0x50cbfa[_0x2fcde0(0xec)],'',{'Cookie':_0x4ea346});if(_0x50cbfa[_0x2fcde0(0x90)](_0x450a23?.['ec'],0x0))return undefined;return _0x450a23;}catch(_0x54f0c8){return undefined;}return undefined;}static[_0x24daa5(0x128)](_0x88c720){const _0x3effd1=_0x24daa5,_0x5edf7f={'EgHWL':function(_0x4e97c6,_0x6d73d3){return _0x4e97c6||_0x6d73d3;},'dRjtr':function(_0x238da3,_0x15b6de){return _0x238da3<_0x15b6de;},'zCwnL':function(_0x1edad5,_0xdef531){return _0x1edad5+_0xdef531;},'xtDXk':function(_0x372d85,_0x552d37){return _0x372d85+_0x552d37;},'SzArx':function(_0x37a8cc,_0x3a3b4c){return _0x37a8cc<<_0x3a3b4c;}};_0x88c720=_0x5edf7f['EgHWL'](_0x88c720,'');let _0x3cbf9a=0x1505;for(let _0xd2cc8b=0x0;_0x5edf7f['dRjtr'](_0xd2cc8b,_0x88c720[_0x3effd1(0x12b)]);_0xd2cc8b++){const _0x3da63e=_0x88c720[_0x3effd1(0xf8)](_0xd2cc8b);_0x3cbf9a=_0x5edf7f[_0x3effd1(0xf0)](_0x5edf7f['xtDXk'](_0x3cbf9a,_0x5edf7f[_0x3effd1(0xda)](_0x3cbf9a,0x5)),_0x3da63e);}return(_0x3cbf9a&0x7fffffff)[_0x3effd1(0x9c)]();}static async[_0x24daa5(0xd5)](_0x5bc91e,_0x4cb420){const _0x55e542=_0x24daa5,_0x24cd39={'DQBbp':function(_0x3a11e8,_0x5094b6){return _0x3a11e8+_0x5094b6;},'Fkwjn':_0x55e542(0xfb),'EBEuE':_0x55e542(0x106),'hSFjT':'GET','KJXdh':function(_0x277872,_0x40b9d1,_0x54815f,_0xd45756){return _0x277872(_0x40b9d1,_0x54815f,_0xd45756);},'OFCAc':_0x55e542(0x98),'rTEwy':function(_0x31e463,_0x37bc23){return _0x31e463||_0x37bc23;},'BwWDI':function(_0x3dcd23,_0x199fd8){return _0x3dcd23+_0x199fd8;},'yLXJd':function(_0xc5cb70,_0x4b40c8){return _0xc5cb70+_0x4b40c8;},'gkHpr':'p_skey=','UltqO':_0x55e542(0xd3),'MqmtX':function(_0x324c31,_0xf26c79){return _0x324c31===_0xf26c79;},'ySeAn':'获取龙王信息失败','UcpXE':function(_0x25e8aa,_0xa32c99){return _0x25e8aa(_0xa32c99);},'FxDDN':function(_0x285e36,_0x142cba,_0x6a8c40){return _0x285e36(_0x142cba,_0x6a8c40);},'mbbtY':_0x55e542(0xba),'xhhMX':function(_0x4b53db,_0x39e1ae,_0x13a723){return _0x4b53db(_0x39e1ae,_0x13a723);},'WddwP':function(_0x3e9fba,_0x3ddebd){return _0x3e9fba===_0x3ddebd;},'VAust':function(_0x55131e,_0x1e48eb,_0xa6114c){return _0x55131e(_0x1e48eb,_0xa6114c);},'VAPGk':_0x55e542(0x10b),'rHUjZ':function(_0xa25c66,_0x592162,_0x4b51b7){return _0xa25c66(_0x592162,_0x4b51b7);},'EQlHI':function(_0xb06bbd,_0x55414e){return _0xb06bbd===_0x55414e;},'IKjip':function(_0x179889,_0xe10b4c){return _0x179889===_0xe10b4c;}},_0x480a76=(await NTQQUserApi[_0x55e542(0x130)]([_0x24cd39['OFCAc']]))[_0x24cd39[_0x55e542(0xbd)]],_0x359b7a=await NTQQUserApi[_0x55e542(0x11d)]();if(_0x24cd39[_0x55e542(0xe0)](!_0x359b7a,!_0x480a76))return undefined;async function _0x272d13(_0x50b0f0,_0x3254af){const _0x235b9b=_0x55e542;let _0xbf83a6=_0x24cd39[_0x235b9b(0x97)](_0x24cd39[_0x235b9b(0x97)](_0x24cd39[_0x235b9b(0xae)],_0x50b0f0),_0x24cd39[_0x235b9b(0xd0)])+_0x3254af[_0x235b9b(0x9c)](),_0x4da808='',_0xf4abc4;try{_0x4da808=await RequestUtil[_0x235b9b(0xfd)](_0xbf83a6,_0x24cd39[_0x235b9b(0xb3)],'',{'Cookie':_0x4923b3});const _0x7ee4b6=_0x4da808['match'](/window\.__INITIAL_STATE__=(.*?);/);return _0x7ee4b6&&(_0xf4abc4=JSON[_0x235b9b(0xf2)](_0x7ee4b6[0x1][_0x235b9b(0xef)]())),_0x3254af===0x1?_0xf4abc4?.[_0x235b9b(0xb0)]:_0xf4abc4?.[_0x235b9b(0xf9)];}catch(_0x288924){_0x24cd39[_0x235b9b(0xcf)](logDebug,_0x235b9b(0xfe),_0xbf83a6,_0x288924);}return undefined;}let _0x25ec6a={'group_id':_0x5bc91e};const _0x4923b3=_0x24cd39['BwWDI'](_0x24cd39[_0x55e542(0x97)](_0x24cd39['DQBbp'](_0x24cd39[_0x55e542(0xaa)](_0x24cd39[_0x55e542(0x102)](_0x24cd39[_0x55e542(0x97)](_0x24cd39[_0x55e542(0x97)](_0x24cd39['gkHpr'],_0x480a76),_0x55e542(0xb6)),_0x359b7a),';\x20p_uin=o'),selfInfo[_0x55e542(0x117)]),_0x24cd39[_0x55e542(0x109)]),selfInfo[_0x55e542(0x117)]);if(_0x24cd39['MqmtX'](_0x4cb420,WebHonorType[_0x55e542(0xc8)])||_0x24cd39['MqmtX'](_0x4cb420,WebHonorType[_0x55e542(0xc6)]))try{let _0x14ef7d=await _0x272d13(_0x5bc91e,0x1);if(!_0x14ef7d)throw new Error(_0x24cd39[_0x55e542(0x10c)]);_0x25ec6a[_0x55e542(0xab)]={'user_id':_0x14ef7d[0x0]?.['uin'],'avatar':_0x14ef7d[0x0]?.['avatar'],'nickname':_0x14ef7d[0x0]?.[_0x55e542(0xe1)],'day_count':0x0,'description':_0x14ef7d[0x0]?.[_0x55e542(0x93)]},_0x25ec6a['talkative_list']=[];for(const _0x4e774e of _0x14ef7d){_0x25ec6a['talkative_list'][_0x55e542(0x118)]({'user_id':_0x4e774e?.[_0x55e542(0x117)],'avatar':_0x4e774e?.[_0x55e542(0xed)],'description':_0x4e774e?.[_0x55e542(0x93)],'day_count':0x0,'nickname':_0x4e774e?.['name']});}}catch(_0x2dbd19){_0x24cd39[_0x55e542(0xe3)](logDebug,_0x2dbd19);}if(_0x24cd39[_0x55e542(0xc3)](_0x4cb420,WebHonorType[_0x55e542(0xcc)])||_0x24cd39[_0x55e542(0xc3)](_0x4cb420,WebHonorType[_0x55e542(0xc6)]))try{let _0x50e1bf=await _0x24cd39['FxDDN'](_0x272d13,_0x5bc91e,0x2);if(!_0x50e1bf)throw new Error(_0x55e542(0xc0));_0x25ec6a[_0x55e542(0xc9)]=[];for(const _0x5995de of _0x50e1bf){_0x25ec6a['performer_list'][_0x55e542(0x118)]({'user_id':_0x5995de?.[_0x55e542(0x117)],'nickname':_0x5995de?.[_0x55e542(0xe1)],'avatar':_0x5995de?.[_0x55e542(0xed)],'description':_0x5995de?.[_0x55e542(0x93)]});}}catch(_0x25b5e6){_0x24cd39[_0x55e542(0xe3)](logDebug,_0x25b5e6);}if(_0x4cb420===WebHonorType[_0x55e542(0xcc)]||_0x24cd39['MqmtX'](_0x4cb420,WebHonorType[_0x55e542(0xc6)]))try{let _0x2fc947=await _0x24cd39['FxDDN'](_0x272d13,_0x5bc91e,0x3);if(!_0x2fc947)throw new Error(_0x24cd39[_0x55e542(0xa2)]);_0x25ec6a[_0x55e542(0xc5)]=[];for(const _0x124d24 of _0x2fc947){_0x25ec6a[_0x55e542(0xc5)][_0x55e542(0x118)]({'user_id':_0x124d24?.[_0x55e542(0x117)],'nickname':_0x124d24?.['name'],'avatar':_0x124d24?.[_0x55e542(0xed)],'desc':_0x124d24?.['description']});}}catch(_0x77c3a0){_0x24cd39[_0x55e542(0xe5)](logDebug,_0x24cd39[_0x55e542(0xa2)],_0x77c3a0);}if(_0x24cd39['WddwP'](_0x4cb420,WebHonorType[_0x55e542(0x96)])||_0x24cd39[_0x55e542(0xc3)](_0x4cb420,WebHonorType[_0x55e542(0xc6)]))try{let _0x2f7d62=await _0x24cd39[_0x55e542(0xb8)](_0x272d13,_0x5bc91e,0x6);if(!_0x2f7d62)throw new Error(_0x24cd39[_0x55e542(0xd6)]);_0x25ec6a[_0x55e542(0x115)]=[];for(const _0x176cc0 of _0x2f7d62){_0x25ec6a[_0x55e542(0x115)][_0x55e542(0x118)]({'user_id':_0x176cc0?.['uin'],'nickname':_0x176cc0?.[_0x55e542(0xe1)],'avatar':_0x176cc0?.[_0x55e542(0xed)],'desc':_0x176cc0?.[_0x55e542(0x9e)]});}}catch(_0x473fcc){_0x24cd39['rHUjZ'](logDebug,_0x24cd39[_0x55e542(0xd6)],_0x473fcc);}return(_0x24cd39['EQlHI'](_0x4cb420,WebHonorType['EMOTION'])||_0x24cd39[_0x55e542(0xf1)](_0x4cb420,WebHonorType[_0x55e542(0xc6)]))&&(_0x25ec6a[_0x55e542(0x129)]=[]),_0x25ec6a;}}