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
import { translations, Language, SUPPORTED_LANGUAGES } from '../translations';

interface PortalHomeViewProps {
  currentUser: User | null;
  onNavigateTab: (tab: string, subTab?: string) => void;
  onOpenAuth: (mode: 'STUDENT_LOGIN' | 'STUDENT_REGISTER' | 'ADMIN_LOGIN') => void;
  lang?: Language;
  onSetLang?: (lang: Language) => void;
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

      {/* GOVERNMENT CIRCULAR / NOTICE TICKER STRIP */}
      <div className="bg-[#fff9e6] border border-[#f5d580] rounded-xl px-4 py-2 flex items-center gap-3 text-xs shadow-2xs overflow-hidden">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#b45309] text-white font-black text-[10px] tracking-wider uppercase shrink-0 shadow-2xs z-10 select-none">
          <Megaphone className="w-3 h-3 animate-pulse" />
          {currentLang === 'EN' ? 'LATEST CIRCULARS' : 'नवीनतम परिपत्र'}
        </span>
        <div className="overflow-hidden whitespace-nowrap text-slate-800 font-medium text-xs flex-1 relative group select-none">
          <div className="animate-marquee-infinite inline-flex items-center gap-8 cursor-pointer" title={currentLang === 'EN' ? 'Hover cursor to pause' : 'रोकने के लिए माउस ऊपर लाएं'}>
            <span className="inline-flex items-center gap-8">
              <span className="inline-flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 font-bold text-[9px] uppercase">NEW</span>
                <span>{currentLang === 'EN' ? '★ NFST & NOS AY 2026–27 Online Registration Portal is LIVE.' : '★ एनएफएसटी एवं एनओएस शैक्षणिक सत्र 2026–27 ऑनलाइन पंजीकरण पोर्टल सक्रिय है।'}</span>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-emerald-200 text-emerald-900 font-bold text-[9px] uppercase">URGENT</span>
                <span>{currentLang === 'EN' ? 'Last Date for Institute Level-1 Endorsement: 30th April 2026.' : 'संस्थान स्तरीय सत्यापन की अंतिम तिथि: 30 अप्रैल 2026।'}</span>
              </span>
              <span>•</span>
              <span>{currentLang === 'EN' ? '★ Aadhaar-seeded bank account mandate compulsory under DBT guidelines (GFR 255).' : '★ डीबीटी दिशानिर्देशों (GFR 255) के तहत आधार-सीडेड बैंक खाता अनिवार्य है।'}</span>
              <span>•</span>
              <span>{currentLang === 'EN' ? '★ One Time Registration (OTR) is active for fresh ST applicants.' : '★ नए एसटी आवेदकों हेतु वन टाइम रजिस्ट्रेशन (OTR) सेवा उपलब्ध है।'}</span>
              <span>•</span>
              <span>{currentLang === 'EN' ? '★ Top Class Education Scheme: Premier Institutes verification window open.' : '★ शीर्ष श्रेणी शिक्षा योजना: उत्कृष्ट संस्थानों के सत्यापन हेतु विंडो खुली है।'}</span>
            </span>
            {/* Exact Duplicate for Continuous Endless Loop */}
            <span className="inline-flex items-center gap-8" aria-hidden="true">
              <span className="inline-flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 font-bold text-[9px] uppercase">NEW</span>
                <span>{currentLang === 'EN' ? '★ NFST & NOS AY 2026–27 Online Registration Portal is LIVE.' : '★ एनएफएसटी एवं एनओएस शैक्षणिक सत्र 2026–27 ऑनलाइन पंजीकरण पोर्टल सक्रिय है।'}</span>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-emerald-200 text-emerald-900 font-bold text-[9px] uppercase">URGENT</span>
                <span>{currentLang === 'EN' ? 'Last Date for Institute Level-1 Endorsement: 30th April 2026.' : 'संस्थान स्तरीय सत्यापन की अंतिम तिथि: 30 अप्रैल 2026।'}</span>
              </span>
              <span>•</span>
              <span>{currentLang === 'EN' ? '★ Aadhaar-seeded bank account mandate compulsory under DBT guidelines (GFR 255).' : '★ डीबीटी दिशानिर्देशों (GFR 255) के तहत आधार-सीडेड बैंक खाता अनिवार्य है।'}</span>
              <span>•</span>
              <span>{currentLang === 'EN' ? '★ One Time Registration (OTR) is active for fresh ST applicants.' : '★ नए एसटी आवेदकों हेतु वन टाइम रजिस्ट्रेशन (OTR) सेवा उपलब्ध है।'}</span>
              <span>•</span>
              <span>{currentLang === 'EN' ? '★ Top Class Education Scheme: Premier Institutes verification window open.' : '★ शीर्ष श्रेणी शिक्षा योजना: उत्कृष्ट संस्थानों के सत्यापन हेतु विंडो खुली है।'}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bhashini Tribal Language Active Banner (Shown when an ST Tribal Language is active) */}
      {['SAT', 'OR', 'BODO', 'GON', 'BN'].includes(currentLang) && (
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 border border-emerald-300 rounded-2xl p-3.5 shadow-2xs flex items-center justify-between gap-3 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs border border-emerald-500">
              ST
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-950 flex flex-wrap items-center gap-2">
                <span>{t.header.portalName} — Bhashini Tribal Language Mode</span>
                <span className="text-[10px] bg-emerald-200/90 text-emerald-900 font-bold px-2 py-0.5 rounded-full border border-emerald-300">
                  {SUPPORTED_LANGUAGES.find(l => l.code === currentLang)?.nativeName} ({SUPPORTED_LANGUAGES.find(l => l.code === currentLang)?.name})
                </span>
                <span className="text-[9px] bg-sky-100 text-[#0084d1] font-semibold px-1.5 py-0.2 rounded">
                  {SUPPORTED_LANGUAGES.find(l => l.code === currentLang)?.script}
                </span>
              </div>
              <p className="text-[11px] text-emerald-800 font-medium mt-0.5">
                {SUPPORTED_LANGUAGES.find(l => l.code === currentLang)?.region} · Digital India National Language Translation Mission (NLTM)
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <span className="text-[10px] text-emerald-700 font-semibold bg-white/80 px-2 py-1 rounded-lg border border-emerald-200">
              Bhashini NMT v2.0
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 1. CENTRAL MoTA SCHOLARSHIP FELICITATION SHOWCASE BANNER                */}
      {/* Featured Award Ceremony Banner (Girl Receiving Certificate from MoTA)    */}
      {/* ========================================================================= */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm bg-white">
        
        {/* Banner Image Container */}
        <div className="relative w-full overflow-hidden bg-slate-900 group">
          <img
            src="/tribal-scholar-award-banner.png"
            alt="National Tribal Fellowship & Scholarship Beneficiary Felicitation - Ministry of Tribal Affairs"
            className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-cover object-center select-none transition-transform duration-700 group-hover:scale-[1.01]"
          />

          {/* Bottom Gradient Overlay & Descriptive Bar */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-transparent p-4 sm:p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div className="max-w-2xl text-white">
              <h2 className="text-base sm:text-xl md:text-2xl font-black text-white tracking-tight leading-snug drop-shadow-sm">
                {currentLang === 'HI'
                  ? 'राष्ट्रीय जनजातीय अध्येतावृत्ति एवं छात्रवृत्ति लाभार्थी सम्मान समारोह'
                  : 'National ST Fellowship & Scholarship Beneficiary Felicitation Ceremony'}
              </h2>
              <p className="text-xs sm:text-sm text-sky-100/95 font-medium leading-relaxed mt-1 max-w-xl drop-shadow-xs">
                {currentLang === 'HI'
                  ? 'जनजातीय युवाओं का शैक्षणिक सशक्तिकरण — शत-प्रतिशत प्रत्यक्ष लाभ अंतरण (DBT) एवं पूर्ण पारदर्शी डिजिटल सत्यापन।'
                  : 'Empowering Tribal Scholars Across Premier Institutions — 100% Direct Benefit Transfer (DBT) & Automated Merit Verification.'}
              </p>
            </div>

            {/* Quick Action Buttons inside Banner */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => {
                  const elem = document.getElementById('schemes-section');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-xl bg-[#0084d1] hover:bg-[#0074b8] text-white font-bold text-xs sm:text-sm shadow-md transition cursor-pointer flex items-center gap-1.5"
              >
                <span>{currentLang === 'HI' ? 'छात्रवृत्ति योजनाएं देखें' : 'View ST Schemes'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsEligibilityOpen(true)}
                className="px-3.5 py-2 rounded-xl bg-white/90 hover:bg-white text-slate-900 font-bold text-xs sm:text-sm shadow-md transition cursor-pointer flex items-center gap-1.5"
              >
                <span>{currentLang === 'HI' ? 'पात्रता जांचें' : 'Check Eligibility'}</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* 2. COMPACT SEARCH & SCHEMES FILTER TOOLBAR                               */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs p-3.5 sm:p-4">
        <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex-1 w-full flex items-center rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2 focus-within:bg-white focus-within:border-[#0084d1] focus-within:ring-2 focus-within:ring-sky-100 transition">
            <Search className="w-4 h-4 text-slate-400 shrink-0 mr-2.5" />
            <input
              id="hero-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.home.searchPlaceholder}
              className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#0084d1] hover:bg-[#0074b8] text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition shadow-2xs cursor-pointer shrink-0"
          >
            {t.home.searchBtn}
          </button>
        </form>

        {/* Quick Filter Pill Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-2.5 mt-2 border-t border-slate-100">
          <span className="text-[11px] font-bold text-slate-400 mr-1">
            {t.home.popularTags || 'Popular:'}
          </span>
          <button
            type="button"
            onClick={() => handleTagClick('Post Matric')}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-sky-50 hover:text-[#0084d1] border border-slate-200 transition cursor-pointer"
          >
            <span>{t.home.tagPostMatric}</span>
          </button>
          <button
            type="button"
            onClick={() => handleTagClick('Pre Matric')}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-sky-50 hover:text-[#0084d1] border border-slate-200 transition cursor-pointer"
          >
            <span>{t.home.tagPreMatric}</span>
          </button>
          <button
            type="button"
            onClick={() => handleTagClick('Top Class')}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-sky-50 hover:text-[#0084d1] border border-slate-200 transition cursor-pointer"
          >
            <span>{t.home.tagTopClass}</span>
          </button>
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

        {/* CARD 2: "Am I Eligible?" Scheme Eligibility Radar */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-xs p-5 flex flex-col justify-between space-y-4">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div className="flex items-center gap-2">
                <ClipboardList className="w-4 h-4 text-[#0084d1]" />
                <h2 className="text-sm font-bold text-slate-900">
                  {t.home.amIEligibleTitle}
                </h2>
              </div>
              <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                {currentLang === 'EN' ? 'Self-Check' : 'स्वयं-जांच'}
              </span>
            </div>

            {/* 5 Checklist Items with Green Checkmarks */}
            <div className="space-y-2.5 text-xs text-slate-700 font-semibold">
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-[11px]">{t.home.checkSt}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-[11px]">{t.home.checkCitizen}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-[11px]">{t.home.checkEnrolled}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-[11px]">{t.home.checkIncome}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-[11px]">{t.home.checkDocs}</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsEligibilityOpen(true)}
            className="w-full py-2.5 px-4 bg-[#00a3b8] hover:bg-[#008f9f] text-white font-bold rounded-xl text-xs transition shadow-2xs flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>{t.home.checkEligibilityBtn}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
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
