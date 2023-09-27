import e from "express"
import express from "express"
const app = express()
const port = 3000
const ADMINS=[]
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send(ADMINS)
})

app.post('/admin/signup', (req, res) => {   
    const admin = req.body
    const alreadyExist=ADMINS.find(user=>user.username===admin.username)
    if(alreadyExist){
    res.status(409).json({message:"Admin with this username already exists"})
    }
    else{
    ADMINS.push(admin)
    res.status(201).json({admin,message:"Admin created successfully"})
    }
})

app.post('/admin/signin', (req, res) => {

    const admin = req.body
    const ifUserExists = ADMINS.find(user=>user.username===admin.username && user.password===admin.password)
    if (ifUserExists){
            res.status(200).json({admin,message:"Login Successful"})
    }
    else{
        res.status(200).json({admin,message:"User does not exist"})
    }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})