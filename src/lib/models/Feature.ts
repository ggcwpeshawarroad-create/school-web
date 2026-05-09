import mongoose, { Schema, Document } from 'mongoose';

export interface IFeature extends Document {
  title: string;
  description: string;
  icon: string;
  order: number;
  isActive: boolean;
}

const FeatureSchema = new Schema<IFeature>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, default: 'Star' },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Feature || mongoose.model<IFeature>('Feature', FeatureSchema);
