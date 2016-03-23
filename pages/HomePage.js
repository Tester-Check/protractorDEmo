/**
 * Created by admin on 3/18/2016.
 */
var HomePage = function(){
    this.agentName = element(by.tagName('pre'));
    this.chat;
    this.expected_AgentName= "Gecko";//"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36";
    this.scroll_link = element(by.css('a[href="#/scroll"]'));
    //element(by.css('.sidebar.sidebar-left.ng-scope div:nth-child(2) div a:nth-child(2)'));
    this.Toggle = element(by.css("a[href='#/toggle']"));
    this.Tab = element(by.css("a[href='#/tabs']"));
    //this.Tab = element(by.css("a[href='#/overlay']"));
    this.Overlay = element(by.css("a[href='#/overlay']"));
    this.Form = element(by.css("a[href='#/forms']"));
    this.DropDown = element(by.css("a[href='#/dropdown']"));
    this.Touch = element(by.css("a[href='#/touch']"));
    this.Swipe = element(by.css("a[href='#/swipe']"));
    this.Drag = element(by.css("a[href='#/drag']"));
    this.Drag2 = element(by.css("a[href='#/drag2']"));
    this.Drag3 = element(by.css("a[href='#/carousel']"));


    


};

module.exports = new HomePage();
