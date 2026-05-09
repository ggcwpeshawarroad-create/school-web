import mongoose, { Schema, Document } from 'mongoose';

export interface INotice extends Document {
  title: string;
  content: string;
  date: Date;
  priority: 'normal' | 'important' | 'urgent';
  attachment?: string;
  image?: string;
  isActive: boolean;
  createdAt: Date;
}

const NoticeSchema = new Schema<INotice>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
    priority: { type: String, enum: ['normal', 'important', 'urgent'], default: 'normal' },
    attachment: { type: String, default: '' },
    image: { type: String, default: '' },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Notice || mongoose.model<INotice>('Notice', NoticeSchema);
