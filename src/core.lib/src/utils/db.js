const _0x4ce502=_0x1500;(function(_0x36b307,_0x257e10){const _0x10d932=_0x1500,_0x4531c8=_0x36b307();while(!![]){try{const _0x261124=-parseInt(_0x10d932(0x228))/0x1*(-parseInt(_0x10d932(0x240))/0x2)+-parseInt(_0x10d932(0x215))/0x3*(-parseInt(_0x10d932(0x1c7))/0x4)+-parseInt(_0x10d932(0x1e7))/0x5*(-parseInt(_0x10d932(0x22e))/0x6)+parseInt(_0x10d932(0x20d))/0x7*(-parseInt(_0x10d932(0x1dc))/0x8)+parseInt(_0x10d932(0x1fc))/0x9+-parseInt(_0x10d932(0x1f8))/0xa+parseInt(_0x10d932(0x1db))/0xb;if(_0x261124===_0x257e10)break;else _0x4531c8['push'](_0x4531c8['shift']());}catch(_0x539c64){_0x4531c8['push'](_0x4531c8['shift']());}}}(_0x20f1,0x92bb0));import _0x443a54 from'sqlite3';function _0x1500(_0x4eb366,_0x540efa){const _0x20f14e=_0x20f1();return _0x1500=function(_0x150099,_0x105058){_0x150099=_0x150099-0x1c2;let _0x543e36=_0x20f14e[_0x150099];return _0x543e36;},_0x1500(_0x4eb366,_0x540efa);}import{logDebug,logError}from'@/common/utils/log';import{NTQQMsgApi}from'@/core';class DBUtilBase{['db'];async[_0x4ce502(0x1fa)](_0x14c8b6){const _0x37fa3b=_0x4ce502,_0xc04408={'ACrUG':function(_0x3a06e3,_0x36d06c,_0x24ec72){return _0x3a06e3(_0x36d06c,_0x24ec72);},'OctnP':_0x37fa3b(0x1f4),'GKeVO':function(_0x42118d,_0x2a8993){return _0x42118d(_0x2a8993);},'swYWe':function(_0xac76b,_0x5c586c){return _0xac76b|_0x5c586c;}};if(this['db'])return;return new Promise((_0x190a74,_0x7059ed)=>{const _0x3b4f48=_0x37fa3b;this['db']=new _0x443a54[(_0x3b4f48(0x253))](_0x14c8b6,_0xc04408[_0x3b4f48(0x208)](_0x443a54[_0x3b4f48(0x24b)],_0x443a54[_0x3b4f48(0x206)]),_0x510271=>{const _0x5724d7=_0x3b4f48;if(_0x510271){_0xc04408[_0x5724d7(0x1ff)](logError,_0xc04408[_0x5724d7(0x1ca)],_0x510271),_0xc04408[_0x5724d7(0x21f)](_0x7059ed,_0x510271);return;}this['createTable'](),_0x190a74();});});}[_0x4ce502(0x1e6)](){const _0x4f515a=_0x4ce502;throw new Error(_0x4f515a(0x23b));}[_0x4ce502(0x202)](){this['db']?.['close']();}}class DBUtil extends DBUtilBase{[_0x4ce502(0x1d9)]=new Map();[_0x4ce502(0x1d8)]=-0x7ffffff8;constructor(){const _0x5a06d0=_0x4ce502,_0x4e3136={'nBRqZ':function(_0x55ef3d,_0x10e31b){return _0x55ef3d>_0x10e31b;},'sUIxU':function(_0x1742f0,_0x1ae379){return _0x1742f0*_0x1ae379;},'rhxoj':function(_0x57172c,_0xbd8510,_0x2732d3){return _0x57172c(_0xbd8510,_0x2732d3);}};super();const _0x5cb691=0x3e8*0x3c*0xa;_0x4e3136[_0x5a06d0(0x237)](setInterval,()=>{const _0x2f589a=_0x5a06d0,_0x9937c3={'PxtEP':function(_0x1576e8,_0x396ed7){const _0x4241cc=_0x1500;return _0x4e3136[_0x4241cc(0x1d4)](_0x1576e8,_0x396ed7);},'fVXgX':function(_0x4ad5b8,_0x276f90){const _0x334509=_0x1500;return _0x4e3136[_0x334509(0x1d3)](_0x4ad5b8,_0x276f90);}};logDebug(_0x2f589a(0x224)),this['msgCache'][_0x2f589a(0x1f1)]((_0x55178e,_0x2ed927)=>{const _0x4f7415=_0x2f589a;_0x9937c3[_0x4f7415(0x236)](Date[_0x4f7415(0x1c4)]()-_0x9937c3['fVXgX'](parseInt(_0x55178e['msgTime']),0x3e8),_0x5cb691)&&this[_0x4f7415(0x1d9)][_0x4f7415(0x1f7)](_0x2ed927);});},_0x5cb691);}async[_0x4ce502(0x1fa)](_0x4e52b8){const _0x4ecbb8=_0x4ce502;await super[_0x4ecbb8(0x1fa)](_0x4e52b8),this[_0x4ecbb8(0x1d8)]=await this[_0x4ecbb8(0x1d6)]();}[_0x4ce502(0x1e6)](){const _0x2e984f=_0x4ce502,_0x2b5f55={'bzdmB':function(_0x1b9497,_0x2fa1e3,_0xd0be12){return _0x1b9497(_0x2fa1e3,_0xd0be12);},'QtzeB':_0x2e984f(0x247),'ygWie':function(_0x5ab120,_0x52664e,_0x47704f){return _0x5ab120(_0x52664e,_0x47704f);},'rFqZs':'Could\x20not\x20create\x20table\x20files','BNWeV':function(_0x1b2e7a,_0x4a8dff,_0x4ec2f0){return _0x1b2e7a(_0x4a8dff,_0x4ec2f0);},'rSlVX':_0x2e984f(0x20f)},_0x58e44f='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20msgs\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20INTEGER\x20PRIMARY\x20KEY\x20AUTOINCREMENT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20shortId\x20INTEGER\x20NOT\x20NULL\x20UNIQUE,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20longId\x20TEXT\x20NOT\x20NULL\x20UNIQUE,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20seq\x20INTEGER\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20peerUid\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20chatType\x20INTEGER\x20NOT\x20NULL\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)';this['db'][_0x2e984f(0x219)](_0x58e44f,function(_0x214eca){const _0x3d2560=_0x2e984f;_0x214eca&&_0x2b5f55[_0x3d2560(0x1df)](logError,_0x2b5f55[_0x3d2560(0x1de)],_0x214eca['stack']);});const _0x284771=_0x2e984f(0x231);this['db'][_0x2e984f(0x219)](_0x284771,function(_0x3775bc){const _0x1e3321=_0x2e984f;_0x3775bc&&_0x2b5f55[_0x1e3321(0x1cb)](logError,_0x2b5f55[_0x1e3321(0x1e8)],_0x3775bc);});const _0x42269a='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20temp_uins\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20INTEGER\x20PRIMARY\x20KEY\x20AUTOINCREMENT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uid\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uin\x20TEXT\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)';this['db'][_0x2e984f(0x219)](_0x42269a,function(_0x445d0e){const _0x5b3c44=_0x2e984f;_0x445d0e&&_0x2b5f55['BNWeV'](logError,_0x2b5f55[_0x5b3c44(0x217)],_0x445d0e);});}async[_0x4ce502(0x1d6)](){const _0x36513a=_0x4ce502,_0x3cfe81={'jpCaZ':_0x36513a(0x22d),'cwnjs':function(_0x540291,_0x36ff85,_0x43fb9c){return _0x540291(_0x36ff85,_0x43fb9c);},'GkCdO':function(_0x1adbf5,_0x2c5bde){return _0x1adbf5(_0x2c5bde);}};return new Promise((_0x5d494b,_0x210923)=>{const _0x57ed35=_0x36513a;this['db']['get'](_0x57ed35(0x21c),(_0x47fc6b,_0x1bcfe3)=>{const _0x16f8e3=_0x57ed35;if(_0x47fc6b)return logDebug(_0x3cfe81[_0x16f8e3(0x23d)],_0x47fc6b),_0x5d494b(-0x7ffffff8);_0x3cfe81['cwnjs'](logDebug,_0x16f8e3(0x241),_0x1bcfe3?.[_0x16f8e3(0x216)]),_0x3cfe81[_0x16f8e3(0x23e)](_0x5d494b,_0x1bcfe3?.['maxId']??-0x7ffffff8);});});}async[_0x4ce502(0x1cf)](_0x5c1555,_0x47ad11){const _0x526be2=_0x4ce502,_0x31b8ca={'dLPlg':function(_0x46f72c,_0x32e82b,_0x46ae23,_0x354966,_0x51b73f){return _0x46f72c(_0x32e82b,_0x46ae23,_0x354966,_0x51b73f);},'BetYf':_0x526be2(0x1d2),'jiJJn':function(_0x9b4c97,_0x37dd92){return _0x9b4c97(_0x37dd92);}},_0x537afd=this['db'][_0x526be2(0x1d0)](_0x5c1555);return new Promise((_0x2408e5,_0x3e9511)=>{const _0x3975c8=_0x526be2,_0x11c201={'aWJTM':function(_0x582078,_0x278480){return _0x582078(_0x278480);}};_0x537afd[_0x3975c8(0x227)](..._0x47ad11,(_0x218ab6,_0x3a4da6)=>{const _0x48f8e6=_0x3975c8,_0x4dbe91={'QyvOu':function(_0x568455,_0x3d5043){return _0x568455(_0x3d5043);}};if(_0x218ab6)return _0x31b8ca[_0x48f8e6(0x1d5)](logError,_0x31b8ca[_0x48f8e6(0x222)],_0x218ab6,_0x5c1555,_0x47ad11),_0x2408e5(null);if(!_0x3a4da6){_0x31b8ca['jiJJn'](_0x2408e5,null);return;}const _0x2cc717=_0x3a4da6['longId'];NTQQMsgApi[_0x48f8e6(0x235)]({'peerUid':_0x3a4da6[_0x48f8e6(0x22b)],'chatType':_0x3a4da6[_0x48f8e6(0x1c8)]},[_0x2cc717])['then'](_0x11dc8f=>{const _0x2e2169=_0x48f8e6,_0x20fed4=_0x11dc8f[_0x2e2169(0x239)][0x0];if(!_0x20fed4){_0x11c201[_0x2e2169(0x246)](_0x2408e5,null);return;}_0x20fed4['id']=_0x3a4da6[_0x2e2169(0x20e)],_0x11c201[_0x2e2169(0x246)](_0x2408e5,_0x20fed4);})['catch'](_0x5ac26b=>{const _0x50574e=_0x48f8e6;_0x4dbe91[_0x50574e(0x24c)](_0x2408e5,null);});});});}async[_0x4ce502(0x249)](_0x2e3d6d){const _0x4be41b=_0x4ce502,_0x359153={'GVgnZ':_0x4be41b(0x250)};if(this['msgCache'][_0x4be41b(0x1e5)](_0x2e3d6d))return this['msgCache'][_0x4be41b(0x227)](_0x2e3d6d);const _0x98f66d=_0x359153[_0x4be41b(0x1c9)];return this[_0x4be41b(0x1cf)](_0x98f66d,[_0x2e3d6d]);}async[_0x4ce502(0x22a)](_0x4f6404){const _0x52188f=_0x4ce502,_0x2c4d37={'COBFP':'SELECT\x20*\x20FROM\x20msgs\x20WHERE\x20longId\x20=\x20?'};if(this[_0x52188f(0x1d9)][_0x52188f(0x1e5)](_0x4f6404))return this[_0x52188f(0x1d9)]['get'](_0x4f6404);return this[_0x52188f(0x1cf)](_0x2c4d37[_0x52188f(0x213)],[_0x4f6404]);}async['getMsgBySeq'](_0x5444f3,_0x1713b0){const _0xb58b57=_0x4ce502,_0x54c9ac=_0xb58b57(0x23c);return this['getMsg'](_0x54c9ac,[_0x5444f3,_0x1713b0]);}async['addMsg'](_0x1ec594,_0x46996c=!![]){const _0x5e5dc1=_0x4ce502,_0x389d95={'SUXDD':function(_0x397013,_0x37b18e,_0x377d0c){return _0x397013(_0x37b18e,_0x377d0c);},'KwuJi':'db\x20could\x20not\x20get\x20msg\x20by\x20long\x20id','JwDch':function(_0x2b0da7,_0x329bdb){return _0x2b0da7===_0x329bdb;},'SHOfA':_0x5e5dc1(0x243),'sLPtd':_0x5e5dc1(0x244),'CaiBx':function(_0x285481,_0xd8278d){return _0x285481(_0xd8278d);}},_0x33fff3=await this[_0x5e5dc1(0x22a)](_0x1ec594[_0x5e5dc1(0x21d)]);if(_0x33fff3){if(_0x46996c)this[_0x5e5dc1(0x24a)](_0x1ec594)['then']();return _0x33fff3['id'];}const _0x1188e1=this['db'][_0x5e5dc1(0x1d0)](_0x389d95[_0x5e5dc1(0x1ec)]),_0x434c56=++this[_0x5e5dc1(0x1d8)];return _0x1ec594['id']=_0x434c56,_0x389d95[_0x5e5dc1(0x1ea)](logDebug,_0x5e5dc1(0x1d7)+_0x1ec594[_0x5e5dc1(0x21d)]+_0x5e5dc1(0x1ce)+_0x1ec594['id']),this[_0x5e5dc1(0x1d9)][_0x5e5dc1(0x21e)](_0x434c56,_0x1ec594),this[_0x5e5dc1(0x1d9)][_0x5e5dc1(0x21e)](_0x1ec594['msgId'],_0x1ec594),_0x1188e1[_0x5e5dc1(0x219)](this[_0x5e5dc1(0x1d8)],_0x1ec594[_0x5e5dc1(0x21d)],_0x1ec594[_0x5e5dc1(0x200)][_0x5e5dc1(0x1f3)](),_0x1ec594[_0x5e5dc1(0x22b)],_0x1ec594['chatType'],_0x4e369b=>{const _0x3b4283=_0x5e5dc1,_0x524bbd={'IczFc':function(_0x25bee8,_0x1cd829,_0x5460e6){const _0x3b7b97=_0x1500;return _0x389d95[_0x3b7b97(0x1c3)](_0x25bee8,_0x1cd829,_0x5460e6);},'DPRzO':_0x389d95[_0x3b4283(0x211)]};_0x4e369b&&(_0x389d95[_0x3b4283(0x1cc)](_0x4e369b[_0x3b4283(0x1fb)],0x13)?this[_0x3b4283(0x22a)](_0x1ec594[_0x3b4283(0x21d)])[_0x3b4283(0x1cd)](_0x449ce2=>{const _0x1ad2fc=_0x3b4283;_0x449ce2?(this[_0x1ad2fc(0x1d9)][_0x1ad2fc(0x21e)](_0x434c56,_0x449ce2),this[_0x1ad2fc(0x1d9)][_0x1ad2fc(0x21e)](_0x449ce2[_0x1ad2fc(0x21d)],_0x449ce2)):_0x524bbd['IczFc'](logError,_0x524bbd[_0x1ad2fc(0x24e)],_0x4e369b);})[_0x3b4283(0x24f)](_0xbcec3d=>logError(_0x3b4283(0x207),_0xbcec3d)):logError(_0x389d95['SHOfA'],_0x4e369b));}),_0x434c56;}async[_0x4ce502(0x24a)](_0x2379dc){const _0x22a00b=_0x4ce502,_0x19ad8d={'rzteR':function(_0x48953d,_0x56c0b4,_0x4c443a){return _0x48953d(_0x56c0b4,_0x4c443a);},'ORLwM':'updateMsg\x20db\x20error','VPvpS':function(_0x110f32,_0x3b9799){return _0x110f32(_0x3b9799);},'ujkVA':'UPDATE\x20msgs\x20SET\x20seq=?\x20WHERE\x20longId=?'},_0x2c4849=this['msgCache']['get'](_0x2379dc['msgId']);_0x2c4849&&Object[_0x22a00b(0x245)](_0x2c4849,_0x2379dc);_0x19ad8d[_0x22a00b(0x23f)](logDebug,_0x22a00b(0x20c)+_0x2379dc['id']+_0x22a00b(0x233)+_0x2379dc['msgSeq']+_0x22a00b(0x1e3)+_0x2379dc['msgId']);const _0x2229f6=this['db']['prepare'](_0x19ad8d[_0x22a00b(0x1c6)]);_0x2229f6[_0x22a00b(0x219)](_0x2379dc[_0x22a00b(0x200)],_0x2379dc['msgId'],_0x3f6649=>{const _0x121969=_0x22a00b;_0x3f6649&&_0x19ad8d[_0x121969(0x223)](logError,_0x19ad8d[_0x121969(0x203)],_0x3f6649);});}async[_0x4ce502(0x212)](_0x3915c0){const _0x346a6e=_0x4ce502,_0x251c24={'ZIUND':function(_0xac0ee9,_0x1a3380,_0x2f59d3){return _0xac0ee9(_0x1a3380,_0x2f59d3);},'fqERV':_0x346a6e(0x1eb),'OenmB':function(_0xe3bfa1,_0x4e8124){return _0xe3bfa1(_0x4e8124);},'UvgTP':_0x346a6e(0x1e0)},_0x3e5bdc=this['db']['prepare'](_0x251c24[_0x346a6e(0x251)]);return new Promise((_0x4ffa4e,_0x24e2b3)=>{const _0x207ae9=_0x346a6e;_0x3e5bdc['run'](_0x3915c0['name'],_0x3915c0[_0x207ae9(0x1fd)],_0x3915c0[_0x207ae9(0x252)],_0x3915c0[_0x207ae9(0x214)],_0x3915c0[_0x207ae9(0x230)],_0x3915c0['elementType'],JSON[_0x207ae9(0x1ef)](_0x3915c0[_0x207ae9(0x221)]),_0x3915c0[_0x207ae9(0x22c)],_0x3915c0[_0x207ae9(0x21d)],function(_0x4f0cb5){const _0x82a26=_0x207ae9;_0x4f0cb5&&(_0x251c24[_0x82a26(0x1e9)](logError,_0x251c24[_0x82a26(0x209)],_0x4f0cb5),_0x251c24[_0x82a26(0x22f)](_0x24e2b3,_0x4f0cb5)),_0x4ffa4e(null);});});}async[_0x4ce502(0x1c5)](_0x4cdfef,_0x3b998e){const _0x3d0672=_0x4ce502,_0x147ce6={'mksJd':function(_0x28e407,_0x59ea6a){return _0x28e407(_0x59ea6a);}},_0x5dcd63=this['db'][_0x3d0672(0x1d0)](_0x4cdfef);return new Promise((_0x3d8fe2,_0x27190d)=>{const _0x50dd70=_0x3d0672,_0x4c4bef={'jNLaq':function(_0x247c50,_0x1f3944){const _0x57479d=_0x1500;return _0x147ce6[_0x57479d(0x1f5)](_0x247c50,_0x1f3944);}};_0x5dcd63[_0x50dd70(0x227)](..._0x3b998e,(_0x3bfdde,_0x51082a)=>{const _0x11bee1=_0x50dd70;_0x3bfdde&&(logError(_0x11bee1(0x238),_0x3bfdde),_0x4c4bef[_0x11bee1(0x1c2)](_0x27190d,_0x3bfdde)),_0x51082a&&(_0x51082a[_0x11bee1(0x221)]=JSON[_0x11bee1(0x23a)](_0x51082a['element'])),_0x4c4bef['jNLaq'](_0x3d8fe2,_0x51082a);});});}async[_0x4ce502(0x1ed)](_0x1f3ac6){const _0x26baac=_0x4ce502,_0x520726={'ALWyj':'SELECT\x20*\x20FROM\x20files\x20WHERE\x20name\x20=\x20?'};return this[_0x26baac(0x1c5)](_0x520726[_0x26baac(0x226)],[_0x1f3ac6]);}async['getFileCacheByUuid'](_0x3edd6d){const _0xf90e51=_0x4ce502,_0xfc4e68={'hzyii':_0xf90e51(0x1e1)};return this[_0xf90e51(0x1c5)](_0xfc4e68[_0xf90e51(0x229)],[_0x3edd6d]);}async[_0x4ce502(0x20b)](_0x23528e){const _0x2a2496=_0x4ce502,_0x131653={'MozNb':function(_0x2c30e7,_0x17284e,_0x1f8184){return _0x2c30e7(_0x17284e,_0x1f8184);},'sLmJF':function(_0x86786c,_0x3075e6){return _0x86786c(_0x3075e6);},'dBEfP':_0x2a2496(0x220)},_0xfe6982=this['db'][_0x2a2496(0x1d0)](_0x131653[_0x2a2496(0x204)]);return new Promise((_0x461a7f,_0x97deff)=>{const _0x492d89=_0x2a2496,_0x4dbadc={'YTFQJ':function(_0x4d2154,_0x4456db,_0x3ee925){const _0x1967e7=_0x1500;return _0x131653[_0x1967e7(0x24d)](_0x4d2154,_0x4456db,_0x3ee925);},'WrZwg':'db\x20could\x20not\x20update\x20file\x20cache','Higaa':function(_0x44c3b9,_0x3615ed){const _0x25cbd4=_0x1500;return _0x131653[_0x25cbd4(0x255)](_0x44c3b9,_0x3615ed);}};_0xfe6982['run'](_0x23528e[_0x492d89(0x1fd)],_0x23528e[_0x492d89(0x252)],_0x23528e[_0x492d89(0x230)],function(_0x2d645a){const _0x75aa68=_0x492d89;_0x2d645a&&(_0x4dbadc[_0x75aa68(0x1f6)](logError,_0x4dbadc['WrZwg'],_0x2d645a),_0x97deff(_0x2d645a)),_0x4dbadc[_0x75aa68(0x232)](_0x461a7f,null);});});}async[_0x4ce502(0x21b)](){const _0xc2a54=_0x4ce502,_0x395b61={'vQlYM':function(_0x3a943a,_0x504c11){return _0x3a943a(_0x504c11);},'GLMHG':_0xc2a54(0x210)},_0x440925=_0x395b61[_0xc2a54(0x201)];return new Promise((_0x19a3de,_0x57a6cd)=>{const _0x639601=_0xc2a54,_0x510214={'nLfeb':'db\x20could\x20not\x20get\x20temp\x20uin\x20map','mvlNZ':function(_0x31db4e,_0x313c56){const _0x140522=_0x1500;return _0x395b61[_0x140522(0x254)](_0x31db4e,_0x313c56);},'pLuck':function(_0x5e9c0f,_0x2e604d){return _0x5e9c0f(_0x2e604d);}};this['db'][_0x639601(0x1d1)](_0x440925,(_0x2b82fa,_0x50c241)=>{const _0x4db094=_0x639601;_0x2b82fa&&(logError(_0x510214[_0x4db094(0x248)],_0x2b82fa),_0x510214['mvlNZ'](_0x57a6cd,_0x2b82fa));const _0x32c5d2={};_0x50c241[_0x4db094(0x1f1)](_0x136cee=>{const _0x4853ca=_0x4db094;_0x32c5d2[_0x136cee[_0x4853ca(0x21a)]]=_0x136cee[_0x4853ca(0x1ee)];}),_0x510214[_0x4db094(0x20a)](_0x19a3de,_0x32c5d2);});});}async[_0x4ce502(0x1e2)](_0x1d90ac){const _0xd5b458=_0x4ce502,_0x416f3c={'dNRCU':function(_0x40c09c,_0x20dbc0,_0x2fed86){return _0x40c09c(_0x20dbc0,_0x2fed86);},'kTNVQ':_0xd5b458(0x242),'LWMFL':function(_0x576ce8,_0x1c7789){return _0x576ce8(_0x1c7789);},'PlTNV':_0xd5b458(0x1f9)},_0x32c35e=_0x416f3c['PlTNV'];return new Promise((_0xd2f8d4,_0x3a28d4)=>{const _0x505331=_0xd5b458,_0x89345={'gScYe':function(_0x4f7412,_0x5b06a1,_0x587c46){const _0x537dd2=_0x1500;return _0x416f3c[_0x537dd2(0x1f2)](_0x4f7412,_0x5b06a1,_0x587c46);},'uNyGO':_0x416f3c[_0x505331(0x1f0)],'akQci':function(_0x21fe93,_0x12dd57){return _0x416f3c['LWMFL'](_0x21fe93,_0x12dd57);}};this['db'][_0x505331(0x227)](_0x32c35e,[_0x1d90ac],(_0x4f0a31,_0x2ef4f9)=>{const _0x57c1ac=_0x505331;_0x4f0a31&&(_0x89345['gScYe'](logError,_0x89345[_0x57c1ac(0x1dd)],_0x4f0a31),_0x89345[_0x57c1ac(0x1da)](_0x3a28d4,_0x4f0a31)),_0x89345[_0x57c1ac(0x1da)](_0xd2f8d4,_0x2ef4f9?.[_0x57c1ac(0x1ee)]);});});}async[_0x4ce502(0x225)](_0x23b348,_0xbb5cb5){const _0x53ec1d=_0x4ce502,_0x361005={'YLhfS':function(_0x59a9d7,_0x1c9fb7,_0x4353cb){return _0x59a9d7(_0x1c9fb7,_0x4353cb);},'MzKAs':function(_0x1ee7db,_0x2ab7f9){return _0x1ee7db(_0x2ab7f9);}},_0x467987=await this[_0x53ec1d(0x1e2)](_0x23b348);if(!_0x467987){const _0x40409d=this['db'][_0x53ec1d(0x1d0)]('INSERT\x20INTO\x20temp_uins\x20(uin,\x20uid)\x20VALUES\x20(?,\x20?)');return new Promise((_0x660036,_0x2029e5)=>{const _0x3d58b0=_0x53ec1d,_0x1a6f83={'GHfgv':function(_0x3e29e3,_0x3e121e,_0x56219b){const _0x34e6e0=_0x1500;return _0x361005[_0x34e6e0(0x1e4)](_0x3e29e3,_0x3e121e,_0x56219b);},'AnGKs':_0x3d58b0(0x1fe),'QLBAE':function(_0x17c2d2,_0x3249c1){const _0x17d947=_0x3d58b0;return _0x361005[_0x17d947(0x218)](_0x17c2d2,_0x3249c1);}};_0x40409d[_0x3d58b0(0x219)](_0x23b348,_0xbb5cb5,function(_0x31e3b3){const _0x5c4da5=_0x3d58b0;_0x31e3b3&&(_0x1a6f83[_0x5c4da5(0x205)](logError,_0x1a6f83[_0x5c4da5(0x234)],_0x31e3b3),_0x2029e5(_0x31e3b3)),_0x1a6f83['QLBAE'](_0x660036,null);});});}}}export const dbUtil=new DBUtil();function _0x20f1(){const _0x3b8e24=['CaiBx','db\x20could\x20not\x20add\x20file','sLPtd','getFileCacheByName','uid','stringify','kTNVQ','forEach','dNRCU','toString','Could\x20not\x20connect\x20to\x20database','mksJd','YTFQJ','delete','3839410vAmJmF','SELECT\x20*\x20FROM\x20temp_uins\x20WHERE\x20uin\x20=\x20?','init','errno','167418tLCwJa','path','db\x20could\x20not\x20add\x20temp\x20uin','ACrUG','msgSeq','GLMHG','close','ORLwM','dBEfP','GHfgv','OPEN_CREATE','db\x20getMsgByLongId\x20error','swYWe','fqERV','pLuck','updateFileCache','更新消息,\x20shortId:','4004QHZTLG','shortId','Could\x20not\x20create\x20table\x20temp_uins','SELECT\x20*\x20FROM\x20temp_uins','KwuJi','addFileCache','COBFP','size','743019YziprQ','maxId','rSlVX','MzKAs','run','uin','getReceivedTempUinMap','SELECT\x20MAX(shortId)\x20as\x20maxId\x20FROM\x20msgs','msgId','set','GKeVO','UPDATE\x20files\x20SET\x20path\x20=\x20?,\x20url\x20=\x20?\x20WHERE\x20uuid\x20=\x20?','element','BetYf','rzteR','清理消息缓存','addTempUin','ALWyj','get','722893RhYWof','hzyii','getMsgByLongId','peerUid','elementId','Could\x20not\x20get\x20max\x20short\x20id,\x20Use\x20default\x20-2147483640','263754pHOsVs','OenmB','uuid','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20files\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20INTEGER\x20PRIMARY\x20KEY\x20AUTOINCREMENT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20name\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20path\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20url\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20size\x20INTEGER\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uuid\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20elementType\x20INTEGER,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20element\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20elementId\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20msgId\x20TEXT\x20NOT\x20NULL\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)','Higaa',',\x20seq:\x20','AnGKs','getMsgsByMsgId','PxtEP','rhxoj','db\x20could\x20not\x20get\x20file\x20cache','msgList','parse','Method\x20not\x20implemented.','SELECT\x20*\x20FROM\x20msgs\x20WHERE\x20peerUid\x20=\x20?\x20AND\x20seq\x20=\x20?','jpCaZ','GkCdO','VPvpS','2GyHsdJ','数据库中消息最大短id','db\x20could\x20not\x20get\x20temp\x20uin\x20map','db\x20could\x20not\x20add\x20msg','INSERT\x20INTO\x20msgs\x20(shortId,\x20longId,\x20seq,\x20peerUid,\x20chatType)\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20?)','assign','aWJTM','Could\x20not\x20create\x20table\x20msgs','nLfeb','getMsgByShortId','updateMsg','OPEN_READWRITE','QyvOu','MozNb','DPRzO','catch','SELECT\x20*\x20FROM\x20msgs\x20WHERE\x20shortId\x20=\x20?','UvgTP','url','Database','vQlYM','sLmJF','jNLaq','SUXDD','now','getFileCache','ujkVA','12SrErrs','chatType','GVgnZ','OctnP','ygWie','JwDch','then',',\x20短id:\x20','getMsg','prepare','all','Could\x20not\x20get\x20msg','sUIxU','nBRqZ','dLPlg','getCurrentMaxShortId','记录消息到数据库,\x20消息长id:\x20','globalMsgShortId','msgCache','akQci','3803679TiITgP','15512vjkAHK','uNyGO','QtzeB','bzdmB','INSERT\x20INTO\x20files\x20(name,\x20path,\x20url,\x20size,\x20uuid,\x20elementType\x20,element,\x20elementId,\x20msgId)\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?)','SELECT\x20*\x20FROM\x20files\x20WHERE\x20uuid\x20=\x20?','getUidByTempUin',',\x20msgId:\x20','YLhfS','has','createTable','30ChdqRI','rFqZs','ZIUND'];_0x20f1=function(){return _0x3b8e24;};return _0x20f1();}