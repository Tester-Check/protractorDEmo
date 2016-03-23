/**
 * Created by admin on 3/20/2016.
 */
var TogglePage = function(){
    this.Toggle_button = element(by.css('a[ui-toggle]'));
    this.TurnOn = element(by.css("a[ui-turn-on='lightbulb']"));
    this.TurnOff = element(by.css("hjhk"));
    //this.LightBulbStatus = element(by.css("hjhjkh")).getAttribute('class');
    this.LightBulb = element(by.css("#lightbulb"));
    this.LightbulbStatus = function() {
        return element(by.css("#lightbulb")).getAttribute('class');
    }


};
module.exports = new TogglePage();

