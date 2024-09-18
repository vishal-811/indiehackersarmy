import express from 'express';
import Indie from './Indie.js';  // Ensure the file extension is correct

const router = express.Router();

router.use('/indie', Indie);  // Use router.use to mount the Indie router

export default router;
