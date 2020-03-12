var expect = require('chai').expect;
var request = require('request');

describe('status and content',function(){
    describe('Main page',function(){
        it('Main page content', function(done){
            request('http://localhost:8080', function(error, response, body){
                expect(body).to.equal('HelloWorld');
                done();
            })
        })

        it('Main page response code', function(done){
            request('http://localhost:8080', function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
    })

    describe('Status page',function(){
        it('Status page response code', function(done){
            request('http://localhost:8080/status', function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
    })

})