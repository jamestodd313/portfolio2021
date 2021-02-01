import mongoose from 'mongoose'
const PageSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    page: String,

}, {strict: false})

try {
  module.exports = mongoose.model('Page')
} catch (error) {
  module.exports = mongoose.model('Page', PageSchema)
}
