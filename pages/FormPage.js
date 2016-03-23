/**
 * Created by sowmya on 3/21/16.
 */
var FormPage = function(){
    this.Email_Field = element(by.model('email'));
    this.Password_Field = element(by.css("input[type='password']"));
    this.RememberME_switch = element(by.css("div.switch-handle"));
    this.Login_Button = element(by.buttonText('Login'));
    



};

module.exports = new FormPage();

