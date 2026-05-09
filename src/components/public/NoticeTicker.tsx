'use client';

import { Bell } from 'lucide-react';

interface Notice {
  _id: string;
  title: string;
  priority: string;
}

export default function NoticeTicker({ notices = [] }: { notices?: Notice[] }) {
  if (notices.length === 0) return null;

  return (
    <div className="flex items-center overflow-hidden h-full">
      {/* Official Badge */}
      <div className="bg-[#01411c] text-white px-8 h-full flex items-center gap-3 font-black text-[11px] uppercase tracking-widest border-r border-white/20 whitespace-nowrap">
        <Bell size={16} className="animate-pulse" />
        Official Notifications
      </div>

      {/* Ticker */}
      <div className="flex-1 overflow-hidden">
        <div className="news-ticker flex items-center gap-20 whitespace-nowrap px-10">
          {[...notices, ...notices, ...notices].map((n, i) => (
            <div key={i} className="flex items-center gap-4">
              {n.priority === 'urgent' && (
                <span className="bg-white text-[#01411c] px-2 py-0.5 rounded text-[10px] font-black uppercase">Breaking</span>
              )}
              <span className="text-white font-bold text-[13px] tracking-tight hover:underline cursor-pointer">{n.title}</span>
              <span className="text-emerald-300">/</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Date */}
      <div className="hidden lg:block bg-emerald-900/50 text-emerald-100 px-6 h-full flex items-center text-[10px] font-bold uppercase tracking-widest">
        {new Date().toLocaleDateString('en-PK', { day: 'numeric', month: 'short', year: 'numeric' })}
      </div>
    </div>
  );
}
