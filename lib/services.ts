export interface SubService {
  title: string;
  description: string;
  details?: string[];
}

export interface ServiceData {
  slug: string;
  title: string;
  shortDesc: string;
  heroDesc: string;
  icon: string; // Lucide icon name
  whatIs: string;
  whoNeeds: string;
  benefits: string[];
  subServices: SubService[];
}

export const allServices: ServiceData[] = [
  {
    slug: "business-registration",
    title: "Business Registration",
    shortDesc: "Incorporate your business with the right structure — Private Limited, LLP, OPC, Partnership, or Proprietorship.",
    heroDesc: "Choose the right business structure and get your company incorporated seamlessly with end-to-end support.",
    icon: "Building2",
    whatIs:
      "Business registration is the process of legally incorporating a business entity under the applicable laws in India. Choosing the right structure — Private Limited Company, LLP, OPC, Partnership Firm, or Proprietorship — determines your liability, taxation, compliance obligations, and ability to raise funds.",
    whoNeeds:
      "Startups, entrepreneurs, small businesses, professionals, and any individual or group planning to start a business activity in India.",
    benefits: [
      "Legal identity and limited liability protection",
      "Access to funding, loans, and investment",
      "Builds credibility with customers and vendors",
      "Tax benefits available to registered entities",
      "Easy bank account and contract execution",
      "Scalable structure for business growth",
    ],
    subServices: [
      {
        title: "Private Limited Company",
        description: "Incorporation of a Private Limited Company under Companies Act, 2013.",
        details: [
          "Name reservation via RUN (Reserve Unique Name)",
          "DIN and DSC for directors",
          "SPICe+ form filing with MCA",
          "MOA, AOA drafting and filing",
          "Certificate of Incorporation",
          "PAN and TAN application",
        ],
      },
      {
        title: "Limited Liability Partnership (LLP)",
        description: "Incorporation of LLP under the LLP Act, 2008.",
        details: [
          "Name reservation via RUN-LLP",
          "DPIN and DSC for designated partners",
          "FiLLiP form filing",
          "LLP Agreement drafting and filing",
          "Certificate of Incorporation",
          "PAN and TAN application",
        ],
      },
      {
        title: "One Person Company (OPC)",
        description: "Register as a single-member company with limited liability.",
        details: [
          "Suitable for solo founders wanting limited liability",
          "SPICe+ form filing",
          "Nominee Director appointment",
          "MOA, AOA drafting",
          "Certificate of Incorporation",
        ],
      },
      {
        title: "Partnership Firm",
        description: "Registration of Partnership Firm under the Indian Partnership Act, 1932.",
        details: [
          "Drafting of Partnership Deed",
          "Registration with Registrar of Firms",
          "PAN application for the firm",
          "Current account assistance",
        ],
      },
      {
        title: "Proprietorship",
        description: "Set up a Sole Proprietorship with required registrations.",
        details: [
          "GST Registration",
          "Shop & Establishment Registration",
          "MSME / Udyam Registration",
          "Current account assistance",
        ],
      },
      {
        title: "Section 8 Company",
        description: "Incorporate a non-profit company for charitable or social objectives.",
        details: [
          "Name reservation",
          "License from Central Government",
          "MOA, AOA for non-profit objects",
          "Certificate of Incorporation",
        ],
      },
    ],
  },
  {
    slug: "gst-services",
    title: "GST Services",
    shortDesc: "Complete GST registration, return filing, amendments, and advisory for all business types.",
    heroDesc: "End-to-end Goods and Services Tax compliance — registration to annual returns, advisory, and notices.",
    icon: "Receipt",
    whatIs:
      "GST (Goods and Services Tax) is a comprehensive indirect tax levied on the supply of goods and services in India. Businesses meeting the threshold turnover are required to register under GST and file periodic returns. Non-compliance attracts penalties and interest.",
    whoNeeds:
      "Any business or individual supplying goods/services above the GST threshold, e-commerce sellers, exporters, importers, and businesses registered voluntarily.",
    benefits: [
      "Avoid penalties for non-registration or late filing",
      "Input Tax Credit (ITC) benefits",
      "Enhanced business credibility",
      "Seamless compliance with GST portal",
      "Expert advisory for complex transactions",
      "Timely filing to prevent interest accumulation",
    ],
    subServices: [
      {
        title: "GST Registration",
        description: "Obtain GSTIN for your business on the GST portal.",
        details: [
          "Regular dealer registration",
          "Composition scheme registration",
          "Voluntary registration",
          "Amendment of registration",
          "Additional place of business",
        ],
      },
      {
        title: "GST Return Filing",
        description: "Monthly, quarterly, and annual GST return filing.",
        details: [
          "GSTR-1 – Outward supplies",
          "GSTR-3B – Monthly summary return",
          "GSTR-9 – Annual return",
          "GSTR-9C – Reconciliation statement",
          "CMP-08 – Composition dealer quarterly return",
        ],
      },
      {
        title: "GST Amendments",
        description: "Amendments to GST registration details and returns.",
        details: [
          "Core and non-core field amendments",
          "Change of address, business name",
          "Addition of place of business",
          "Authorized signatory changes",
        ],
      },
      {
        title: "GST Cancellation",
        description: "Voluntary or compulsory cancellation of GSTIN.",
        details: [
          "Application for cancellation",
          "Final return (GSTR-10) filing",
          "Reply to show cause notices",
        ],
      },
      {
        title: "GST Refund",
        description: "Claim GST refunds for exports, excess ITC, or inverted duty structure.",
        details: [
          "Refund application on GST portal",
          "Documentation and reconciliation",
          "Follow-up with tax officer",
        ],
      },
    ],
  },
  {
    slug: "mca-compliance",
    title: "MCA Compliance",
    shortDesc: "Annual filings, ROC forms, board resolutions, statutory registers, and secretarial compliance for companies and LLPs.",
    heroDesc: "Stay compliant with Ministry of Corporate Affairs — annual filings, event-based ROC forms, and secretarial services.",
    icon: "FileText",
    whatIs:
      "MCA (Ministry of Corporate Affairs) compliance covers all statutory filings and secretarial obligations for companies and LLPs registered under the Companies Act, 2013 and LLP Act, 2008. Non-filing attracts heavy late fees, penalties, and potential disqualification of directors.",
    whoNeeds:
      "All registered Private Limited Companies, Public Limited Companies, One Person Companies, LLPs, and Section 8 Companies in India.",
    benefits: [
      "Avoid late fees and director disqualification",
      "Maintain good standing on MCA portal",
      "Ensure regulatory compliance at all times",
      "Proper maintenance of statutory records",
      "Timely ROC filings for event-based compliances",
      "Professional secretarial support",
    ],
    subServices: [
      {
        title: "Annual Filings",
        description: "Mandatory annual ROC filings for companies.",
        details: [
          "AOC-4 – Financial Statements filing",
          "MGT-7 / MGT-7A – Annual Return filing",
          "ADT-1 – Appointment of Auditor",
          "DIR-3 KYC – Director KYC",
        ],
      },
      {
        title: "LLP Annual Return",
        description: "Annual compliance filings for LLPs.",
        details: [
          "Form 11 – Annual Return of LLP",
          "Form 8 – Statement of Account & Solvency",
        ],
      },
      {
        title: "Board Resolutions & Minutes",
        description: "Drafting of board resolutions, minutes, and notices.",
        details: [
          "Board Meeting notices and minutes",
          "Annual General Meeting (AGM) notices and minutes",
          "Resolutions for routine and special matters",
        ],
      },
      {
        title: "Statutory Registers",
        description: "Maintenance of mandatory statutory registers.",
        details: [
          "Register of Members",
          "Register of Directors and KMP",
          "Register of Contracts",
          "Register of Charges",
        ],
      },
      {
        title: "ROC Forms",
        description: "Filing of event-based ROC forms.",
        details: [
          "INC-22 – Change of Registered Office",
          "MGT-14 – Filing of Resolutions",
          "SH-7 – Alteration of Share Capital",
          "PAS-3 – Return of Allotment",
          "CHG-1/CHG-4 – Charge creation/satisfaction",
        ],
      },
      {
        title: "DIR-3 KYC",
        description: "Annual KYC compliance for all directors holding DIN.",
        details: [
          "Web-based DIR-3 KYC for active DINs",
          "DIR-3 KYC (form-based) for changes",
          "Penalty avoidance for non-filing",
        ],
      },
    ],
  },
  {
    slug: "income-tax",
    title: "Income Tax",
    shortDesc: "ITR filing for individuals, firms, and companies along with tax planning, TDS, and notice handling.",
    heroDesc: "Comprehensive income tax compliance — return filing, tax planning, TDS advisory, and handling tax notices.",
    icon: "Calculator",
    whatIs:
      "Income Tax compliance in India involves filing Income Tax Returns (ITR) with the Income Tax Department for every applicable assessee — individuals, firms, companies, and trusts. It also covers TDS compliance, tax planning, and representation before tax authorities.",
    whoNeeds:
      "Salaried individuals, professionals, business owners, firms, companies, trusts, and NRIs having income or tax liability in India.",
    benefits: [
      "Avoid penalties for non-filing or late filing",
      "Optimize tax liability through proper planning",
      "Claim refunds on excess TDS",
      "Professional handling of income tax notices",
      "Accurate financial records and documentation",
      "Expert advice on tax-saving investments",
    ],
    subServices: [
      {
        title: "ITR Filing – Individual",
        description: "Income Tax Return filing for individuals, HUFs, and salaried employees.",
        details: [
          "ITR-1 (Sahaj) for salaried individuals",
          "ITR-2 for capital gains and foreign income",
          "ITR-3 for business/professional income",
          "ITR-4 (Sugam) for presumptive taxation",
        ],
      },
      {
        title: "ITR Filing – Firm / Company",
        description: "Income Tax Return filing for firms, companies, and LLPs.",
        details: [
          "ITR-5 for firms, LLPs, and AOPs",
          "ITR-6 for companies",
          "ITR-7 for trusts and NGOs",
          "Tax audit report (Form 3CA/3CB)",
        ],
      },
      {
        title: "Tax Planning",
        description: "Strategic tax planning to minimize tax liability within legal bounds.",
        details: [
          "Review of income and deductions",
          "Section 80C, 80D, 80G advisory",
          "Capital gains tax planning",
          "Business expense optimization",
        ],
      },
      {
        title: "Form 15CA / 15CB",
        description: "Compliance for foreign remittances requiring CA certification.",
        details: [
          "Drafting and filing of Form 15CA",
          "CA certificate in Form 15CB",
          "Advisory on taxability of foreign payments",
        ],
      },
      {
        title: "Income Tax Notices",
        description: "Reply and representation for income tax notices and assessments.",
        details: [
          "Notice under Section 139(9) – Defective return",
          "Scrutiny assessment (Section 143(2))",
          "Demand notices reply",
          "Rectification applications",
        ],
      },
    ],
  },
  {
    slug: "tds-compliance",
    title: "TDS Compliance",
    shortDesc: "TAN registration, TDS return filing, TDS certificates, and correction of defaults for all deductors.",
    heroDesc: "Complete TDS compliance management — TAN registration, quarterly returns, certificates, and defaults resolution.",
    icon: "ClipboardList",
    whatIs:
      "Tax Deducted at Source (TDS) is a mechanism where the payer deducts tax at the time of payment and deposits it with the government. Deductors must obtain TAN, deduct correct TDS, deposit it on time, and file quarterly TDS returns. Defaults attract interest, penalty, and prosecution.",
    whoNeeds:
      "Businesses, employers, companies, LLPs, firms, individuals making specified payments such as salaries, rent, professional fees, contractor payments, and interest.",
    benefits: [
      "Avoid late payment interest under Section 201",
      "Prevent penalty for non-filing of TDS returns",
      "Accurate TDS certificates for deductees",
      "Streamlined compliance calendar management",
      "Expert handling of TDS defaults and corrections",
    ],
    subServices: [
      {
        title: "TAN Registration",
        description: "Obtain Tax Deduction Account Number (TAN) for new deductors.",
        details: [
          "Form 49B filing",
          "TAN allotment from Income Tax Department",
          "TAN change request if required",
        ],
      },
      {
        title: "TDS Return Filing",
        description: "Quarterly TDS return filing for all deductors.",
        details: [
          "Form 24Q – TDS on salary",
          "Form 26Q – TDS on non-salary payments",
          "Form 27Q – TDS on payments to NRIs",
          "Form 27EQ – TCS returns",
        ],
      },
      {
        title: "TDS Certificates",
        description: "Generation and distribution of TDS certificates.",
        details: [
          "Form 16 – TDS certificate for salaried employees",
          "Form 16A – TDS certificate for non-salary deductions",
          "TRACES portal download and verification",
        ],
      },
      {
        title: "TDS Default Resolution",
        description: "Resolution of TDS defaults, mismatches, and notices.",
        details: [
          "Correction of challan details",
          "Online corrections on TRACES",
          "Reply to demand notices from CPC-TDS",
          "Computation and payment of interest",
        ],
      },
    ],
  },
  {
    slug: "labour-law",
    title: "Labour Law & Compliance",
    shortDesc: "PF, ESI, Professional Tax, Shop & Establishment, and Contract Labour registrations and returns for employers.",
    heroDesc: "Complete labour law compliance — PF, ESI, Professional Tax registrations, periodic returns, and advisory.",
    icon: "Users",
    whatIs:
      "Labour law compliance encompasses all statutory obligations of employers under central and state labour laws, including Provident Fund (PF), Employee State Insurance (ESI), Professional Tax, Shop and Establishment Act, Contract Labour Act, and more.",
    whoNeeds:
      "All employers — companies, LLPs, firms, shops, factories, and establishments — who engage employees and are liable under applicable labour laws based on employee count and business nature.",
    benefits: [
      "Avoid penalties for non-registration and non-compliance",
      "Employee welfare and social security coverage",
      "Smooth labour inspections and audits",
      "Timely filing of returns to avoid defaults",
      "Expert advisory on applicable laws",
      "Comprehensive compliance calendar management",
    ],
    subServices: [
      {
        title: "PF Registration",
        description: "Registration under Employees Provident Fund and Miscellaneous Provisions Act, 1952.",
        details: [
          "Applicable to establishments with 20+ employees",
          "Online registration on EPFO portal",
          "PF code allotment",
          "Employee onboarding on EPFO portal",
        ],
      },
      {
        title: "ESI Registration",
        description: "Registration under Employees State Insurance Act, 1948.",
        details: [
          "Applicable to establishments with 10+ employees (in Maharashtra)",
          "ESI code allotment",
          "Employee registration on ESIC portal",
          "Employer and employee contribution management",
        ],
      },
      {
        title: "PF / ESI Returns",
        description: "Periodic PF and ESI return filing and contribution remittances.",
        details: [
          "Monthly PF ECR filing",
          "Monthly ESI contribution challan",
          "Annual PF return (Form 3A, 6A)",
          "ESI half-yearly return",
        ],
      },
      {
        title: "Professional Tax",
        description: "Professional Tax registration and return filing in Maharashtra.",
        details: [
          "PTEC – Professional Tax Enrollment Certificate for business",
          "PTRC – Professional Tax Registration Certificate for employer",
          "Monthly / annual PTRC return filing",
          "Professional Tax payment via Mahavat portal",
        ],
      },
      {
        title: "Shop & Establishment",
        description: "Registration under the Maharashtra Shops and Establishments Act.",
        details: [
          "Registration of shops, offices, and commercial establishments",
          "Annual renewal",
          "Amendment for changes in business details",
        ],
      },
      {
        title: "Contract Labour",
        description: "Registration and licensing under Contract Labour (Regulation and Abolition) Act, 1970.",
        details: [
          "Principal employer registration",
          "Contractor licence",
          "Half-yearly returns",
        ],
      },
    ],
  },
  {
    slug: "startup-advisory",
    title: "Startup Advisory",
    shortDesc: "DPIIT startup recognition, MSME registration, business planning, and advisory for early-stage startups.",
    heroDesc: "Launch your startup on the right foundation — DPIIT recognition, MSME registration, and strategic advisory.",
    icon: "Lightbulb",
    whatIs:
      "Startup Advisory covers a range of services to help early-stage businesses gain legal recognition, access government schemes and incentives, and build a compliant, scalable business structure from day one.",
    whoNeeds:
      "Early-stage startups, new entrepreneurs, tech companies, and innovative businesses seeking government recognition and compliance advisory.",
    benefits: [
      "Access to DPIIT tax exemptions and benefits",
      "MSME benefits — credit, subsidies, and priority lending",
      "Simplified compliance under Startup India scheme",
      "Fund-raising readiness through proper incorporation",
      "Access to government tenders reserved for MSMEs",
      "Expert guidance from concept to compliance",
    ],
    subServices: [
      {
        title: "DPIIT Startup Recognition",
        description: "Register your startup with Department for Promotion of Industry and Internal Trade.",
        details: [
          "Startup India portal registration",
          "DPIIT recognition certificate",
          "Eligibility for tax exemptions under Section 80-IAC",
          "Access to Startup India schemes and funding",
        ],
      },
      {
        title: "MSME / Udyam Registration",
        description: "Register as a Micro, Small, or Medium Enterprise for government benefits.",
        details: [
          "Udyam Registration on udyamregistration.gov.in",
          "Udyam Certificate",
          "Classification advisory (Micro/Small/Medium)",
          "Assistance for loans under MSME schemes",
        ],
      },
      {
        title: "Business Plan & Project Report",
        description: "Preparation of business plan or project report for funding or bank loans.",
        details: [
          "Market analysis and financial projections",
          "Detailed project report for bank loans",
          "Pitch deck preparation assistance",
        ],
      },
      {
        title: "Compliance Roadmap",
        description: "Custom compliance checklist and calendar for new businesses.",
        details: [
          "Entity-specific compliance obligations",
          "Milestone-based compliance calendar",
          "Regulatory advisory for sector-specific requirements",
        ],
      },
    ],
  },
  {
    slug: "ngo-services",
    title: "NGO / Section 8 Company",
    shortDesc: "12A, 80G, CSR-1, and FCRA registrations for NGOs, trusts, societies, and Section 8 companies.",
    heroDesc: "Enable your NGO to access tax exemptions, accept donations, and receive CSR and foreign funding with proper registrations.",
    icon: "Heart",
    whatIs:
      "Non-profit organizations require specific registrations to access tax exemptions, accept donations with tax benefits for donors, and receive CSR or foreign funding. These include 12A, 80G, CSR-1, and FCRA registrations under the Income Tax Act and Foreign Contribution (Regulation) Act.",
    whoNeeds:
      "Trusts, registered societies, Section 8 companies, and other non-profit organizations aiming to claim tax exemptions, enable donor deductions, or access foreign/CSR funding.",
    benefits: [
      "Tax exemption on surplus income under Section 12A",
      "Enable donors to claim 80G tax deductions",
      "Access to CSR funding from corporates",
      "Receive foreign contributions under FCRA",
      "Enhanced credibility and institutional recognition",
      "Eligibility for government grants and schemes",
    ],
    subServices: [
      {
        title: "12A Registration",
        description: "Registration for tax exemption on income of charitable/religious trusts and NGOs.",
        details: [
          "Application in Form 10A on Income Tax portal",
          "Document preparation and verification",
          "Follow-up with Income Tax Department",
          "12A Registration certificate",
        ],
      },
      {
        title: "80G Registration",
        description: "Registration enabling donors to claim income tax deductions on donations.",
        details: [
          "Application in Form 10G",
          "Provisional and final 80G approval",
          "Annual compliance for 80G renewal",
        ],
      },
      {
        title: "CSR Registration (Form CSR-1)",
        description: "Registration of NGOs on MCA portal to receive CSR funds from companies.",
        details: [
          "Form CSR-1 filing on MCA portal",
          "Unique CSR Registration Number (CRN)",
          "Documentation and eligibility verification",
        ],
      },
      {
        title: "FCRA Registration",
        description: "Registration to receive foreign contributions from overseas donors.",
        details: [
          "Prior permission or regular registration under FCRA",
          "Application on FCRA online portal (Ministry of Home Affairs)",
          "Designated FCRA bank account (SBI Main Branch, New Delhi)",
          "Annual FCRA return filing (FC-4)",
        ],
      },
    ],
  },
  {
    slug: "other-registrations",
    title: "Other Registrations",
    shortDesc: "DSC, IEC, LEI, PTEC, PTRC, ISIN, and DML registrations for specialized business needs.",
    heroDesc: "Specialized registrations for import-export, digital signatures, financial transactions, and sector-specific compliances.",
    icon: "Tag",
    whatIs:
      "Several specialized registrations are required depending on the nature of your business operations. These include Digital Signature Certificates, Import-Export Codes, Legal Entity Identifiers, Professional Tax certificates, ISIN for securities, and Direct Marketing Licenses.",
    whoNeeds:
      "Businesses in import/export, financial transactions, securities issuance, Maharashtra-based employers, and organizations requiring digital authentication for MCA/tax filings.",
    benefits: [
      "Legal authorization for specific business activities",
      "Compliance with SEBI, customs, and tax authorities",
      "Digital authentication for regulatory filings",
      "Enable international trade with IEC",
      "Access capital markets with ISIN",
      "Professional Tax compliance for employers and professionals",
    ],
    subServices: [
      {
        title: "DSC – Individual",
        description: "Digital Signature Certificate for individual directors, partners, and professionals.",
        details: [
          "Class 3 DSC for MCA, GST, Income Tax filings",
          "USB token and installation",
          "2-year validity",
        ],
      },
      {
        title: "DSC – Organisation",
        description: "Digital Signature Certificate for companies and LLPs.",
        details: [
          "Organisation DSC for regulatory filings",
          "DGFT DSC for import-export",
          "USB token and installation",
        ],
      },
      {
        title: "IEC (Import Export Code)",
        description: "Mandatory registration for businesses engaged in import or export of goods/services.",
        details: [
          "Application on DGFT portal",
          "IEC certificate",
          "Annual updation of IEC",
        ],
      },
      {
        title: "LEI (Legal Entity Identifier)",
        description: "Unique identifier for entities in financial transactions above specified thresholds.",
        details: [
          "Mandatory for large corporate borrowers (SEBI/RBI requirement)",
          "Registration with LEIL (Legal Entity Identifier India Ltd.)",
          "Annual renewal",
        ],
      },
      {
        title: "PTEC Registration",
        description: "Professional Tax Enrollment Certificate for businesses and self-employed individuals in Maharashtra.",
        details: [
          "Registration on Mahavat/Mahagstin portal",
          "Annual PTEC payment",
        ],
      },
      {
        title: "PTRC Registration",
        description: "Professional Tax Registration Certificate for employers in Maharashtra.",
        details: [
          "Registration as employer for Professional Tax deduction",
          "Monthly/annual return filing",
          "Salary deduction and remittance management",
        ],
      },
      {
        title: "ISIN Application",
        description: "International Securities Identification Number for companies issuing securities.",
        details: [
          "Mandatory for companies with listed or unlisted debentures/shares",
          "Application through NSDL/CDSL",
          "ISIN allotment letter",
        ],
      },
      {
        title: "DML – Direct Marketing License (FPC)",
        description: "Direct Marketing License for Farmer Producer Companies under SEBI/state regulations.",
        details: [
          "Application assistance",
          "Documentation support",
          "Liaison with regulatory authorities",
        ],
      },
    ],
  },
  {
    slug: "trademark",
    title: "Trademark",
    shortDesc: "Trademark registration, search, objection reply, and renewal to protect your brand identity.",
    heroDesc: "Protect your brand — trademark search, registration, objection handling, and renewal under the Trade Marks Act.",
    icon: "BadgeCheck",
    whatIs:
      "A trademark is a distinctive sign, logo, name, or tagline that identifies your goods or services. Registering a trademark under the Trade Marks Act, 1999 gives you exclusive rights to use the mark and legal protection against infringement.",
    whoNeeds:
      "Businesses, startups, entrepreneurs, professionals, and individuals who want to protect their brand name, logo, tagline, or product identity.",
    benefits: [
      "Exclusive legal right to use the trademark",
      "Protection against brand infringement and counterfeiting",
      "Builds brand value and customer trust",
      "Can be licensed or franchised as a business asset",
      "Legal remedy against unauthorized use",
      "® symbol usage after registration",
    ],
    subServices: [
      {
        title: "Trademark Search",
        description: "Search existing trademarks to assess registrability of your mark.",
        details: [
          "Search on IP India trademark database",
          "Class-wise availability check",
          "Conflict analysis and advisory",
        ],
      },
      {
        title: "Trademark Application",
        description: "Filing of trademark application under applicable class(es).",
        details: [
          "Nice Classification advisory (45 classes)",
          "TM-A form filing on IP India portal",
          "Acknowledgment and application number",
        ],
      },
      {
        title: "Trademark Objection Reply",
        description: "Reply to examination report objections raised by the Trademark Registry.",
        details: [
          "Analysis of examiner's objections",
          "Drafting and filing of reply",
          "Hearing representation if required",
        ],
      },
      {
        title: "Trademark Renewal",
        description: "Renewal of registered trademark every 10 years.",
        details: [
          "TM-R application for renewal",
          "Restoration of expired trademarks (if within 6 months of expiry)",
        ],
      },
    ],
  },
  {
    slug: "project-report",
    title: "Project Report & Business Conversion",
    shortDesc: "Detailed project reports for bank loans and business entity conversion services.",
    heroDesc: "Prepare bankable project reports and convert your business entity to a more suitable structure.",
    icon: "FileBarChart",
    whatIs:
      "Project Reports are detailed documents submitted to banks and financial institutions for obtaining business loans, credit facilities, or government scheme benefits. Business Conversion services cover conversion between entity types — Proprietorship to LLP, LLP to Company, etc.",
    whoNeeds:
      "Businesses seeking bank loans, MSME credit, government scheme benefits, or entrepreneurs looking to restructure their business entity.",
    benefits: [
      "Professionally prepared bankable project reports",
      "Higher loan approval probability",
      "Smooth business entity conversion without disruption",
      "Tax-efficient restructuring",
      "Regulatory compliance during conversion",
      "Expert advisory on suitable entity structure",
    ],
    subServices: [
      {
        title: "Project Report Preparation",
        description: "Detailed project report for bank loans and financial scheme applications.",
        details: [
          "Business overview and promoter details",
          "Market analysis and demand assessment",
          "Technical specifications and plant layout",
          "Financial projections (5-year P&L, Balance Sheet, Cash Flow)",
          "Loan repayment schedule",
          "Break-even analysis",
        ],
      },
      {
        title: "Business Conversion – Proprietorship to LLP",
        description: "Convert proprietorship or partnership firm to LLP.",
        details: [
          "LLP incorporation",
          "Asset and liability transfer",
          "Conversion compliance filings",
        ],
      },
      {
        title: "Business Conversion – LLP to Company",
        description: "Convert LLP to Private Limited Company.",
        details: [
          "Company incorporation under URC-1",
          "Transfer of assets and liabilities",
          "MCA and tax authority intimations",
        ],
      },
      {
        title: "Business Conversion – Partnership to LLP",
        description: "Convert registered partnership firm to LLP under LLP Act.",
        details: [
          "Form 17 filing with RoC",
          "Statement by partners",
          "Incorporation certificate as LLP",
        ],
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return allServices.find((s) => s.slug === slug);
}
