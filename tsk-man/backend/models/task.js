import mongoose from 'mongoose';

const { Schema } = mongoose;

const toDoSchema = new Schema({
    name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxLength: [20, "name can't be more than 20 characters long"],
  },
    completed: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model("ToDo", toDoSchema);