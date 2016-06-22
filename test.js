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

str = '실권은 신동빈 롯데그룹 회장(61)이 쥐고 있지만 신동주 전 일본 롯데홀딩스 부회장(62)이 지배구조 정점에 있는 광윤사와 롯데홀딩스의 최대주주로서 맞서고 있기 때문이다';
result = ktk.neSync(str, {
    queryMode : true
});
console.log('1', result);
console.log((new Date() - et) + 'ms');

/*
ktk.ne(str, function(res){
    console.log('2', res);
});
*/
