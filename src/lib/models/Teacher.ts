import mongoose, { Schema, Document } from 'mongoose';

export interface ITeacher extends Document {
  name: string;
  role: string;
  subject: string;
  photo: string;
  bio: string;
  qualifications: string[];
  experience: number;
  classes: string;
  email: string;
  isActive: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const TeacherSchema = new Schema<ITeacher>(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    subject: { type: String, required: true },
    photo: { type: String, default: '' },
    bio: { type: String, default: '' },
    qualifications: [{ type: String }],
    experience: { type: Number, default: 0 },
    classes: { type: String, default: '' },
    email: { type: String, default: '' },
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Teacher || mongoose.model<ITeacher>('Teacher', TeacherSchema);
