const express = require('express');
const router = express.Router();

const {
    createStudent,
    getStudent,
    updateStudent,
    deleteStudent
} = require('../repository/crud');

router.route('/:id').post(createStudent).patch(updateStudent).delete(deleteStudent);

router.get('/',getStudent)
router.post('/',createStudent);
router.patch('/:id',updateStudent);
router.delete('/:id',deleteStudent);

module.exports = router;