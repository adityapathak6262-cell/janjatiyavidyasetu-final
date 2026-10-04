import React, { useState } from 'react';
import {
  GraduationCap,
  Building2,
  Globe,
  Award,
  ChevronRight,
  Search,
  FileText,
  CheckCircle2,
  Megaphone,
  ClipboardList,
  ShieldCheck,
  X,
  ArrowRight,
  Check,
  AlertCircle,
  HelpCircle,
  Clock,
  Sparkles,
  Download,
  Users,
  CreditCard,
  Building,
  UserCheck,
  Calendar,
  FileDown,
  Languages,
  MapPin,
  Shield,
  BookOpen,
  Compass,
  HeartHandshake,
  Target,
  BarChart,
  ChevronDown
} from 'lucide-react';
import { User } from '../api';
import { translations, Language } from '../translations';

interface PortalHomeViewProps {
  currentUser: User | null;
  onNavigateTab: (tab: string, subTab?: string) => void;
  onOpenAuth: (mode: 'STUDENT_LOGIN' | 'STUDENT_REGISTER' | 'ADMIN_LOGIN') => void;
  lang?: 'EN' | 'HI';
  onSetLang?: (lang: 'EN' | 'HI') => void;
}

export const PortalHomeView: React.FC<PortalHomeViewProps> = ({
  currentUser,
  onNavigateTab,
  onOpenAuth,
  lang: controlledLang,
  onSetLang: controlledSetLang,
}) => {
  // Language State: 'EN' (English, default) or 'HI' (Hindi)
  const [internalLang, setInternalLang] = useState<Language>('EN');
  const currentLang = (controlledLang || internalLang) as Language;
  const t = translations[currentLang] || translations.EN;
  const schemesT = t.schemes;

  const handleSetLang = (newLang: Language) => {
    if (controlledSetLang) {
      controlledSetLang(newLang);
    } else {
      setInternalLang(newLang);
    }
  };

  // Search Bar State
  const [searchQuery, setSearchQuery] = useState('');
  
  // Rate Table Tab
  const [rateCategory, setRateCategory] = useState<'ALL' | 'FELLOWSHIP' | 'OVERSEAS' | 'TOP_CLASS'>('ALL');

  // Quick Tracker State
  const [trackerId, setTrackerId] = useState('');
  const [trackedStatus, setTrackedStatus] = useState<{
    id: string;
    scheme: string;
    studentName: string;
    status: string;
    step: number;
    updatedAt: string;
  }>({
    id: 'ST2026A38472',
    scheme: 'Post Matric Scholarship 2026',
    studentName: 'Yogendra Meena',
    status: 'Institutional Bonafide Verification in progress. Next update expected in 48 hours.',
    step: 2,
    updatedAt: '12 Apr 2026'
  });

  // Eligibility Checker Modal State
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [eligibilityState, setEligibilityState] = useState({
    category: 'ST',
    isPvtg: false,
    annualIncome: 'under_6',
    degreeLevel: 'phd',
    hasBonafide: true,
  });
  const [eligibilityResult, setEligibilityResult] = useState<string | null>(null);

  // All official Central ST schemes
  const allSchemes = [
    {
      id: 'POST_MATRIC',
      code: 'PMS_ST',
      title: schemesT.POST_MATRIC.title,
      level: schemesT.POST_MATRIC.level,
      slots: schemesT.POST_MATRIC.slots,
      allowance: schemesT.POST_MATRIC.allowance,
      desc: schemesT.POST_MATRIC.desc,
      tags: currentLang === 'EN' ? ['Post Matric', 'Tuition Fees', 'Monthly Stipend'] : ['पोस्ट मैट्रिक', 'शिक्षण शुल्क', 'मासिक भत्ता'],
      badge: currentLang === 'EN' ? 'Applications Open' : 'आवेदन खुले हैं',
    },
    {
      id: 'TOP_CLASS',
      code: 'TOP_CLASS',
      title: schemesT.TOP_CLASS.title,
      level: schemesT.TOP_CLASS.level,
      slots: schemesT.TOP_CLASS.slots,
      allowance: schemesT.TOP_CLASS.allowance,
      desc: schemesT.TOP_CLASS.desc,
      tags: currentLang === 'EN' ? ['Premier Institutes', 'Full Tuition', 'Direct Credit'] : ['उत्कृष्ट संस्थान', 'पूर्ण शुल्क', 'प्रत्यक्ष भुगतान'],
      badge: currentLang === 'EN' ? 'Premier Institutes' : 'उत्कृष्ट संस्थान',
    },
    {
      id: 'NFST',
      code: 'NFST',
      title: schemesT.NFST.title,
      level: schemesT.NFST.level,
      slots: schemesT.NFST.slots,
      allowance: schemesT.NFST.allowance,
      desc: schemesT.NFST.desc,
      tags: currentLang === 'EN' ? ['Research', 'Full Fellowship', 'Central Sector'] : ['शोध अध्येतावृत्ति', 'पूर्ण छात्रवृत्ति', 'केंद्रीय क्षेत्र'],
      badge: currentLang === 'EN' ? 'AY 2026-27 Open' : 'सत्र 2026-27 खुला',
    },
    {
      id: 'NOS',
      code: 'NOS',
      title: schemesT.NOS.title,
      level: schemesT.NOS.level,
      slots: schemesT.NOS.slots,
      allowance: schemesT.NOS.allowance,
      desc: schemesT.NOS.desc,
      tags: currentLang === 'EN' ? ['Foreign Study', 'QS Top 1000', 'Mission Disbursal'] : ['विदेश अध्ययन', 'क्यूएस टॉप 1000', 'मिशन संवितरण'],
      badge: currentLang === 'EN' ? 'Circular Aligned' : 'परिपत्र संरेखित',
    }
  ];

  const filteredSchemes = allSchemes.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.level.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const elem = document.getElementById('schemes-section');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
    const elem = document.getElementById('schemes-section');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackerId.trim()) return;
    setTrackedStatus({
      id: trackerId.trim().toUpperCase(),
      scheme: 'National Fellowship for ST Students (NFST)',
      studentName: 'Yogendra Meena',
      status: 'Institutional Verification Completed · Pending Ministry Committee Approval',
      step: 3,
      updatedAt: 'Updated Today'
    });
  };

  const evaluateQuickEligibility = () => {
    if (eligibilityState.annualIncome === 'above_8') {
      setEligibilityResult('Family income exceeds ₹8.00 Lakh ceiling. Eligible for NFST Research Fellowship subject to academic merit ranking (no family income bar for UGC-NET JRF).');
    } else if (eligibilityState.degreeLevel === 'foreign') {
      setEligibilityResult('Eligible for National Overseas Scholarship (NOS)! Covers 100% foreign tuition + $15,400 / £9,900 annual foreign living allowance.');
    } else if (eligibilityState.degreeLevel === 'ug') {
      setEligibilityResult('Eligible for Top Class Education Scheme & Post Matric Scholarship! Full non-refundable tuition fees + monthly maintenance.');
    } else {
      setEligibilityResult('Eligible for National Fellowship (NFST) & Post Matric! Monthly fellowship up to ₹42,000 + contingency grant available.');
    }
  };

  return (
    <div className="space-y-7 animate-fade-in pb-16 font-sans">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Matches Screenshot st-scholarship-ui-option-2.png) */}
      {/* ========================================================================= */}
      <div className="relative rounded-3xl bg-linear-to-r from-[#eef7fc] via-[#f7fbfe] to-[#eaf5fc] border border-sky-100/90 shadow-xs overflow-hidden p-6 sm:p-10">
        
        {/* Subtle decorative background watermarks */}
        <div className="absolute -top-12 -right-12 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 left-1/3 w-80 h-80 bg-teal-200/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: Hero Copy + Search Bar + Badges (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Tagline */}
            <div className="inline-block">
              <span className="font-extrabold text-[#0084d1] text-xs sm:text-[13px] tracking-wider uppercase">
                {t.home.heroTag}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-[#0a2540] tracking-tight leading-[1.12]">
              {t.home.heroTitlePart1} <br />
              <span className="text-[#0084d1]">{t.home.heroTitlePart2}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl leading-relaxed">
              {t.home.heroSubtitle}
            </p>

            {/* Search Input Box */}
            <form onSubmit={handleSearchSubmit} className="max-w-xl">
              <div className="flex items-center rounded-xl bg-white border border-slate-300 shadow-sm p-1.5 focus-within:border-[#0084d1] focus-within:ring-2 focus-within:ring-sky-100 transition">
                <div className="pl-3 pr-2 text-slate-400">
                  <Search className="w-5 h-5 text-slate-500" />
                </div>
                <input
                  id="hero-search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.home.searchPlaceholder}
                  className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent py-1.5"
                />
                <button
                  type="submit"
                  className="bg-[#0084d1] hover:bg-[#0074b8] text-white px-5 sm:px-6 py-2.5 rounded-lg font-bold text-xs sm:text-sm transition shadow-xs cursor-pointer shrink-0"
                >
                  {t.home.searchBtn}
                </button>
              </div>
            </form>

            {/* Quick Filter Pill Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => handleTagClick('Post Matric')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:border-[#0084d1] hover:text-[#0084d1] transition shadow-2xs cursor-pointer"
              >
                <Search className="w-3 h-3 text-slate-400" />
                <span>{t.home.tagPostMatric}</span>
              </button>

              <button
                type="button"
                onClick={() => handleTagClick('Pre Matric')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:border-[#0084d1] hover:text-[#0084d1] transition shadow-2xs cursor-pointer"
              >
                <Search className="w-3 h-3 text-slate-400" />
                <span>{t.home.tagPreMatric}</span>
              </button>

              <button
                type="button"
                onClick={() => handleTagClick('Top Class')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:border-[#0084d1] hover:text-[#0084d1] transition shadow-2xs cursor-pointer"
              >
                <Search className="w-3 h-3 text-slate-400" />
                <span>{t.home.tagTopClass}</span>
              </button>
            </div>

            {/* 3 Stats / Trust Cards */}
            <div className="grid grid-cols-3 gap-3 pt-3 max-w-xl">
              
              {/* Card 1: 120+ Schemes */}
              <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-xl border border-sky-100 shadow-2xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-100 text-[#0084d1] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-black text-slate-900 leading-tight">{t.home.statSchemesCount}</div>
                  <div className="text-[11px] text-slate-500 font-semibold leading-tight">{t.home.statSchemesLabel}</div>
                </div>
              </div>

              {/* Card 2: 24 States */}
              <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-xl border border-sky-100 shadow-2xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-black text-slate-900 leading-tight">{t.home.statStatesCount}</div>
                  <div className="text-[11px] text-slate-500 font-semibold leading-tight">{t.home.statStatesLabel}</div>
                </div>
              </div>

              {/* Card 3: Secure & Transparent */}
              <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-xl border border-sky-100 shadow-2xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-[#0070ba] flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">{t.home.statSecureTitle}</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold leading-tight truncate">{t.home.statSecureSubtitle}</div>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Illustration & Floating "Am I Eligible?" Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col md:flex-row lg:flex-col items-center justify-center gap-6 relative">
            
            {/* Artistic Vector Illustration of Tribal Scholars */}
            <div className="relative w-full max-w-sm flex items-center justify-center select-none">
              
              {/* Handwritten Typography Motifs */}
              <div className="absolute -top-3 left-4 text-xs font-bold text-[#0084d1] rotate-[-8deg] tracking-tight bg-white/70 px-2 py-0.5 rounded-full border border-sky-200/60 shadow-2xs">
                {currentLang === 'EN' ? '✍️ Educate · Empower · Evolve' : '✍️ शिक्षा · स्वावलंबन · प्रगति'}
              </div>

              <div className="absolute bottom-2 right-4 text-xs font-bold text-teal-700 rotate-[5deg] tracking-tight bg-white/70 px-2 py-0.5 rounded-full border border-teal-200/60 shadow-2xs">
                {currentLang === 'EN' ? '🇮🇳 Tribal Youth · Stronger India' : '🇮🇳 जनजातीय युवा · समर्थ भारत'}
              </div>

              {/* High-fidelity Vector SVG Graphic of Indian Scholars */}
              <svg viewBox="0 0 420 300" className="w-full h-auto drop-shadow-sm max-h-[260px]">
                <defs>
                  <linearGradient id="skin1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c58c63" />
                    <stop offset="100%" stopColor="#ab7047" />
                  </linearGradient>
                  <linearGradient id="skin2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d2966e" />
                    <stop offset="100%" stopColor="#b67a51" />
                  </linearGradient>
                  <linearGradient id="blueHoodie" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="100%" stopColor="#0369a1" />
                  </linearGradient>
                  <linearGradient id="tealKurti" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0d9488" />
                    <stop offset="100%" stopColor="#0f766e" />
                  </linearGradient>
                  <linearGradient id="accentCircle" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#bae6fd" />
                    <stop offset="100%" stopColor="#e0f2fe" />
                  </linearGradient>
                </defs>

                {/* Soft Backdrop Shape */}
                <circle cx="210" cy="150" r="130" fill="url(#accentCircle)" opacity="0.65" />
                <path d="M70,180 Q100,100 180,80 T340,110 T380,240 Q300,280 180,270 Z" fill="#e0f2fe" opacity="0.4" />

                {/* Floating Academic Badges */}
                <g transform="translate(290, 45)">
                  <circle cx="20" cy="20" r="20" fill="#0284c7" />
                  <path d="M10,20 L20,14 L30,20 L20,26 Z" fill="white" />
                  <path d="M20,26 L20,31" stroke="white" strokeWidth="2" />
                  <path d="M14,22.5 L14,27 C14,29 26,29 26,27 L26,22.5" fill="none" stroke="white" strokeWidth="1.5" />
                </g>

                <g transform="translate(60, 100)">
                  <circle cx="16" cy="16" r="16" fill="#0284c7" />
                  <path d="M10,13 Q16,11 22,13 L22,23 Q16,21 10,23 Z" fill="white" />
                  <line x1="16" y1="12" x2="16" y2="22" stroke="#0284c7" strokeWidth="1" />
                </g>

                {/* Student 1 (Male Scholar in Blue Hoodie holding folder) */}
                <g id="maleStudent">
                  {/* Hair */}
                  <path d="M150,75 Q180,55 205,75 Q215,95 205,115 Q175,110 150,95 Z" fill="#1e293b" />
                  {/* Face */}
                  <path d="M155,85 Q175,75 190,85 Q195,110 180,125 Q165,125 155,105 Z" fill="url(#skin1)" />
                  {/* Ear */}
                  <circle cx="152" cy="100" r="6" fill="#ab7047" />
                  {/* Smile & Eye */}
                  <circle cx="178" cy="94" r="2.5" fill="#0f172a" />
                  <path d="M172,108 Q180,114 186,108" stroke="#0f172a" strokeWidth="2" fill="none" strokeLinecap="round" />
                  {/* Neck */}
                  <rect x="165" y="120" width="16" height="15" fill="#ab7047" />
                  {/* Torso & Blue Hoodie */}
                  <path d="M135,135 Q175,130 215,135 L225,270 L125,270 Z" fill="url(#blueHoodie)" />
                  {/* White undershirt collar */}
                  <path d="M165,135 L173,150 L181,135 Z" fill="white" />
                  {/* Backpack strap */}
                  <path d="M145,135 Q140,180 148,220" stroke="#0f172a" strokeWidth="7" fill="none" strokeLinecap="round" />
                  {/* Book folder held in arms */}
                  <polygon points="175,170 240,160 245,215 180,225" fill="#38bdf8" />
                  <polygon points="175,170 240,160 238,155 173,165" fill="#f8fafc" />
                </g>

                {/* Student 2 (Female Scholar in Teal holding textbook) */}
                <g id="femaleStudent">
                  {/* Long Black Hair */}
                  <path d="M235,100 Q265,75 285,100 Q305,130 295,190 Q270,185 250,175 Q235,140 235,100 Z" fill="#0f172a" />
                  {/* Face */}
                  <path d="M245,105 Q265,95 280,105 Q285,128 270,140 Q255,140 245,120 Z" fill="url(#skin2)" />
                  {/* Smile & Eye */}
                  <circle cx="268" cy="113" r="2.5" fill="#0f172a" />
                  <path d="M260,126 Q268,132 274,126" stroke="#0f172a" strokeWidth="2" fill="none" strokeLinecap="round" />
                  {/* Torso & Teal Dress */}
                  <path d="M230,150 Q265,145 295,150 L305,270 L215,270 Z" fill="url(#tealKurti)" />
                  {/* Textbook held in hand */}
                  <polygon points="255,185 305,175 308,235 258,245" fill="#0284c7" />
                  <polygon points="255,185 305,175 303,170 253,180" fill="#f8fafc" />
                  {/* Forearm */}
                  <path d="M235,170 Q255,195 270,205" stroke="#b67a51" strokeWidth="10" fill="none" strokeLinecap="round" />
                </g>

                {/* Sparkling Stars */}
                <path d="M90,70 L93,78 L101,81 L93,84 L90,92 L87,84 L79,81 L87,78 Z" fill="#38bdf8" />
                <path d="M330,130 L332,135 L337,137 L332,139 L330,144 L328,139 L323,137 L328,135 Z" fill="#0284c7" />
              </svg>
            </div>

            {/* "Am I Eligible?" Card (Matches Floating Card in Screenshot) */}
            <div className="w-full max-w-sm bg-white rounded-2xl border border-sky-200/90 shadow-lg p-5 sm:p-6 space-y-4">
              
              {/* Header */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0084d1] flex items-center justify-center shrink-0 border border-sky-100">
                  <ClipboardList className="w-5 h-5 text-[#0084d1]" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 leading-snug">
                    {t.home.amIEligibleTitle}
                  </h3>
                  <p className="text-xs text-slate-500 leading-tight mt-0.5">
                    {t.home.amIEligibleSubtitle}
                  </p>
                </div>
              </div>

              {/* 5 Checklist Items with Green Checkmarks */}
              <div className="space-y-2.5 text-xs text-slate-700 font-semibold">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{t.home.checkSt}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{t.home.checkCitizen}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{t.home.checkEnrolled}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{t.home.checkIncome}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{t.home.checkDocs}</span>
                </div>
              </div>

              {/* Teal CTA Button: Check My Eligibility → */}
              <button
                type="button"
                onClick={() => setIsEligibilityOpen(true)}
                className="w-full py-3 px-4 bg-[#00a3b8] hover:bg-[#008f9f] text-white font-bold rounded-xl text-xs transition shadow-md flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>{t.home.checkEligibilityBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2. THREE-COLUMN CARDS GRID (Matches Screenshot Bottom Cards Exactly) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* CARD 1: Recommended Scholarships (3.8 Cols) */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-xs p-5 flex flex-col justify-between space-y-4">
          
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0084d1]" />
                <h2 className="text-sm font-bold text-slate-900">
                  {t.home.recommendedTitle}
                </h2>
              </div>
              <button
                onClick={() => {
                  const elem = document.getElementById('schemes-section');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#0084d1] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>{t.home.viewAll}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Scheme List */}
            <div className="space-y-3">
              
              {/* Item 1: Post Matric Scholarship */}
              <div className="p-3 rounded-xl border border-slate-100 hover:border-sky-200 bg-slate-50/70 hover:bg-sky-50/40 transition space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 leading-snug">
                        {schemesT.POST_MATRIC.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                        {currentLang === 'EN' ? 'Ministry of Tribal Affairs · For ST students pursuing Class 11 and above' : 'जनजातीय कार्य मंत्रालय · कक्षा 11 एवं उच्चतर एसटी विद्यार्थियों हेतु'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end pt-1">
                  <button
                    onClick={() => {
                      if (!currentUser) onOpenAuth('STUDENT_LOGIN');
                      else onNavigateTab('student', 'schemes');
                    }}
                    className="px-3 py-1 rounded-lg text-xs font-bold text-[#0084d1] bg-sky-50 hover:bg-sky-100 border border-sky-200 transition flex items-center gap-1 cursor-pointer"
                  >
                    <span>{t.home.applyNow}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Item 2: Top Class Education Scheme */}
              <div className="p-3 rounded-xl border border-slate-100 hover:border-emerald-200 bg-slate-50/70 hover:bg-emerald-50/30 transition space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 leading-snug">
                        {schemesT.TOP_CLASS.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                        {currentLang === 'EN' ? 'Ministry of Tribal Affairs · For pursuing professional and technical courses' : 'जनजातीय कार्य मंत्रालय · व्यावसायिक एवं तकनीकी पाठ्यक्रमों के अध्ययन हेतु'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end pt-1">
                  <button
                    onClick={() => {
                      if (!currentUser) onOpenAuth('STUDENT_LOGIN');
                      else onNavigateTab('student', 'schemes');
                    }}
                    className="px-3 py-1 rounded-lg text-xs font-bold text-[#0084d1] bg-sky-50 hover:bg-sky-100 border border-sky-200 transition flex items-center gap-1 cursor-pointer"
                  >
                    <span>{t.home.applyNow}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          <p className="text-[10px] text-slate-400 text-center">
            Statutory Ministry guidelines apply for Academic Year 2026-27.
          </p>
        </div>

        {/* CARD 2: My Application Progress (4.2 Cols) */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-xs p-5 flex flex-col justify-between space-y-4">
          
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#0084d1]" />
                <h2 className="text-sm font-bold text-slate-900">
                  {t.home.appProgressTitle}
                </h2>
              </div>
              <button
                onClick={() => {
                  if (!currentUser) onOpenAuth('STUDENT_LOGIN');
                  else onNavigateTab('student', 'timeline');
                }}
                className="text-xs font-semibold text-[#0084d1] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>{t.home.viewAll}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Application Card Top Details */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#0084d1] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 leading-snug">
                    {trackedStatus.scheme}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-mono">
                    {currentLang === 'EN' ? 'Application ID' : 'आवेदन संख्या'}: {trackedStatus.id}
                  </p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                {t.home.inProgressBadge}
              </span>
            </div>

            {/* 4-Stage Horizontal Stepper */}
            <div className="pt-4 px-2">
              <div className="relative flex items-center justify-between">
                
                {/* Connecting Track Line */}
                <div className="absolute top-3.5 left-4 right-4 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
                <div 
                  className="absolute top-3.5 left-4 h-0.5 bg-[#0084d1] -translate-y-1/2 z-0 transition-all duration-500"
                  style={{ width: trackedStatus.step === 1 ? '0%' : trackedStatus.step === 2 ? '33%' : trackedStatus.step === 3 ? '66%' : '100%' }}
                />

                {/* Step 1: Submitted */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-[#0084d1] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-800 mt-1">{t.home.stepSubmitted}</span>
                  <span className="text-[9px] text-slate-400">{trackedStatus.updatedAt}</span>
                </div>

                {/* Step 2: Under Verification */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shadow-xs ${
                    trackedStatus.step >= 2 ? 'bg-[#0084d1] text-white ring-4 ring-sky-100' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {trackedStatus.step > 2 ? <Check className="w-4 h-4 stroke-[3]" /> : '2'}
                  </div>
                  <span className="text-[10px] font-bold text-slate-800 mt-1">{t.home.stepUnderVerification}</span>
                </div>

                {/* Step 3: Sanction */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shadow-xs ${
                    trackedStatus.step >= 3 ? 'bg-[#0084d1] text-white' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {trackedStatus.step > 3 ? <Check className="w-4 h-4" /> : '3'}
                  </div>
                  <span className="text-[10px] font-medium text-slate-600 mt-1">{t.home.stepSanction}</span>
                </div>

                {/* Step 4: Disbursal */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shadow-xs ${
                    trackedStatus.step >= 4 ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'
                  }`}>
                    4
                  </div>
                  <span className="text-[10px] font-medium text-slate-600 mt-1">{t.home.stepDisbursal}</span>
                </div>

              </div>
            </div>

            {/* Status Message Info Box */}
            <div className="mt-4 p-3 bg-sky-50/80 border border-sky-100 rounded-xl text-xs text-slate-700 flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-[#0084d1] text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                i
              </div>
              <p className="text-[11px] leading-relaxed">
                {currentLang === 'EN' 
                  ? trackedStatus.status 
                  : 'संस्थागत बोनाफाइड सत्यापन प्रगति पर है। अगला अपडेट 48 घंटों में अपेक्षित है।'}
              </p>
            </div>
          </div>

          {/* Quick Track Input */}
          <form onSubmit={handleTrackSubmit} className="flex gap-2">
            <input
              type="text"
              value={trackerId}
              onChange={(e) => setTrackerId(e.target.value)}
              placeholder={currentLang === 'EN' ? "Track App ID (e.g. ST2026A38472)..." : "आवेदन संख्या दर्ज करें (e.g. ST2026A38472)..."}
              className="flex-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0084d1]"
            />
            <button
              type="submit"
              className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-xs transition cursor-pointer shrink-0"
            >
              {t.home.trackBtn}
            </button>
          </form>

        </div>

        {/* CARD 3: Latest Announcements (4.0 Cols) */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-xs p-5 flex flex-col justify-between space-y-4">
          
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div className="flex items-center gap-2">
                <Megaphone className="w-4 h-4 text-[#0084d1]" />
                <h2 className="text-sm font-bold text-slate-900">
                  {t.home.announcementsTitle}
                </h2>
              </div>
              <button
                onClick={() => alert(currentLang === 'EN' ? 'Viewing all official Ministry circulars & notifications.' : 'मंत्रालय के सभी आधिकारिक परिपत्र एवं सूचनाएं खोली जा रही हैं।')}
                className="text-xs font-semibold text-[#0084d1] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>{t.home.viewAll}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Announcement Rows with Date Blocks */}
            <div className="divide-y divide-slate-100 text-xs">
              
              {/* Row 1 */}
              <div className="py-2.5 flex items-center justify-between gap-3 hover:bg-slate-50 rounded-lg px-1 transition cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-11 text-center shrink-0">
                    <span className="text-base font-black text-[#0084d1] block leading-tight">10</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block leading-none">{currentLang === 'EN' ? 'Apr' : 'अप्रैल'}</span>
                  </div>
                  <p className="text-slate-800 text-[11px] font-medium leading-snug group-hover:text-[#0084d1] transition-colors">
                    {currentLang === 'EN' ? 'Applications for Post Matric Scholarship 2026 are now open.' : 'पोस्ट मैट्रिक छात्रवृत्ति 2026 हेतु ऑनलाइन आवेदन अब प्रारंभ हैं।'}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 shrink-0" />
              </div>

              {/* Row 2 */}
              <div className="py-2.5 flex items-center justify-between gap-3 hover:bg-slate-50 rounded-lg px-1 transition cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-11 text-center shrink-0">
                    <span className="text-base font-black text-[#0084d1] block leading-tight">05</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block leading-none">{currentLang === 'EN' ? 'Apr' : 'अप्रैल'}</span>
                  </div>
                  <p className="text-slate-800 text-[11px] font-medium leading-snug group-hover:text-[#0084d1] transition-colors">
                    {currentLang === 'EN' ? 'Document verification process has been updated. Please check guidelines.' : 'दस्तावेज़ सत्यापन प्रक्रिया को अद्यतन किया गया है। कृपया दिशानिर्देश देखें।'}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 shrink-0" />
              </div>

              {/* Row 3 */}
              <div className="py-2.5 flex items-center justify-between gap-3 hover:bg-slate-50 rounded-lg px-1 transition cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-11 text-center shrink-0">
                    <span className="text-base font-black text-[#0084d1] block leading-tight">28</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block leading-none">{currentLang === 'EN' ? 'Mar' : 'मार्च'}</span>
                  </div>
                  <p className="text-slate-800 text-[11px] font-medium leading-snug group-hover:text-[#0084d1] transition-colors">
                    {currentLang === 'EN' ? 'Last date extended for Top Class Education Scheme till 30th April 2026.' : 'शीर्ष श्रेणी शिक्षा योजना की अंतिम तिथि 30 अप्रैल 2026 तक बढ़ाई गई।'}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 shrink-0" />
              </div>

              {/* Row 4 */}
              <div className="py-2.5 flex items-center justify-between gap-3 hover:bg-slate-50 rounded-lg px-1 transition cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-11 text-center shrink-0">
                    <span className="text-base font-black text-[#0084d1] block leading-tight">18</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block leading-none">{currentLang === 'EN' ? 'Mar' : 'मार्च'}</span>
                  </div>
                  <p className="text-slate-800 text-[11px] font-medium leading-snug group-hover:text-[#0084d1] transition-colors">
                    {currentLang === 'EN' ? 'Webinar on scholarship opportunities for ST students on 25th March 2026.' : 'एसटी छात्रों हेतु छात्रवृत्ति अवसरों पर वेबिनार 25 मार्च को।'}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 shrink-0" />
              </div>

            </div>
          </div>

          <div className="text-[10px] text-slate-400 text-center">
            {currentLang === 'EN' ? 'Published under authority of Ministry of Tribal Affairs (MoTA).' : 'जनजातीय कार्य मंत्रालय (MoTA) के प्राधिकार से प्रकाशित।'}
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3. BOTTOM TRUST & IMPACT STRIP (Matches Screenshot Bottom Strip) */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-2xl border border-slate-200 px-6 py-4 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* 4 Pillars with Icons */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-700 font-semibold">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#0084d1]" />
            <span>{t.home.pillarBrighterTomorrow}</span>
          </div>

          <div className="h-4 w-px bg-slate-200 hidden sm:block" />

          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>{t.home.pillarEmpowered}</span>
          </div>

          <div className="h-4 w-px bg-slate-200 hidden sm:block" />

          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-[#0084d1]" />
            <span>{t.home.pillarEqualOpp}</span>
          </div>

          <div className="h-4 w-px bg-slate-200 hidden sm:block" />

          <div className="flex items-center gap-2">
            <BarChart className="w-4 h-4 text-[#0070ba]" />
            <span>{t.home.pillarStrongerIndia}</span>
          </div>
        </div>

        {/* Right Motto Script */}
        <div className="flex items-center gap-2">
          <div className="text-right">
            <span className="italic font-bold text-xs text-slate-800 tracking-tight block">
              {t.home.footerMotto}
            </span>
            <div className="h-0.5 w-full bg-linear-to-r from-orange-400 via-sky-400 to-emerald-500 rounded-full mt-0.5" />
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 4. CENTRAL SCHOLARSHIP DIRECTORY SECTION (All Detailed Central Schemes) */}
      {/* ========================================================================= */}
      <div id="schemes-section" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900">
              {t.home.schemesSectionTitle}
            </h2>
            <p className="text-xs text-slate-500">{t.home.schemesSectionSubtitle}</p>
          </div>
          <span className="text-xs font-bold text-[#0084d1] bg-sky-50 px-3 py-1 rounded-lg border border-sky-200">
            {filteredSchemes.length} {currentLang === 'EN' ? 'Schemes Available' : 'योजनाएं उपलब्ध'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSchemes.map((scheme) => (
            <div
              key={scheme.id}
              className="rounded-xl border border-slate-200 hover:border-sky-300 p-4 bg-white shadow-2xs hover:shadow-xs transition flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-800 px-2 py-0.5 rounded">
                    {scheme.level.split('(')[0]}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {scheme.slots}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                  {scheme.title}
                </h3>

                <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-3">
                  {scheme.desc}
                </p>

                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                  <span className="text-[9px] text-slate-500 uppercase font-bold block mb-0.5">{t.home.allowanceLabel}</span>
                  <span className="font-bold text-slate-900 text-[11px] leading-snug block">
                    {scheme.allowance}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => {
                    if (scheme.id === 'NOS') onNavigateTab('global-bridge');
                    else if (!currentUser) onOpenAuth('STUDENT_LOGIN');
                    else onNavigateTab('student', 'schemes');
                  }}
                  className="w-full py-2 px-3 bg-[#0084d1] hover:bg-[#0074b8] text-white rounded-lg text-xs font-bold transition text-center cursor-pointer shadow-2xs"
                >
                  {scheme.id === 'NOS' ? t.home.openNosDesk : (currentUser ? t.home.applyNow : t.home.loginToApply)}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE ELIGIBILITY CHECKER MODAL */}
      {/* ========================================================================= */}
      {isEligibilityOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-scale-up space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0084d1] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5 text-[#0084d1]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{t.home.eligibilityModalTitle}</h3>
                  <p className="text-xs text-slate-500">{t.home.eligibilityModalSubtitle}</p>
                </div>
              </div>
              <button
                onClick={() => setIsEligibilityOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">{t.home.modalCategoryLabel}</label>
                <select
                  value={eligibilityState.category}
                  onChange={(e) => setEligibilityState({ ...eligibilityState, category: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-800"
                >
                  <option value="ST">{currentLang === 'EN' ? 'Scheduled Tribe (ST) - Meena / Munda / Santhal / Gond / Oraon' : 'अनुसूचित जनजाति (ST) - मीणा / मुंडा / संथाल / गोंड / उरांव'}</option>
                  <option value="PVTG">{currentLang === 'EN' ? 'Particularly Vulnerable Tribal Group (PVTG - Birhor / Katkari)' : 'विशेष रूप से कमजोर जनजातीय समूह (PVTG - बिरहोर / कातकरी)'}</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">{t.home.modalIncomeLabel}</label>
                <select
                  value={eligibilityState.annualIncome}
                  onChange={(e) => setEligibilityState({ ...eligibilityState, annualIncome: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-800"
                >
                  <option value="under_6">{currentLang === 'EN' ? 'Below ₹6.00 Lakh per annum (Full NOS & NFST Priority)' : '₹6.00 लाख प्रति वर्ष से कम (एनओएस एवं एनएफएसटी पूर्ण प्राथमिकता)'}</option>
                  <option value="6_to_8">{currentLang === 'EN' ? 'Between ₹6.00 Lakh – ₹8.00 Lakh per annum' : '₹6.00 लाख से ₹8.00 लाख प्रति वर्ष के बीच'}</option>
                  <option value="above_8">{currentLang === 'EN' ? 'Above ₹8.00 Lakh per annum' : '₹8.00 लाख प्रति वर्ष से अधिक'}</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">{t.home.modalDegreeLabel}</label>
                <select
                  value={eligibilityState.degreeLevel}
                  onChange={(e) => setEligibilityState({ ...eligibilityState, degreeLevel: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-800"
                >
                  <option value="phd">{currentLang === 'EN' ? 'Ph.D. / M.Phil Regular Full-Time Research (NFST Eligible)' : 'पीएच.डी. / एम.फिल नियमित पूर्णकालिक शोध (एनएफएसटी पात्र)'}</option>
                  <option value="foreign">{currentLang === 'EN' ? "Foreign University (Master's / Ph.D. Abroad - NOS Eligible)" : 'विदेशी विश्वविद्यालय (विदेश में स्नातकोत्तर / पीएच.डी. - एनओएस पात्र)'}</option>
                  <option value="ug">{currentLang === 'EN' ? 'Undergraduate / Class 11-12 (Post Matric & Top Class Eligible)' : 'स्नातक / कक्षा 11-12 (पोस्ट मैट्रिक एवं टॉप क्लास पात्र)'}</option>
                </select>
              </div>

              {eligibilityResult && (
                <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
                  <div className="font-bold text-emerald-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{t.home.modalOutcomeTitle}</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-[11px]">
                    {eligibilityResult}
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={evaluateQuickEligibility}
                className="flex-1 py-2.5 bg-[#0084d1] hover:bg-[#0074b8] text-white font-bold rounded-xl text-xs transition shadow-xs cursor-pointer"
              >
                {t.home.modalEvaluateBtn}
              </button>
              <button
                type="button"
                onClick={() => setIsEligibilityOpen(false)}
                className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition cursor-pointer"
              >
                {t.home.modalCloseBtn}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
