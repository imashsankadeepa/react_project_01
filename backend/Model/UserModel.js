const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({ 
  
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,  
        required: true
    },
    assignedBy: {
        type: String,  // Teacher's Name
        required: true
    },
    fileUrl: {
        type: String,  // If an assignment document is uploaded
        required: true
    },
 }); 

module.exports = mongoose.model(
    "UserModel",  //file name
    userSchema // function name
)