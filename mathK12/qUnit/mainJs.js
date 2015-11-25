/**
 * Created by edgarisla1 on 11/24/15.
 */
function stringStartsWith(string,prefix){
    return string.slice(0,prefix.length)==prefix;
}
function TypingModel(source){
    this.sourceDocument=source;
    this.theirDocument="";
    this.isAccurate=function(){
        return stringStartsWith(this.sourceDocument,this.theirDocument);
    };
    this.setTheirDocument= function(theirDocument){
        this.theirDocument=theirDocument;
    };
    this.progress=function(){
        return (this.theirDocument.length/this.sourceDocument.length)*100;
    }
}