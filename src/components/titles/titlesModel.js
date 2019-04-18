import mongoose from 'mongoose';
import timestamps from 'mongoose-timestamp';

const Schema = mongoose.Schema;
const TitleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  job_description: {
    type: String,
    required: true,
  },
  low_pay: {
    type: String,
    required: true,
  },
  high_pay: {
    type: String,
    required: true,
  }
});

TitleSchema.plugin(timestamps, {
  createdAt: {
    index: true,
  },
  updatedAt: {
    index: true,
  },
});

module.exports = mongoose.model('Title', TitleSchema);
