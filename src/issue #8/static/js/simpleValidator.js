// Fixes for trim function
if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  }
}

var  SimpleValidator = (function(){
  var messages = {
    login: {
      required: 'Login required',
      incorrect: 'Please, use correct login charset (login can start with alpha, include numbers and "-" sign)'
    },
    password: {
      required: 'Password required'
    }
  },
    errors = {
      login: [],
      password: []
    };

  var isEmpty = function(value) {
    return !(value.trim());
  };

  var isLoginCorrect = function(value) {
    return (/^[a-zA-Z](.[a-zA-Z0-9_-]*)$/).test(value.trim());
  };

  var loginChecker = function(login) {
    var isEmpty = this.isEmpty(login),
        isIncorrect = !(this.isLoginCorrect(login));

    isEmpty && this.errors.login.push(this.messages.login.required);
    isIncorrect && this.errors.login.push(this.messages.login.incorrect);

    return (!isIncorrect && !isEmpty);
  };

  var passwordChecker = function(password) {
    var isEmpty = this.isEmpty(password);
    isEmpty && this.errors.password.push(this.messages.password.required);

    return (!isEmpty);
  };

  var clearErrors = function() {
    this.errors = {
      login: [],
      password: []
    };
  };

  return {
    messages: messages,
    errors: errors,
    loginChecker: loginChecker,
    passwordChecker: passwordChecker,
    isEmpty: isEmpty,
    isLoginCorrect: isLoginCorrect,
    clearErrors: clearErrors
  };
})();

