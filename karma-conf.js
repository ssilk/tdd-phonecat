module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],

    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/phone-list/**/*.js',
      'app/phone-detail/**/*.js',
      'app/components/**/*.js',
      'app/app.js'
    ],

    frameworks: ['jasmine'],

    reporters: ['mocha']
  });
};
