import { User } from "../models/user.model.js"

export const getAllUsers = async (req, res, next) => {
 try {
    const currentUserIsAdmin = req.auth.userId;
    const users = await User.find({clerkId: {$ne: currentUserIsAdmin}});
    res.status(200).json(users)
 } catch (error) {
    next(error)
 }
}