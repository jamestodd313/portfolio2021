import mongoose from 'mongoose'
import Project from '../../../../../mongo/models/project'
// const Project = mongoose.model('Project')
export default async (req,res)=>{
    const projects = await Project.find()
    return res.status(200).json(projects)
}