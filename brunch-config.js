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
        joinTo: 'app.css'
      }
    }
  }
}
