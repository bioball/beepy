var exec = require('child_process').exec;
var path = require('path')

module.exports = function beep(){
  exec('afplay ' + path.join(__dirname, 'marimba_c2.wav'));
};