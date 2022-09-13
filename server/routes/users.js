import express from 'express'

import { getUsers, createUsers, auth } from '../controllers/user.js';

const router =express.Router();
 
router.get('/', getUsers);
router.post('/add', createUsers);
router.post('/update', createUsers);
router.post('/auth', auth);
   



export default router;