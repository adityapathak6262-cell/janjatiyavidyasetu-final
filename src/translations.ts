export type Language = 'EN' | 'HI';

export interface Translations {
  header: {
    ministryTitle: string;
    ministrySubtitle: string;
    portalName: string;
    login: string;
    register: string;
    menu: string;
    signOut: string;
    switchPersona: string;
    navHome: string;
    navScholarships: string;
    navMyApplications: string;
    navDocuments: string;
    navDeficiency: string;
    navTimeline: string;
    navPostSelection: string;
    navGrievance: string;
    navSupport: string;
    navSlaMonitor: string;
    navPublicPortal: string;
    navOfficerWorkbench: string;
    navVerificationDesk: string;
    navScrutinyBench: string;
    navSelectionAward: string;
    navHandover: string;
    navSentinel: string;
    navIntelligence: string;
    navAdmin: string;
    navRulesBuilder: string;
    navCompiler: string;
    navAudit: string;
    navAnalytics: string;
    motto: string;
    all4Schemes: string;
  };
  home: {
    heroTag: string;
    heroTitlePart1: string;
    heroTitlePart2: string;
    heroSubtitle: string;
    searchPlaceholder: string;
    searchBtn: string;
    popularTags: string;
    quickTrackerTitle: string;
    quickTrackerSubtitle: string;
    appIdPlaceholder: string;
    trackBtn: string;
    statusLabel: string;
    nextStepLabel: string;
    liveStage: string;
    statScholars: string;
    statScholarsDesc: string;
    statDbt: string;
    statDbtDesc: string;
    statInstitutes: string;
    statInstitutesDesc: string;
    statFunds: string;
    statFundsDesc: string;
    quickActionsTitle: string;
    actionCheckEligibility: string;
    actionCheckEligibilityDesc: string;
    actionGuidelines: string;
    actionGuidelinesDesc: string;
    actionDocChecklist: string;
    actionDocChecklistDesc: string;
    actionSla: string;
    actionSlaDesc: string;
    schemesSectionTitle: string;
    schemesSectionSubtitle: string;
    schemesCountBadge: string;
    allowanceLabel: string;
    applyNow: string;
    loginToApply: string;
    openNosDesk: string;
    noticesTitle: string;
    noticesSubtitle: string;
    viewAllNotices: string;
    ratesTitle: string;
    ratesSubtitle: string;
    eligibilityModalTitle: string;
    eligibilityModalSubtitle: string;
    eligibilityBtn: string;
    tagPostMatric: string;
    tagPreMatric: string;
    tagTopClass: string;
    statSchemesCount: string;
    statSchemesLabel: string;
    statStatesCount: string;
    statStatesLabel: string;
    statSecureTitle: string;
    statSecureSubtitle: string;
    amIEligibleTitle: string;
    amIEligibleSubtitle: string;
    checkSt: string;
    checkCitizen: string;
    checkEnrolled: string;
    checkIncome: string;
    checkDocs: string;
    checkEligibilityBtn: string;
    recommendedTitle: string;
    viewAll: string;
    appProgressTitle: string;
    inProgressBadge: string;
    stepSubmitted: string;
    stepUnderVerification: string;
    stepSanction: string;
    stepDisbursal: string;
    announcementsTitle: string;
    pillarBrighterTomorrow: string;
    pillarEmpowered: string;
    pillarEqualOpp: string;
    pillarStrongerIndia: string;
    footerMotto: string;
    modalCategoryLabel: string;
    modalIncomeLabel: string;
    modalDegreeLabel: string;
    modalOutcomeTitle: string;
    modalEvaluateBtn: string;
    modalCloseBtn: string;
  };
  student: {
    workspaceBadge: string;
    welcomePrefix: string;
    institutionLabel: string;
    domicileLabel: string;
    applyBtn: string;
    tabDashboard: string;
    tabSchemes: string;
    tabWizard: string;
    tabDocuments: string;
    tabDeficiency: string;
    tabTimeline: string;
    tabPostSelection: string;
    tabGrievance: string;
    activeAppsTitle: string;
    activeAppsCount: string;
    noAppsFound: string;
    appIdCol: string;
    schemeCol: string;
    academicYearCol: string;
    submissionDateCol: string;
    statusCol: string;
    actionCol: string;
    viewDossier: string;
    dossierTitle: string;
    dossierSubtitle: string;
    stagesTitle: string;
    stage1Name: string;
    stage2Name: string;
    stage3Name: string;
    stage4Name: string;
    wizardTitle: string;
    wizardStep1: string;
    wizardStep2: string;
    wizardStep3: string;
    wizardStep4: string;
    personalDetails: string;
    fullName: string;
    dob: string;
    gender: string;
    mobile: string;
    email: string;
    aadhaar: string;
    casteCommunity: string;
    annualFamilyIncome: string;
    academicDetails: string;
    institutionName: string;
    courseDegree: string;
    admissionYear: string;
    marksPercentage: string;
    rollNumber: string;
    docUploadsTitle: string;
    docUploadsSubtitle: string;
    casteCert: string;
    incomeCert: string;
    bonafideCert: string;
    marksheetCert: string;
    reviewSubmitTitle: string;
    submitApplicationBtn: string;
    submittingBtn: string;
    backBtn: string;
    nextBtn: string;
    docsVaultTitle: string;
    docsVaultSubtitle: string;
    uploadNewDoc: string;
    docNameCol: string;
    sourceVerified: string;
    uploadedOnCol: string;
    verificationStatusCol: string;
    verifiedBadge: string;
    pendingBadge: string;
    deficiencyTitle: string;
    deficiencySubtitle: string;
    noDeficiency: string;
    deficiencyAlertTitle: string;
    deficiencyAlertDesc: string;
    observationLabel: string;
    requiredActionLabel: string;
    resubmitBtn: string;
    timelineTitle: string;
    timelineSubtitle: string;
    postSelectionTitle: string;
    postSelectionSubtitle: string;
    dbtStatusTitle: string;
    dbtBankMandate: string;
    dbtSanctionOrder: string;
    grievanceTitle: string;
    grievanceSubject: string;
    grievanceCategory: string;
    grievanceMessage: string;
    fileGrievanceBtn: string;
    statusSubmitted: string;
    statusEligibilityCheck: string;
    statusVerification: string;
    statusDeficiency: string;
    statusResubmitted: string;
    statusReadyForScrutiny: string;
    statusScrutiny: string;
    statusScreening: string;
    statusSelected: string;
    statusNotSelected: string;
    statusPostSelection: string;
    statusCompleted: string;
    urgentActionNotice: string;
    urgentActionDesc: string;
    viewDeficiencyBtn: string;
    availableSchemesTitle: string;
    applyOnlineBtn: string;
    activeSession: string;
    academicYearLabel: string;
    provisionalAwardNotice: string;
    timelineTransitionsTitle: string;
    whatIsDefect: string;
    whyPolicyRequires: string;
    actionRequired: string;
    clarificationInputPlaceholder: string;
    submitClarificationBtn: string;
  };
  schemes: Record<string, {
    title: string;
    level: string;
    slots: string;
    allowance: string;
    desc: string;
  }>;
}

