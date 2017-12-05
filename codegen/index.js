require('babel-register');
const grabber = require('./grabber').default;
const queryableGenerator = require('./queryable-generator').default;

grabber(function(fileList){
  queryableGenerator(fileList, function() {
    console.log('done :)');
  })
});
