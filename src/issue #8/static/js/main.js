$(function() {
  var login = $('.b-input[name="login"]'),
      password = $('.b-input[name="password"]'),
      loginValue, passwordValue, errors;

  var colorizeErrors = function(errors) {
    (errors.login) ? login.addClass('i-error') : login.removeClass('i-error');
    (errors.password) ? password.addClass('i-error') : password.removeClass('i-error');
    (errors.login) ? (login.focus()) : ((errors.password) ? (password.focus()) : false);
  };

  var setErrors = function(value) {
    $('.b-errors').html(value);
  };

	$('.b-button').on('click', function() {
    loginValue = login.val();
    passwordValue = password.val();

    var isFormValidate = FormValidator.validateForm({
      login: loginValue,
      password: passwordValue
    });

    if (isFormValidate) {
      setErrors('');
      colorizeErrors({login: false, password: false});

      $.post('index.html', {
        login: loginValue,
        password: passwordValue
      }, function() {
        alert('Авторизация прошла успешно!');
      });

    } else {
      errors = FormValidator.getErrorList();
      colorizeErrors({login: (errors.login.length > 0), password: (errors.password.length > 0)});
      errors = errors.login.concat(errors.password);

      setErrors(errors.join('<br>'));
    }
	});
});