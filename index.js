var exec = require('child_process').exec;
var path = require('path');

var beepOnce = function beepOnce(){
  return new Promise(function(resolve, reject){
    return exec('afplay ' + path.join(__dirname, 'marimba_c2.wav'))
      .on('exit', function(code, signal){
        if (code !== 0) {
          return reject(new Error("Unable to play beep. Code: " + code + ", signal: " + signal));
        }
        return resolve();
      });
  });
};

var wait = function(ms){
  return new Promise(function(resolve, reject){
    setTimeout(resolve, ms)
  });
};

/**
 * Plays a marima beep.
 * 
 * @param numTimes {number} The number of times to repeat. Defaults to 1
 * @param interval {number} how often to beep, in milliseconds. Defaults to 1000.
 * 
 * @return {Promise} resolves when the sounds are finished playing.
 */
exports.default = function beepy(numTimes, interval){
  numTimes = typeof numTimes === "number" ? numTimes : 1;
  interval = typeof interval === "number" ? interval : 1000;
  // map doesn't get called unless it's filled with something first.
  return Promise.all(new Array(numTimes).fill(0).map(function(_, i){
    return wait(i * interval)
      .then(beepOnce);
  }));
};

exports.__esModule = true;

module.exports = exports.default;