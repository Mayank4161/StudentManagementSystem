const express = require('express');
const { getStudent, createStudent, editStudentById, deleteStudentById } = require('../controllers/studentController');

const studentRouter= express.Router();

studentRouter.get('/',getStudent);

studentRouter.post('/',createStudent);

studentRouter.put('/:id',editStudentById);

studentRouter.delete('/:id', deleteStudentById);

module.exports=studentRouter;