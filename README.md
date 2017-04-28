beepy
====

Play a marimba beep.

## Example

```js
var beepy = require('beepy');
beepy();

// beep 3 times
beepy(3);

// Repeats the beep 5 times, waiting 1000ms between each beep
beepy(5, 1000);

// Beep returns a promise that you can chain off of.
beep().then(function(){
  return doStuff();
})
```

## Installation

```
npm install beepy
```