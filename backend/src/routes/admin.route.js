import { Router } from "express";
import { checkAdmin, createAlbum, createSong, deleteAlbum, deleteSong } from "../controller/admin.control.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import { requireAuth } from "@clerk/express";

const router = Router();


router.use(protectRoute,requireAdmin)
router.get("/check", checkAdmin )
router.post('/songs', createSong);
router.delete('/songs/:id', deleteSong);
router.post('/albums', createAlbum);
router.delete('/albums/:id', deleteAlbum);




export default router;