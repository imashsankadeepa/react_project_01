const express = require("express");
const router = express.Router();

// Import Teacher Model
const Teacher = require("../Model/admin");  // Use the Teacher model

// Import Teacher Controller
const TeacherController = require("../Controllers/adminControllers");  // Use the Teacher controller

// Define routes for teacher management
router.get("/", TeacherController.getAllTeachers);  // Get all teachers
router.post("/", TeacherController.addTeacher);  // Add a new teacher
router.get("/:id", TeacherController.getTeacherById);  // Get teacher by ID
router.put("/:id", TeacherController.updateTeacher);  // Update teacher details
router.delete("/:id", TeacherController.deleteTeacher);  // Delete teacher

// Export router
module.exports = router;
