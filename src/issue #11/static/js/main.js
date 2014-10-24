$(function() {
	var canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d');

  var pendulum = new Pendulum({
    position: {x: 300, y: 200},
    dampingFactor: 0.005,
    ballRadius: 15,
    startAngle: 90
  });

  var drawer = new PendulumDrawer({
    pendulum: pendulum,
    canvas: canvas,
    graphicContext: context,
    color: '#9b59b6',
    refreshTime: 30
  });

  drawer.draw();

  $('.b-form').bind('submit', function(event) {
    event.preventDefault();
    var angle = parseFloat($('.b-input').val());

    if ((angle > 0 && angle <= 90) || (angle < 0 && angle >= -90)) {
      $('.b-button[type=reset]').prop('disabled', false);
      $('.b-button[type=submit]').prop('disabled', true);
      $('.b-input').prop('disabled', true);

      pendulum.setStartAngle(angle);
      drawer.start();
    } else {
      alert('Угол должен принимать значения: [-90; 0) U (0; 90]');
    }
  });

  $('.b-form').bind('reset', function(event) {
    $('.b-button[type=reset]').prop('disabled', true);
    $('.b-input').prop('disabled', false);
    $('.b-button[type=submit]').prop('disabled', false);
    event.preventDefault();

    drawer.end();
  });

  $(document).on('drawer-ended', function(event) {
    event.preventDefault();
    $('.b-button[type=reset]').prop('disabled', true);
    $('.b-button[type=submit]').prop('disabled', false);
    $('.b-input').prop('disabled', false);
  });
});