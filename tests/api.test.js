var assert = require('assert');
const expect = require('chai').expect;
const request = require('supertest');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

describe('nodejs api test', function () {
  it('获取图书列表接口测试', function () {
      request("http://localhost:3000").get('/api/getDataList').expect(3).end((err,res)=>{
          expect(res.body.length).equal(3);
      })
  });
});