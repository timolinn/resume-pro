import mongoose from 'mongoose';
import timestamps from 'mongoose-timestamp';

const Schema = mongoose.Schema;
const DepartmentSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  manager: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
});

DepartmentSchema.plugin(timestamps, {
  createdAt: {
    index: true,
  },
  updatedAt: {
    index: true,
  },
});

module.exports = mongoose.model('Department', DepartmentSchema);
