import mongoose from 'mongoose';
import timestamps from 'mongoose-timestamp';

const Schema = mongoose.Schema;
const JobHstorySchema = new Schema({
  title: {
    type: Schema.Types.ObjectId,
    ref: 'Title',
    required: true,
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: 'Department',
    required: true,
  },
  pay: {
    type: String,
    required: true,
  },
});

JobHstorySchema.plugin(timestamps, {
  createdAt: {
    index: true,
  },
  updatedAt: {
    index: true,
  },
});

module.exports = mongoose.model('JobHistory', JobHstorySchema);
