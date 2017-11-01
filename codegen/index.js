require('babel-register');
const grabber = require('./grabber').default;
const queryableGenerator = require('./queryable-generator').default;

queryableGenerator(function(){
  grabber(function(){
    console.log('done :)')
  })
});
