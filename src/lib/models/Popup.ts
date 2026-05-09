import mongoose, { Schema, Document } from 'mongoose';

export interface IPopup extends Document {
  title: string;
  description: string;
  image: string;
  isActive: boolean;
  order: number;
}

const PopupSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.Popup || mongoose.model<IPopup>('Popup', PopupSchema);
