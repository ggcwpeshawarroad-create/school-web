import dbConnect from '@/lib/db';
import Notice from '@/lib/models/Notice';
import { NextResponse } from 'next/server';

const newsItems = [
  {
    title: 'Annual Science Exhibition 2024 — A Grand Success',
    content: 'The Annual Science Exhibition 2024 was held with great enthusiasm at GGC for Women, Peshawar Road, Rawalpindi. Students from all departments showcased innovative projects in Physics, Chemistry, Biology, and Computer Science. The event was attended by faculty, parents, and distinguished guests from the Punjab Higher Education Department. The top three projects were awarded special merit certificates by the Principal.',
    date: new Date('2024-11-15'),
    priority: 'important' as const,
    isActive: true,
  },
  {
    title: 'BS Admissions 2025 — Merit List Announced',
    content: 'The merit list for BS admissions 2025 has been officially announced. Eligible candidates are required to visit the admissions office with all original documents within 7 working days to confirm their enrollment. Students who have been selected must deposit the fee at the designated branch of NBP by the specified deadline. For queries, contact the admissions cell at the college.',
    date: new Date('2025-01-10'),
    priority: 'urgent' as const,
    isActive: true,
  },
  {
    title: 'GGC Wins Inter-College Debate Competition',
    content: 'Govt. Graduate College for Women, Peshawar Road, Rawalpindi proudly represented excellence in oratory as its debate team clinched first place at the Inter-College Debate Competition organized by the Punjab Higher Education Commission. The team competed against 24 colleges across Rawalpindi Division. The Principal congratulated the students and their coach for this outstanding achievement.',
    date: new Date('2025-02-20'),
    priority: 'normal' as const,
    isActive: true,
  },
  {
    title: 'Examination Schedule — Mid-Term Exams April 2025',
    content: 'The mid-term examination schedule for the academic session 2024–2025 has been released. All students are advised to download and review the schedule from the college notice board. Students are reminded to carry their valid college ID cards to the examination hall. Strict action will be taken against students found using unfair means. Prayers, best of luck to all students.',
    date: new Date('2025-03-05'),
    priority: 'important' as const,
    isActive: true,
  },
];

export async function POST() {
  try {
    await dbConnect();
    const results = [];
    for (const item of newsItems) {
      const exists = await Notice.findOne({ title: item.title });
      if (!exists) {
        const created = await Notice.create(item);
        results.push({ created: created.title });
      } else {
        results.push({ skipped: item.title });
      }
    }
    return NextResponse.json({ success: true, results });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
