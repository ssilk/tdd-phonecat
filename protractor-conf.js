exports.config = {
  directConnect: true,

  specs: [
    'spec/**/*_spec.js'
  ],

  capabilities: {
    browserName: 'chrome'
  },

  baseUrl: 'http://localhost:8008',

  rootElement: 'html',

  getPageTimeout: 10000,

  allScriptsTimeout: 11000,

  framework: 'jasmine',

  jasmineNodeOpts: {
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000
  }
}
