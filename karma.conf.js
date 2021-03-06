// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const CI = process.env['CI'] === 'true';

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular', 'viewport'],

    plugins: [
      require('karma-jasmine'),
      require('karma-viewport'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-spec-reporter')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, 'coverage'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
      combineBrowserReports: true,
      'report-config': {
        // all options available at: https://github.com/istanbuljs/istanbuljs/blob/73c25ce79f91010d1ff073aa6ff3fd01114f90db/packages/istanbul-reports/lib/html/index.js#L257-L261
        html: {
          // outputs the report in ./coverage/html
          subdir: 'html'
        }
      },
      thresholds: {
        emitWarning: true,
        global: {
          statements: 100,
          lines: 100,
          branches: 100,
          functions: 100
        },
        each: {
          statements: 100,
          lines: 100,
          branches: 100,
          functions: 100,
          overrides: {
            'baz/component/**/*.js': {
              statements: 98
            }
          }
        }
      },
      verbose: true
    },
    reporters: ['progress', 'spec', 'kjhtml', 'coverage'],
    specReporter: {
      maxLogLines: 5, // limit number of lines logged per test
      suppressErrorSummary: true, // do not print error summary
      suppressFailed: false, // do not print information about failed tests
      suppressPassed: false, // do not print information about passed tests
      suppressSkipped: true, // do not print information about skipped tests
      showSpecTiming: false, // print the time elapsed for each spec
      failFast: true // test would finish with error when a first fail occurs.
    },
    port: 9999,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [CI ? 'ChromeHeadlessNoSandbox' : 'Chrome'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    singleRun: CI,
    restartOnFileChange: true,
    viewport: {
      breakpoints: [
        {
          name: 'mobile',
          size: {
            width: 320,
            height: 480
          }
        },
        {
          name: 'tablet',
          size: {
            width: 768,
            height: 1024
          }
        },
        {
          name: 'screen',
          size: {
            width: 1024,
            height: 900
          }
        }
      ]
    }
  });
};