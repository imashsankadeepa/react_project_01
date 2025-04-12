const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Teacher Schema
const teacherSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true  // e.g., Dr., Mr., Ms., etc.
    },
    subjectExpertise: {
        type: String,
        required: true  // Subject that the teacher teaches
    },
    email: {
        type: String,
        required: true,
        unique: true  // Ensure that each teacher has a unique email
    },
    phone: {
        type: String,
        required: true  // Teacher's contact number
    },
    hireDate: {
        type: Date,
        required: true  // The date the teacher was hired
    },
    qualifications: {
        type: String,
        required: true  // Teacher's qualifications
    },
    assignedClasses: {
        type: [String],  // List of classes the teacher is assigned to
        required: true
    },
    profilePicture: {
        type: String,  // URL to teacher's profile picture
        required: false
    }
});

// Export the model to be used elsewhere in your application
module.exports = mongoose.model("admin", teacherSchema);
