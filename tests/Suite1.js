/**
 * Created by admin on 3/18/2016.
 */
var HomePage = require('../pages/HomePage.js');
describe('go to the moblie angular url', function(){

    beforeEach(function(){
        //browser.ignoreSynchronization = true;
        browser.get('http://mobileangularui.com/demo/#/');

        //element(by.css("a[href='/demo']")).click();
        //browser.ignoreSynchronization = false;
    });

    it('Verify the webkit agent', function() {
        HomePage.agentName.getText().then(function (agentName) {

            console.log(agentName);
            expect(agentName).toBe(HomePage.expected_AgentName);
        });
    });
    it('Verify something on scroll page', function(){
        HomePage.scroll_link.click();
        browser.getCurrentUrl().then(function(curl){

            expect(curl).toContain('scroll')
        });
        //browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');

        //element(by.xpath("//a[contains(text(),'100')]")).click();
        //var ele = element(by.xpath("//a[contains(text(),'100')]")).getLocation()
        //console.log(ele);
        browser.executeScript("arguments[0].scrollIntoView();", element(by.xpath('/html/body/div[3]/div[3]/div[2]/ng-view/div/div')));
        browser.pause();



    });








});