import mongoose from 'mongoose'
import Project from '../../../../../mongo/models/project'
// const Project = mongoose.model('Project')

export default async (req, res)=>{
    try{
        const proj = await Project.find({slug: req.query.slug})
        return res.status(200).json(proj[0])
    }catch(e){
        return res.status(500).json({error: e})
    }

}