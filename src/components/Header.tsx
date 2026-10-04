import React, { useState } from 'react';
import emblemLogo from '../assets/emblem.svg';
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
import { translations, Language } from '../translations';

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
  lang?: 'EN' | 'HI';
  onSetLang?: (lang: 'EN' | 'HI') => void;
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

  const t = translations[lang || 'EN'].header;
  const schemesT = translations[lang || 'EN'].schemes;

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
          
          {/* Left Brand Identity: Emblem + GoI + National Scholarship Portal */}
          <div 
            onClick={() => onTabChange('home')}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none min-w-0"
            title="National Scholarship Portal - Ministry of Tribal Affairs"
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

            {/* National Scholarship Portal Brand */}
            <div className="hidden sm:flex flex-col justify-center min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-black text-sm sm:text-base text-slate-900 tracking-tight leading-tight">
                  National Scholarship Portal
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="h-1.5 w-6 bg-linear-to-r from-orange-500 via-white to-emerald-600 rounded-full border border-slate-300 inline-block" />
                <span className="text-[10px] sm:text-[11px] font-bold text-[#0084d1]">
                  For ST Students
                </span>
              </div>
              <p className="text-[9px] text-slate-400 font-medium leading-none truncate mt-0.5 hidden lg:block">
                Access · Learn · Grow · Build a Brighter India
              </p>
            </div>
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

            {/* Language Selector: Globe Icon + English ⌵ */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 transition cursor-pointer border border-transparent hover:border-slate-200"
                title="Change Portal Language"
              >
                <Globe className="w-3.5 h-3.5 text-[#0084d1]" />
                <span className="font-bold">{lang === 'EN' ? 'English' : 'हिन्दी'}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {showLangMenu && (
                <div className="absolute right-0 mt-1.5 w-32 bg-white rounded-xl shadow-lg border border-slate-200 py-1 z-50 text-xs font-medium animate-scale-up">
                  <button
                    onClick={() => {
                      if (onSetLang) onSetLang('EN');
                      setShowLangMenu(false);
                    }}
                    className={`w-full px-3 py-2 text-left flex items-center justify-between hover:bg-slate-50 transition cursor-pointer ${
                      lang === 'EN' ? 'font-bold text-[#0084d1]' : 'text-slate-700'
                    }`}
                  >
                    <span>English</span>
                    {lang === 'EN' && <Check className="w-3.5 h-3.5 text-[#0084d1]" />}
                  </button>
                  <button
                    onClick={() => {
                      if (onSetLang) onSetLang('HI');
                      setShowLangMenu(false);
                    }}
                    className={`w-full px-3 py-2 text-left flex items-center justify-between hover:bg-slate-50 transition cursor-pointer ${
                      lang === 'HI' ? 'font-bold text-[#0084d1]' : 'text-slate-700'
                    }`}
                  >
                    <span>हिन्दी</span>
                    {lang === 'HI' && <Check className="w-3.5 h-3.5 text-[#0084d1]" />}
                  </button>
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
                  <div className="absolute right-0 mt-2 w-72 bg-white border border-slate-200 rounded-xl shadow-xl z-50 p-2 animate-scale-up">
                    <div className="px-3 py-2 border-b border-slate-100 mb-1">
                      <p className="text-[11px] font-bold text-slate-800">{currentUser.name}</p>
                      <p className="text-[10px] text-slate-500 truncate">{currentUser.email}</p>
                      <span className={`inline-block mt-1 text-[10px] px-1.5 py-0.5 rounded border ${roleLabelMap[currentUser.role]?.badgeColor || ''}`}>
                        {roleLabelMap[currentUser.role]?.label || currentUser.role}
                      </span>
                    </div>

                    {/* Persona Switcher for Quick Evaluation */}
                    <div className="py-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
                        {t.switchPersona}
                      </p>
                      <div className="space-y-0.5">
                        {allDemoUsers.map((u) => (
                          <button
                            key={u.id}
                            onClick={() => {
                              onSwitchUser(u);
                              setShowUserMenu(false);
                            }}
                            className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-xs transition cursor-pointer ${
                              currentUser.id === u.id ? 'bg-sky-50 text-[#0084d1] font-bold' : 'hover:bg-slate-50 text-slate-700'
                            }`}
                          >
                            <span className="truncate">{u.name}</span>
                            <span className="text-[9px] text-slate-400 uppercase font-mono ml-2 shrink-0">
                              {u.role.replace('_', ' ')}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-slate-100 mt-2 pt-1">
                      <button
                        onClick={() => {
                          setShowUserMenu(false);
                          onLogout();
                        }}
                        className="w-full flex items-center gap-2 p-2 rounded-lg text-left text-xs text-rose-700 hover:bg-rose-50 font-semibold transition cursor-pointer"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>{t.signOut}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Digital India Brand Emblem (Rightmost item in reference) */}
            <div className="hidden xl:flex items-center gap-1.5 pl-2 border-l border-slate-200">
              <div className="flex flex-col text-right">
                <span className="font-black text-xs text-slate-800 tracking-tight leading-tight flex items-center gap-1 justify-end">
                  <span className="text-[#0084d1]">Digital</span>
                  <span className="text-orange-500">India</span>
                </span>
                <span className="text-[9px] text-slate-400 font-semibold leading-none">
                  Power To Empower
                </span>
              </div>
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
        const isOfficer = activeTab === 'officer' || currentUser?.role === 'MOTA_OFFICER' || currentUser?.role === 'INSTITUTION_VERIFIER';
        const isAdmin = activeTab === 'admin' || currentUser?.role === 'ADMIN' || currentUser?.role === 'SUPER_ADMIN';

        return (
          <div className="border-t border-slate-200/80 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-11 sm:h-12 gap-2">
                
                {/* ------------------------------------------------------------- */}
                {/* CASE A: OFFICER / INO WORKBENCH NAVIGATION (No student strip) */}
                {/* ------------------------------------------------------------- */}
                {isOfficer ? (
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
                ) : isAdmin ? (
                  /* ------------------------------------------------------------- */
                  /* CASE B: SYSTEM ADMIN NAVIGATION (No student strip) */
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
                ) : (
                  /* ------------------------------------------------------------- */
                  /* CASE C: STUDENT & CITIZEN PORTAL (All Buttons Functional) */
                  /* ------------------------------------------------------------- */
                  <nav className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto scrollbar-none py-1">
                    
                    {/* 1. Home Tab */}
                    <button
                      onClick={() => onTabChange('home')}
                      className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold transition shadow-2xs cursor-pointer shrink-0 ${
                        activeTab === 'home'
                          ? 'bg-[#0070ba] text-white'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <Home className="w-3.5 h-3.5" />
                      <span>{t.navHome}</span>
                    </button>

                    {/* 2. Scholarships (Shows all 4 schemes) */}
                    <div className="relative shrink-0">
                      <div className="flex items-center bg-transparent rounded-lg">
                        <button
                          onClick={() => {
                            if (activeTab === 'home') {
                              const elem = document.getElementById('schemes-section');
                              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                            } else {
                              onTabChange('student', 'schemes');
                            }
                          }}
                          className={`flex items-center gap-1 pl-3 pr-1 py-1.5 rounded-l-lg text-xs font-semibold transition cursor-pointer ${
                            activeTab === 'global-bridge' || activeTab === 'student'
                              ? 'text-[#0070ba] font-bold bg-sky-50'
                              : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                          }`}
                          title="View all 4 Central ST Scholarships"
                        >
                          <Award className="w-3.5 h-3.5 text-[#0084d1]" />
                          <span>{t.navScholarships}</span>
                        </button>
                        <button
                          onClick={() => setShowScholarshipsDropdown(!showScholarshipsDropdown)}
                          className={`pr-2 pl-1 py-1.5 rounded-r-lg text-xs transition cursor-pointer ${
                            activeTab === 'global-bridge' || activeTab === 'student'
                              ? 'text-[#0070ba] font-bold bg-sky-50'
                              : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                          }`}
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
                              onTabChange('home');
                              setShowScholarshipsDropdown(false);
                              setTimeout(() => {
                                const elem = document.getElementById('schemes-section');
                                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                              }, 100);
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
                              onTabChange('home');
                              setShowScholarshipsDropdown(false);
                              setTimeout(() => {
                                const elem = document.getElementById('schemes-section');
                                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                              }, 100);
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
                              onTabChange('home');
                              setShowScholarshipsDropdown(false);
                              setTimeout(() => {
                                const elem = document.getElementById('schemes-section');
                                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                              }, 100);
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
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer shrink-0 ${
                        activeTab === 'student'
                          ? 'text-[#0070ba] font-bold bg-sky-50'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                      }`}
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
                      onClick={() => onTabChange('student', 'deficiency')}
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
                      className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer shrink-0 ${
                        activeTab === 'delay-monitor' ? 'bg-sky-50 text-[#0070ba] font-bold' : 'text-slate-600 hover:bg-slate-100'
                      }`}
                      title="Public Service Guarantee & Disposal Deadlines"
                    >
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{t.navSlaMonitor}</span>
                    </button>
                  </nav>
                )}

                {/* Right Status / Motto Display */}
                <div className="hidden lg:flex items-center gap-2 text-[11px] font-medium text-slate-600 shrink-0">
                  {isOfficer ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Designated Verification & Scrutiny Desk</span>
                    </span>
                  ) : isAdmin ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-50 text-[#0070ba] border border-sky-200 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0084d1] animate-pulse" />
                      <span>Policy Governance & Dynamic Rules Engine</span>
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
