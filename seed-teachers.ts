import mongoose from 'mongoose';
import Teacher from './src/lib/models/Teacher';
import dbConnect from './src/lib/db';

const teachersData = [
  // Biology Department
  { name: 'Ms.Sonia Zulfiqar', role: 'Assistant Professor', subject: 'Biology', photo: '' },
  { name: 'Ms. Ayesha Anjum', role: 'Lecturer', subject: 'Biology', photo: '' },

  // H.Economics Department
  { name: 'Mrs. Zaeema Shafi', role: 'Associate Professor', subject: 'H.Economics', photo: '' },

  // Islamiat Department
  { name: 'Ms. Nuzhat Bano', role: 'Assistant Professor', subject: 'Islamiat', photo: '' },
  { name: 'Mrs.Bushra Jabeen', role: 'Assistant Professor', subject: 'Islamiat', photo: '' },

  // Chemistry Department
  { name: 'Ms. Aqsa Ansari', role: 'Lecturer', subject: 'Chemistry', photo: '' },
  { name: 'Ms. Iqra Ghouri', role: 'Lecturer', subject: 'Chemistry', photo: '' },
  { name: 'Ms. Nida Liaqat', role: 'Lecturer', subject: 'Chemistry', photo: '' },
  { name: 'Ms. Raabia Bibi', role: 'Lecturer', subject: 'Chemistry', photo: '' },

  // Economics Department
  { name: 'Mrs. Nosheen Rehman', role: 'Associate Professor', subject: 'Economics', photo: '' },
  { name: 'Ms. Darakshan Jabeen', role: 'Assistant Professor', subject: 'Economics', photo: '' },
  { name: 'Ms. Sameen Sarwar', role: 'Lecturer', subject: 'Economics', photo: '' },

  // Civics / Political Science Department
  { name: 'Mrs. Shazia Manzoor', role: 'Associate Professor', subject: 'Civics / Political Science', photo: '' },
  { name: 'Ms. Huma Jabeen', role: 'Assistant Professor', subject: 'Civics / Political Science', photo: '' },

  // History Department
  { name: 'Ms. Nighat Fareed', role: 'Associate Professor', subject: 'History', photo: '' },
  { name: 'Mrs. Faria Umbreen', role: 'Assistant Professor', subject: 'History', photo: '' },

  // Urdu Department
  { name: 'Ms. Ismat Tahira', role: 'Assistant Professor', subject: 'Urdu', photo: '' },
  { name: 'Mrs.Munazza Ismail', role: 'Professor', subject: 'Urdu', photo: '' },

  // English Department
  { name: 'Mrs.Fareeha Khan', role: 'Assistant Professor', subject: 'English', photo: '' },
  { name: 'Mrs.Rashida Siddiqui', role: 'Associate Professor', subject: 'English', photo: '' },
  { name: 'Mrs.Sadaf Mehreen', role: 'Assistant Professor', subject: 'English', photo: '' },
  { name: 'Ms. Qurat ul Ain Qureshi', role: 'Lecturer', subject: 'English', photo: '' },
  { name: 'Ms. Sarwat Urooj', role: 'Lecturer', subject: 'English', photo: '' },
  { name: 'Mrs. Saba Tariq', role: 'Lecturer', subject: 'English', photo: '' },
  { name: 'Mrs. Fatima Rasheed', role: 'Lecturer', subject: 'English', photo: '' },

  // Psychology Department
  { name: 'Ms. Anber Younus Khan', role: 'Assistant Professor', subject: 'Psychology', photo: '' },
  { name: 'Ms. Fatima Shahid', role: 'Assistant Professor', subject: 'Psychology', photo: '' },

  // Mathematics Department
  { name: 'Ms. Zahira Mansoor', role: 'Lecturer', subject: 'Mathematics', photo: '' },
  { name: 'Ms. Asma', role: 'Lecturer', subject: 'Mathematics', photo: '' },

  // Statistics Department
  { name: 'Ms. Tehreem Waqar', role: 'Assistant Professor', subject: 'Statistics', photo: '' },

  // Physics Department
  { name: 'Ms. Shamila Nazneen', role: 'Associate Professor', subject: 'Physics', photo: '' },
  { name: 'Ms. Beenish Khan', role: 'Associate Professor', subject: 'Physics', photo: '' },

  // Librarian
  { name: 'Ms. Madiha Khalid', role: 'Librarian', subject: 'Library', photo: '' },

  // Admin Department
  { name: 'Syed Haseen Abbas Rizvi', role: 'Head Clerk', subject: 'Admin', photo: '' },
  { name: 'Malik Yasir Awan', role: 'Head Clerk', subject: 'Admin', photo: '' },
  { name: 'Shahid Ejaz', role: 'Senior Clerk', subject: 'Admin', photo: '' },
  { name: 'Ms.Sundas Fatima', role: 'Senior Clerk', subject: 'Admin', photo: '' },
  { name: 'Ms.Sangeeta Yousaf', role: 'Junior Clerk', subject: 'Admin', photo: '' },
  { name: 'Ms.Zainab Bibi', role: 'Junior Clerk', subject: 'Admin', photo: '' },
  { name: 'Ms.Iram Zahra', role: 'Lab Superintendent', subject: 'Admin', photo: '' },
  { name: 'Ms.Sidra Kanwal', role: 'Lab. Supervisor', subject: 'Admin', photo: '' },
  { name: 'Malik Arshad Mehmood', role: 'Lab Attendant', subject: 'Admin', photo: '' },
  { name: 'Ms.Samina Arshad', role: 'Lab Attendant', subject: 'Admin', photo: '' },
  { name: 'M.Saeed', role: 'Lab Attendant', subject: 'Admin', photo: '' },
  { name: 'M.Sagheer', role: 'Lab Attendant', subject: 'Admin', photo: '' },
  { name: 'Ms.Asma Razzaq', role: 'Lab Attendant', subject: 'Admin', photo: '' },
  { name: 'Azmat Rasheed', role: 'Lab Attendant', subject: 'Admin', photo: '' },
  { name: 'Ms.Mehnaz Azad', role: 'Naib Qasid', subject: 'Admin', photo: '' },
  { name: 'Nasir Rafique', role: 'Naib Qasid', subject: 'Admin', photo: '' },
  { name: 'Malik M.Muneer', role: 'Mali', subject: 'Admin', photo: '' },
  { name: 'M.Afzal', role: 'Chowkidar', subject: 'Admin', photo: '' },
];

async function seedTeachers() {
  try {
    await dbConnect();
    console.log('Connected to DB');

    // Optionally clear existing teachers or just insert
    // Un-comment to clear: await Teacher.deleteMany({});
    
    // Using simple iteration so it maps perfectly
    for (const data of teachersData) {
      await Teacher.findOneAndUpdate(
        { name: data.name },
        data,
        { upsert: true, new: true }
      );
    }
    
    console.log('Successfully seeded teachers and admin staff!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding teachers:', error);
    process.exit(1);
  }
}

seedTeachers();
