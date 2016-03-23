/**
 * Created by admin on 3/21/2016.
 */
var OverlayPage = function(){
    this.Show_Modal = element(by.css("a[ui-turn-on='modal1']"));
    this.modalContentBody = element(by.css('div.modal-body p.ng-binding'));
    this.Save_Changes = element(by.buttonText('Save changes'));

    this.Show_Overlay = element(by.css("a[ui-turn-on='modal2']"));
    this.Close_button = element(by.buttonText('Close'));

};
module.exports = new OverlayPage();