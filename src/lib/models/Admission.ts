import mongoose, { Schema, Document } from 'mongoose';

export interface IAdmission extends Document {
  title: string;
  description: string;
  poster: string;
  isActive: boolean;
  order: number;
}

const AdmissionSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  poster: { type: String },
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.Admission || mongoose.model<IAdmission>('Admission', AdmissionSchema);
