const User = require("../Model/UserModel");

//display part
const getAllUsers = async (req , res , next) => {
    
    let Users;
//get all users
    try{
        users = await User.find();

    }catch(err){

        console.error(err);
    }
// not found

    if(!users){
        return res.status(404).json({message:"user not found"});
    }
//display all users

    return res.status(200).json({ users});


};

//data insert
const addUsers = async (req,res,next) => {

    const {title,description,subject,dueDate,assignedBy,fileUrl} = req.body;

    let users;

    try{
        users = new User({title,description,subject,dueDate,assignedBy,fileUrl});
        await users.save();
    }catch(err){
        console.log(err);
    }

    //not insert
    if(!users){
        return res.status(404).json({message: "unble to add user"});
    }
    return res.status(200).json({users})

};

//get by id
    const getById = async(req,res,next) =>{
        const id = req.params.id;

        let users;

        try{
            users = await User.findById(id);
        }catch (err){

            console.log(err);
        }

        // not user found
        if(!users){
            return res.status(404).json({message: "user not found"});
        }
        return res.status(200).json({users})
    

    };

 //update user details
 
    const updateUser = async(req,res,next) =>{

        const id = req.params.id;
        const {title,description,subject,dueDate,assignedBy,fileUrl} = req.body;

        let users;

        try{
            users = await User.findByIdAndUpdate(id,
                {title,description,subject,dueDate,assignedBy,fileUrl});

                users = await users.save();  
        }catch(err){

            console.log(err);
        }

        
        // not update user detils
        if(!users){
            return res.status(404).json({message: "not update user detils"});
        }
        return res.status(200).json({users})

    };

 //delete user detils
 const deleteUser = async (req, res, next) => {
    const id = req.params.id;

    try {
        const users = await User.findByIdAndDelete(id);

        // Check if user is found and deleted
        if (!users) {
            return res.status(404).json({ message: "User not found or unable to delete" });
        }

        // Send the deleted user as a response
        return res.status(200).json({ message: "User deleted successfully", users });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

exports.getAllUsers =getAllUsers;
exports.addUsers =addUsers;
exports.getById =getById;
exports.updateUser =updateUser;
exports.deleteUser=deleteUser;