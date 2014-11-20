module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],

    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/phone-list/**/*.js',
      'app/app.js'
    ],

    frameworks: ['jasmine'],

    reporters: ['mocha']
  });
};
