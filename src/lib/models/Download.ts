import mongoose, { Schema, Document } from 'mongoose';

export interface IDownload extends Document {
  title: string;
  description: string;
  fileUrl: string;
  fileType: 'pdf' | 'word';
  isActive: boolean;
  order: number;
}

const DownloadSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  fileUrl: { type: String, required: true },
  fileType: { type: String, enum: ['pdf', 'word'], default: 'pdf' },
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.Download || mongoose.model<IDownload>('Download', DownloadSchema);
