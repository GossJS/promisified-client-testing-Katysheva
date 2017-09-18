const Zombie = require('zombie');
const should = require('should');
const mocha = require('mocha');
const testValues = require('./testValues');

const url = 'https://katysheva.github.io/Web-tech-task';

testValues.forEach(o => {
    let requestUrl = `${url}?test=${o.value}`;
    describe(`Request ${requestUrl}`, () => {
        const browser = new Zombie();
        const getResult = () => ({ response: browser.document.querySelector('h3#response').textContent.toLowerCase() });
        
        before(done => {
            browser.visit(requestUrl, done);
        });
    
        describe('', () => {
    
            before(done => {
                browser.pressButton('#startBtn', done);
            });

            it('', () => {
                getResult().should.have.property('response', o.expected);
            });
      });
    });
});