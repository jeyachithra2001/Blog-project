const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const Blog = require("./src/models/blogSchema")

const app = express()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb://127.0.0.1:27017/blogDB")
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

app.listen(5000, () => {
    console.log("Server running on port")
})