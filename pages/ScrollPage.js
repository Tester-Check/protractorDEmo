/**
 * Created by sowmya on 3/19/16.
 */
var ScrollPage = function () {
    this.ItemList = element.all(by.repeater('item in scrollItems'));
    //this.ItemList = browser.findElements(by.xpath("a//[@ng-repeat='item in scrollItems']"));
    this.SearchBar = element(by.css("i[class='fa fa-search']"));
    this.SearchField = element(by.css("input[type='search']"));

};

module.exports = new ScrollPage();