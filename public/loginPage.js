"use strict"
const user = new UserForm();
user.loginFormCallback = function(data) {
   ApiConnector.login(data, response => checkData(response));
}

user.registerFormCallback = function(data) {
    ApiConnector.register(data, response => checkData(response));
}

function checkData(response) {
    if (response.success == false) console.error(response.error);
    else location.reload();
}