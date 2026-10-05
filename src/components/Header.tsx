import React, { useState, useEffect, useRef } from 'react';
import emblemLogo from '../assets/emblem.svg';
import digitalIndiaLogo from '../assets/digital-india-logo.svg';
import { 
  Shield, 
  User as UserIcon, 
  Bell, 
  CheckCircle2, 
  ChevronDown, 
  Layers, 
  FileCheck2, 
  BarChart3, 
  SlidersHorizontal,
  Lock, 
  LogOut, 
  UserPlus, 
  LogIn, 
  RefreshCw, 
  Clock, 
  Home, 
  Globe,
  Search,
  FileText,
  FolderOpen,
  MessageSquare,
  Headphones,
  Check,
  Award,
  Sparkles,
  ExternalLink,
  ShieldAlert,
  Scale,
  Activity,
  Building2
} from 'lucide-react';
import { User, NotificationRecord } from '../api';
import { translations, Language, SUPPORTED_LANGUAGES } from '../translations';

interface HeaderProps {
  currentUser: User | null;
  allDemoUsers: User[];
  activeTab: string;
  onTabChange: (tab: string, subTab?: string) => void;
  onSwitchUser: (user: User) => void;
  notifications: NotificationRecord[];
  onNotificationRead: (id: string) => void;
  chainLength: number;
  onOpenAuthModal: (mode: 'STUDENT_LOGIN' | 'STUDENT_REGISTER' | 'ADMIN_LOGIN') => void;
  onLogout: () => void;
  onOpenThreeDotMenu: () => void;
  lang?: Language;
  onSetLang?: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentUser,
  allDemoUsers,
  activeTab,
  onTabChange,
  onSwitchUser,
  notifications,
  onNotificationRead,
  chainLength,
  onOpenAuthModal,
  onLogout,
  onOpenThreeDotMenu,
  lang = 'EN',
  onSetLang
}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifMenu, setShowNotifMenu] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showScholarshipsDropdown, setShowScholarshipsDropdown] = useState(false);
  const [showApplicationsDropdown, setShowApplicationsDropdown] = useState(false);
  const [fontSizeLevel, setFontSizeLevel] = useState<'sm' | 'md' | 'lg'>('md');
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setShowLangMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeLanguageMeta = SUPPORTED_LANGUAGES.find((l) => l.code === (lang || 'EN')) || SUPPORTED_LANGUAGES[0];
  const t = translations[lang || 'EN'].header;
  const schemesT = translations[lang || 'EN'].schemes;
  const currentLang = (lang || 'EN') as Language;

  const unreadCount = notifications.filter((n) => !n.read).length;

  const roleLabelMap: Record<string, { label: string; badgeColor: string }> = {
    STUDENT: { label: 'Applicant / Scholar', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    INSTITUTION_VERIFIER: { label: 'Institute Nodal Officer (INO)', badgeColor: 'bg-blue-50 text-blue-700 border-blue-200' },
    MOTA_OFFICER: { label: 'MoTA Committee Officer', badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
    ADMIN: { label: 'Policy / System Admin', badgeColor: 'bg-purple-50 text-purple-700 border-purple-200' },
    SUPER_ADMIN: { label: 'Ministry Super Admin', badgeColor: 'bg-amber-50 text-amber-700 border-amber-200' },
  };

  const handleFontResize = (level: 'sm' | 'md' | 'lg') => {
    setFontSizeLevel(level);
    const root = document.documentElement;
    if (level === 'sm') root.style.fontSize = '15px';
    else if (level === 'md') root.style.fontSize = '16px';
    else if (level === 'lg') root.style.fontSize = '17.5px';
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-2xs font-sans">
      
      {/* ========================================================================= */}
      {/* TIER 1: OFFICIAL GOVERNMENT BRANDING & GLOBAL UTILITIES (Exact Screenshot) */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5">
        <div className="flex items-center justify-between gap-3">
          
          {/* Left Brand Identity: Emblem + GoI + Janjatiya Vidya Setu Portal */}
          <div 
            onClick={() => onTabChange('home')}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none min-w-0"
            title="Janjatiya Vidya Setu Portal - Ministry of Tribal Affairs"
          >
            {/* National Emblem */}
            <div className="flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <img 
                src={emblemLogo} 
                alt="State Emblem of India" 
                className="h-9 sm:h-11 w-auto max-w-[28px] sm:max-w-[34px] object-contain" 
              />
            </div>

            {/* Ministry Identification */}
            <div className="min-w-0 flex flex-col justify-center">
              <span className="font-bold text-[11px] sm:text-xs text-slate-800 leading-tight">
                Government of India
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-600 font-semibold leading-tight">
                Ministry of Tribal Affairs
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium leading-tight">
                जनजातीय कार्य मंत्रालय
              </span>
            </div>

            {/* Vertical Divider */}
            <div className="h-9 w-px bg-slate-200 mx-1 sm:mx-2 hidden sm:block shrink-0" />

            {/* Janjatiya Vidya Setu Portal Brand */}
            <div className="hidden sm:flex flex-col justify-center min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-black text-sm sm:text-base text-slate-900 tracking-tight leading-tight uppercase">
                  {lang === 'HI' ? 'जनजातीय विद्या सेतु पोर्टल' : 'JANJATIYA VIDYA SETU PORTAL'}
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="h-1 w-3.5 bg-linear-to-r from-orange-500 via-white to-emerald-600 rounded-full border border-slate-300 inline-block shrink-0" />
                <span className="text-[9px] sm:text-[9.5px] font-semibold text-slate-500 tracking-tight">
                  {lang === 'HI' ? '(अनुसूचित जनजाति राष्ट्रीय छात्रवृत्ति पोर्टल)' : '(National Digital Scholarship Portal for ST)'}
                </span>
              </div>
              <p className="text-[8.5px] text-slate-400 font-normal leading-none truncate mt-0.5 hidden lg:block">
                Access · Learn · Grow · Build a Brighter India
              </p>
            </div>
          </div>

          {/* Azadi Ka Amrit Mahotsav & 150th Birsa Munda Janjatiya Gaurav Varsh (Official MoTA Emblems) */}
          <div className="hidden xl:flex items-center gap-2.5 pl-3 border-l border-slate-200 shrink-0 select-none">
            <img 
              src="/akam-logo.png" 
              alt="Azadi Ka Amrit Mahotsav" 
              className="h-7 sm:h-8 w-auto object-contain"
              title="Azadi Ka Amrit Mahotsav"
            />
            <img 
              src="/birsa-munda-150-logo.png" 
              alt="150th Birth Anniversary of Bhagwan Birsa Munda - Janjatiya Gaurav Varsh" 
              className="h-7 sm:h-8 w-auto object-contain"
              title="150th Birth Anniversary of Bhagwan Birsa Munda - Janjatiya Gaurav Varsh"
            />
          </div>

          {/* Right Action Zone: Accessibility, Language, Login & Register Buttons, Digital India */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Quick Search Icon Trigger */}
            <button
              onClick={() => {
                const searchInput = document.getElementById('hero-search-input');
                if (searchInput) {
                  searchInput.focus();
                  searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                  onTabChange('home');
                }
              }}
              className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition hidden md:flex items-center justify-center cursor-pointer"
              title="Search scholarships and services"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-slate-700" />
            </button>

            {/* Accessibility Font Size Resizers: A-  A  A+ */}
            <div className="hidden md:flex items-center gap-1 text-xs text-slate-600 font-bold bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded-lg select-none">
              <button
                onClick={() => handleFontResize('sm')}
                className={`px-1 py-0.5 rounded hover:text-slate-900 cursor-pointer ${fontSizeLevel === 'sm' ? 'text-[#0084d1] font-black' : ''}`}
                title="Decrease Font Size"
              >
                A-
              </button>
              <button
                onClick={() => handleFontResize('md')}
                className={`px-1 py-0.5 rounded hover:text-slate-900 cursor-pointer ${fontSizeLevel === 'md' ? 'text-[#0084d1] font-black' : ''}`}
                title="Default Font Size"
              >
                A
              </button>
              <button
                onClick={() => handleFontResize('lg')}
                className={`px-1 py-0.5 rounded hover:text-slate-900 cursor-pointer ${fontSizeLevel === 'lg' ? 'text-[#0084d1] font-black' : ''}`}
                title="Increase Font Size"
              >
                A+
              </button>
            </div>

            {/* Language Selector: Globe Icon + Active Language + Multi-Lingual Dropdown */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer border ${
                  showLangMenu 
                    ? 'bg-sky-50 border-sky-300 text-[#0084d1]' 
                    : 'text-slate-700 hover:bg-slate-100 border-transparent hover:border-slate-200'
                }`}
                title="Change Portal Language (Bhashini National & Tribal Languages)"
              >
                <Globe className="w-3.5 h-3.5 text-[#0084d1]" />
                <span className="font-bold tracking-tight">{activeLanguageMeta.nativeName}</span>
                {activeLanguageMeta.isTribal && (
                  <span className="text-[9px] font-black bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded border border-emerald-300 shadow-2xs">
                    ST Tribal
                  </span>
                )}
                <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${showLangMenu ? 'rotate-180' : ''}`} />
              </button>

              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 py-2 z-50 text-xs font-medium animate-scale-up overflow-hidden">
                  {/* Dropdown Header with Bhashini Brand */}
                  <div className="px-3.5 py-2 bg-gradient-to-r from-sky-50 via-indigo-50 to-emerald-50 border-b border-slate-200/80 mb-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-[#0084d1]" />
                        <span className="text-[11px] font-bold text-slate-900">Bhashini AI Language Gateway</span>
                      </div>
                      <span className="text-[9px] bg-sky-100 text-[#0084d1] font-bold px-1.5 py-0.5 rounded">
                        MeitY NLTM
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-0.5">
                      Empowering Tribal Communities & ST Students in their Mother Tongue
                    </p>
                  </div>

                  {/* Section 1: ST Tribal & Regional Languages */}
                  <div className="px-3 py-1 text-[10px] font-bold text-emerald-800 uppercase tracking-wider flex items-center justify-between bg-emerald-50/60 mx-2 rounded-md mb-1">
                    <span>Tribal & Regional Languages (जनजातीय भाषाएँ)</span>
                    <span className="text-[9px] bg-emerald-200/80 text-emerald-900 px-1 rounded font-semibold">ST Specific</span>
                  </div>

                  <div className="space-y-0.5 px-1.5 max-h-64 overflow-y-auto">
                    {SUPPORTED_LANGUAGES.filter((l) => l.isTribal).map((l) => {
                      const isSelected = (lang || 'EN') === l.code;
                      return (
                        <button
                          key={l.code}
                          onClick={() => {
                            if (onSetLang) onSetLang(l.code);
                            setShowLangMenu(false);
                          }}
                          className={`w-full px-3 py-2 text-left flex items-center justify-between rounded-xl transition cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-50 text-emerald-900 font-bold border border-emerald-200'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex flex-col">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold text-slate-900">{l.nativeName}</span>
                              <span className="text-[10px] text-slate-500">({l.name})</span>
                              {l.badgeText && (
                                <span className="text-[9px] bg-emerald-100 text-emerald-800 font-medium px-1 py-0.2 rounded border border-emerald-200">
                                  {l.badgeText}
                                </span>
                              )}
                            </div>
                            <span className="text-[10px] text-slate-400 font-normal">{l.region}</span>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Section 2: National & Official Languages */}
                  <div className="px-3 py-1 text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between bg-slate-100 mx-2 rounded-md mt-2 mb-1">
                    <span>National & Official (राष्ट्रीय / आधिकारिक)</span>
                  </div>

                  <div className="space-y-0.5 px-1.5">
                    {SUPPORTED_LANGUAGES.filter((l) => !l.isTribal).map((l) => {
                      const isSelected = (lang || 'EN') === l.code;
                      return (
                        <button
                          key={l.code}
                          onClick={() => {
                            if (onSetLang) onSetLang(l.code);
                            setShowLangMenu(false);
                          }}
                          className={`w-full px-3 py-2 text-left flex items-center justify-between rounded-xl transition cursor-pointer ${
                            isSelected
                              ? 'bg-sky-50 text-[#0084d1] font-bold border border-sky-200'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-900">{l.nativeName}</span>
                            <span className="text-[10px] text-slate-500">({l.name})</span>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-[#0084d1] shrink-0 ml-2" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Authentication Buttons (Matches Reference Screenshot Exactly) */}
            {!currentUser ? (
              <div className="flex items-center gap-2 shrink-0">
                {/* Clean White Login Button with Blue Border */}
                <button
                  onClick={() => onOpenAuthModal('STUDENT_LOGIN')}
                  className="px-4 py-1.5 rounded-lg text-xs font-bold text-[#0084d1] border border-[#0084d1] hover:bg-sky-50 transition shadow-2xs cursor-pointer whitespace-nowrap"
                  title="Student & Citizen Login"
                >
                  {t.login}
                </button>
                
                {/* Solid Blue Register Button */}
                <button
                  onClick={() => onOpenAuthModal('STUDENT_REGISTER')}
                  className="px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-[#0084d1] hover:bg-[#0074b8] transition shadow-xs cursor-pointer whitespace-nowrap"
                  title="New Registration (OTR)"
                >
                  {t.register}
                </button>
              </div>
            ) : (
              /* User Profile Badge (When logged in) */
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 p-1 sm:px-3 sm:py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition text-left cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-[#0084d1] text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
                    {currentUser.name?.charAt(0) || 'U'}
                  </div>
                  <div className="hidden sm:block text-left">
                    <div className="text-xs font-bold text-slate-900 line-clamp-1">
                      {currentUser.name}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      {roleLabelMap[currentUser.role]?.label || currentUser.role}
                    </div>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white border border-slate-200 rounded-xl shadow-2xl z-50 p-2 animate-scale-up max-h-[85vh] flex flex-col">
                    {/* Header info */}
                    <div className="px-3 py-2 border-b border-slate-100 mb-1 shrink-0 bg-slate-50/80 rounded-lg">
                      <p className="text-xs font-bold text-slate-900">{currentUser.name}</p>
                      <p className="text-[10px] text-slate-500 truncate">{currentUser.email}</p>
                      <span className={`inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full font-bold border ${roleLabelMap[currentUser.role]?.badgeColor || ''}`}>
                        {roleLabelMap[currentUser.role]?.label || currentUser.role}
                      </span>
                    </div>

                    {/* Scrollable Persona Switcher Container */}
                    <div className="py-1 flex-1 overflow-y-auto max-h-52 pr-1 space-y-1">
                      <div className="sticky top-0 bg-white py-1 px-2 z-10 border-b border-slate-100 flex items-center justify-between">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          {t.switchPersona}
                        </p>
                        <span className="text-[9px] text-[#0084d1] font-bold flex items-center gap-0.5">
                          <span>Scroll down</span>
                          <ChevronDown className="w-3 h-3 animate-bounce" />
                        </span>
                      </div>
                      <div className="space-y-0.5 pt-1">
                        {allDemoUsers.map((u) => (
                          <button
                            key={u.id}
                            onClick={() => {
                              onSwitchUser(u);
                              setShowUserMenu(false);
                            }}
                            className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-xs transition cursor-pointer ${
                              currentUser.id === u.id ? 'bg-sky-50 text-[#0084d1] font-bold border border-sky-200' : 'hover:bg-slate-50 text-slate-700'
                            }`}
                          >
                            <div className="min-w-0">
                              <span className="truncate block font-semibold">{u.name}</span>
                              <span className="text-[10px] text-slate-400 truncate block">{u.role.replace('_', ' ')}</span>
                            </div>
                            <span className="text-[9px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded font-mono uppercase ml-2 shrink-0">
                              {u.role.split('_')[0]}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Sign Out Action: Sticky / Docked at Bottom */}
                    <div className="border-t border-slate-200 mt-2 pt-2 shrink-0">
                      <button
                        onClick={() => {
                          setShowUserMenu(false);
                          onLogout();
                        }}
                        className="w-full flex items-center justify-center gap-2 p-2 rounded-lg text-xs text-rose-700 hover:bg-rose-50 font-bold transition cursor-pointer border border-rose-200/80 bg-rose-50/40 shadow-2xs"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>{t.signOut}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Official Digital India Logo (Rightmost item in reference) */}
            <div className="hidden lg:flex items-center pl-2.5 border-l border-slate-200 shrink-0">
              <img
                src={digitalIndiaLogo}
                alt="Digital India - Power To Empower"
                className="h-8 sm:h-9 w-auto object-contain hover:scale-105 transition-transform"
                title="Digital India - Power To Empower"
              />
            </div>

            {/* 3-Dot Features Button */}
            <button
              onClick={onOpenThreeDotMenu}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition shadow-2xs flex items-center gap-1 cursor-pointer"
              title="All Services & Features Menu"
            >
              <div className="flex items-center gap-0.5">
                <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                <span className="w-1 h-1 rounded-full bg-slate-700"></span>
              </div>
              <span className="hidden sm:inline text-[11px]">{t.menu}</span>
            </button>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TIER 2: ROLE-AWARE MAIN NAVIGATION BAR STRIP */}
      {/* Shows Officer Workbench tools when on Officer Desk, Admin tools when Admin, */}
      {/* and Student/Public navigation for Citizen/Student view (Resolves User Request) */}
      {/* ========================================================================= */}
      {(() => {
        const isOfficerUser = currentUser?.role === 'MOTA_OFFICER' || currentUser?.role === 'INSTITUTION_VERIFIER';
        const isAdminUser = currentUser?.role === 'ADMIN' || currentUser?.role === 'SUPER_ADMIN';

        const isOfficerDesk = isOfficerUser || activeTab === 'officer';
        const isAdminDesk = !isOfficerDesk && (isAdminUser || activeTab === 'admin');
        const isStudentDesk = !isOfficerDesk && !isAdminDesk && (activeTab === 'student' || currentUser?.role === 'STUDENT');

        return (
          <div className="border-t border-slate-200/80 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-11 sm:h-12 gap-2">
                
                {/* ------------------------------------------------------------- */}
                {/* CASE A: OFFICER / INO WORKBENCH NAVIGATION (Zero student strip) */}
                {/* ------------------------------------------------------------- */}
                {isOfficerDesk ? (
                  <nav className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto scrollbar-none py-1">
                    <button
                      onClick={() => onTabChange('officer', 'verification')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition shadow-2xs cursor-pointer shrink-0 ${
                        activeTab === 'officer'
                          ? 'bg-[#0070ba] text-white'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{t.navOfficerWorkbench}</span>
                    </button>

                    <button
                      onClick={() => onTabChange('officer', 'verification')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer shrink-0"
                    >
                      <FileCheck2 className="w-3.5 h-3.5 text-[#0084d1]" />
                      <span>{t.navVerificationDesk}</span>
                    </button>

                    <button
                      onClick={() => onTabChange('officer', 'scrutiny')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer shrink-0"
                    >
                      <Scale className="w-3.5 h-3.5 text-[#0084d1]" />
                      <span>{t.navScrutinyBench}</span>
                    </button>

                    <button
                      onClick={() => onTabChange('officer', 'selection')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer shrink-0"
                    >
                      <Award className="w-3.5 h-3.5 text-[#0084d1]" />
                      <span>{t.navSelectionAward}</span>
                    </button>

                    <button
                      onClick={() => onTabChange('officer', 'handover')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer shrink-0"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#0084d1]" />
                      <span>{t.navHandover}</span>
                    </button>

                    <button
                      onClick={() => onTabChange('officer', 'sentinel')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-800 hover:bg-amber-50 transition cursor-pointer shrink-0"
                    >
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                      <span>{t.navSentinel}</span>
                    </button>

                    <button
                      onClick={() => onTabChange('officer', 'intelligence')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-800 hover:bg-amber-50 transition cursor-pointer shrink-0"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>{t.navIntelligence}</span>
                    </button>

                    <button
                      onClick={() => onTabChange('delay-monitor')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer shrink-0 ${
                        activeTab === 'delay-monitor' ? 'bg-sky-50 text-[#0070ba] font-bold' : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{t.navSlaMonitor}</span>
                    </button>

                    <button
                      onClick={() => onTabChange('home')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer shrink-0"
                    >
                      <Home className="w-3.5 h-3.5" />
                      <span>{t.navPublicPortal}</span>
                    </button>
                  </nav>
                ) : isAdminDesk ? (
                  /* ------------------------------------------------------------- */
                  /* CASE B: SYSTEM ADMIN NAVIGATION (Zero student strip) */
                  /* ------------------------------------------------------------- */
                  <nav className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto scrollbar-none py-1">
                    <button
                      onClick={() => onTabChange('admin', 'showcase')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition shadow-2xs cursor-pointer shrink-0 ${
                        activeTab === 'admin'
                          ? 'bg-[#0070ba] text-white'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <Shield className="w-3.5 h-3.5" />
                      <span>{t.navAdmin}</span>
                    </button>

                    <button
                      onClick={() => onTabChange('admin', 'configurator')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer shrink-0"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5 text-[#0084d1]" />
                      <span>{t.navRulesBuilder}</span>
                    </button>

                    <button
                      onClick={() => onTabChange('admin', 'compiler')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer shrink-0"
                    >
                      <Layers className="w-3.5 h-3.5 text-[#0084d1]" />
                      <span>{t.navCompiler}</span>
                    </button>

                    <button
                      onClick={() => onTabChange('admin', 'audit')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer shrink-0"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0084d1]" />
                      <span>{t.navAudit}</span>
                    </button>

                    <button
                      onClick={() => onTabChange('analytics')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer shrink-0 ${
                        activeTab === 'analytics' ? 'bg-sky-50 text-[#0070ba] font-bold' : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <BarChart3 className="w-3.5 h-3.5 text-slate-500" />
                      <span>{t.navAnalytics}</span>
                    </button>

                    <button
                      onClick={() => onTabChange('delay-monitor')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer shrink-0 ${
                        activeTab === 'delay-monitor' ? 'bg-sky-50 text-[#0070ba] font-bold' : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{t.navSlaMonitor}</span>
                    </button>

                    <button
                      onClick={() => onTabChange('home')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer shrink-0"
                    >
                      <Home className="w-3.5 h-3.5" />
                      <span>{t.navPublicPortal}</span>
                    </button>
                  </nav>
                ) : isStudentDesk ? (
                  /* ------------------------------------------------------------- */
                  /* CASE C: STUDENT WORKBENCH NAVIGATION (Strictly for Student view) */
                  /* ------------------------------------------------------------- */
                  <nav className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto scrollbar-none py-1">
                    
                    {/* 1. Home Tab */}
                    <button
                      onClick={() => onTabChange('home')}
                      className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition shadow-2xs cursor-pointer shrink-0"
                    >
                      <Home className="w-3.5 h-3.5" />
                      <span>{t.navHome}</span>
                    </button>

                    {/* 2. Scholarships (Shows all 4 schemes) */}
                    <div className="relative shrink-0">
                      <div className="flex items-center bg-transparent rounded-lg">
                        <button
                          onClick={() => {
                            onTabChange('student', 'schemes');
                          }}
                          className="flex items-center gap-1 pl-3 pr-1 py-1.5 rounded-l-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer"
                          title="View all 4 Central ST Scholarships"
                        >
                          <Award className="w-3.5 h-3.5 text-[#0084d1]" />
                          <span>{t.navScholarships}</span>
                        </button>
                        <button
                          onClick={() => setShowScholarshipsDropdown(!showScholarshipsDropdown)}
                          className="pr-2 pl-1 py-1.5 rounded-r-lg text-xs transition cursor-pointer text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                          aria-label="Toggle all 4 scholarships"
                        >
                          <ChevronDown className="w-3 h-3 text-slate-400" />
                        </button>
                      </div>

                      {showScholarshipsDropdown && (
                        <div className="absolute left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 text-xs animate-scale-up">
                          <div className="px-3.5 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                            {t.all4Schemes}
                          </div>
                          
                          {/* Scheme 1: NFST */}
                          <button
                            onClick={() => {
                              onTabChange('student', 'schemes');
                              setShowScholarshipsDropdown(false);
                            }}
                            className="w-full px-3.5 py-2 text-left hover:bg-slate-50 transition cursor-pointer flex flex-col"
                          >
                            <span className="font-bold text-slate-900 flex items-center justify-between">
                              <span>1. {schemesT.NFST.title}</span>
                              <span className="text-[10px] bg-sky-50 text-[#0084d1] px-1.5 py-0.2 rounded font-bold">{schemesT.NFST.slots}</span>
                            </span>
                            <span className="text-[11px] text-slate-500">{schemesT.NFST.level}</span>
                          </button>

                          {/* Scheme 2: NOS */}
                          <button
                            onClick={() => {
                              onTabChange('global-bridge');
                              setShowScholarshipsDropdown(false);
                            }}
                            className="w-full px-3.5 py-2 text-left hover:bg-slate-50 transition cursor-pointer flex flex-col"
                          >
                            <span className="font-bold text-slate-900 flex items-center justify-between">
                              <span>2. {schemesT.NOS.title}</span>
                              <span className="text-[10px] bg-emerald-50 text-emerald-800 px-1.5 py-0.2 rounded font-bold">{schemesT.NOS.slots}</span>
                            </span>
                            <span className="text-[11px] text-slate-500">{schemesT.NOS.level}</span>
                          </button>

                          {/* Scheme 3: Top Class */}
                          <button
                            onClick={() => {
                              onTabChange('student', 'schemes');
                              setShowScholarshipsDropdown(false);
                            }}
                            className="w-full px-3.5 py-2 text-left hover:bg-slate-50 transition cursor-pointer flex flex-col"
                          >
                            <span className="font-bold text-slate-900 flex items-center justify-between">
                              <span>3. {schemesT.TOP_CLASS.title}</span>
                              <span className="text-[10px] bg-purple-50 text-purple-700 px-1.5 py-0.2 rounded font-bold">{schemesT.TOP_CLASS.slots}</span>
                            </span>
                            <span className="text-[11px] text-slate-500">{schemesT.TOP_CLASS.level}</span>
                          </button>

                          {/* Scheme 4: Post Matric */}
                          <button
                            onClick={() => {
                              onTabChange('student', 'schemes');
                              setShowScholarshipsDropdown(false);
                            }}
                            className="w-full px-3.5 py-2 text-left hover:bg-slate-50 transition cursor-pointer flex flex-col"
                          >
                            <span className="font-bold text-slate-900 flex items-center justify-between">
                              <span>4. {schemesT.POST_MATRIC.title}</span>
                              <span className="text-[10px] bg-amber-50 text-amber-800 px-1.5 py-0.2 rounded font-bold">{schemesT.POST_MATRIC.slots}</span>
                            </span>
                            <span className="text-[11px] text-slate-500">{schemesT.POST_MATRIC.level}</span>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* 3. My Applications */}
                    <button
                      onClick={() => onTabChange('student', 'dashboard')}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-[#0070ba] bg-sky-50 transition cursor-pointer shrink-0"
                      title="Direct access to your applications"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#0084d1]" />
                      <span>{t.navMyApplications}</span>
                    </button>

                    {/* 4. Documents Vault */}
                    <button
                      onClick={() => onTabChange('student', 'documents')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer shrink-0"
                      title="Document Vault & Source-Verified Certificates"
                    >
                      <FolderOpen className="w-3.5 h-3.5 text-[#0084d1]" />
                      <span>{t.navDocuments}</span>
                    </button>

                    {/* 5. Deficiency Desk */}
                    <button
                      onClick={() => onTabChange('student', 'deficiency')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer shrink-0"
                      title="Officer Observations & Deficiency Clarifications"
                    >
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                      <span>{t.navDeficiency}</span>
                    </button>

                    {/* 6. Timeline */}
                    <button
                      onClick={() => onTabChange('student', 'timeline')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer shrink-0"
                      title="Application Verification Progress Timeline"
                    >
                      <Clock className="w-3.5 h-3.5 text-[#0084d1]" />
                      <span>{t.navTimeline}</span>
                    </button>

                    {/* 7. Post Selection */}
                    <button
                      onClick={() => onTabChange('student', 'post_selection')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer shrink-0"
                      title="Post Selection Milestones & Direct Benefit Transfer"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{t.navPostSelection}</span>
                    </button>

                    {/* 8. Grievance Desk */}
                    <button
                      onClick={() => onTabChange('student', 'grievance')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer shrink-0"
                      title="File or Track Grievance"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#0084d1]" />
                      <span>{t.navGrievance}</span>
                    </button>

                    {/* 9. Support */}
                    <button
                      onClick={() => onTabChange('chatbot')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer shrink-0"
                      title="AI Mitra Citizen Support Assistant"
                    >
                      <Headphones className="w-3.5 h-3.5 text-[#0084d1]" />
                      <span>{t.navSupport}</span>
                    </button>

                    {/* 10. SLA Monitor */}
                    <button
                      onClick={() => onTabChange('delay-monitor')}
                      className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition cursor-pointer shrink-0"
                      title="Public Service Guarantee & Disposal Deadlines"
                    >
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{t.navSlaMonitor}</span>
                    </button>
                  </nav>
                ) : (
                  /* ------------------------------------------------------------- */
                  /* CASE D: CITIZEN & PUBLIC HOME NAVIGATION (Clean Public Portal) */
                  /* ------------------------------------------------------------- */
                  <nav className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto scrollbar-none py-1">
                    <button
                      onClick={() => {
                        onTabChange('home');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#0070ba] text-white transition shadow-2xs cursor-pointer shrink-0"
                    >
                      <Home className="w-3.5 h-3.5" />
                      <span>{t.navHome}</span>
                    </button>

                    {/* All 4 Scholarships Dropdown */}
                    <div className="relative shrink-0">
                      <div className="flex items-center bg-transparent rounded-lg">
                        <button
                          onClick={() => {
                            const elem = document.getElementById('schemes-section');
                            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="flex items-center gap-1 pl-3 pr-1 py-1.5 rounded-l-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer"
                        >
                          <Award className="w-3.5 h-3.5 text-[#0084d1]" />
                          <span>{t.navScholarships}</span>
                        </button>
                        <button
                          onClick={() => setShowScholarshipsDropdown(!showScholarshipsDropdown)}
                          className="pr-2 pl-1 py-1.5 rounded-r-lg text-xs transition cursor-pointer text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                        >
                          <ChevronDown className="w-3 h-3 text-slate-400" />
                        </button>
                      </div>

                      {showScholarshipsDropdown && (
                        <div className="absolute left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 text-xs animate-scale-up">
                          <div className="px-3.5 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                            {t.all4Schemes}
                          </div>
                          
                          <button
                            onClick={() => {
                              setShowScholarshipsDropdown(false);
                              const elem = document.getElementById('schemes-section');
                              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-full px-3.5 py-2 text-left hover:bg-slate-50 transition cursor-pointer flex flex-col"
                          >
                            <span className="font-bold text-slate-900 flex items-center justify-between">
                              <span>1. {schemesT.NFST.title}</span>
                              <span className="text-[10px] bg-sky-50 text-[#0084d1] px-1.5 py-0.2 rounded font-bold">{schemesT.NFST.slots}</span>
                            </span>
                            <span className="text-[11px] text-slate-500">{schemesT.NFST.level}</span>
                          </button>

                          <button
                            onClick={() => {
                              setShowScholarshipsDropdown(false);
                              onTabChange('global-bridge');
                            }}
                            className="w-full px-3.5 py-2 text-left hover:bg-slate-50 transition cursor-pointer flex flex-col"
                          >
                            <span className="font-bold text-slate-900 flex items-center justify-between">
                              <span>2. {schemesT.NOS.title}</span>
                              <span className="text-[10px] bg-emerald-50 text-emerald-800 px-1.5 py-0.2 rounded font-bold">{schemesT.NOS.slots}</span>
                            </span>
                            <span className="text-[11px] text-slate-500">{schemesT.NOS.level}</span>
                          </button>

                          <button
                            onClick={() => {
                              setShowScholarshipsDropdown(false);
                              const elem = document.getElementById('schemes-section');
                              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-full px-3.5 py-2 text-left hover:bg-slate-50 transition cursor-pointer flex flex-col"
                          >
                            <span className="font-bold text-slate-900 flex items-center justify-between">
                              <span>3. {schemesT.TOP_CLASS.title}</span>
                              <span className="text-[10px] bg-purple-50 text-purple-700 px-1.5 py-0.2 rounded font-bold">{schemesT.TOP_CLASS.slots}</span>
                            </span>
                            <span className="text-[11px] text-slate-500">{schemesT.TOP_CLASS.level}</span>
                          </button>

                          <button
                            onClick={() => {
                              setShowScholarshipsDropdown(false);
                              const elem = document.getElementById('schemes-section');
                              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-full px-3.5 py-2 text-left hover:bg-slate-50 transition cursor-pointer flex flex-col"
                          >
                            <span className="font-bold text-slate-900 flex items-center justify-between">
                              <span>4. {schemesT.POST_MATRIC.title}</span>
                              <span className="text-[10px] bg-amber-50 text-amber-800 px-1.5 py-0.2 rounded font-bold">{schemesT.POST_MATRIC.slots}</span>
                            </span>
                            <span className="text-[11px] text-slate-500">{schemesT.POST_MATRIC.level}</span>
                          </button>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => {
                        const trigger = document.querySelector('button[type="button"][class*="bg-[#00a3b8]"]') as HTMLButtonElement;
                        if (trigger) trigger.click();
                        else {
                          const elem = document.getElementById('schemes-section');
                          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer shrink-0"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>{currentLang === 'EN' ? 'Check Eligibility' : 'पात्रता जांचें'}</span>
                    </button>

                    <button
                      onClick={() => onTabChange('chatbot')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer shrink-0"
                    >
                      <Headphones className="w-3.5 h-3.5 text-[#0084d1]" />
                      <span>{t.navSupport}</span>
                    </button>

                    {/* Quick Access to Student Workspace if user logged in as Student */}
                    {currentUser?.role === 'STUDENT' && (
                      <button
                        onClick={() => onTabChange('student', 'dashboard')}
                        className="ml-2 flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold text-[#0070ba] bg-sky-50 border border-sky-200 hover:bg-sky-100 transition cursor-pointer shrink-0"
                      >
                        <span>{currentLang === 'EN' ? 'My Applications ➔' : 'मेरे आवेदन ➔'}</span>
                      </button>
                    )}
                  </nav>
                )}

                {/* Right Status / Motto Display */}
                <div className="hidden lg:flex items-center gap-2 text-[11px] font-medium text-slate-600 shrink-0">
                  {isOfficerDesk ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Designated Verification & Scrutiny Desk</span>
                    </span>
                  ) : isAdminDesk ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-50 text-[#0070ba] border border-sky-200 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0084d1] animate-pulse" />
                      <span>Policy Governance & Dynamic Rules Engine</span>
                    </span>
                  ) : isStudentDesk ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-50 text-[#0070ba] border border-sky-200 font-bold">
                      <span>Scholar & Beneficiary Workspace · AY 2026-27</span>
                    </span>
                  ) : (
                    <>
                      <span className="h-1.5 w-7 bg-linear-to-r from-orange-500 via-white to-emerald-600 rounded-full border border-slate-200 inline-block" />
                      <span>{t.motto}</span>
                    </>
                  )}
                </div>

              </div>
            </div>
          </div>
        );
      })()}

    </header>
  );
};
