import express from 'express';
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from '../controllers/user.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/authentification', verifyToken, (req, res, next) => {
//   res.send('Hello user, you are logged in.');
// });

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send('Hello user, you are logged in and you can delete your account.');
// });

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('Hello admin, you are logged in and you can delete all account.');
// });

router.put('/:id', verifyUser, updateUser);
router.delete('/:id', verifyUser, deleteUser);
router.get('/:id', verifyAdmin, getUser);
router.get('/', verifyAdmin, getUsers);

export default router;
