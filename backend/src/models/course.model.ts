import mongoose from 'mongoose';

export interface ICourse {
  title: string;
}

const courseSchema = new mongoose.Schema<ICourse>({
  title: {
    type: String,
    required: true,
  },
});

const Course = mongoose.model<ICourse>("Course", courseSchema);

export default Course;
