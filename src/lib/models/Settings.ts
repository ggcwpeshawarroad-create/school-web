import mongoose, { Schema, Document } from 'mongoose';

export interface ISettings extends Document {
  schoolName: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  established: string;
  principalName: string;
  totalStudents: number;
  totalTeachers: number;
  passRate: number;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
  };
}

const SettingsSchema = new Schema<ISettings>(
  {
    schoolName: { type: String, default: 'Govt. Graduate College, Peshawar Road, Rawalpindi ' },
    tagline: { type: String, default: 'Excellence in Higher Education' },
    address: { type: String, default: 'Peshawar Road, Rawalpindi , Punjab, Pakistan' },
    phone: { type: String, default: '051-9334301' },
    email: { type: String, default: 'gcw.peshawar.r.pindi@gmail.com' },
    established: { type: String, default: '1995' },
    principalName: { type: String, default: 'Mr. Ahmad Khan' },
    totalStudents: { type: Number, default: 1200 },
    totalTeachers: { type: Number, default: 65 },
    passRate: { type: Number, default: 98 },
    socialLinks: {
      facebook: { type: String, default: '' },
      twitter: { type: String, default: '' },
      instagram: { type: String, default: '' },
      youtube: { type: String, default: '' },
    },
  },
  { timestamps: true }
);

export default mongoose.models.Settings || mongoose.model<ISettings>('Settings', SettingsSchema);
