var beepy = require('./');

beepy().then(function(){
  return beepy(3);
});