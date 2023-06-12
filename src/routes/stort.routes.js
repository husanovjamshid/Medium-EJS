const { Router } = require('express');
const { getStory } = require('../controller/story.controller');
const router = Router();

router.get('/newStory', getStory);

module.exports = router;
