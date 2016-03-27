module.exports = {
  config: {
    files: {
      javascripts: {
        joinTo: {
          'vendor.js': /^(?!app)/,
          'app.js': /^app/
        }
      },
      stylesheets: {
        joinTo: {
          'vendor.css': /^(?!app)/,
          'app.css': /^app/
        }
      }
    },

    npm: {
      styles: {
        bootstrap: ['scss/bootstrap.scss']
      }
    }
  }
}
