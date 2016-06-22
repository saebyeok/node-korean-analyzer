var fs = require('fs');
var java = require('java');
var baseDir = __dirname + '/javalib';
var dependencies = fs.readdirSync(baseDir);

dependencies.forEach(function(dependency){
    java.classpath.push(baseDir + "/" + dependency);
});

module.exports = {
    neSync : function( input , opt){
        opt = opt || null;

        var ka = java.newInstanceSync("org.apache.lucene.analysis.ko.KoreanAnalyzer");
        var res = [];

        if(opt.bigrammable){                // dafault : false
            ka.setBigrammableSync(true);
        }
        if(opt.hasOrigin){                  // dafault : false
            ka.setHasOriginSync(true);
        }
        if(opt.originCNoun === false){      // dafault : true
            ka.setOriginCNoun(false)
        }
        if(opt.queryMode){                  // dafault : false
            ka.setQueryModeSync(true);
        }
        if(opt.wordSegment){                // dafault : false
            ka.setWordSegmentSync(true);
        }


        var ts = ka.tokenStreamSync("s", input);
        var termAtt = ts.addAttributeSync(java.findClassSync("org.apache.lucene.analysis.tokenattributes.CharTermAttribute"));

        var posIncrAtt = ts.addAttributeSync(java.findClassSync("org.apache.lucene.analysis.tokenattributes.PositionIncrementAttribute"));
        var morpAtt = ts.addAttributeSync(java.findClassSync("org.apache.lucene.analysis.ko.MorphemeAttribute"));
        var offsetAtt = ts.addAttributeSync(java.findClassSync("org.apache.lucene.analysis.tokenattributes.OffsetAttribute"));

        ts.resetSync();

        /**
         * opt.morph
         * opt.posInc
         * opt.offset
         */
        while (ts.incrementTokenSync()){
            if(opt.morph || opt.posInc || opt.offset ){
                var data = {
                    term : termAtt.toStringSync()
                };
                if(opt.morph){
                    try{
                        var morph = morpAtt.getTokenSync().getOutputsSync().toStringSync();
                        morph = morph.replace(/[\[\]]/gi, '').split(',');
                        data.morph = morph;
                    }catch(e){
                        // the term isn't korean
                    }
                }
                if(opt.posInc){
                    data.posInc = posIncrAtt.getPositionIncrementSync() === 1 ? true : false;
                }
                if(opt.offset){
                    data.startPos = offsetAtt.startOffsetSync();
                    data.endPos = offsetAtt.endOffsetSync();
                }
                res.push(data);
            }else{
                res.push(termAtt.toStringSync());
            }
        }

        ts.closeSync();

        return res;
    }
};