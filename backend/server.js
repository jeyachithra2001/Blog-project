const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const Blog = require("./src/models/blogSchema")
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000

dotenv.config()
const app = express()
app.use(cors({origin:[process.env.CLIENT_URL,"http://localhost:5173"]}))
app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err.message))

app.get("/api/blogs", async (req, res) => {
    try {
        const blogs = await Blog.find({})
        console.log(blogs)
        res.send(blogs)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.patch("/api/blogs/like/:id", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" })
        }
        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            { $inc: { likes: 1 } },
            { new: true }
        )
        res.json(updatedBlog)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.post("/api/blogs", async (req, res) => {
    const blog = new Blog({
        newTitle: req.body.newTitle,
        date: req.body.date,
        newContent: req.body.newContent,
        likes: req.body.likes
    })
    try {
        const newBlog = await blog.save()
        res.status(200).json(newBlog)
    } catch(error){
        res.status(400).json({message: error.message})
    }
})

app.listen(PORT, () => {
    console.log("Server running on port")
})