const express = require('express');

const router = express.Router();

router.post('/login/', (req, res) => {
    return res.send({data: 'POST Login'});
});
router.post('/register/', (req, res) => {
    return res.send({data: 'POST Register'});
});

module.exports = router;