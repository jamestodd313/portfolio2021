import mongoose from 'mongoose'
import dbConnect from '../../../../../mongo/dbConnect'
// import Page from '../../../../../mongo/models/page'
const Page = mongoose.model('Page')
dbConnect()
export default async(req, res)=> {
    try{
        let pageData = await Page.find({ page: req.query.page })
        if(pageData.length > 0) return res.status(200).json(pageData)
        else return res.status(404).json({message: "not found"})
    }catch{
        return res.status(500).send('wat')
    }

}