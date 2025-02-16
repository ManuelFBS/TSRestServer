import { Router } from 'express';
import { createNewUser, getUserByID, getUsers, updateUser, deleteUser, } from '../controllers/users.controller.js';
const userRouter = Router();
userRouter.post('/user/new', createNewUser);
userRouter.get('/', getUsers);
userRouter.get('/user/:id', getUserByID);
userRouter.put('/user/edit/:id', updateUser);
userRouter.delete('/user/delete/:id', deleteUser);
export { userRouter };
//# sourceMappingURL=user.routes.js.map