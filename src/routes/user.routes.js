const { Router } = require('express');
const getAllUser = require('../controller/user.controller');
const router = Router();


router.get('/users', getAllUser)
