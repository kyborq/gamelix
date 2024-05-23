import mongoose from 'mongoose';

export interface IStudent {
  name: string;
}

const studentSchema = new mongoose.Schema<IStudent>({
  name: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model<IStudent>("Student", studentSchema);

export default Student;
