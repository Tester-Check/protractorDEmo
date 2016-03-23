/**
 * Created by admin on 3/18/2016.
 */
var HomePage = require('../pages/HomePage.js');
var ScrollPage = require('../pages/ScrollPage.js');
var TogglePage = require('../pages/TogglePage.js');
var TabPage = require('../pages/TabPage.js');
var OverlayPage = require('../pages/OverlayPage.js');
var FormPage = require('../pages/FormPage.js');
var DropDownPage = require('../pages/DropdownPage.js');

xdescribe('Verify angular UI functionality', function(){
    /*beforeAll(function(){
        browser.ignoreSynchronization = true;
        browser.get('http://mobileangularui.com/');
        element(by.css("a[href='/demo']")).click();
    });*/

    beforeEach(function(){
        //browser.ignoreSynchronization = false;
        browser.get('http://mobileangularui.com/demo/#/');
        browser.waitForAngular();
        //element(by.css("a[href='/demo']")).click();
    });

    it('Verify the webkit agent', function() {
        HomePage.agentName.getText().then(function (agentName) {
            console.log(agentName);
            expect(agentName).toContain(HomePage.expected_AgentName);
        });
    });

    it('Verify something on scroll page', function() {
        HomePage.scroll_link.click();
        browser.getCurrentUrl().then(function (curl) {
            expect(curl).toContain('scroll')
        });

        ScrollPage.ItemList.count().then(function (no_of_items) {
            expect(no_of_items).toBe(100);
        });

        var i=1;
        ScrollPage.ItemList.each(function(element){
            var item = element.getText().then(function(items){
                console.log(items);
                expect(items).toEqual('Item '+i);
                i=i+1;
            });
        });
    });

    it('light bulb functionality', function(){
        HomePage.Toggle.click();
        TogglePage.LightBulb.getAttribute('class').then(function(attr){
            expect(attr).not.toContain('text-primary')
        });
        TogglePage.Toggle_button.click();
        TogglePage.LightBulb.getAttribute('class').then(function(attr){
            console.log("this is the attribute after "+attr);
            expect(attr).toContain('text-primary');
        });

    });

    it('Second Tab should get selected', function(){
        HomePage.Tab.click();
        TabPage.Tab2_indicator.getAttribute('class').then(function(attr){
            expect(attr).not.toContain('active');
        });
        TabPage.Tab2.click();
        TabPage.Tab2_indicator.getAttribute('class').then(function(attr){
            expect(attr).toContain('active');
        });

    });

    it('Verify text on modal window', function(){
        HomePage.Overlay.click();
        OverlayPage.Show_Modal.click();
        OverlayPage.modalContentBody.getText().then(function(modal_body_content){
            console.log(modal_body_content);
            expect(modal_body_content).toContain('Lorem');
        });
        OverlayPage.Save_Changes.click();
        OverlayPage.Show_Overlay.click();
        OverlayPage.modalContentBody.getText().then(function(modal_body_content){
            console.log(modal_body_content);
            expect(modal_body_content).toContain('Lorem');
        });
        OverlayPage.Close_button.click();
    });


    it('Populate Login form and accept alert', function(){
        HomePage.Form.click();
        FormPage.Email_Field.clear();
        FormPage.Email_Field.sendKeys('somebody@domain.com');
        FormPage.Password_Field.sendKeys('Password123');
        FormPage.RememberME_switch.click();
        //FormPage.Login_Button.click();
        /*browser.switchTo().alert().getText().then(function (alert_message) {
            expect(alert_message).toEqual('You submitted the login form');

        })*/
        FormPage.Login_Button.click().then(function(){
            var alert = browser.switchTo().alert();
            expect(alert.getText()).toEqual('You submitted the login form');
            alert.accept();
            });
    });

    it('test drop-down options and select second option from second drop-down', function(){
        HomePage.DropDown.click();
        DropDownPage.FirstDropDown.click().then(function(){
            DropDownPage.DropDownContents.count().then(function(no_of_actions){
                console.log('number of options in the drop down = '+no_of_actions);
                expect(no_of_actions).toBe(4);
                DropDownPage.SecondDropDown.click().then(function(){
                    DropDownPage.SelectOption(2).click();
                });
            });
        });
    });

});

describe('Test advanced actions', function(){
    it('should perform drag and drop', function(){
        browser.get('http://codef0rmer.github.io/angular-dragdrop/#!/');
        browser.waitForAngular();
        var drag_element = element(by.model('list1'));
        var drop_element = element(by.model('list2'));
        //browser.driver.actions().dragAndDrop(drag_element,drop_element);
        browser.actions().mouseDown(drag_element).mouseMove(drop_element).mouseUp().perform();

    });

});