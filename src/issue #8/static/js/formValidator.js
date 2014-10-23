var FormValidator = (function(){
  var validationInstance = SimpleValidator;

  var validateForm = function(o) {
    var loginCorrect = false,
        passwordCorrect = false;

    validationInstance.clearErrors();
    loginCorrect = validationInstance.loginChecker(o.login);
    passwordCorrect = validationInstance.passwordChecker(o.password);

    return (loginCorrect && passwordCorrect);
  };

  var getErrorList = function() {
    return validationInstance.errors;
  };

  return {
    getErrorList: getErrorList,
    validateForm: validateForm
  };
})();