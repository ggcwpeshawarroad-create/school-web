'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, X, Mail, Book, GraduationCap, Clock } from 'lucide-react';

interface Teacher {
  _id: string;
  name: string;
  role: string;
  subject: string;
  bio: string;
  qualifications: string[];
  experience: number;
}

export default function TeacherSection({ teachers }: { teachers: Teacher[] }) {
  const [selected, setSelected] = useState<Teacher | null>(null);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teachers.map((teacher, i) => (
          <motion.div
            key={teacher._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelected(teacher)}
            className="group relative cursor-pointer"
          >
            <div className="glass-dark p-8 rounded-[2.5rem] border border-white/5 group-hover:border-[#d4af37]/40 transition-all duration-500 overflow-hidden">
               <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <User size={32} className="text-[#d4af37]" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-1 tracking-tight">{teacher.name}</h3>
                  <p className="text-[#d4af37] text-xs font-black uppercase tracking-[0.2em] mb-4">{teacher.role}</p>
                  <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">{teacher.bio}</p>
               </div>
               {/* Glowing corner */}
               <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#d4af37]/20 to-transparent blur-2xl group-hover:from-[#d4af37]/40 transition-all" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-[#081229]/90 backdrop-blur-3xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl glass-dark rounded-[3.5rem] overflow-hidden border border-[#d4af37]/30 shadow-[0_0_100px_rgba(212,175,55,0.2)]"
            >
              <button 
                onClick={() => setSelected(null)}
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              >
                <X size={28} />
              </button>

              <div className="p-12">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-24 h-24 rounded-3xl bg-[#d4af37] flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                    <User size={48} className="text-[#081229]" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-black text-white tracking-tighter mb-2">{selected.name}</h2>
                    <p className="text-[#d4af37] font-black uppercase tracking-[0.3em] text-xs">{selected.role}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-10">
                   <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#d4af37]"><Book size={18} /></div>
                      <div>
                        <div className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">Expertise</div>
                        <div className="text-white font-bold">{selected.subject}</div>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#d4af37]"><Clock size={18} /></div>
                      <div>
                        <div className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">Experience</div>
                        <div className="text-white font-bold">{selected.experience} Years</div>
                      </div>
                   </div>
                </div>

                <div className="mb-10">
                   <div className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-4">Philosophy</div>
                   <p className="text-slate-300 text-lg leading-relaxed italic">"{selected.bio}"</p>
                </div>

                <div className="flex flex-wrap gap-3">
                   {selected.qualifications.map((q, i) => (
                     <span key={i} className="px-5 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-[#d4af37] text-xs font-bold uppercase tracking-wide">
                        {q}
                     </span>
                   ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
