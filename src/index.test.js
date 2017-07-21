import {expect} from 'chai';
import jsdom from 'jsdom';
import fs  from 'fs';
const {JSDOM} = jsdom;

describe('Our first test', () => {
    it('should pass', ()=>{
        expect(true).to.equal(true);
    });
});


describe('index.html', () => {
  it('should have h1 that says Users', (done) => {
    const index = ( new JSDOM('./src/index.html', "utf-8")).window.document;

      const h1 = (new JSDOM(index.getElementsByName('h1'))).window.document;
      expect(h1.innerHTML).to.equal(index.innerHTML);
      done();
      window.close();

  });
});
