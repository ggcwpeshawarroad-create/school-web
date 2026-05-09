import mongoose, { Schema, Document } from 'mongoose';

export interface IGallery extends Document {
  caption: string;
  imageUrl: string;
  category: string;
  date: Date;
}

const GallerySchema = new Schema<IGallery>(
  {
    caption: { type: String, required: true },
    imageUrl: { type: String, required: true },
    category: { type: String, default: 'General' },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.Gallery || mongoose.model<IGallery>('Gallery', GallerySchema);
