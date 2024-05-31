import express from "express";
import {
  createUser,
  getUser,
  updateUser,
  getAllUsers,
  deleteUser,
  login,
  uploadProfilePicture,
  updateLessonDone,
  addImageAndGetUrl,
  addNoteToUser,
  addNextLessonToUser,
  addHomeworkToUser, 
  updatePassword,
  resetPassword,
} from "../controllers/userController.js";
import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
});

const userRouter = express.Router();

userRouter.post("/user/create", createUser);
userRouter.get("/user/:id", getUser);
userRouter.put("/user/:id", updateUser);
userRouter.get("/users/all", getAllUsers);
userRouter.delete("/user/delete", deleteUser);
userRouter.post("/user/login", login);
userRouter.get("/user/reset-password", resetPassword);
userRouter.post("/user/change-password", updatePassword);
userRouter.post(
  "/user/upload-photo",
  upload.single("fileName"),
  uploadProfilePicture
);
userRouter.post("/user/update-lesson", updateLessonDone);
userRouter.post("/user/add-image", addImageAndGetUrl);
userRouter.post("/user/add-note", addNoteToUser);
userRouter.post("/user/add-lesson", addNextLessonToUser);
userRouter.post("/user/give-homework", addHomeworkToUser);

export default userRouter;
