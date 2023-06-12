const express = require('express');
const router = express.Router();
const postRouter = require('./post.routes');
const loginRouter = require('./login.routes');
const authROuter = require('./auth.routes');
const storyRouter = require('./stort.routes');

router.use(postRouter);
router.use(loginRouter);
router.use(authROuter);
router.use(storyRouter);

module.exports = router;
