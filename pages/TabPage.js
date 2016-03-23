/**
 * Created by admin on 3/20/2016.
 */
var TabPage = function(){
    this.Tab2 = element(by.css("li a[ui-set=\"{'activeTab': 2}\"]"));
    this.Tab2_indicator = element(by.css("a[ui-set=\"{'activeTab': 2}\"][class*='btn btn-default']"));
    //element(by.css("a[ui-set=\"{'activeTab': 2}\"][class*='btn btn-default']"));
    //element(by.css("a[ui-set*='2'][class*='btn btn-default']"));





};
module.exports = new TabPage();

