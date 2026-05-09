import { Users, Bell, Star, Image as ImageIcon, TrendingUp, AlertCircle, LayoutDashboard, Database, ShieldCheck } from 'lucide-react';
import { auth } from '@/lib/auth';

export const runtime = 'nodejs';

export default async function AdminDashboard() {
  const session = await auth();

  const stats = [
    { label: 'Teachers', value: '6', icon: Users, color: '#1a3a6e' },
    { label: 'Active Notices', value: '4', icon: Bell, color: '#e8a020' },
    { label: 'Departments', value: '3', icon: LayoutDashboard, color: '#10b981' },
    { label: 'Gallery Items', value: '12', icon: ImageIcon, color: '#8b5cf6' },
  ];

  return (
    <div className="p-8">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-[#002d56] mb-2 uppercase tracking-tighter">
          Dashboard Overview
        </h1>
        <p className="text-slate-400 font-medium uppercase text-xs tracking-widest">
          Welcome back, {session?.user?.name || 'Administrator'}
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-sm shadow-xl border border-slate-100 flex items-center gap-6 hover:translate-y-[-4px] transition-all">
            <div className="w-14 h-14 rounded-sm flex items-center justify-center" style={{ backgroundColor: `${stat.color}10`, color: stat.color }}>
              <stat.icon size={28} />
            </div>
            <div>
              <div className="text-2xl font-black text-[#002d56] tracking-tighter">{stat.value}</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-sm shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center">
            <h3 className="text-lg font-black text-[#002d56] uppercase tracking-tighter flex items-center gap-3">
              <TrendingUp size={20} className="text-[#ffcc00]" /> Recent Activities
            </h3>
            <button className="text-[10px] font-black uppercase tracking-widest text-[#17a2b8]">View All</button>
          </div>
          <div className="p-8 space-y-6">
            {[
              { type: 'Department', name: 'Computer Science', action: 'updated', time: '2 mins ago' },
              { type: 'Notice', name: 'Annual Sports Day', action: 'published', time: '1 hour ago' },
              { type: 'Admission', name: 'BS Admission 2024', action: 'opened', time: '5 hours ago' },
              { type: 'Teacher', name: 'Dr. Ahmad Khan', action: 'added', time: '1 day ago' },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center p-6 bg-slate-50 border border-slate-100 rounded-sm hover:border-[#ffcc00] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#ffcc00]" />
                  <div className="text-sm font-bold text-slate-600">
                    <span className="text-[#002d56] font-black uppercase text-[11px] tracking-widest mr-2 bg-white px-2 py-1 border border-slate-100">{item.type}</span>
                    <span className="font-black text-[#002d56] uppercase">{item.name}</span> {item.action}
                  </div>
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* System & Security */}
        <div className="space-y-8">
          <div className="bg-[#002d56] text-white rounded-sm shadow-xl p-8 relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-lg font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                  <Database size={20} className="text-[#ffcc00]" /> Database
                </h3>
                <div className="space-y-4">
                   <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest border-b border-white/10 pb-4">
                      <span className="opacity-60">Status</span>
                      <span className="text-green-400">Connected</span>
                   </div>
                   <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest pt-2">
                      <span className="opacity-60">Environment</span>
                      <span>Production</span>
                   </div>
                </div>
             </div>
             <div className="absolute -bottom-10 -right-10 opacity-10 rotate-12">
                <Database size={150} />
             </div>
          </div>

          <div className="bg-white rounded-sm shadow-xl p-8 border border-slate-100">
             <h3 className="text-lg font-black text-[#002d56] uppercase tracking-tighter mb-6 flex items-center gap-3">
               <ShieldCheck size={20} className="text-[#17a2b8]" /> Security
             </h3>
             <div className="p-6 bg-green-50 border border-green-100 rounded-sm">
                <div className="text-[11px] font-black text-green-700 uppercase tracking-widest mb-1">Session Active</div>
                <div className="text-[10px] font-bold text-green-600/80 uppercase">Authentication verified via JWT</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
