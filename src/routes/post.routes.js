const  express = require('express');
const { renderPosts, createPosts } = require('../controller/post.controller');
const { upload } = require('../utils/multer');

const  router = express.Router();

router.get('/', renderPosts);
router.post('/post', upload.single('image'), createPosts)

module.exports = router;
