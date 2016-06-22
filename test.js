var ktk = require('./app');

var str = '우수한 오픈소스 검색 라이브러리인 루씬이 국내에서 한글처리의 문제로 인해 사용에 많은 제약이 있습니다. 본 프로젝트는 Lucene KoreanAnalyzer 를 개발하여 국내에서 루씬의 활용도를 높이고자 합니다.';

var st = new Date();
var result = ktk.neSync(str, {
    morph : true,
    posInc : true,
    offset : true
});
//console.log('1', result);
var et = new Date();
console.log((et - st) + 'ms');

str = '루씬 한글분석기 오픈소스 프로젝트를 이용한 색인어추출기';
result = ktk.neSync(str, {
    morph : true,
    posInc : true,
    offset : true
});

console.log((new Date() - et) + 'ms');

str = '예상과 달리 장마전선이 북상하지 못하고 남해안에만 머물고 있기 때문입니다. 오늘 남부와 제주도에는 장맛비가 이어지겠지만, 중부지방은 오후 한때 소나기가 지날 것으로 보입니다.     제주도와 전남 해안에는 이미 100mm에 가까운 호우가 쏟아졌습니다.';
result = ktk.neSync(str );
console.log('1', result);
console.log((new Date() - et) + 'ms');
