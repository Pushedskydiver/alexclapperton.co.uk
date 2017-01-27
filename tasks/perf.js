/**
 * @file perf.js - Monitor performance budget with Gulp task
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

var config = require('../config'),
    Webpagetest = require('webpagetest'),
    psi = require('psi'),
    gutil = require('gulp-util'),
    plugins = require('gulp-load-plugins')();


module.exports = function (gulp, data, argv) {
  gulp.task('webpagetest', function () {
    var wpt = new Webpagetest('https://www.webpagetest.org', data.performance.wptAPIKey)
    var parameters = {
      'disableHTTPHeaders': true,
      'private': true,
      'video': false,
      'location': data.performance.parameters.location,
      'login': 'admin',
      'password': 'password'
    }
    var testSpecs = {
      runs: {
        1: {
          firstView: {
            SpeedIndex: data.performance.speedIndex
          }
        }
      },
      median: {
        firstView: {
          bytesIn: data.performance.bytesIn,
          visualComplete: data.performance.visualComplete
        }
      }
    }

    return wpt.runTest(data.performance.urls[0], parameters, function (err, data) {
      if (err) {
        gutil.log(gutil.colors.red(err))
        return
      }

      var testID = data.data.testId
      var checkStatus = function () {
        return wpt.getTestStatus(testID, function (err, data) {
          if (err) {
            gutil.log(gutil.colors.red(err))
            return
          }

          gutil.log(gutil.colors.blue(`Status for ${testID}: ${data.data.statusText}`))
          if (!data.data.completeTime) {
            return setTimeout(checkStatus, 5000)
          } else {
            return wpt.getTestResults(testID, {
              specs: testSpecs
            }, function (err, data) {
              gutil.log(gutil.colors.blue(`Finished test at http://www.webpagetest.org/result/${testID}/`))

              if (err > 0) {
                return process.exit(1)
              }
            })
          }
        })
      }
      return checkStatus()
    })
  })

  function returnColour (score) {
    var colour = 'green'

    if (score < 80) {
      colour = 'yellow'
    }

    if (score < 65) {
      colour = 'red'
    }

    return colour
  }
}
