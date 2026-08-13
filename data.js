/* 정적 GitHub Pages에서 자동 조회하기 위한 설정입니다.
   주의: 정적 사이트에 포함된 키는 방문자가 확인할 수 있습니다. 운영 시 서버 프록시 사용을 권장합니다. */
const CONFIG={
 apiEndpoint:'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst',
 serviceKeyEncoded:'Xj1hRX3%2BKSHVNtMTJ5T8B05Bszjf%2BRHBtqcDo9mYGq3M8joARNpz3ynqnh5bU%2FGcUCXGLluFRN6%2B8BIn0nJgZg%3D%3D',
 windCaution:7,windDanger:11,tempLow:18
};
const BEACHES=[
 {id:'gwangalli',name:'광안리 해수욕장',district:'수영구',nx:99,ny:75},{id:'haeundae',name:'해운대 해수욕장',district:'해운대구',nx:99,ny:75},{id:'songjeong',name:'송정 해수욕장',district:'해운대구',nx:100,ny:76},{id:'songdo',name:'송도 해수욕장',district:'서구',nx:97,ny:73},{id:'dadaepo',name:'다대포 해수욕장',district:'사하구',nx:96,ny:73},{id:'ilgwang',name:'일광 해수욕장',district:'기장군',nx:101,ny:78},{id:'imnang',name:'임랑 해수욕장',district:'기장군',nx:101,ny:79}
];
const SAMPLE={temperature:null,wind:null,humidity:null,rain:null,available:false,updated:'기상청 정보를 불러오는 중입니다.'};
const SHOPS=[
 {id:1,beach:'gwangalli',name:'광안 파도쉼터',pos:[36,59],hours:'09:00–19:00',open:true,items:['파라솔','튜브','구명조끼'],prices:{파라솔:12000,튜브:6000,구명조끼:7000},points:{파라솔:100,튜브:50,구명조끼:70}},
 {id:2,beach:'gwangalli',name:'바다친구 대여점',pos:[68,44],hours:'09:00–18:30',open:true,items:['파라솔','튜브','어린이용품'],prices:{파라솔:10000,튜브:5000,어린이용품:7000},points:{파라솔:100,튜브:50,어린이용품:50}},
 {id:3,beach:'haeundae',name:'해운대 햇살대여',pos:[44,55],hours:'09:00–19:00',open:true,items:['파라솔','튜브','구명조끼'],prices:{파라솔:13000,튜브:6000,구명조끼:7000},points:{파라솔:100,튜브:50,구명조끼:70}},
 {id:4,beach:'haeundae',name:'해변놀이터',pos:[72,40],hours:'09:30–18:30',open:true,items:['돗자리','어린이용품'],prices:{돗자리:5000,어린이용품:7000},points:{돗자리:30,어린이용품:50}},
 {id:5,beach:'songjeong',name:'송정 물놀이센터',pos:[53,54],hours:'09:00–18:00',open:true,items:['파라솔','튜브'],prices:{파라솔:11000,튜브:5500},points:{파라솔:100,튜브:50}},
 {id:6,beach:'songdo',name:'송도 가족쉼터',pos:[41,50],hours:'09:00–18:00',open:false,items:['파라솔','어린이용품'],prices:{파라솔:10000,어린이용품:7000},points:{파라솔:100,어린이용품:50}},
 {id:7,beach:'dadaepo',name:'다대포 바다상점',pos:[62,57],hours:'09:00–18:30',open:true,items:['튜브','구명조끼'],prices:{튜브:5000,구명조끼:6500},points:{튜브:50,구명조끼:70}},
 {id:8,beach:'ilgwang',name:'일광 해변대여',pos:[50,45],hours:'09:30–18:00',open:true,items:['파라솔','튜브'],prices:{파라솔:10000,튜브:5500},points:{파라솔:100,튜브:50}},
 {id:9,beach:'imnang',name:'임랑 파도마켓',pos:[56,54],hours:'10:00–18:00',open:true,items:['파라솔','튜브'],prices:{파라솔:9000,튜브:5000},points:{파라솔:100,튜브:50}}
];
const GUIDES=[['이안류','해안에서 먼 바다로 빠르게 흐르는 물길이에요.','안내 깃발과 안전요원 안내를 확인하세요.','흐름에 맞서지 말고 해안과 나란히 이동하세요.','어린이는 보호자의 팔이 닿는 곳에서만 놀아요.'],['파도·강풍','파도와 바람은 균형을 잃게 하고 튜브를 떠밀어요.','기상정보와 통제 안내를 확인하세요.','바람이 강해지면 바로 물에서 나오세요.','어린이 튜브는 보호자가 잡아주세요.'],['수온·해양생물','차가운 물과 생물 접촉은 몸에 위험할 수 있어요.','수온과 현장 안내판을 확인하세요.','몸이 떨리면 쉬고, 생물은 만지지 마세요.','젖은 옷을 갈아입히고 가까이에서 지켜봐요.']];
