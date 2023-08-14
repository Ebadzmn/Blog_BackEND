const express = require('express');
const router = express.Router();

const{createBlog,getBlogs,getBlogById,updateBlog,deleteBlog} = require('../controller/BlogController');


router.post('/blogPost', createBlog);
router.get('/blogsGet', getBlogs);
router.get('/blogsGetID/:id', getBlogById);
router.post('/blogsUpdate/:id', updateBlog);
router.delete('/blogsDelete/:id', deleteBlog);





module.exports = router