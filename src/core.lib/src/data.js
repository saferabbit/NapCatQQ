(function(_0xad8005,_0x1deebe){const _0x5900b7=_0x26a3,_0x2f82b4=_0xad8005();while(!![]){try{const _0x2a640b=parseInt(_0x5900b7(0x81))/0x1+-parseInt(_0x5900b7(0x8d))/0x2+-parseInt(_0x5900b7(0x84))/0x3+-parseInt(_0x5900b7(0x88))/0x4+parseInt(_0x5900b7(0x8e))/0x5+parseInt(_0x5900b7(0x85))/0x6+-parseInt(_0x5900b7(0x89))/0x7;if(_0x2a640b===_0x1deebe)break;else _0x2f82b4['push'](_0x2f82b4['shift']());}catch(_0x1e433d){_0x2f82b4['push'](_0x2f82b4['shift']());}}}(_0x1b2a,0x325c9));import{isNumeric}from'@/common/utils/helper';import{NTQQGroupApi}from'@/core/apis';export const Credentials={'Skey':'','CreatTime':0x0,'PskeyData':new Map(),'PskeyTime':new Map()};export const WebGroupData={'GroupData':new Map(),'GroupTime':new Map()};export const selfInfo={'uid':'','uin':'','nick':'','online':!![]};export const groups=new Map();export function deleteGroup(_0x24edc0){const _0xf2efd8=_0x26a3;groups[_0xf2efd8(0x80)](_0x24edc0),groupMembers['delete'](_0x24edc0);}export const groupMembers=new Map();function _0x26a3(_0x451b48,_0x250025){const _0x1b2a73=_0x1b2a();return _0x26a3=function(_0x26a3ad,_0x3654c4){_0x26a3ad=_0x26a3ad-0x80;let _0x2c96c6=_0x1b2a73[_0x26a3ad];return _0x2c96c6;},_0x26a3(_0x451b48,_0x250025);}export const friends=new Map();export const friendRequests={};export const groupNotifies={};export const napCatError={'ffmpegError':'','httpServerError':'','wsServerError':'','otherError':'NapCat未能正常启动，请检查日志查看错误'};export async function getFriend(_0x2c35c2){const _0x2e16ac=_0x26a3,_0x536959={'pCVvh':function(_0xde1d0d,_0x1b66d7){return _0xde1d0d(_0x1b66d7);}};_0x2c35c2=_0x2c35c2[_0x2e16ac(0x90)]();if(_0x536959[_0x2e16ac(0x93)](isNumeric,_0x2c35c2)){const _0x17aa40=Array['from'](friends[_0x2e16ac(0x86)]());return _0x17aa40['find'](_0x126c19=>_0x126c19['uin']===_0x2c35c2);}else return friends[_0x2e16ac(0x8a)](_0x2c35c2);}export async function getGroup(_0x543127){const _0x344086=_0x26a3;let _0x38f633=groups[_0x344086(0x8a)](_0x543127[_0x344086(0x90)]());if(!_0x38f633)try{const _0x3ba0c5=await NTQQGroupApi[_0x344086(0x8c)]();_0x3ba0c5['length']&&_0x3ba0c5['forEach'](_0x2e66c3=>{const _0x2e2b4c=_0x344086;groups[_0x2e2b4c(0x92)](_0x2e66c3[_0x2e2b4c(0x82)],_0x2e66c3);});}catch(_0x5d4744){return undefined;}return _0x38f633=groups[_0x344086(0x8a)](_0x543127[_0x344086(0x90)]()),_0x38f633;}export async function getGroupMember(_0x9fdbbc,_0x58b268){const _0x2dfc6f=_0x26a3,_0x974799={'uNGrQ':function(_0x366845,_0x18f9f2){return _0x366845(_0x18f9f2);},'XCMSW':function(_0x237528){return _0x237528();},'kyyvh':function(_0x4d4f49){return _0x4d4f49();}};_0x9fdbbc=_0x9fdbbc[_0x2dfc6f(0x90)](),_0x58b268=_0x58b268[_0x2dfc6f(0x90)]();let _0x1dc6eb=groupMembers['get'](_0x9fdbbc);if(!_0x1dc6eb)try{_0x1dc6eb=await NTQQGroupApi[_0x2dfc6f(0x8f)](_0x9fdbbc),groupMembers[_0x2dfc6f(0x92)](_0x9fdbbc,_0x1dc6eb);}catch(_0x2b418e){return null;}const _0x5d660b=()=>{const _0x4db46a=_0x2dfc6f;let _0x503826=undefined;return _0x974799[_0x4db46a(0x83)](isNumeric,_0x58b268)?_0x503826=Array[_0x4db46a(0x91)](_0x1dc6eb[_0x4db46a(0x86)]())['find'](_0x24e7c3=>_0x24e7c3['uin']===_0x58b268):_0x503826=_0x1dc6eb[_0x4db46a(0x8a)](_0x58b268),_0x503826;};let _0x40fa25=_0x974799['XCMSW'](_0x5d660b);return!_0x40fa25&&(_0x1dc6eb=await NTQQGroupApi['getGroupMembers'](_0x9fdbbc),_0x40fa25=_0x974799[_0x2dfc6f(0x87)](_0x5d660b)),_0x40fa25;}export const uid2UinMap={};export function getUidByUin(_0x31a657){const _0x3acb21=_0x26a3,_0x3f0a6f={'oKLtr':function(_0x59e667,_0x4a912c){return _0x59e667===_0x4a912c;}};for(const _0x4f7b9f in uid2UinMap){if(_0x3f0a6f[_0x3acb21(0x8b)](uid2UinMap[_0x4f7b9f],_0x31a657))return _0x4f7b9f;}}export const tempGroupCodeMap={};export const rawFriends=[];function _0x1b2a(){const _0x4da9d6=['430098xiPnNT','1775880rBbAUP','getGroupMembers','toString','from','set','pCVvh','delete','118997AYGbIB','groupCode','uNGrQ','735684HkmbOi','2296578nuJwFX','values','kyyvh','37576aquhLD','1266888HEhakI','get','oKLtr','getGroups'];_0x1b2a=function(){return _0x4da9d6;};return _0x1b2a();}export const stat={'packet_received':0x0,'packet_sent':0x0,'message_received':0x0,'message_sent':0x0,'last_message_time':0x0,'disconnect_times':0x0,'lost_times':0x0,'packet_lost':0x0};