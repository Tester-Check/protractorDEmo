/**
 * Created by admin on 3/18/2016.
 */
var HomePage = function(){
    this.agentName = element(by.tagName('pre'));
    this.chat;
    this.expected_AgentName="Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36";
    this.scroll_link = element(by.css('a[href="#/scroll"]'));
    //element(by.css('.sidebar.sidebar-left.ng-scope div:nth-child(2) div a:nth-child(2)'));

};

module.exports = new HomePage();
