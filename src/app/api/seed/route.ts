import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Admin from '@/lib/models/Admin';
import Feature from '@/lib/models/Feature';
import Teacher from '@/lib/models/Teacher';
import Notice from '@/lib/models/Notice';
import Admission from '@/lib/models/Admission';
import Download from '@/lib/models/Download';
import Popup from '@/lib/models/Popup';
import Department from '@/lib/models/Department';
import Program from '@/lib/models/Program';
import DynamicPage from '@/lib/models/DynamicPage';

export async function POST() {
  try {
    await dbConnect();

    // Clear existing
    await Promise.all([
      Admin.deleteMany({}),
      Feature.deleteMany({}),
      Teacher.deleteMany({}),
      Notice.deleteMany({}),
      Admission.deleteMany({}),
      Download.deleteMany({}),
      Popup.deleteMany({}),
      Department.deleteMany({}),
      Program.deleteMany({}),
      DynamicPage.deleteMany({})
    ]);

    // 0. Admin
    await Admin.create({
      email: 'superadmin@ggcwpeshawarroad.edu.pk',
      password: 'SUPERadmin@12345@123',
      name: 'Super Admin'
    });

    // 1. Departments
    const depts = await Department.create([
      { name: 'Computer Science', description: 'Exploring the future of technology and software development.', headName: 'Dr. Ahmad Khan', order: 1 },
      { name: 'Physics', description: 'Discovering the fundamental laws of the universe.', headName: 'Prof. Sarah Malik', order: 2 },
      { name: 'English Literature', description: 'Critically analyzing classic and contemporary works.', headName: 'Dr. Jane Doe', order: 3 },
    ]);

    // 2. Programs
    await Program.create([
      { title: 'BS Computer Science', department: 'Computer Science', duration: '4 Years', eligibility: 'Inter / ICS / A-Level (Maths)', order: 1 },
      { title: 'BS Information Technology', department: 'Computer Science', duration: '4 Years', eligibility: 'Inter / ICS / A-Level', order: 2 },
      { title: 'BS Physics', department: 'Physics', duration: '4 Years', eligibility: 'F.Sc Pre-Engineering', order: 3 },
    ]);

    // 3. Dynamic Pages
    await DynamicPage.create([
      { slug: 'fee-structure', title: 'Fee Structure', content: '<h2>Undergraduate Fee</h2><p>BS Programs: PKR 25,000 per semester.</p><h2>Graduate Fee</h2><p>MS Programs: PKR 45,000 per semester.</p>' },
      { slug: 'admission-criteria', title: 'Admission Criteria', content: '<ul><li>Minimum 60% marks in Intermediate.</li><li>Passing entry test is mandatory.</li><li>Age limit: 22 years for undergraduate.</li></ul>' },
      { slug: 'admission-process', title: 'Admission Process', content: '<h2>Step-by-Step Guide</h2><ol><li>Obtain Prospectus.</li><li>Fill Online Form.</li><li>Submit Documents.</li><li>Appear for Interview.</li></ol>' },
      { slug: 'degrees', title: 'Degrees Offered', content: '<p>GGC offers a wide range of BS (4-Year) and MS (2-Year) degrees across various departments.</p>' },
      { slug: 'timetable', title: 'Academic Time Table', content: '<p>Download the latest departmental time table for Fall 2024 here.</p>' },
      { slug: 'datesheets', title: 'Date Sheets', content: '<p>Examination schedules and date sheets will be published here 2 weeks before exams.</p>' },
      { slug: 'results', title: 'Examination Results', content: '<p>Check your semester and annual results by entering your Roll Number below.</p>' },
      { slug: 'student-life', title: 'Student Life', content: '<p>Discover the vibrant campus life at GGC, including clubs, societies, and sports.</p>' },
      { slug: 'enrollment', title: 'Current Enrollment', content: '<p>Statistical overview of our current student body across all departments.</p>' },
      { slug: 'about-us', title: 'About GGC', content: '<p>Founded with a mission to provide quality education to the youth of Rawalpindi.</p>' },
      { slug: 'contact-us', title: 'Contact Information', content: '<p>Visit us at Peshawar Road, Rawalpindi  or call us at +92 (051) 1234567.</p>' },
      { slug: 'committees', title: 'Institute Committees', content: '<p>List of academic and administrative committees governing GGC.</p>' },
      { slug: 'leadership', title: 'Institute Leadership', content: '<p>Profiles of the Principal, Vice Principal, and HODs.</p>' },
      { slug: 'staff', title: 'Non-Teaching Staff', content: '<p>Management and supporting staff responsible for college operations.</p>' },
      { slug: 'facilities', title: 'Campus Facilities', content: '<p>Library, Labs, Sports Grounds, and IT Center details.</p>' },
      { slug: 'vacancies', title: 'Job Opportunities', content: '<p>Latest job openings and recruitment notices at GGC.</p>' },
    ]);

    // 4. Features (Programs on home)
    await Feature.create([
      { title: 'Quality Education', description: 'Leading academic programs with international standards.', order: 1 },
      { title: 'Expert Faculty', description: 'Experienced scholars and industry professionals.', order: 2 },
    ]);

    // 5. Teachers
    await Teacher.create([
      { name: 'Prof. Muhammad Usman', role: 'Principal', subject: 'Administration', bio: 'Leading the institution with vision.', experience: 25, qualifications: ['Ph.D'], order: 1 },
      { name: 'Dr. Amina Khalid', role: 'Associate Professor', subject: 'Computer Science', bio: 'Expert in AI and Data Science.', experience: 12, qualifications: ['Ph.D CS'], order: 2 },
    ]);

    // 6. Notices
    await Notice.create([
      { title: 'Summer Vacations Announcement', content: 'College will remain closed from June 15th to August 15th.', date: new Date() },
      { title: 'Admission Fall 2024 Open', content: 'Applications are now being accepted for all undergraduate programs.', date: new Date() },
    ]);

    // 7. Admissions (Posters)
    await Admission.create([
      { title: 'Fall Admissions 2024', description: 'Last date to apply is August 30th.', poster: '/slider1.jpg', order: 1 },
    ]);

    // 8. Downloads
    await Download.create([
      { title: 'Academic Calendar 2024', fileUrl: '#', fileType: 'pdf', order: 1 },
      { title: 'Admission Form', fileUrl: '#', fileType: 'pdf', order: 2 },
    ]);

    // 9. Popup
    await Popup.create([
      { title: 'Urgent: Registration Deadline', description: 'The deadline for semester registration has been extended to Monday.', image: '/slider1.jpg', isActive: true },
    ]);

    return NextResponse.json({ message: 'Database seeded successfully with dynamic content!' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
