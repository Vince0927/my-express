const express = require('express');
const router = express.Router();



router.get('/specific', (req, res) => {
    res.send('This is the specific post route from another folder');
});



module.exports = router;