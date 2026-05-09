import dbConnect from '@/lib/db';
import Feature from '@/lib/models/Feature';
import Teacher from '@/lib/models/Teacher';
import Notice from '@/lib/models/Notice';
import Download from '@/lib/models/Download';
import Admission from '@/lib/models/Admission';
import Popup from '@/lib/models/Popup';
import Department from '@/lib/models/Department';
import Settings from '@/lib/models/Settings';
import Gallery from '@/lib/models/Gallery';
import ModernHome from '@/components/public/ModernHome';

export const revalidate = 0;

async function getData() {
  await dbConnect();
  const [features, teachers, notices, downloads, admissions, popups, departments, settings, gallery] = await Promise.all([
    Feature.find({ isActive: true }).sort({ order: 1 }).lean(),
    Teacher.find({ isActive: true }).sort({ order: 1, createdAt: -1 }).lean(),
    Notice.find({ isActive: true }).sort({ date: -1, createdAt: -1 }).lean(),
    Download.find({ isActive: true }).sort({ order: 1 }).lean(),
    Admission.find({ isActive: true }).sort({ order: 1 }).lean(),
    Popup.find({ isActive: true }).sort({ order: 1 }).lean(),
    Department.find({ isActive: true }).sort({ order: 1 }).lean(),
    Settings.findOne({}).lean(),
    Gallery.find({}).sort({ createdAt: -1 }).limit(8).lean()
  ]);

  return {
    features: JSON.parse(JSON.stringify(features)),
    teachers: JSON.parse(JSON.stringify(teachers)),
    notices: JSON.parse(JSON.stringify(notices)),
    downloads: JSON.parse(JSON.stringify(downloads)),
    admissions: JSON.parse(JSON.stringify(admissions)),
    popups: JSON.parse(JSON.stringify(popups)),
    departments: JSON.parse(JSON.stringify(departments)),
    settings: JSON.parse(JSON.stringify(settings || {})),
    gallery: JSON.parse(JSON.stringify(gallery))
  };
}

export default async function Page() {
  const data = await getData();
  return <ModernHome data={data} />;
}
