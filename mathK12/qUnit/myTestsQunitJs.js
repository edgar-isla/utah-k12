/**
 * Created by edgarisla1 on 11/24/15.
 */

var sourceDocument="Now is the time for all good men to come to the aid";
QUnit.test("isAccurate Test", function( assert ){
    var model= new TypingModel(sourceDocument);

    assert.ok(model.isAccurate(),"Passed!");
    assert.equal(model.sourceDocument,sourceDocument);
    assert.equal(model.progress(),0.0);
    model.setTheirDocument("N");
    assert.equal(model.theirDocument,"N");
    assert.ok(model.progress()>0,"user has typed in one letter");
    assert.ok(model.isAccurate())
    model.setTheirDocument("Na");
    assert.ok(!model.isAccurate(),"The user mistyped a letter");
    model.setTheirDocument(sourceDocument);
    assert.equal(model.progress(),100)


});


//QUnit.test("differentTests", function(assert){
//
//});


//
//QUnit.test( "hello test", function( assert ) {
//    assert.ok( 1 == "1", "Passed!" );
//});