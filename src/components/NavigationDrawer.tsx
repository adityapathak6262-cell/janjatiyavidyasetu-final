import React, { useState, useMemo, useEffect } from 'react';
import {
  X,
  Search,
  Home,
  GraduationCap,
  Building2,
  UserCheck,
  Globe,
  RefreshCw,
  Clock,
  Layers,
  BarChart3,
  FileCheck2,
  FileText,
  Shield,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Bot,
  Sparkles,
  Award,
  Lock,
  LogIn,
  UserPlus,
  Landmark,
  CreditCard,
  AlertTriangle,
  FolderLock,
  Compass,
  CheckCircle2,
  Bell,
  Scale,
  MoreVertical,
  Activity,
  SlidersHorizontal
} from 'lucide-react';
import { User } from '../api';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User | null;
  allDemoUsers?: User[];
  activeTab: string;
  onNavigateTab: (tab: string, subTab?: string) => void;
  onSwitchUser?: (user: User) => void;
  onOpenAuthModal: (mode: 'STUDENT_LOGIN' | 'STUDENT_REGISTER' | 'ADMIN_LOGIN') => void;
  onOpenChatbot?: () => void;
  onOpenNotifications?: () => void;
}

interface MenuItem {
  id: string;
  label: string;
  desc: string;
  icon: any;
  tab: string;
  subTab?: string;
  roles?: string[];
  badge?: string;
  action?: () => void;
}

interface MenuCategory {
  id: string;
  title: string;
  color: string;
  badgeBg: string;
  borderColor: string;
  items: MenuItem[];
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  currentUser,
  allDemoUsers = [],
  activeTab,
  onNavigateTab,
  onSwitchUser,
  onOpenAuthModal,
  onOpenChatbot,
  onOpenNotifications,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('ALL');

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleItemClick = (tab: string, subTab?: string) => {
    onNavigateTab(tab, subTab);
    onClose();
  };

  // Safe user profile details
  const userName = currentUser?.name || 'Registered User';
  const userRole = (currentUser?.role || 'STUDENT').replace(/_/g, ' ');
  const userInitial = userName.charAt(0) || 'U';

