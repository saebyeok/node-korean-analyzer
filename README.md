이 프로젝트는 [루씬 한글분석기 오픈소스 프로젝트](http://cafe.naver.com/korlucene) 에서 배포 중인 한국어 색인어 추출기를 node-java 모듈로 감싸서 node.js에서 사용할 수 있게 만든 프로젝트 입니다. 
  
# Installation

```
 $ npm i node-arirang-analyzer --save 
```
 
# Basic Usage

The easiest way to use noun extractor is to simply follow:

```js
var nka = require('node-korean-analyzer');
var query = '루씬 한글분석기 오픈소스 프로젝트를 이용한 자바스크립트 색인어 추출기입니다.';
var res = nka.neSync(query);                // ktk.ne(query, callback) - async function  
console.log(res);                           // array ['루씬', '한글분석기', '한글', '분석', '기', '오픈소스' .... ]
```

# API

```js 
var ne = require('node-korean-analyzer').neSync;
var result = ne(query, [options]);
```

## Options

```js
{
    bigrammable : true,     // default : false
    hasOrigin : true,       // default : false
    originCNoun : true,     // default : true
    queryMode : true,       // default : false
    wordSegment : true,     // default : false
    morph : true,           // defualt : false 
    posInc : true,          // defualt : false
    offset : true,          // defualt : false
}
```

```bigrammable```, ```hasOrigin```, ```originCNoun```, ```queryMode``` and ```wordSegment``` options are used to parameters the original java library.
```morph```, ```posInc```, and ```offset``` options are affected to result array.

# License

ISC 