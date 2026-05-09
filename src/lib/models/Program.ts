import mongoose, { Schema, Document } from 'mongoose';

export interface IProgram extends Document {
  title: string;
  shortDesc?: string;
  image?: string;
  department?: string;
  duration?: string;
  eligibility?: string;
  description?: string;
  isActive: boolean;
  order: number;
}

const ProgramSchema: Schema = new Schema({
  title: { type: String, required: true },
  shortDesc: { type: String },
  image: { type: String },
  department: { type: String },
  duration: { type: String },
  eligibility: { type: String },
  description: { type: String },
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.Program || mongoose.model<IProgram>('Program', ProgramSchema);
