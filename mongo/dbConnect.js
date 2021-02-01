import mongoose from 'mongoose'
let connection = {}
const dbConnect = async()=> {
    if(connection.isConnected) return
    const db = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    connection.isConnected = db.connections[0].readyState
    const Page = require('./models/page')
    const Project = require('./models/project')
    
    console.log(connection.isConnected)
}
export default dbConnect
