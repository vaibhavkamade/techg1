const Blog = require("../models/blog-model");

const blogs = async (req, res) =>{
    try {
        const blogs = await Blog.find().lean();
        const transformedBlogs = blogs.map(blog => ({
            ...blog,
            id: blog._id,
            _id: undefined,  // Remove the _id field
        }));
        res.json({ success: true, msg: transformedBlogs });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// const getBlogById = async (req, res) => {
//     try {
//         const response = await Blog.findById(req.params.id);
//         if (!response) {
//             return res.status(404).json({ success: false, msg: "Blog not found" });
//         }
//         res.status(200).json({msg:response});
//     } catch (error) {
//         console.log(`single blog: ${error}`);
//     }
// };
module.exports = blogs;
// module.exports = {blogs, getBlogById};