import * as mongoose from 'mongoose';

const StudentsSchema = new mongoose.Schema({
    name: { type: String, required: false, maxlength: 25 },
    surname: { type: String, required: false, maxlength: 25 },
    email: { type: String, required: false, maxlength: 100 },
    phone: { type: String, required: false, maxlength: 12 },
    age: { type: Number, required: false },
    course: { type: String, required: false, maxlength: 10 },
    courseFormat: { type: String, required: false, maxlength: 15 },
    courseType: { type: String, required: false, maxlength: 100 },
    sum: { type: Number, required: false },
    alreadyPaid: { type: Number, required: false },
    createdAt: { type: Date, default: Date.now },
    utm: { type: String, required: false, maxlength: 100 },
    msg: { type: String, required: false, maxlength: 100 },
    status: { type: String, required: false, maxlength: 15 },
});

export default StudentsSchema;

