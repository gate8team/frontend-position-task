; 'use strict';
var Pendulum = (function(){
  // position = { origin: {x, y}, current: {x, y} }
  var position, dampingFactor, ballRadius, startAngle, threadLength, gravity;

  var pendulum = function(config) {
    position = {
      origin: config.position,
      current: {
        x: config.position.x,
        y: config.position.y
      }
    };

    threadLength = config.position.y;
    dampingFactor = config.dampingFactor;
    ballRadius = config.ballRadius;
    startAngle = config.startAngle;
    gravity = 9.81;
  };

  var getPosition = function() {
    return position;
  };

  var getDampingFactor = function() {
    return dampingFactor;
  };

  var getBallRadius = function() {
    return ballRadius;
  };

  var getStartAngle = function() {
    return startAngle;
  };

  var setStartAngle = function(angle) {
    startAngle = angle;
  };

  var changeAngle = function(config) {
    // config = {timeLeft, angle}
    position.current.y = position.origin.y - ((position.origin.y - threadLength * Math.cos(startAngle * Math.PI / 180)) * Math.exp(-dampingFactor * config.timeLeft) * Math.pow(Math.cos(config.angle), 2));
    position.current.x = position.origin.x + threadLength * Math.sin(startAngle * Math.PI / 180) * Math.exp(-dampingFactor * config.timeLeft) * Math.cos(config.angle);
  };

  var getCurrentAngle = function(config) {
    return Math.sqrt( gravity / threadLength) * config.timeLeft + config.angle * Math.PI / 180;
  };

  var isDamped = function(config) {
    return (Math.abs(threadLength * Math.exp(-dampingFactor * config.timeLeft)) < 1);
  };

  pendulum.prototype = {
    constructor: pendulum,
    getPosition: getPosition,
    getDampingFactor: getDampingFactor,
    getBallRadius: getBallRadius,
    getStartAngle: getStartAngle,
    changeAngle: changeAngle,
    getCurrentAngle: getCurrentAngle,
    isDamped: isDamped,
    setStartAngle: setStartAngle
  };

  return pendulum;
})();