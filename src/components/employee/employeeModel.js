import mongoose from 'mongoose';
import timestamps from 'mongoose-timestamp';

const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    middle_initial: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    postal_code: {
        type: String,
        required: true,
    },
    office_phone: {
        type: String,
        required: true,
    },
    office_location: {
        type: String,
        required: true,
    },
    manager_id: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    vacation_hours: {
        type: Number,
        required: true
    },
    sick_leave_hours: {
        type: Number,
        required: true
    }
});

EmployeeSchema.plugin(timestamps, {
    createdAt: {
        index: true,
    },
    updatedAt: {
        index: true,
    },
});

module.exports = mongoose.model('Employee', EmployeeSchema);