  // Comprehensive feature list for 3-dot overflow menu (Harmonized with First Page Palette)
  const menuCategories: MenuCategory[] = [
    {
      id: 'core',
      title: 'Portal Overview & Central Schemes',
      color: 'text-[#0070ba]',
      badgeBg: 'bg-sky-50',
      borderColor: 'border-sky-200',
      items: [
        {
          id: 'home',
          label: 'Portal Home',
          desc: 'Official notices, eligibility guidelines & announcements',
          icon: Home,
          tab: 'home',
          roles: ['ALL'],
          badge: 'Overview',
        },
        {
          id: 'schemes-overview',
          label: 'Central Schemes Directory',
          desc: 'Guidelines for NFST, NOS & Top-Class Education for ST Students',
          icon: Award,
          tab: 'home',
          roles: ['ALL'],
          badge: 'AY 2026-27',
        },
        {
          id: 'global-bridge-nos',
          label: 'National Overseas Scholarship (NOS)',
          desc: 'Foreign university admissions, quota allocation & embassy payments',
          icon: Globe,
          tab: 'global-bridge',
          roles: ['ALL'],
          badge: 'NOS 2021-26',
        },
      ],
    },
    {
      id: 'students',
      title: 'Student & Applicant Services',
      color: 'text-[#0084d1]',
      badgeBg: 'bg-sky-50',
      borderColor: 'border-sky-200',
      items: [
        {
          id: 'student-dashboard',
          label: 'Student Dashboard',
          desc: 'Track active applications, sanction orders & official notices',
          icon: GraduationCap,
          tab: 'student',
          subTab: 'dashboard',
          roles: ['STUDENT', 'ADMIN', 'SUPER_ADMIN'],
          badge: 'Primary',
        },
        {
          id: 'student-applications',
          label: 'Application Form (Fresh / Renewal)',
          desc: 'Submit scholarship application for Academic Year 2026-27',
          icon: FileText,
          tab: 'student',
          subTab: 'schemes',
          roles: ['STUDENT', 'ADMIN', 'SUPER_ADMIN'],
        },
        {
          id: 'student-documents',
          label: 'Digital Document Repository',
          desc: 'Caste, income and academic certificates verified from source',
          icon: FolderLock,
          tab: 'student',
          subTab: 'documents',
          roles: ['STUDENT', 'ADMIN', 'SUPER_ADMIN'],
          badge: 'Verified',
        },
        {
          id: 'student-eligibility',
          label: 'Eligibility Check & Criteria',
          desc: 'Review qualifying norms based on income ceiling and degree rules',
          icon: Compass,
          tab: 'student',
          subTab: 'schemes',
          roles: ['STUDENT', 'ADMIN', 'SUPER_ADMIN'],
        },
        {
          id: 'student-continuity',
          label: 'Scholarship Continuity & Renewal',
          desc: 'Annual academic progression and continuation for ongoing scholars',
          icon: RefreshCw,
          tab: 'continuity',
          roles: ['INSTITUTION_VERIFIER', 'MOTA_OFFICER', 'ADMIN', 'SUPER_ADMIN'],
          badge: 'Renewal',
        },
        {
          id: 'student-deficiency',
          label: 'Deficiency & Clarification Desk',
          desc: 'Review observations raised by scrutiny officers and upload replies',
          icon: AlertTriangle,
          tab: 'student',
          subTab: 'deficiency',
          roles: ['STUDENT', 'ADMIN', 'SUPER_ADMIN'],
        },
        {
          id: 'student-tracking',
          label: 'Application Status Timeline',
          desc: 'Track stage-wise progress from Institute to Ministry Level-2 approval',
          icon: Activity,
          tab: 'student',
          subTab: 'timeline',
          roles: ['STUDENT', 'ADMIN', 'SUPER_ADMIN'],
        },
        {
          id: 'student-dbt',
          label: 'Disbursement & Direct Benefit Transfer',
          desc: 'Direct Benefit Transfer status and stipend release orders',
          icon: CreditCard,
          tab: 'student',
          subTab: 'post_selection',
          roles: ['STUDENT', 'ADMIN', 'SUPER_ADMIN'],
        },
      ],
    },
    {
      id: 'institutes',
      title: 'Institutional Verification (INO)',
      color: 'text-[#0b3366]',
      badgeBg: 'bg-blue-50',
      borderColor: 'border-blue-200',
      items: [
        {
          id: 'institute-desk',
          label: 'Institute Verification Desk',
          desc: 'Application verification by College/University Nodal Officers (INO)',
          icon: Building2,
          tab: 'officer',
          subTab: 'verification',
          roles: ['INSTITUTION_VERIFIER', 'MOTA_OFFICER', 'ADMIN', 'SUPER_ADMIN'],
          badge: 'INO Desk',
        },
        {
          id: 'institute-queue',
          label: 'Verification Queue',
          desc: 'Student applications currently pending institutional sign-off',
          icon: FileCheck2,
          tab: 'officer',
          subTab: 'verification',
          roles: ['INSTITUTION_VERIFIER', 'MOTA_OFFICER', 'ADMIN', 'SUPER_ADMIN'],
        },
      ],
    },
    {
      id: 'officers',
      title: 'Ministry & Administrative Services',
      color: 'text-[#0070ba]',
      badgeBg: 'bg-sky-50',
      borderColor: 'border-sky-200',
      items: [
        {
          id: 'officer-monitor',
          label: 'Verification Timelines & Citizen Charter',
          desc: 'Application disposal tracking under Public Service Guarantee (SLA)',
          icon: Clock,
          tab: 'delay-monitor',
          roles: ['INSTITUTION_VERIFIER', 'MOTA_OFFICER', 'ADMIN', 'SUPER_ADMIN'],
          badge: 'SLA Desk',
        },
        {
          id: 'officer-scrutiny',
          label: 'Ministry Scrutiny Committee',
          desc: 'Second-level scrutiny and cross-verification of shortlisted scholars',
          icon: Scale,
          tab: 'officer',
          subTab: 'scrutiny',
          roles: ['MOTA_OFFICER', 'ADMIN', 'SUPER_ADMIN'],
        },
        {
          id: 'officer-merit',
          label: 'Merit List & Quota Allocation',
          desc: 'Merit ranking generation and category-wise slot allocation',
          icon: Award,
          tab: 'officer',
          subTab: 'selection',
          roles: ['MOTA_OFFICER', 'ADMIN', 'SUPER_ADMIN'],
        },
      ],
    },
    {
      id: 'governance',
      title: 'Governance & Public Reports',
      color: 'text-slate-800',
      badgeBg: 'bg-slate-100',
      borderColor: 'border-slate-300',
      items: [
        {
          id: 'admin-showcase',
          label: 'Scheme Execution Matrix',
          desc: 'Direct execution rules for Central Sector and Centrally Sponsored schemes',
          icon: Sparkles,
          tab: 'admin',
          roles: ['ALL'],
          badge: 'Live',
        },
        {
          id: 'admin-configurator',
          label: 'Policy Guidelines Configuration',
          desc: 'Administrative setup for income ceiling, marks criteria and reserved slots',
          icon: SlidersHorizontal,
          tab: 'admin',
          roles: ['ADMIN', 'MOTA_OFFICER', 'SUPER_ADMIN'],
          badge: 'Admin',
        },
        {
          id: 'analytics-mota',
          label: 'Ministry Public Analytics',
          desc: 'State-wise coverage, gender distribution and fund allocation reports',
          icon: BarChart3,
          tab: 'analytics',
          roles: ['ALL'],
          badge: 'Public',
        },
        {
          id: 'admin-compiler',
          label: 'Scheme Policy Specifications',
          desc: 'Official scheme rule definitions and statutory eligibility conditions',
          icon: Layers,
          tab: 'admin',
          roles: ['ADMIN', 'MOTA_OFFICER', 'SUPER_ADMIN'],
        },
        {
          id: 'admin-audit',
          label: 'Digital Audit Log & Sanctions Registry',
          desc: 'Tamper-evident audit trail of all official sanctions and approvals',
          icon: Shield,
          tab: 'admin',
          roles: ['ADMIN', 'MOTA_OFFICER', 'SUPER_ADMIN'],
          badge: 'Audited',
        },
      ],
    },
    {
      id: 'support',
      title: 'Helpdesk & Citizen Communication',
      color: 'text-amber-800',
      badgeBg: 'bg-amber-50',
      borderColor: 'border-amber-200',
      items: [
        {
          id: 'ai-mitra',
          label: 'Citizen Helpdesk (Setu Mitra)',
          desc: 'Guidance on scheme norms, FAQs and application procedures',
          icon: Sparkles,
          tab: 'chatbot',
          roles: ['ALL'],
          badge: 'Helpdesk',
          action: () => {
            onClose();
            if (onOpenChatbot) onOpenChatbot();
          },
        },
        {
          id: 'notifications-center',
          label: 'Official Notices & Circulars',
          desc: 'Ministry announcements, deadline extensions and public advisories',
          icon: Bell,
          tab: 'notifications',
          roles: ['ALL'],
          action: () => {
            onClose();
            if (onOpenNotifications) onOpenNotifications();
          },
        },
      ],
    },
  ];

