const mongoose = require('mongoose')

const ConnectDatabase = (connection_url) => {
  mongoose.connect(connection_url)
  console.log("database connected succssfully")
}
module.exports = { ConnectDatabase }
