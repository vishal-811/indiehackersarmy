import express from 'express';

const router = express.Router();  // Use express.Router()

router.get('/', (req, res) => {
    return res.json("The server is running fine on a indie page, looking for something");
});

export default router;
