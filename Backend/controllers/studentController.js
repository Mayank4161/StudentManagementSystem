// send data 
const Student = require('../models/studentSchema');
const createStudent= async (req,res)=>{
    try {
        const student = await Student.create(req.body)
        console.log('Student Created');
         return res.status(201).json(student)
         
         
    } catch (error) {
        return res.status(500).json(
            {message:error.message}
        )
    }

};
// fetch data 
const getStudent = async (req,res)=>{
    try {
        const students = await Student.find(); // FIXED
        console.log('Fetch All Success');
        return res.status(200).json(students);
        
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
// edit student data
const editStudentById=(req,res)=>{
    return res.status(200).send('Edit Student');
};
// delete student data 
const deleteStudentById=async (req,res)=>{
    try {
        await Student.findByIdAndDelete(req.params.id)
        console.log('Delete Sucess');
        
    return res.status(200).json({
        message: 'Student Deleted'
    });
    } catch (error) {
        return res.status(500).json(
            {message: error.message}
        )
    }
};

module.exports = {
    createStudent,
    getStudent,
    editStudentById,
    deleteStudentById,
}