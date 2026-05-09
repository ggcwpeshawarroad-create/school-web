import mongoose, { Schema, Document } from 'mongoose';

export interface IDynamicPage extends Document {
  slug: string;
  title: string;
  description?: string;
  image?: string;
  content: string;
  isActive: boolean;
}

const DynamicPageSchema: Schema = new Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  content: { type: String, required: true },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.models.DynamicPage || mongoose.model<IDynamicPage>('DynamicPage', DynamicPageSchema);
