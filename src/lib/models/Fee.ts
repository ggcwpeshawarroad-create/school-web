import mongoose, { Schema, Document } from 'mongoose';

export interface IFee extends Document {
  title: string;
  pdfUrl: string;
  isActive: boolean;
  order: number;
}

const FeeSchema: Schema = new Schema({
  title: { type: String, required: true },
  pdfUrl: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.Fee || mongoose.model<IFee>('Fee', FeeSchema);
