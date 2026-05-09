import dbConnect from './src/lib/db';
import DynamicPage from './src/lib/models/DynamicPage';

async function check() {
  await dbConnect();
  const pages = await DynamicPage.find({});
  console.log('Pages in DB:', pages.map(p => ({ slug: p.slug, title: p.title, active: p.isActive })));
  process.exit(0);
}

check();
