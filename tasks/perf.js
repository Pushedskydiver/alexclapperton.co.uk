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
          visualCompvare: data.performance.visualCompvare
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
          if (!data.data.compvareTime) {
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

  gulp.task('psi:mobile', function () {
    data.performance.urls.forEach(function (url) {
      return psi(url, {
        key: data.performance.psiAPIKey,
        locale: 'en_GB',
        strategy: 'mobile'
      }).then(function (data) {
        gutil.log(gutil.colors.blue(`Testing ${url} on mobile`))

        var speedScore = data.ruleGroups.SPEED.score
        var color = returnColour(speedScore)
        gutil.log(gutil.colors[color](`Speed score: ${speedScore}`))

        var usabilityScore = data.ruleGroups.USABILITY.score
        color = returnColour(usabilityScore)
        gutil.log(gutil.colors[color](`Usability score: ${usabilityScore}`))

        if (speedScore < 60 || usabilityScore < 60) {
          gutil.log(gutil.colors.red(`You seriously need to do some perf improvements…`))
          process.exit(1)
        }
      })
    })
  })

  gulp.task('psi:desktop', function () {
    data.performance.urls.forEach(function (url) {
      return psi(url, {
        key: data.performance.psiAPIKey,
        locale: 'en_GB',
        strategy: 'desktop'
      }).then(function (data) {
        gutil.log(gutil.colors.blue(`Testing ${url} on desktop`))

        var score = data.ruleGroups.SPEED.score
        var color = returnColour(score)

        gutil.log(gutil.colors[color](`Speed score: ${score}`))

        if (score < 60) {
          gutil.log(gutil.colors.red(`You seriously need to do some perf improvements…`))
          process.exit(1)
        }
      })
    })
  })
}