export const translations: Record<Language, Translations> = {
  EN: {
    header: {
      ministryTitle: 'Ministry of Tribal Affairs',
      ministrySubtitle: 'Government of India',
      portalName: 'Janjatiya Vidya Setu',
      login: 'Login',
      register: 'Register',
      menu: 'Menu',
      signOut: 'Sign Out / Log Out',
      switchPersona: 'Switch Persona (Evaluation)',
      navHome: 'Home',
      navScholarships: 'Scholarships (4)',
      navMyApplications: 'My Applications',
      navDocuments: 'Documents',
      navDeficiency: 'Deficiency Desk',
      navTimeline: 'Timeline',
      navPostSelection: 'Post Selection',
      navGrievance: 'Grievance',
      navSupport: 'Support',
      navSlaMonitor: 'SLA Monitor',
      navPublicPortal: 'Public Portal',
      navOfficerWorkbench: 'Officer Workbench',
      navVerificationDesk: '1. Verification Desk',
      navScrutinyBench: '2. Scrutiny Bench',
      navSelectionAward: '3. Selection & Award',
      navHandover: '4. Handover (GFR 255)',
      navSentinel: 'Fraud Sentinel',
      navIntelligence: 'JVS Intelligence',
      navAdmin: 'System Admin',
      navRulesBuilder: '1. Visual Rules Builder',
      navCompiler: '2. Policy Compiler',
      navAudit: '3. Audit Vault',
      navAnalytics: 'Public Analytics',
      motto: 'Sabka Saath · Sabka Vikas · Sabka Vishwas',
      all4Schemes: 'All 4 Central ST Schemes'
    },
    home: {
      heroTag: 'EDUCATION EMPOWERS TRIBAL YOUTH',
      heroTitlePart1: 'Your scholarship journey,',
      heroTitlePart2: 'made simple',
      heroSubtitle: 'Discover, apply and track scholarships for ST students — all in one place. A brighter future is within your reach.',
      searchPlaceholder: 'Search scholarships, schemes and services...',
      searchBtn: 'Search',
      popularTags: 'Popular Searches',
      quickTrackerTitle: 'Quick Application Tracker',
      quickTrackerSubtitle: 'Check live status of submitted application across all stages',
      appIdPlaceholder: 'Enter Application ID (e.g. ST2026A38472)',
      trackBtn: 'Track Now',
      statusLabel: 'Current Status',
      nextStepLabel: 'Next Action',
      liveStage: 'Live 4-Stage Verification',
      statScholars: '3.8 Lakh+ Scholars Funded',
      statScholarsDesc: 'ST scholars supported across Higher Education & Research',
      statDbt: '100% Direct Benefit Transfer',
      statDbtDesc: 'Direct credit into Aadhaar-seeded accounts via PFMS',
      statInstitutes: '250+ Premier Institutes',
      statInstitutesDesc: 'Empaneled IITs, IIMs, AIIMS, NLUs & Central Universities',
      statFunds: '₹1,420 Cr+ Funds Disbursed',
      statFundsDesc: 'Direct fellowship, fees & maintenance allowances released',
      quickActionsTitle: 'Quick Self-Services & Tools',
      actionCheckEligibility: 'Check Eligibility',
      actionCheckEligibilityDesc: 'Find eligible Central schemes based on your course & marks in 30 seconds',
      actionGuidelines: 'Official Guidelines',
      actionGuidelinesDesc: 'Download operational scheme circulars, income norms & reservation rules',
      actionDocChecklist: 'Document Checklist',
      actionDocChecklistDesc: 'Review mandatory source-verifiable certificates required before applying',
      actionSla: 'SLA Delay Monitor',
      actionSlaDesc: 'Track statutory processing guarantees & institutional disposal timelines',
      schemesSectionTitle: 'Central ST Scholarship & Fellowship Subsystems',
      schemesSectionSubtitle: 'Ministry of Tribal Affairs Central Sector Schemes & Quota Allocations',
      schemesCountBadge: '4 Schemes Available',
      allowanceLabel: 'Assistance:',
      applyNow: 'Apply Now',
      loginToApply: 'Login to Apply',
      openNosDesk: 'Open NOS Desk',
      noticesTitle: 'Official Announcements & Notifications',
      noticesSubtitle: 'Latest Ministry circulars, sanction orders and application deadlines',
      viewAllNotices: 'View All Notices',
      ratesTitle: 'Standard Allowance & Rate Comparison',
      ratesSubtitle: 'Statutory financial entitlements across fellowship, degree and overseas schemes',
      eligibilityModalTitle: 'Check Scheme Eligibility',
      eligibilityModalSubtitle: 'Ministry of Tribal Affairs Criteria Calculator',
      eligibilityBtn: 'Check Qualifying Schemes',
      tagPostMatric: 'Post Matric Scholarship',
      tagPreMatric: 'Pre Matric Scholarship',
      tagTopClass: 'Top Class Education',
      statSchemesCount: '120+',
      statSchemesLabel: 'Schemes',
      statStatesCount: '24',
      statStatesLabel: 'States',
      statSecureTitle: 'Secure & Transparent',
      statSecureSubtitle: 'Government Verified',
      amIEligibleTitle: 'Am I Eligible?',
      amIEligibleSubtitle: 'Quickly check basic eligibility for ST scholarships.',
      checkSt: 'I belong to a Scheduled Tribe (ST)',
      checkCitizen: 'I am an Indian citizen',
      checkEnrolled: 'I am enrolled in a recognised institution',
      checkIncome: 'I meet the income criteria',
      checkDocs: 'I have the required documents',
      checkEligibilityBtn: 'Check My Eligibility',
      recommendedTitle: 'Recommended Scholarships',
      viewAll: 'View All',
      appProgressTitle: 'My Application Progress',
      inProgressBadge: '● In Progress',
      stepSubmitted: 'Submitted',
      stepUnderVerification: 'Under Verification',
      stepSanction: 'Sanction',
      stepDisbursal: 'Disbursal',
      announcementsTitle: 'Latest Announcements',
      pillarBrighterTomorrow: 'For a Brighter Tomorrow',
      pillarEmpowered: 'Empowered Communities',
      pillarEqualOpp: 'Equal Opportunities',
      pillarStrongerIndia: 'Stronger India',
      footerMotto: 'Education Today, A Stronger Tomorrow',
      modalCategoryLabel: 'Social Community / Caste Category',
      modalIncomeLabel: 'Annual Family Income Ceiling',
      modalDegreeLabel: 'Current Academic Level',
      modalOutcomeTitle: 'Evaluation Outcome',
      modalEvaluateBtn: 'Evaluate Eligibility Criteria',
      modalCloseBtn: 'Close'
    },
    student: {
      workspaceBadge: 'Scholar & Beneficiary Workspace',
      welcomePrefix: 'Namaste',
      institutionLabel: 'Institution',
      domicileLabel: 'Domicile State',
      applyBtn: 'Apply for Scholarship / Fellowship',
      tabDashboard: 'Dashboard',
      tabSchemes: 'Scheme Selection',
      tabWizard: 'Application Wizard',
      tabDocuments: 'Documents Vault',
      tabDeficiency: 'Deficiency Desk',
      tabTimeline: 'Timeline',
      tabPostSelection: 'Post Selection',
      tabGrievance: 'Grievance Desk',
      activeAppsTitle: 'Active Scholarship Applications',
      activeAppsCount: 'Applications On Record',
      noAppsFound: 'No scholarship applications on record. Click "Apply for Scholarship" above to start your fresh application.',
      appIdCol: 'Application ID',
      schemeCol: 'Scheme Name',
      academicYearCol: 'Academic Year',
      submissionDateCol: 'Date of Submission',
      statusCol: 'Processing Status',
      actionCol: 'Action',
      viewDossier: 'View Full Dossier',
      dossierTitle: 'Application Dossier & Verification Stages',
      dossierSubtitle: 'Detailed verification record, document checks, and scrutiny observations',
      stagesTitle: 'Stage-Wise Verification Journey',
      stage1Name: '1. Online Application Submission',
      stage2Name: '2. Institutional Verification (INO)',
      stage3Name: '3. Ministry Scrutiny Committee',
      stage4Name: '4. Award Sanction & DBT Transfer',
      wizardTitle: 'Scholarship Application Form (AY 2026–27)',
      wizardStep1: '1. Document Uploads',
      wizardStep2: '2. Academic Details',
      wizardStep3: '3. Review & Submit',
      wizardStep4: '4. Final Confirmation',
      personalDetails: 'Applicant Personal Details',
      fullName: 'Full Name (as per Aadhaar)',
      dob: 'Date of Birth',
      gender: 'Gender',
      mobile: 'Mobile Number',
      email: 'Email Address',
      aadhaar: 'Aadhaar Number / Virtual ID',
      casteCommunity: 'ST Community / Tribe',
      annualFamilyIncome: 'Annual Family Income (₹)',
      academicDetails: 'Current Academic Details',
      institutionName: 'Enrolled University / College Name',
      courseDegree: 'Degree / Course Name',
      admissionYear: 'Year of Admission',
      marksPercentage: 'Aggregate Qualifying Percentage (%)',
      rollNumber: 'Institute Roll / Registration Number',
      docUploadsTitle: 'Digital Document Repository & Uploads',
      docUploadsSubtitle: 'Upload clear PDF or JPEG scans (Max 5MB each). Source verified certificates preferred.',
      casteCert: 'ST Caste Certificate',
      incomeCert: 'Family Income Certificate',
      bonafideCert: 'Institutional Bonafide Certificate',
      marksheetCert: 'Qualifying Degree Marksheet',
      reviewSubmitTitle: 'Declaration & Final Submission',
      submitApplicationBtn: 'Submit Application to Institute',
      submittingBtn: 'Submitting Dossier...',
      backBtn: 'Previous Step',
      nextBtn: 'Next Step',
      docsVaultTitle: 'Digital Documents Repository',
      docsVaultSubtitle: 'Central source-verified records and student certificates',
      uploadNewDoc: 'Upload New Certificate',
      docNameCol: 'Document Type',
      sourceVerified: 'Source Verification',
      uploadedOnCol: 'Uploaded Date',
      verificationStatusCol: 'Verification Status',
      verifiedBadge: 'Verified from Source',
      pendingBadge: 'Pending Verification',
      deficiencyTitle: 'Deficiency & Clarification Desk',
      deficiencySubtitle: 'Review observations raised by scrutiny officers and submit required clarifications',
      noDeficiency: 'No active deficiencies on your application. All documents and bonafide records are in order.',
      deficiencyAlertTitle: 'Attention Required: Active Deficiency Observation',
      deficiencyAlertDesc: 'An institutional or scrutiny officer has requested a clarification on your application. Please submit your clarification below.',
      observationLabel: 'Officer Observation',
      requiredActionLabel: 'Required Resolution',
      resubmitBtn: 'Upload Clarification / Updated Certificate',
      timelineTitle: 'Application Progress Timeline',
      timelineSubtitle: 'Real-time 4-stage tracking from Institute verification to Ministry sanction',
      postSelectionTitle: 'Post Selection Milestones & Direct Benefit Transfer',
      postSelectionSubtitle: 'Track your sanction order, Aadhaar-seeded bank status, and fellowship disbursals',
      dbtStatusTitle: 'PFMS Direct Benefit Transfer Status',
      dbtBankMandate: 'Aadhaar Seeded Bank Account',
      dbtSanctionOrder: 'Ministry Sanction Order',
      grievanceTitle: 'Student Grievance & Redressal Desk',
      grievanceSubject: 'Grievance Subject',
      grievanceCategory: 'Category',
      grievanceMessage: 'Grievance Description',
      fileGrievanceBtn: 'Submit Official Grievance',
      statusSubmitted: 'Submitted',
      statusEligibilityCheck: 'Eligibility Check',
      statusVerification: 'PRAMAAN Verification',
      statusDeficiency: 'Deficiency Action Required',
      statusResubmitted: 'Resubmitted / Pending Review',
      statusReadyForScrutiny: 'Ready for Scrutiny',
      statusScrutiny: 'Under Committee Scrutiny',
      statusScreening: 'Screening Complete',
      statusSelected: 'Provisionally Selected',
      statusNotSelected: 'Not Selected',
      statusPostSelection: 'Post-Selection Active',
      statusCompleted: 'Award Completed',
      urgentActionNotice: 'Urgent Action Required: Deficiency Notice',
      urgentActionDesc: 'A verification discrepancy was identified on your uploaded ST Certificate. Please review the Deficiency Desk below and submit the requested clarification before the verification cutoff.',
      viewDeficiencyBtn: 'View Deficiency',
      availableSchemesTitle: 'Available MoTA Schemes',
      applyOnlineBtn: 'Apply Online',
      activeSession: 'Active',
      academicYearLabel: 'Academic Year',
      provisionalAwardNotice: 'Provisional Award Letter Issued',
      timelineTransitionsTitle: 'Lifecycle Timeline & Verified State Transitions',
      whatIsDefect: '1. What is the Defect?',
      whyPolicyRequires: '2. Why does Policy require this?',
      actionRequired: '3. Action Required',
      clarificationInputPlaceholder: 'Enter your explanation or justification here...',
      submitClarificationBtn: 'Submit Clarification to Scrutiny Officer'
    },
    schemes: {
      POST_MATRIC: {
        title: 'Post Matric Scholarship for ST Students',
        level: 'Class 11, 12, Undergraduate & Postgraduate',
        slots: 'Open to All Eligible ST Students',
        allowance: 'Full Tuition Fee + Monthly Maintenance Allowance',
        desc: 'Centrally sponsored scholarship for ST students studying at post-matriculation or post-secondary stage to enable them to complete their education.'
      },
      TOP_CLASS: {
        title: 'Top Class Education Scheme for ST Students',
        level: 'Undergraduate & Postgraduate (Premier Notified Institutes)',
        slots: '1,000 Sanctioned Awards / Year',
        allowance: 'Full Non-Refundable Fee + ₹3,000/mo Living + ₹45,000 IT Equipment',
        desc: 'Direct funding of full tuition fees and living expenses for meritorious ST students admitted to 250+ premier institutions (IITs, IIMs, AIIMS, NLUs).'
      },
      NFST: {
        title: 'National Fellowship for Higher Education of ST Students',
        level: 'M.Phil & Ph.D. (Regular Full-Time)',
        slots: '750 Fellowships / Year',
        allowance: '₹35,000/mo (JRF) | ₹42,000/mo (SRF) + ₹20,500 Annual Contingency',
        desc: '100% Central Sector scholarship providing direct fellowship stipend to ST scholars pursuing regular Ph.D. programs in recognized Indian universities.'
      },
      NOS: {
        title: 'National Overseas Scholarship for ST Candidates',
        level: "Master's & Ph.D. Abroad (QS Top 1,000)",
        slots: '20 Sanctioned Awards / Year',
        allowance: '100% Foreign Tuition Fees + $15,400 (USA) / £9,900 (UK) per Year',
        desc: 'Flagship grant covering foreign tuition, economy airfare, medical insurance and maintenance for ST scholars studying in top QS-ranked world universities.'
      }
    }
  },
  HI: {
    header: {
      ministryTitle: 'जनजातीय कार्य मंत्रालय',
      ministrySubtitle: 'भारत सरकार',
      portalName: 'जनजातीय विद्या सेतु',
      login: 'लॉगिन',
      register: 'पंजीकरण',
      menu: 'मेनू',
      signOut: 'लॉग आउट (साइन आउट)',
      switchPersona: 'उपयोगकर्ता बदलें (मूल्यांकन हेतु)',
      navHome: 'मुख्य पृष्ठ',
      navScholarships: 'छात्रवृत्तियां (4)',
      navMyApplications: 'मेरे आवेदन',
      navDocuments: 'दस्तावेज़',
      navDeficiency: 'कमी निवारण पटल',
      navTimeline: 'समयरेखा',
      navPostSelection: 'चयन उपरांत',
      navGrievance: 'शिकायत निवारण',
      navSupport: 'सहायता केंद्र',
      navSlaMonitor: 'एसएलए मॉनिटर',
      navPublicPortal: 'सार्वजनिक पोर्टल',
      navOfficerWorkbench: 'अधिकारी कार्यक्षेत्र',
      navVerificationDesk: '1. सत्यापन पटल',
      navScrutinyBench: '2. संवीक्षा बेंच',
      navSelectionAward: '3. चयन एवं पुरस्कार',
      navHandover: '4. वित्तीय हस्तांतरण (GFR 255)',
      navSentinel: 'धोखाधड़ी संसूचक',
      navIntelligence: 'जेवीएस इंटेलिजेंस',
      navAdmin: 'सिस्टम व्यवस्थापक',
      navRulesBuilder: '1. विजुअल नियम निर्माता',
      navCompiler: '2. नीति कंपाइलर',
      navAudit: '3. ऑडिट रजिस्ट्री',
      navAnalytics: 'सार्वजनिक एनालिटिक्स',
      motto: 'सबका साथ · सबका विकास · सबका विश्वास',
      all4Schemes: 'सभी 4 केंद्रीय अनुसूचित जनजाति योजनाएं'
    },
    home: {
      heroTag: 'शिक्षा से जनजातीय युवाओं का सशक्तिकरण',
      heroTitlePart1: 'आपकी छात्रवृत्ति की यात्रा,',
      heroTitlePart2: 'अब हुई और भी सरल',
      heroSubtitle: 'अनुसूचित जनजाति (एसटी) छात्रों के लिए छात्रवृत्तियां खोजें, आवेदन करें और प्रगति ट्रैक करें — सब कुछ एक ही स्थान पर।',
      searchPlaceholder: 'छात्रवृत्ति, योजनाएं एवं सेवाएं खोजें...',
      searchBtn: 'खोजें',
      popularTags: 'लोकप्रिय खोजें',
      quickTrackerTitle: 'त्वरित आवेदन ट्रैकर',
      quickTrackerSubtitle: 'अपने जमा किए गए आवेदन की सभी चरणों में वास्तविक स्थिति देखें',
      appIdPlaceholder: 'आवेदन संख्या दर्ज करें (उदा. ST2026A38472)',
      trackBtn: 'स्थिति जांचें',
      statusLabel: 'वर्तमान स्थिति',
      nextStepLabel: 'अगली कार्रवाई',
      liveStage: 'सक्रिय 4-चरणीय सत्यापन',
      statScholars: '3.8 लाख+ विद्यार्थी लाभान्वित',
      statScholarsDesc: 'उच्च शिक्षा एवं शोध में समर्थित अनुसूचित जनजाति छात्र',
      statDbt: '100% प्रत्यक्ष लाभ अंतरण (DBT)',
      statDbtDesc: 'पीएफएमएस के माध्यम से आधार-लिंक्ड बैंक खातों में सीधा भुगतान',
      statInstitutes: '250+ उत्कृष्ट संस्थान',
      statInstitutesDesc: 'सूचीबद्ध आईआईटी, आईआईएम, एम्स, एनएलयू व केंद्रीय विश्वविद्यालय',
      statFunds: '₹1,420 करोड़+ राशि संवितरित',
      statFundsDesc: 'प्रत्यक्ष अध्येतावृत्ति, शुल्क एवं अनुरक्षण भत्ते सीधे जारी',
      quickActionsTitle: 'त्वरित स्व-सेवाएं एवं नागरिक साधन',
      actionCheckEligibility: 'पात्रता की जांच करें',
      actionCheckEligibilityDesc: 'अपने पाठ्यक्रम एवं प्राप्तांक के आधार पर केवल 30 सेकंड में योग्य योजनाएं जानें',
      actionGuidelines: 'आधिकारिक दिशानिर्देश',
      actionGuidelinesDesc: 'योजना संचालन परिपत्र, आय सीमा नियम एवं वैधानिक आरक्षण नियम देखें',
      actionDocChecklist: 'आवश्यक दस्तावेज़ सूची',
      actionDocChecklistDesc: 'आवेदन पूर्व आवश्यक स्रोत-सत्यापनीय प्रमाण पत्रों की जांच करें',
      actionSla: 'एसएलए निपटान मॉनिटर',
      actionSlaDesc: 'लोक सेवा गारंटी अधिनियम के तहत समयबद्ध सत्यापन समयसीमा ट्रैक करें',
      schemesSectionTitle: 'केंद्रीय एसटी छात्रवृत्ति एवं शोध अध्येतावृत्ति उप-प्रणाली',
      schemesSectionSubtitle: 'जनजातीय कार्य मंत्रालय की केंद्रीय क्षेत्रक योजनाएं एवं आरक्षित स्लॉट आवंटन',
      schemesCountBadge: '4 योजनाएं उपलब्ध',
      allowanceLabel: 'वित्तीय सहायता:',
      applyNow: 'आवेदन करें',
      loginToApply: 'आवेदन हेतु लॉगिन करें',
      openNosDesk: 'एनओएस पटल खोलें',
      noticesTitle: 'आधिकारिक घोषणाएं एवं सार्वजनिक सूचनाएं',
      noticesSubtitle: 'मंत्रालय के नवीनतम परिपत्र, स्वीकृति आदेश एवं आवेदन की अंतिम तिथियां',
      viewAllNotices: 'सभी सूचनाएं देखें',
      ratesTitle: 'मानक वित्तीय भत्ते एवं दर तुलना',
      ratesSubtitle: 'अध्येतावृत्ति, स्नातक, स्नातकोत्तर एवं विदेश अध्ययन हेतु देय वित्तीय पात्रता',
      eligibilityModalTitle: 'योजना पात्रता कैलकुलेटर',
      eligibilityModalSubtitle: 'जनजातीय कार्य मंत्रालय मानक पात्रता परीक्षक',
      eligibilityBtn: 'पात्र योजनाओं की सूची देखें',
      tagPostMatric: 'पोस्ट मैट्रिक छात्रवृत्ति',
      tagPreMatric: 'प्री मैट्रिक छात्रवृत्ति',
      tagTopClass: 'शीर्ष श्रेणी शिक्षा',
      statSchemesCount: '120+',
      statSchemesLabel: 'योजनाएं',
      statStatesCount: '24',
      statStatesLabel: 'राज्य',
      statSecureTitle: 'सुरक्षित एवं पारदर्शी',
      statSecureSubtitle: 'सरकार द्वारा सत्यापित',
      amIEligibleTitle: 'क्या मैं पात्र हूँ?',
      amIEligibleSubtitle: 'एसटी छात्रवृत्ति के लिए बुनियादी पात्रता की त्वरित जांच करें।',
      checkSt: 'मैं अनुसूचित जनजाति (ST) समुदाय से हूँ',
      checkCitizen: 'मैं भारत का नागरिक हूँ',
      checkEnrolled: 'मैं किसी मान्यता प्राप्त संस्थान में नामांकित हूँ',
      checkIncome: 'मैं निर्धारित आय मानदंडों को पूरा करता हूँ',
      checkDocs: 'मेरे पास आवश्यक प्रमाण पत्र उपलब्ध हैं',
      checkEligibilityBtn: 'मेरी पात्रता जांचें',
      recommendedTitle: 'अनुशंसित छात्रवृत्तियां',
      viewAll: 'सभी देखें',
      appProgressTitle: 'मेरे आवेदन की प्रगति',
      inProgressBadge: '● प्रगति पर',
      stepSubmitted: 'जमा किया गया',
      stepUnderVerification: 'सत्यापनाधीन',
      stepSanction: 'स्वीकृति',
      stepDisbursal: 'संवितरण',
      announcementsTitle: 'नवीनतम घोषणाएं',
      pillarBrighterTomorrow: 'उज्ज्वल भविष्य के लिए',
      pillarEmpowered: 'सशक्त समुदाय',
      pillarEqualOpp: 'समान अवसर',
      pillarStrongerIndia: 'सशक्त भारत',
      footerMotto: 'आज की शिक्षा, सशक्त कल',
      modalCategoryLabel: 'सामाजिक समुदाय / जाति श्रेणी',
      modalIncomeLabel: 'वार्षिक पारिवारिक आय सीमा',
      modalDegreeLabel: 'वर्तमान शैक्षणिक स्तर',
      modalOutcomeTitle: 'मूल्यांकन परिणाम',
      modalEvaluateBtn: 'पात्रता मानदंडों का मूल्यांकन करें',
      modalCloseBtn: 'बंद करें'
    },
    student: {
      workspaceBadge: 'छात्र एवं लाभार्थी कार्यक्षेत्र',
      welcomePrefix: 'नमस्ते',
      institutionLabel: 'अध्ययनरत संस्थान',
      domicileLabel: 'मूल निवास राज्य',
      applyBtn: 'छात्रवृत्ति / अध्येतावृत्ति हेतु आवेदन करें',
      tabDashboard: 'डैशबोर्ड',
      tabSchemes: 'योजना चयन',
      tabWizard: 'आवेदन पत्र (विज़ार्ड)',
      tabDocuments: 'दस्तावेज़ वॉल्ट',
      tabDeficiency: 'कमी निवारण पटल',
      tabTimeline: 'समयरेखा',
      tabPostSelection: 'चयन उपरांत (DBT)',
      tabGrievance: 'शिकायत निवारण',
      activeAppsTitle: 'सक्रिय छात्रवृत्ति आवेदन',
      activeAppsCount: 'दर्ज आवेदन',
      noAppsFound: 'वर्तमान में कोई छात्रवृत्ति आवेदन दर्ज नहीं है। अपना नया आवेदन प्रारंभ करने के लिए ऊपर "छात्रवृत्ति हेतु आवेदन करें" पर क्लिक करें।',
      appIdCol: 'आवेदन संख्या (ID)',
      schemeCol: 'योजना का नाम',
      academicYearCol: 'शैक्षणिक सत्र',
      submissionDateCol: 'आवेदन तिथि',
      statusCol: 'प्रसंस्करण स्थिति',
      actionCol: 'कार्रवाई',
      viewDossier: 'पूर्ण डॉजियर देखें',
      dossierTitle: 'आवेदन डॉजियर एवं सत्यापन चरण',
      dossierSubtitle: 'विस्तृत सत्यापन विवरण, दस्तावेज़ जांच एवं संवीक्षा टिप्पणियां',
      stagesTitle: 'चरण-दर-चरण सत्यापन यात्रा',
      stage1Name: '1. ऑनलाइन आवेदन सबमिशन',
      stage2Name: '2. संस्थान स्तरीय सत्यापन (INO)',
      stage3Name: '3. मंत्रालय संवीक्षा समिति',
      stage4Name: '4. अंतिम स्वीकृति एवं डीबीटी संवितरण',
      wizardTitle: 'छात्रवृत्ति आवेदन पत्र (सत्र 2026–27)',
      wizardStep1: '1. दस्तावेज़ अपलोड',
      wizardStep2: '2. शैक्षणिक विवरण',
      wizardStep3: '3. समीक्षा एवं सबमिट',
      wizardStep4: '4. अंतिम पुष्टि',
      personalDetails: 'आवेदक का व्यक्तिगत विवरण',
      fullName: 'पूरा नाम (आधार अनुसार)',
      dob: 'जन्म तिथि',
      gender: 'लिंग',
      mobile: 'मोबाइल नंबर',
      email: 'ईमेल पता',
      aadhaar: 'आधार संख्या / वर्चुअल आईडी',
      casteCommunity: 'अनुसूचित जनजाति समुदाय / जनजाति',
      annualFamilyIncome: 'वार्षिक पारिवारिक आय (₹)',
      academicDetails: 'वर्तमान शैक्षणिक विवरण',
      institutionName: 'विश्वविद्यालय / कॉलेज का नाम',
      courseDegree: 'पाठ्यक्रम / डिग्री का नाम',
      admissionYear: 'प्रवेश का वर्ष',
      marksPercentage: 'कुल प्राप्तांक प्रतिशत (%)',
      rollNumber: 'संस्थान अनुक्रमांक / पंजीकरण संख्या',
      docUploadsTitle: 'डिजिटल दस्तावेज़ रिपॉजिटरी एवं अपलोड',
      docUploadsSubtitle: 'स्पष्ट पीडीएफ अथवा जेपीईजी स्कैन अपलोड करें (अधिकतम 5MB)। स्रोत-सत्यापित प्रमाण पत्र अनिवार्य हैं।',
      casteCert: 'एसटी जाति प्रमाण पत्र',
      incomeCert: 'पारिवारिक आय प्रमाण पत्र',
      bonafideCert: 'संस्थागत बोनाफाइड प्रमाण पत्र',
      marksheetCert: 'योग्यता डिग्री अंकतालिका',
      reviewSubmitTitle: 'घोषणा एवं अंतिम रूप से सबमिट करें',
      submitApplicationBtn: 'संस्थान को आवेदन अग्रेषित करें',
      submittingBtn: 'आवेदन जमा हो रहा है...',
      backBtn: 'पिछला चरण',
      nextBtn: 'अगला चरण',
      docsVaultTitle: 'डिजिटल दस्तावेज़ रिपॉजिटरी',
      docsVaultSubtitle: 'केंद्रीय स्रोत-सत्यापित रिकॉर्ड एवं छात्र प्रमाण पत्र',
      uploadNewDoc: 'नया प्रमाण पत्र अपलोड करें',
      docNameCol: 'दस्तावेज़ का प्रकार',
      sourceVerified: 'स्रोत सत्यापन',
      uploadedOnCol: 'अपलोड तिथि',
      verificationStatusCol: 'सत्यापन स्थिति',
      verifiedBadge: 'स्रोत से सत्यापित',
      pendingBadge: 'सत्यापन प्रतीक्षित',
      deficiencyTitle: 'कमी निवारण एवं स्पष्टीकरण पटल',
      deficiencySubtitle: 'संवीक्षा अधिकारी द्वारा उठाई गई टिप्पणियों की समीक्षा करें एवं आवश्यक स्पष्टीकरण प्रस्तुत करें',
      noDeficiency: 'आपके आवेदन पर कोई कमी लंबित नहीं है। सभी दस्तावेज़ एवं बोनाफाइड रिकॉर्ड मान्य पाए गए हैं।',
      deficiencyAlertTitle: 'ध्यानाकर्षण आवश्यक: सक्रिय कमी नोटिस',
      deficiencyAlertDesc: 'संस्थान अथवा संवीक्षा अधिकारी ने आपके आवेदन पर स्पष्टीकरण मांगा है। कृपया नीचे अपना स्पष्टीकरण प्रस्तुत करें।',
      observationLabel: 'अधिकारी की टिप्पणी',
      requiredActionLabel: 'अपेक्षित समाधान',
      resubmitBtn: 'स्पष्टीकरण / अद्यतन प्रमाण पत्र अपलोड करें',
      timelineTitle: 'आवेदन प्रगति समयरेखा',
      timelineSubtitle: 'संस्थान सत्यापन से लेकर मंत्रालय स्वीकृति तक वास्तविक 4-चरणीय ट्रैकिंग',
      postSelectionTitle: 'चयन उपरांत औपचारिकताएं एवं प्रत्यक्ष लाभ अंतरण (DBT)',
      postSelectionSubtitle: 'अपना स्वीकृति आदेश, आधार-लिंक्ड बैंक स्थिति और अध्येतावृत्ति संवितरण ट्रैक करें',
      dbtStatusTitle: 'पीएफएमएस प्रत्यक्ष लाभ अंतरण (DBT) स्थिति',
      dbtBankMandate: 'आधार-सीडेड बैंक खाता',
      dbtSanctionOrder: 'मंत्रालय स्वीकृति आदेश',
      grievanceTitle: 'छात्र शिकायत एवं निवारण पटल',
      grievanceSubject: 'शिकायत का विषय',
      grievanceCategory: 'श्रेणी',
      grievanceMessage: 'शिकायत का विस्तृत विवरण',
      fileGrievanceBtn: 'आधिकारिक शिकायत दर्ज करें',
      statusSubmitted: 'जमा किया गया',
      statusEligibilityCheck: 'पात्रता जांच',
      statusVerification: 'प्रमाण सत्यापन',
      statusDeficiency: 'कमी निवारण अपेक्षित',
      statusResubmitted: 'पुनः सबमिट / संवीक्षाधीन',
      statusReadyForScrutiny: 'संवीक्षा हेतु तैयार',
      statusScrutiny: 'समिति संवीक्षाधीन',
      statusScreening: 'स्क्रीनिंग पूर्ण',
      statusSelected: 'अनंतिम रूप से चयनित',
      statusNotSelected: 'चयनित नहीं',
      statusPostSelection: 'चयन उपरांत सक्रिय',
      statusCompleted: 'पुरस्कार पूर्ण',
      urgentActionNotice: 'अत्यावश्यक कार्रवाई: कमी नोटिस',
      urgentActionDesc: 'आपके अपलोड किए गए प्रमाण पत्र पर सत्यापन विसंगति पाई गई है। कृपया नीचे कमी निवारण पटल की समीक्षा करें और समयसीमा से पूर्व आवश्यक स्पष्टीकरण प्रस्तुत करें।',
      viewDeficiencyBtn: 'कमी विवरण देखें',
      availableSchemesTitle: 'उपलब्ध छात्रवृत्ति योजनाएं',
      applyOnlineBtn: 'ऑनलाइन आवेदन करें',
      activeSession: 'सत्र',
      academicYearLabel: 'शैक्षणिक सत्र',
      provisionalAwardNotice: 'अनंतिम पुरस्कार पत्र जारी किया गया',
      timelineTransitionsTitle: 'जीवनचक्र समयरेखा एवं सत्यापित चरण',
      whatIsDefect: '1. क्या कमी पाई गई?',
      whyPolicyRequires: '2. नीति के तहत यह क्यों अनिवार्य है?',
      actionRequired: '3. अपेक्षित समाधान',
      clarificationInputPlaceholder: 'अपना स्पष्टीकरण अथवा प्रमाण विवरण यहां दर्ज करें...',
      submitClarificationBtn: 'संवीक्षा अधिकारी को स्पष्टीकरण प्रस्तुत करें'
    },
    schemes: {
      POST_MATRIC: {
        title: 'एसटी विद्यार्थियों हेतु पोस्ट मैट्रिक छात्रवृत्ति',
        level: 'कक्षा 11, 12, स्नातक एवं स्नातकोत्तर',
        slots: 'सभी पात्र एसटी छात्रों हेतु खुली',
        allowance: 'पूर्ण शिक्षण शुल्क + मासिक अनुरक्षण भत्ता',
        desc: 'मैट्रिक उपरांत अथवा माध्यमिक स्तर पर अध्ययनरत एसटी विद्यार्थियों को शिक्षा पूरी करने हेतु केंद्र प्रायोजित छात्रवृत्ति योजना।'
      },
      TOP_CLASS: {
        title: 'एसटी विद्यार्थियों हेतु शीर्ष श्रेणी शिक्षा योजना (Top Class)',
        level: 'स्नातक एवं स्नातकोत्तर (अधिसूचित उत्कृष्ट संस्थान)',
        slots: '1,000 स्वीकृत पुरस्कार / प्रतिवर्ष',
        allowance: 'पूर्ण गैर-वापसीयोग्य शुल्क + ₹3,000/माह निर्वाह भत्ता + ₹45,000 आईटी उपकरण',
        desc: '250+ उत्कृष्ट संस्थानों (आईआईटी, आईआईएम, एम्स, एनएलयू) में प्रवेशित मेधावी एसटी छात्रों हेतु पूर्ण शुल्क एवं निर्वाह भत्ते का प्रत्यक्ष वित्तपोषण।'
      },
      NFST: {
        title: 'एसटी विद्यार्थियों हेतु उच्च शिक्षा राष्ट्रीय अध्येतावृत्ति (NFST)',
        level: 'एम.फिल एवं पीएच.डी. (नियमित पूर्णकालिक)',
        slots: '750 अध्येतावृत्तियां / प्रतिवर्ष',
        allowance: '₹35,000/माह (JRF) | ₹42,000/माह (SRF) + ₹20,500 वार्षिक आकस्मिकता अनुदान',
        desc: 'मान्यता प्राप्त भारतीय विश्वविद्यालयों में नियमित पीएच.डी. कर रहे एसटी शोधार्थियों को सीधे अध्येतावृत्ति प्रदान करने वाली 100% केंद्रीय क्षेत्रक योजना।'
      },
      NOS: {
        title: 'एसटी अभ्यर्थियों हेतु राष्ट्रीय प्रवासी छात्रवृत्ति (NOS)',
        level: 'विदेश में स्नातकोत्तर एवं पीएच.डी. (QS शीर्ष 1,000 विश्वविद्यालय)',
        slots: '20 स्वीकृत पुरस्कार / प्रतिवर्ष',
        allowance: '100% विदेशी शिक्षण शुल्क + $15,400 (अमेरिका) / £9,900 (ब्रिटेन) प्रतिवर्ष निर्वाह भत्ता',
        desc: 'विश्व के शीर्ष क्यूएस-रैंक वाले विश्वविद्यालयों में अध्ययनरत एसटी शोधार्थियों के विदेशी शिक्षण शुल्क, विमान किराया, चिकित्सा बीमा एवं जीवनयापन का पूर्ण व्यय।'
      }
    }
  }
};
