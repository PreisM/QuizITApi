const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    category: String,
    question: String,
    correct_answer: String,
    incorrect_answers: Array,
});

module.exports = mongoose.model('Posts', PostSchema);

// [{"category":"Science: Computers","type":"multiple","difficulty":"hard","question":"The Harvard architecture for micro-controllers added which additional bus?","correct_answer":"Instruction","incorrect_answers":["Address","Data","Control"]}