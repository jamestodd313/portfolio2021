import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    type: String,
    builtWith: [String],
    demo: String,
    repo: String,
    coverImage: String,
    mockupImage: String
})


try {
    module.exports = mongoose.model('Project')
} catch (error) {
    module.exports = mongoose.model('Project', ProjectSchema)
}