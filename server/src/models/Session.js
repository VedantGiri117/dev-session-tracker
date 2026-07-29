import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: [true, 'Please add a session title'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    durationMinutes: {
      type: Number,
      required: [true, 'Please add session duration in minutes'],
    },
    category: {
      type: String,
      enum: ['Coding', 'Debugging', 'Learning', 'Planning'],
      default: 'Coding',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Session', sessionSchema);