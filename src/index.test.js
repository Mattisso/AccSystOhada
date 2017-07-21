import {expect} from 'chai';
import jsdom from 'jsdom';
//import fs  from 'fs';
const {JSDOM} = jsdom;


describe('Our first test', () => {
    it('should pass', ()=>{
        expect(true).to.equal(true);
    });
});


describe('index.html', () => {
  it('should say hello', () => {
const virtualConsole = new jsdom.VirtualConsole();
const dom = new JSDOM(`./src/index.html`, { virtualConsole });
virtualConsole.on("error", (done) => { 
  const h1 = dom.window.document.getElementsByTagName('h1')[0];
 expect(h1.innerHTML).to.equal("Hellow World!");
    done();
      dom.window.close();
});
    /* const index = fs.readFileSync('./src/index.html', "utf-8");

    jsdom.VirtualConsole(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hellow World!");
     done();
      window.close();
    }); */
  });
});