import { renderDynamicPage } from '@/lib/renderDynamicPage';

export const runtime = 'nodejs';

export default function Page() { 
  return renderDynamicPage('privacy', 'Privacy Policy'); 
}
