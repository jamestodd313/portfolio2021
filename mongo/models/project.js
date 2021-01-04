import mongoose from 'mongoose'

const ProjectSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: String,
    description: String,
    type: String,
    builtWith: [String],
    demo: String,
    repo: String,
    coverImage: String,
    mockupImage: String
})

// const Project = mongoose.model("Project", ProjectSchema)

module.exports = mongoose.model('Project', ProjectSchema)