  // Filter items by category tab and search query
  const filteredCategories = useMemo(() => {
    let list = menuCategories;
    if (activeCategoryFilter !== 'ALL') {
      list = list.filter((cat) => cat.id === activeCategoryFilter);
    }

    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase();
    return list
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.label.toLowerCase().includes(q) ||
            item.desc.toLowerCase().includes(q) ||
            cat.title.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [searchQuery, activeCategoryFilter, menuCategories]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Dark semi-transparent backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over panel wrapper anchored to the right */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10 z-10">
        <div className="w-screen max-w-md h-full bg-white shadow-2xl flex flex-col border-l border-slate-200">
          
          {/* Header - Matches Official Government Design System */}
          <div className="p-4 sm:p-5 bg-white text-slate-900 flex items-center justify-between border-b border-slate-200 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-[#0084d1] flex items-center justify-center font-bold shadow-2xs">
                <SlidersHorizontal className="w-5 h-5 text-[#0084d1]" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#0084d1] uppercase tracking-wider block">
                  Official Portal Directory
                </span>
                <h2 className="text-sm font-bold tracking-tight text-slate-900">
                  Portal Directory & Services
                </h2>
                <p className="text-[11px] text-slate-500">
                  Ministry of Tribal Affairs · Government of India
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Search Bar */}
          <div className="p-3 bg-slate-50 border-b border-slate-200 shrink-0">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services (e.g. Schemes, Documents, Continuity, SLA)..."
                className="w-full pl-9 pr-8 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0084d1] focus:border-[#0084d1] transition shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs cursor-pointer font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Filter Pill Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pt-2.5 pb-0.5">
              {[
                { id: 'ALL', label: 'All Services' },
                { id: 'core', label: 'Schemes' },
                { id: 'students', label: 'Students' },
                { id: 'institutes', label: 'Institutes' },
                { id: 'officers', label: 'Ministry' },
                { id: 'governance', label: 'Reports' },
                { id: 'support', label: 'Helpdesk' },
              ].map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setActiveCategoryFilter(pill.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition cursor-pointer shrink-0 ${
                    activeCategoryFilter === pill.id
                      ? 'bg-[#0070ba] text-white shadow-2xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          {/* Current Active Persona Banner (Clean Official Style) */}
          {currentUser ? (
            <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-7 h-7 rounded-full bg-[#0084d1] text-white flex items-center justify-center font-bold text-xs shadow-2xs shrink-0">
                  {userInitial}
                </div>
                <div className="truncate">
                  <span className="font-bold text-slate-800 block truncate">{userName}</span>
                  <span className="text-[10px] text-slate-500 block truncate font-medium">{userRole}</span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold shrink-0">
                Active Session
              </span>
            </div>
          ) : (
            <div className="px-4 py-2.5 bg-sky-50/70 border-b border-sky-100 flex items-center justify-between text-xs shrink-0">
              <div>
                <span className="text-[#0070ba] font-bold text-xs block">Citizen & Guest Portal</span>
                <span className="text-[10px] text-slate-500">Sign in to submit scholarship applications</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => {
                    onClose();
                    onOpenAuthModal('STUDENT_LOGIN');
                  }}
                  className="px-3 py-1 bg-[#0084d1] hover:bg-[#0074b8] text-white rounded-lg text-xs font-bold transition shadow-2xs cursor-pointer"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenAuthModal('STUDENT_REGISTER');
                  }}
                  className="px-3 py-1 bg-white hover:bg-slate-50 text-[#0084d1] border border-[#0084d1] rounded-lg text-xs font-bold transition shadow-2xs cursor-pointer"
                >
                  Register
                </button>
              </div>
            </div>
          )}

          {/* Scrollable Categories List */}
          <div className="flex-1 overflow-y-auto divide-y divide-slate-100 p-3 sm:p-4 space-y-4 text-xs min-h-0 bg-slate-50/50">
            {filteredCategories.map((category) => (
              <div key={category.id} className="pt-3 first:pt-0 space-y-2">
                <div className="flex items-center justify-between px-1">
                  <span className={`text-[11px] font-extrabold uppercase tracking-wider ${category.color}`}>
                    {category.title}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold">
                    {category.items.length} {category.items.length === 1 ? 'service' : 'services'}
                  </span>
                </div>

                <div className="space-y-1.5">
                  {category.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.tab;

                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          if (item.action) {
                            item.action();
                          } else {
                            handleItemClick(item.tab, item.subTab);
                          }
                        }}
                        className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all cursor-pointer group ${
                          isActive
                            ? 'bg-[#0070ba] text-white shadow-xs border border-[#0070ba]'
                            : 'bg-white hover:bg-sky-50/60 text-slate-800 border border-slate-200 hover:border-sky-300 shadow-2xs'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition ${
                            isActive
                              ? 'bg-white/20 text-white'
                              : 'bg-sky-50 text-[#0084d1] border border-sky-100 group-hover:bg-[#0084d1] group-hover:text-white'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className={`font-bold truncate text-xs ${isActive ? 'text-white' : 'text-slate-900 group-hover:text-[#0070ba]'}`}>
                              {item.label}
                            </span>
                            {item.badge && (
                              <span
                                className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase shrink-0 ${
                                  isActive
                                    ? 'bg-white/20 text-white'
                                    : 'bg-slate-100 text-slate-600 border border-slate-200'
                                }`}
                              >
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className={`text-[11px] leading-snug line-clamp-1 mt-0.5 ${isActive ? 'text-sky-100' : 'text-slate-500'}`}>
                            {item.desc}
                          </p>
                        </div>

                        <ChevronRight className={`w-3.5 h-3.5 shrink-0 self-center transition ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-[#0084d1] group-hover:translate-x-0.5'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {filteredCategories.length === 0 && (
              <div className="py-12 text-center space-y-2 bg-white rounded-xl border border-slate-200 p-6">
                <Search className="w-8 h-8 text-slate-300 mx-auto" />
                <p className="text-xs font-bold text-slate-700">No matching services found</p>
                <p className="text-[11px] text-slate-400">
                  Try searching for "Documents", "Continuity", "Verification", or "DBT"
                </p>
              </div>
            )}
          </div>

          {/* Footer of Menu */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 shrink-0">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#0084d1]" />
              <span className="font-semibold text-slate-700">Ministry of Tribal Affairs</span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium">Janjatiya Vidya Setu · AY 2026-27</span>
          </div>

        </div>
      </div>
    </div>
  );
};
