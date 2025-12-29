import express from "express";
import {getAllNotes, createNote, updateNote, deleteNote} from "../controllers/notesController.js";
const router = express.Router();
// the part of /api.notes is already included now so we dont have to write it for every api request cuz of what we did in server.js

router.get("/", getAllNotes);
//router.get("/:id", getNoteById);

router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;

// //first api lol
// app.get("/api/notes", (req, res) => {
//     res.status(200).send("you got 5 notes");
// });

// //say you wanna create something, then you will use the post request
// app.post("/api/notes", (req, res) => {
//     //create the notes
//     res.status(201).json({message: "note created successfully"});
// });

// app.put("/api/notes/:id", (req, res) => {
//     res.status(200).json({message: "note updated successfully"});
// });

// app.delete("/api/notes/:id", (req, res) => {
//     res.status(200).json({message: "note deleted successfully"});
// });
