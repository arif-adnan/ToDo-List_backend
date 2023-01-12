const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile-controller');
const loginController = require('../controllers/login-controller');
const authVerifyMiddleware = require('../middlewares/auth-verify-middleware');
const  todoListController = require('../controllers/todo-list-controller');

router.post("/CreateProfile", profileController.CreateProfile);

router.post("/UserLogin", loginController.UserLogin);

router.get("/SelectProfile", authVerifyMiddleware, profileController.SelectProfile);
router.post("/UpdateProfile",authVerifyMiddleware,profileController.UpdateProfile);

router.post("/CreateToDo",authVerifyMiddleware,todoListController.CreateToDo);
router.get("/SelectToDo",authVerifyMiddleware,todoListController.SelectToDo);
router.post("/UpdateToDo",authVerifyMiddleware,todoListController.UpdateToDo);
router.post("/UpdateStatusToDo",authVerifyMiddleware,todoListController.UpdateStatusToDo);
router.post("/RemoveToDo",authVerifyMiddleware,todoListController.RemoveToDo);
router.post("/SelectToDoByStatus",authVerifyMiddleware,todoListController.SelectToDoByStatus);
router.post("/SelectToDoByDate",authVerifyMiddleware,todoListController.SelectToDoByDate);

module.exports=router;