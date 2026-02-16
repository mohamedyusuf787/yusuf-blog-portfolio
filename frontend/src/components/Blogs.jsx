import React, { useEffect } from 'react'
import { useState } from 'react';
import auth from "../config/firebase"
import axios from "axios"
import Footer from './common/Footer';
function Blogs() {

    const [blogs, setBlogs] = useState([]);
    const [admin,setAdmin]=useState(false);

    // it call only once when page refresh

useEffect(()=>{
    window.scrollTo(0,0);
},[])

    useEffect(() => {
        auth.onAuthStateChanged((user)=>{
            if(user){
                if(user.uid === "04uyCr7i3wcz4FwRs8sYzfKPL0w2"){
                    setAdmin(true)
                    console.log("you are admin")
                    console.log(blogs)
                }
                else{
                    setAdmin(false)
                    console.log("Not an admin")
                }
            }
        })

        axios.get("https://yusuf-blog-portfolio.onrender.com/api/blogs").then((res) => {
            console.log(res.data)
            setBlogs(res.data)
        }).catch(() => {
            console.log("Error fetching data")
        })
    }, [blogs])


    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');


    const handleLike = async (blog_id) => {
        try {
            const response = await axios.patch(`https://yusuf-blog-portfolio.onrender.com/api/blogs/like/${blog_id}`);
            // After successfully updating the likes count in the backend, fetch the updated list of blogs
            if (response.status === 200) {
                axios.get("https://yusuf-blog-portfolio.onrender.com/api/blogs")  //axios return promise so we put .then and .catch
                .then((res) => {
                    console.log(res.data)
                    setBlogs(res.data)
                })
                .catch(() => {
                    console.log("Error fetching data")
                })
            }
        } catch (error) {
            console.error('Error liking the blog post:', error);
        }
    };

    const handleNewBlogSubmit = (event) => {
        event.preventDefault(); // Prevent form from refreshing the page
        const today = new Date();
        const date = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });


        const likes = 0
        axios.post("https://yusuf-blog-portfolio.onrender.com/api/blogs", { newTitle, date, newContent, likes }).then((res) => {
            console.log(res.data)

            axios.get("https://yusuf-blog-portfolio.onrender.com/api/blogs").then((res) => {
                console.log(res.data)
                setBlogs(res.data)
            }).catch(() => {
                console.log("Error fetching data")
            })

        });




        setNewTitle('');
        setNewContent('');
    };

    return (
        <div className="blog-section pt-14">
            <div className="blog-headings flex flex-col gap-3 items-center  mb-14 px-4">
            <h2 className="text-center text-5xl font-bold border text-white border-red-600">Latest  <span className='text-orange-400 text-center'>Blogs</span> 📚</h2>
            <p className='text-gray-400 text-center'>Sharing my learnings, experiments, and insights from building modern web applications.</p>
</div>
            {/* Blog creation form */}
            {admin?
            <div className="blog-creation-form mb-8" style={{ width: "80%", margin: "auto" }}>
                <form onSubmit={handleNewBlogSubmit} className="flex flex-col gap-4 items-center w-full">
                    <input
                        type="text"
                        placeholder="Blog Title"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="p-2 border rounded  w-full"
                        required
                    />
                    <textarea
                        placeholder="Blog Content"
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        className="p-2 border rounded  w-full"
                        rows="4"
                        required
                    />
                    <button type="submit" className="button-style  w-96">
                        Add Blog
                    </button>
                </form>
            </div>:""}

            <div className="blogs-container grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto my-10 px-4">
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

            <Footer/>
        </div>
    );
}

export default Blogs