; 'use strict';
var PendulumDrawer = (function(){
  var pendulum, canvas, graphicContext, color, animationInterval, currentAngle, timeLeft, refreshTime,
      endedEvent = new CustomEvent('drawer-ended'),
      startedEvent = new CustomEvent('drawer-started');

  var pendulumDrawer = function(config) {
    pendulum = config.pendulum;
    canvas = config.canvas;
    graphicContext = config.graphicContext;
    color = config.color || 'blue';
    currentAngle = pendulum.getStartAngle();
    timeLeft = 0;
    animationInterval = 0;
    refreshTime = config.refreshTime || 50;
  };

  var draw = function(p) {
    pendulum = p || pendulum;

    graphicContext.moveTo(pendulum.getPosition().origin.x, 0);
    graphicContext.lineTo(pendulum.getPosition().current.x, pendulum.getPosition().current.y);
    graphicContext.stroke();

    graphicContext.beginPath();
    graphicContext.fillStyle = color;
    graphicContext.arc(pendulum.getPosition().current.x, pendulum.getPosition().current.y, pendulum.getBallRadius(), 0, 2 * Math.PI, 0);
    graphicContext.fill();
  };

  var start = function(p) {
    document.dispatchEvent(startedEvent);
    var self = this;
    pendulum = p || pendulum;

    animationInterval = setInterval(function() {
      self.startAnimation();
      timeLeft++;
    }, refreshTime);
  };

  var end = function() {
    document.dispatchEvent(endedEvent);
    clearInterval(animationInterval);
    timeLeft = 0;
  };

  var startAnimation = function() {
    if (pendulum.isDamped({timeLeft: timeLeft})) {
      document.dispatchEvent(endedEvent);
      clearInterval(animationInterval);
      timeLeft = 0;
    } else {
      currentAngle = pendulum.getCurrentAngle({
        timeLeft: timeLeft,
        angle: currentAngle
      });

      pendulum.changeAngle({
        timeLeft: timeLeft,
        angle: currentAngle
      });
    }

    graphicContext.clearRect(0, 0, canvas.width, canvas.height);
    graphicContext.beginPath();
    draw();
  };

  pendulumDrawer.prototype = {
    constructor: pendulumDrawer,
    draw: draw,
    startAnimation: startAnimation,
    start: start,
    end: end
  };

  return pendulumDrawer;
})();