import mongoose from 'mongoose'
const PageSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    page: String,

}, {strict: false})

module.exports = mongoose.model('Page', PageSchema)