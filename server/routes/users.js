import express from 'express'
import { getUsers, createUsers, auth, setPassword} from '../controllers/user.js';

const router =express.Router();

router.post('/auth', auth);
router.get('/users', getUsers);
router.post('/add', createUsers);
router.post('/set-password', setPassword);



export default router;  