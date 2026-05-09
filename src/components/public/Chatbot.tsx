'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minus } from 'lucide-react';
import { usePathname } from 'next/navigation';

type Message = {
  text: string;
  isUser: boolean;
};

export default function Chatbot({ settings }: { settings?: any }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: `Hello! I'm the ${settings?.schoolName || 'GGC'} Assistant. How can I help you today?`, isUser: false }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Dynamic values from settings
  const schoolName = settings?.schoolName || "Govt. Graduate College";
  const phone = settings?.phone || "051-9334301";
  const email = settings?.email || "gcw.peshawar.r.pindi@gmail.com";
  const address = settings?.address || "Peshawar Road, Rawalpindi";


  // Moved early return check down to render section to follow Rules of Hooks

  const levenshtein = (a: string, b: string) => {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    const matrix = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(null));
    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j] + 1, // deletion
          matrix[i - 1][j - 1] + indicator // substitution
        );
      }
    }
    return matrix[a.length][b.length];
  };

  const isFuzzyMatch = (userWord: string, keyword: string) => {
    if (userWord === keyword) return true;
    const dist = levenshtein(userWord, keyword);
    if (keyword.length <= 3) return dist === 0;
    if (keyword.length <= 5) return dist <= 1;
    return dist <= 2;
  };

  const getBotResponse = (userInput: string) => {
    const tokens = userInput.toLowerCase().replace(/[^\w\s]/gi, '').split(/\s+/);

    // Check for greetings
    const greetings = ['hi', 'hello', 'hey', 'greetings', 'morning', 'afternoon'];
    if (tokens.some(t => greetings.some(g => isFuzzyMatch(t, g))) && tokens.length <= 4) {
      return "Hello there! How can I assist you with Govt. Graduate College today?";
    }

    // Advanced knowledge base matching
    const intents = [
      {
        intent: 'identity',
        keywords: ['who', 'what', 'bot', 'robot', 'name', 'assistant'],
        contextWords: ['are', 'you', 'your', 'is'],
        answer: `I am the ${schoolName} Assistant, a virtual helper here to answer your questions about our college, its admissions, and more!`
      },
      {
        intent: 'admissions',
        keywords: ['admission', 'admissions', 'apply', 'enroll', 'form', 'join', 'register', 'criteria'],
        answer: "Admissions for the current session (2024-25) are guided by merit. Key rules: Mothers must accompany applicants during admission; male guardians are not allowed in the admin premises. Incomplete forms are not accepted."
      },
      {
        intent: 'fees',
        keywords: ['fee', 'fees', 'cost', 'tuition', 'price', 'dues', 'scholarship', 'fund'],
        answer: "Fee structures are: F.Sc/FA/ICS (approx. Rs. 1500-2000 total initial), ADP (approx. Rs. 2000-2500). Detailed funds include Admission Fee, Tuition Fee, Medical Fund, and Library Security (refundable)."
      },
      {
        intent: 'contact',
        keywords: ['contact', 'phone', 'email', 'reach', 'number', 'call', 'telephone'],
        answer: `Our official contact is ${phone} and email is ${email}. Office hours are 8:00 AM – 3:00 PM.`
      },
      {
        intent: 'programs',
        keywords: ['program', 'programs', 'degree', 'bs', 'ics', 'fsc', 'fa', 'adp', 'associate', 'linguistics'],
        answer: "We offer HSSC (Pre-Medical, Pre-Engineering, ICS, FA), ADP (Arts), and a 4-year BS in English Linguistics (Punjab University affiliated)."
      },
      {
        intent: 'principal',
        keywords: ['principal', 'head', 'noshin', 'rehman', 'zubaida', 'ahmed'],
        answer: "The current Principal is Mrs. Noshin Rehman (Associate Prof. of Economics). The college was established in 1987 under the first Principal, Mrs. Zubaida Ahmed."
      },
      {
        intent: 'uniform',
        keywords: ['uniform', 'dress', 'wear', 'code', 'clothes', 'shalwar', 'kameez', 'dupatta', 'ribbon'],
        answer: "Our uniform is a white Shalwar Kameez with a white dupatta. The dupatta must have a zero-size ribbon color matching your year: 1st Year (Red), 2nd Year (Green), 3rd Year (Yellow), 4th Year (Purple/Blue). Plain black sweaters are allowed in winter."
      },
      {
        intent: 'rules',
        keywords: ['rule', 'rules', 'attendance', 'absent', 'leave', 'discipline', 'expelled', 'mobile'],
        answer: "75% attendance is compulsory. Students absent for 15 consecutive days will be expelled. Mobile phones, flashy jewellery, and cosmetics are strictly prohibited on campus."
      },
      {
        intent: 'library',
        keywords: ['library', 'books', 'card', 'issue', 'reading'],
        answer: "Our library has over 9000 books. Students need a Library Card to issue books. Intermediate students can get 1 book, while ADP/BS students can get 2 books for 14 days."
      },
      {
        intent: 'bus',
        keywords: ['bus', 'transport', 'van', 'conveyance', 'travel'],
        answer: "The college provides its own bus service on specific routes for students. Duplicate ID cards can be acquired for Rs. 50/- in case of loss."
      },
      {
        intent: 'societies',
        keywords: ['society', 'societies', 'council', 'extra', 'curricular', 'sports', 'games'],
        answer: "We have active societies (English, Urdu, Islamiyat, Ideology of Pakistan) and a Student Council (President, Vice President, etc.) for leadership and holistic development."
      },
      {
        intent: 'values',
        keywords: ['value', 'values', 'principle', 'principles', 'mission', 'vision', 'philosophy'],
        answer: "Our core values include Academic Excellence, Integrity, Inclusivity, Innovation, Community Service, and Leadership. We aim to serve society through excellence in education and character building."
      },
      {
        intent: 'news',
        keywords: ['news', 'event', 'events', 'notice', 'notices', 'update', 'updates'],
        answer: "Check the 'News & Events' section for official announcements, merit lists, and upcoming campus activities."
      },
    ];

    let bestMatch = null;
    let highestScore = 0;

    for (const item of intents) {
      let score = 0;

      const matchedKeywords = item.keywords.filter(kw => tokens.some(t => isFuzzyMatch(t, kw)));
      score += matchedKeywords.length;

      if (item.contextWords) {
        const hasContext = item.contextWords.some(cw => tokens.some(t => isFuzzyMatch(t, cw)));
        if (!hasContext && matchedKeywords.length > 0) {
          score -= 1; // Penalize if context is missing for ambiguous keywords
        } else if (hasContext && matchedKeywords.length > 0) {
          score += 1; // Reward if context is present
        }
      }

      if (score > 0 && score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    if (bestMatch) {
      return bestMatch.answer;
    }

    return "I couldn't find an exact answer to that. Please try rephrasing your question, or visit our Contact Us page to reach our support team.";
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setInput('');

    // Simulate small delay for bot response
    setTimeout(() => {
      const response = getBotResponse(userMessage);
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 500);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isMinimized]);

  // Early return for admin routes after all hooks
  if (pathname?.startsWith('/admin') || pathname?.startsWith('/login')) {
    return null;
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => { setIsOpen(true); setIsMinimized(false); }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#ffcc00] text-[#002d56] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-[9999]"
        aria-label="Open Chatbot"
      >
        <MessageCircle size={32} />
      </button>
    );
  }

  return (
    <div
      className={`fixed right-0 sm:right-6 z-[9999] transition-all duration-300 ease-in-out ${isMinimized ? 'bottom-0 sm:bottom-6 translate-y-[calc(100%-60px)]' : 'bottom-0 sm:bottom-6 translate-y-0'} w-full sm:w-[350px] bg-white rounded-t-xl sm:rounded-bl-xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col`}
      style={{ height: '500px', maxHeight: 'calc(100dvh - 80px)' }}
    >
      {/* Header */}
      <div className="bg-[#002d56] text-white p-4 flex justify-between items-center cursor-pointer" onClick={() => setIsMinimized(!isMinimized)}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <MessageCircle size={18} />
          </div>
          <div>
            <h3 className="font-bold text-sm leading-tight">GGC Assistant</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[10px] text-white/70 uppercase tracking-widest">Online</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }} className="p-1 hover:bg-white/20 rounded-sm transition-colors text-white/70 hover:text-white" title="Minimize">
            <Minus size={18} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} className="p-1 hover:bg-white/20 rounded-sm transition-colors text-white/70 hover:text-white" title="Close">
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-grow p-4 overflow-y-auto bg-slate-50 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-lg text-sm ${msg.isUser ? 'bg-[#ffcc00] text-[#002d56] rounded-br-none font-medium shadow-sm' : 'bg-white border border-slate-100 text-slate-600 rounded-bl-none shadow-sm'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-slate-100">
        <form onSubmit={handleSend} className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-full focus:border-[#ffcc00] outline-none text-sm text-[#002d56]"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#002d56] text-[#ffcc00] rounded-full flex items-center justify-center hover:bg-[#002d56]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={14} className="ml-0.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
