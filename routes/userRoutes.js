const express = require('express');
const router = express.Router();
const { getUsers, addUser} = require('../controllers/userController');

router.get('/getusers', getUsers);
router.post('/adduser', addUser);

module.exports = router;