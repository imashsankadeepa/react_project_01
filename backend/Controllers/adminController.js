const Teacher = require("../Model/admin");  // Import the Teacher model

// Get all teachers
const getAllTeachers = async (req, res, next) => {
    let teachers;
    
    try {
        teachers = await Teacher.find();  // Fetch all teachers
    } catch (err) {
        console.error(err);
    }

    if (!teachers) {
        return res.status(404).json({ message: "No teachers found" });
    }

    return res.status(200).json({ teachers });
};

// Add a new teacher
const addTeacher = async (req, res, next) => {
    const { firstName, lastName, title, subjectExpertise, email, phone, hireDate, qualifications, assignedClasses, profilePicture } = req.body;

    let teacher;

    try {
        teacher = new Teacher({ 
            firstName, 
            lastName, 
            title, 
            subjectExpertise, 
            email, 
            phone, 
            hireDate, 
            qualifications, 
            assignedClasses, 
            profilePicture 
        });
        await teacher.save();  // Save the new teacher
    } catch (err) {
        console.log(err);
    }

    if (!teacher) {
        return res.status(404).json({ message: "Unable to add teacher" });
    }

    return res.status(200).json({ teacher });
};

// Get teacher by ID
const getTeacherById = async (req, res, next) => {
    const id = req.params.id;

    let teacher;

    try {
        teacher = await Teacher.findById(id);  // Find teacher by ID
    } catch (err) {
        console.log(err);
    }

    if (!teacher) {
        return res.status(404).json({ message: "Teacher not found" });
    }

    return res.status(200).json({ teacher });
};

// Update teacher details
const updateTeacher = async (req, res, next) => {
    const id = req.params.id;
    const { firstName, lastName, title, subjectExpertise, email, phone, hireDate, qualifications, assignedClasses, profilePicture } = req.body;

    let teacher;

    try {
        teacher = await Teacher.findByIdAndUpdate(id, { 
            firstName, 
            lastName, 
            title, 
            subjectExpertise, 
            email, 
            phone, 
            hireDate, 
            qualifications, 
            assignedClasses, 
            profilePicture 
        });

        teacher = await teacher.save();  // Save the updated teacher details
    } catch (err) {
        console.log(err);
    }

    if (!teacher) {
        return res.status(404).json({ message: "Unable to update teacher details" });
    }

    return res.status(200).json({ teacher });
};

// Delete teacher details
const deleteTeacher = async (req, res, next) => {
    const id = req.params.id;

    try {
        const teacher = await Teacher.findByIdAndDelete(id);  // Delete teacher by ID

        if (!teacher) {
            return res.status(404).json({ message: "Teacher not found or unable to delete" });
        }

        return res.status(200).json({ message: "Teacher deleted successfully", teacher });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

exports.getAllTeachers = getAllTeachers;
exports.addTeacher = addTeacher;
exports.getTeacherById = getTeacherById;
exports.updateTeacher = updateTeacher;
exports.deleteTeacher = deleteTeacher;
