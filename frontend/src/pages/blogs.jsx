import { useEffect } from "react"
import { useState } from "react"
import Footer from "../components/footer"
import auth from "../config"
import api from "../api"

function Blogs() {

    const [blogs, setBlogs] = useState([])
    const [newTitle, setNewtitle] = useState("")
    const [newContent, setNewcontent] = useState("")
    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchBlogs = async () => {
            await api.get("/api/blogs")
            .then((res) => {
                console.log(res.data)
                setBlogs(res.data)
            })
            .catch(() => {
                console.log("Error fetching data")
            })
        }

        auth.onAuthStateChanged(function (user) {
            if (user) {
                if (user.uid === "Ai7s6OMssVO9gARrsu63M0ZHFJV2") {
                    setAdmin(true)
                }
                else {
                    setAdmin(false)
                }
            }
        })
    }, [])

    const handleLike = async (blog_id) => {
        try {
            const response = await api.patch(`/api/blogs/like/${blog_id}`)
            if (response.status === 200) {
                api.get("/api/blogs")
                    .then((res) => {
                        console.log(res.data)
                        setBlogs(res.data)
                    }).catch(() => console.log("Error fetching data"))
            }
        } catch (error) {
            console.log("Error liking the blog post: ", error)
        }
    }

    const handleNewBlogSubmit = async (e) => {
        e.preventDefault()
        const today = new Date()
        const date = today.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })

        try {
            const response = await api.post("/api/blogs", { newTitle, date, newContent, likes: 0 })

            console.log("Blog added : ", response.data)

            await api.get("/api/blogs")
                .then((res) => {
                    console.log(res.data)
                    setBlogs(res.data)
                })
                .catch(() => console.log("Error fetching data"))

            setNewtitle("")
            setNewcontent("")
        } catch (error) {
            console.log("Error adding blog: ", error.response?.data || error.message)
        }
    }

    return (
        <div className="blog-section py-14">
            <h2 className="text-center text-5xl font-bold mb-14">Latest  <span className='text-orange-400'>Blogs</span> 📚</h2>


            {
                admin ? <div className="blog-creation-form mb-8" style={{ width: "80%", margin: "auto" }}>
                    <form onSubmit={handleNewBlogSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Blog Title"
                            value={newTitle}
                            onChange={(e) => setNewtitle(e.target.value)}
                            className="p-2 border rounded"
                            required
                        />
                        <textarea
                            placeholder="Blog Content"
                            value={newContent}
                            onChange={(e) => setNewcontent(e.target.value)}
                            className="p-2 border rounded"
                            rows="4"
                            required
                        />
                        <button type="submit" className="bg-orange-400 text-white p-2 rounded hover:bg-orange-600">
                            Add Blog
                        </button>
                    </form>
                </div>
                    :
                    ""
            }


            <div className="blogs-container grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4">
                {blogs.map((blog) => (
                    <div key={blog._id} className="blog-post mb-8 p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="blog-title font-semibold text-2xl text-gray-800 mb-3">{blog.newTitle}</h3>
                        <p className="blog-date text-gray-400 text-sm mb-4">{blog.date}</p>
                        <p className="blog-content text-gray-600 mb-4">{blog.newContent}</p>
                        <span className="text-blue-500 cursor-pointer" onClick={() => handleLike(blog._id)}>Like</span>
                        <span className="ml-2">{blog.likes} Likes</span>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Blogs