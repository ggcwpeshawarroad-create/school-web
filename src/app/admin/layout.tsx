'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { 
  Users, 
  Bell, 
  Settings, 
  LayoutDashboard, 
  LogOut, 
  GraduationCap, 
  Star, 
  Image as ImageIcon,
  FileText,
  ExternalLink
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === '/admin/login') return <>{children}</>;

  const menuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
    { label: 'Departments', icon: GraduationCap, href: '/admin/departments' },
    { label: 'Programs', icon: FileText, href: '/admin/programs' },
    { label: 'Teachers', icon: Users, href: '/admin/teachers' },
    { label: 'Notices', icon: Bell, href: '/admin/notices' },
    { label: 'Admissions', icon: FileText, href: '/admin/admissions' },
    { label: 'Fee Structure', icon: FileText, href: '/admin/fees' },
    { label: 'Downloads', icon: FileText, href: '/admin/downloads' },
    { label: 'Features', icon: Star, href: '/admin/features' },
    { label: 'Gallery', icon: ImageIcon, href: '/admin/gallery' },
    { label: 'Settings', icon: Settings, href: '/admin/settings' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f7f9fc' }}>
      {/* Sidebar */}
      <aside style={{ width: '280px', background: '#0f2347', color: '#fff', padding: '30px', position: 'fixed', height: '100vh', overflowY: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#ffcc00', color: '#002d56', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <GraduationCap size={22} />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1rem' }}>GGC Admin</div>
            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Satellite Town</div>
          </div>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.6)',
                  background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  transition: 'all 0.2s',
                }}
              >
                <item.icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Link href="/" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.85rem' }}>
            <ExternalLink size={16} /> View Public Site
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', color: '#f87171', background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem', textAlign: 'left' }}
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ marginLeft: '280px', flex: 1, padding: '40px' }}>
        {children}
      </main>

      <style jsx global>{`
        @media (max-width: 900px) {
          aside { display: none !important; }
          main { marginLeft: 0 !important; }
        }
      `}</style>
    </div>
  );
}
