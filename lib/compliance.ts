export interface ComplianceItem {
  filing: string;
  dueDate: string;
  act: string;
  form: string;
  applicableTo: string;
  description: string;
}

export interface MonthlyCompliance {
  month: string;
  items: ComplianceItem[];
}

export const complianceCalendar: MonthlyCompliance[] = [
  {
    month: "April",
    items: [
      {
        filing: "GSTR-3B (March)",
        dueDate: "20th April",
        act: "GST Act",
        form: "GSTR-3B",
        applicableTo: "All GST Registered Taxpayers",
        description: "Monthly GST return for outward/inward supplies summary.",
      },
      {
        filing: "GSTR-1 (March)",
        dueDate: "11th April",
        act: "GST Act",
        form: "GSTR-1",
        applicableTo: "Regular GST Taxpayers",
        description: "Details of outward supplies for the month of March.",
      },
      {
        filing: "TDS Deposit (March)",
        dueDate: "30th April",
        act: "Income Tax Act",
        form: "Challan 281",
        applicableTo: "All TDS Deductors",
        description: "Deposit of TDS deducted in the month of March.",
      },
      {
        filing: "PF Contribution (March)",
        dueDate: "15th April",
        act: "EPF Act",
        form: "ECR",
        applicableTo: "PF Registered Establishments",
        description: "Monthly PF contribution for the month of March.",
      },
      {
        filing: "ESI Contribution (March)",
        dueDate: "15th April",
        act: "ESI Act",
        form: "ESIC Challan",
        applicableTo: "ESI Registered Establishments",
        description: "Monthly ESI contribution for the month of March.",
      },
    ],
  },
  {
    month: "May",
    items: [
      {
        filing: "GSTR-3B (April)",
        dueDate: "20th May",
        act: "GST Act",
        form: "GSTR-3B",
        applicableTo: "All GST Registered Taxpayers",
        description: "Monthly GST return for April.",
      },
      {
        filing: "GSTR-1 (April)",
        dueDate: "11th May",
        act: "GST Act",
        form: "GSTR-1",
        applicableTo: "Regular GST Taxpayers",
        description: "Details of outward supplies for April.",
      },
      {
        filing: "TDS Return Q4",
        dueDate: "31st May",
        act: "Income Tax Act",
        form: "Form 24Q / 26Q",
        applicableTo: "All TDS Deductors",
        description: "Quarterly TDS return for January–March quarter.",
      },
      {
        filing: "Form 16 Issuance",
        dueDate: "15th May",
        act: "Income Tax Act",
        form: "Form 16",
        applicableTo: "Employers",
        description: "TDS certificate for salary income to employees.",
      },
    ],
  },
  {
    month: "June",
    items: [
      {
        filing: "GSTR-3B (May)",
        dueDate: "20th June",
        act: "GST Act",
        form: "GSTR-3B",
        applicableTo: "All GST Registered Taxpayers",
        description: "Monthly GST return for May.",
      },
      {
        filing: "Advance Tax Installment 1",
        dueDate: "15th June",
        act: "Income Tax Act",
        form: "Challan 280",
        applicableTo: "Taxpayers with tax liability > ₹10,000",
        description: "First installment of advance tax (15% of tax liability).",
      },
      {
        filing: "DIR-3 KYC",
        dueDate: "30th June",
        act: "Companies Act, 2013",
        form: "DIR-3 KYC",
        applicableTo: "All DIN holders",
        description: "Annual KYC filing for all directors holding DIN.",
      },
    ],
  },
  {
    month: "July",
    items: [
      {
        filing: "GSTR-3B (June)",
        dueDate: "20th July",
        act: "GST Act",
        form: "GSTR-3B",
        applicableTo: "All GST Registered Taxpayers",
        description: "Monthly GST return for June.",
      },
      {
        filing: "GSTR-1 (June)",
        dueDate: "11th July",
        act: "GST Act",
        form: "GSTR-1",
        applicableTo: "Regular GST Taxpayers",
        description: "Details of outward supplies for June.",
      },
      {
        filing: "TDS Return Q1",
        dueDate: "31st July",
        act: "Income Tax Act",
        form: "Form 24Q / 26Q",
        applicableTo: "All TDS Deductors",
        description: "Quarterly TDS return for April–June quarter.",
      },
      {
        filing: "ITR Filing – Individuals / Firms",
        dueDate: "31st July",
        act: "Income Tax Act",
        form: "ITR-1 to ITR-5",
        applicableTo: "Non-auditable assesses",
        description: "Income Tax Return for FY 2024-25 (non-audit cases).",
      },
    ],
  },
  {
    month: "August",
    items: [
      {
        filing: "GSTR-3B (July)",
        dueDate: "20th August",
        act: "GST Act",
        form: "GSTR-3B",
        applicableTo: "All GST Registered Taxpayers",
        description: "Monthly GST return for July.",
      },
      {
        filing: "Form 16A (Q1)",
        dueDate: "15th August",
        act: "Income Tax Act",
        form: "Form 16A",
        applicableTo: "TDS Deductors",
        description: "TDS certificate for non-salary deductions in Q1.",
      },
    ],
  },
  {
    month: "September",
    items: [
      {
        filing: "GSTR-3B (August)",
        dueDate: "20th September",
        act: "GST Act",
        form: "GSTR-3B",
        applicableTo: "All GST Registered Taxpayers",
        description: "Monthly GST return for August.",
      },
      {
        filing: "Advance Tax Installment 2",
        dueDate: "15th September",
        act: "Income Tax Act",
        form: "Challan 280",
        applicableTo: "Taxpayers with tax liability > ₹10,000",
        description: "Second installment of advance tax (cumulative 45%).",
      },
      {
        filing: "ITR Filing – Audit Cases",
        dueDate: "30th September",
        act: "Income Tax Act",
        form: "ITR-3, ITR-5, ITR-6",
        applicableTo: "Entities requiring tax audit",
        description: "Income Tax Return for audit-required assesses.",
      },
      {
        filing: "AGM Deadline",
        dueDate: "30th September",
        act: "Companies Act, 2013",
        form: "MGT-15",
        applicableTo: "All Companies",
        description: "Deadline for holding Annual General Meeting.",
      },
    ],
  },
  {
    month: "October",
    items: [
      {
        filing: "GSTR-3B (September)",
        dueDate: "20th October",
        act: "GST Act",
        form: "GSTR-3B",
        applicableTo: "All GST Registered Taxpayers",
        description: "Monthly GST return for September.",
      },
      {
        filing: "TDS Return Q2",
        dueDate: "31st October",
        act: "Income Tax Act",
        form: "Form 24Q / 26Q",
        applicableTo: "All TDS Deductors",
        description: "Quarterly TDS return for July–September quarter.",
      },
      {
        filing: "AOC-4 (Financial Statements)",
        dueDate: "30th October",
        act: "Companies Act, 2013",
        form: "AOC-4",
        applicableTo: "All Companies",
        description: "Filing of annual financial statements with MCA.",
      },
    ],
  },
  {
    month: "November",
    items: [
      {
        filing: "GSTR-3B (October)",
        dueDate: "20th November",
        act: "GST Act",
        form: "GSTR-3B",
        applicableTo: "All GST Registered Taxpayers",
        description: "Monthly GST return for October.",
      },
      {
        filing: "MGT-7 / MGT-7A (Annual Return)",
        dueDate: "29th November",
        act: "Companies Act, 2013",
        form: "MGT-7 / MGT-7A",
        applicableTo: "All Companies",
        description: "Annual Return filing with MCA (within 60 days of AGM).",
      },
      {
        filing: "LLP Form 11",
        dueDate: "30th November",
        act: "LLP Act, 2008",
        form: "Form 11",
        applicableTo: "All LLPs",
        description: "Annual Return of LLP.",
      },
    ],
  },
  {
    month: "December",
    items: [
      {
        filing: "GSTR-3B (November)",
        dueDate: "20th December",
        act: "GST Act",
        form: "GSTR-3B",
        applicableTo: "All GST Registered Taxpayers",
        description: "Monthly GST return for November.",
      },
      {
        filing: "Advance Tax Installment 3",
        dueDate: "15th December",
        act: "Income Tax Act",
        form: "Challan 280",
        applicableTo: "Taxpayers with tax liability > ₹10,000",
        description: "Third installment of advance tax (cumulative 75%).",
      },
    ],
  },
  {
    month: "January",
    items: [
      {
        filing: "GSTR-3B (December)",
        dueDate: "20th January",
        act: "GST Act",
        form: "GSTR-3B",
        applicableTo: "All GST Registered Taxpayers",
        description: "Monthly GST return for December.",
      },
      {
        filing: "TDS Return Q3",
        dueDate: "31st January",
        act: "Income Tax Act",
        form: "Form 24Q / 26Q",
        applicableTo: "All TDS Deductors",
        description: "Quarterly TDS return for October–December quarter.",
      },
    ],
  },
  {
    month: "February",
    items: [
      {
        filing: "GSTR-3B (January)",
        dueDate: "20th February",
        act: "GST Act",
        form: "GSTR-3B",
        applicableTo: "All GST Registered Taxpayers",
        description: "Monthly GST return for January.",
      },
      {
        filing: "LLP Form 8",
        dueDate: "28th February",
        act: "LLP Act, 2008",
        form: "Form 8",
        applicableTo: "All LLPs",
        description: "Statement of Account & Solvency for LLP.",
      },
    ],
  },
  {
    month: "March",
    items: [
      {
        filing: "GSTR-3B (February)",
        dueDate: "20th March",
        act: "GST Act",
        form: "GSTR-3B",
        applicableTo: "All GST Registered Taxpayers",
        description: "Monthly GST return for February.",
      },
      {
        filing: "Advance Tax Installment 4",
        dueDate: "15th March",
        act: "Income Tax Act",
        form: "Challan 280",
        applicableTo: "Taxpayers with tax liability > ₹10,000",
        description: "Final installment of advance tax (100% of tax liability).",
      },
      {
        filing: "GSTR-9 (Annual Return)",
        dueDate: "31st December (prev year)",
        act: "GST Act",
        form: "GSTR-9",
        applicableTo: "Registered Taxpayers with turnover > ₹2 Cr",
        description: "GST Annual Return for the preceding financial year.",
      },
    ],
  },
];

export interface DocumentChecklistItem {
  document: string;
  purpose: string;
  format?: string;
}

export interface DocumentChecklistSection {
  service: string;
  slug: string;
  items: DocumentChecklistItem[];
}

export const documentChecklist: DocumentChecklistSection[] = [
  {
    service: "Private Limited Company",
    slug: "pvt-ltd",
    items: [
      { document: "PAN Card of all proposed directors", purpose: "Identity proof", format: "Self-attested copy" },
      { document: "Aadhaar Card of all proposed directors", purpose: "Identity & address proof", format: "Self-attested copy" },
      { document: "Photograph (passport size)", purpose: "Director identification", format: "JPEG, recent" },
      { document: "Mobile number and Email ID of directors", purpose: "DSC / DIN registration", format: "Active number & email" },
      { document: "Proof of registered office address", purpose: "Registered office", format: "Electricity bill / NOC" },
      { document: "No Objection Certificate (NOC) from owner", purpose: "If rented/leased premises", format: "Original signed" },
      { document: "Proposed company name (2–3 options)", purpose: "Name reservation (RUN)", format: "Preferred names" },
      { document: "Proposed capital structure", purpose: "Authorized & paid-up capital", format: "Written details" },
      { document: "Objects of the company", purpose: "MOA main objects clause", format: "Brief description" },
    ],
  },
  {
    service: "LLP Registration",
    slug: "llp",
    items: [
      { document: "PAN Card of all designated partners", purpose: "Identity proof" },
      { document: "Aadhaar Card of all designated partners", purpose: "Address proof" },
      { document: "Passport-size photograph", purpose: "Partner identification" },
      { document: "Proof of registered office", purpose: "Registered office address", format: "Utility bill / NOC" },
      { document: "Proposed LLP name (2–3 options)", purpose: "Name reservation (RUN-LLP)" },
      { document: "Contribution amount by each partner", purpose: "LLP Agreement drafting" },
      { document: "Profit sharing ratio", purpose: "LLP Agreement drafting" },
    ],
  },
  {
    service: "GST Registration",
    slug: "gst",
    items: [
      { document: "PAN Card of business / proprietor / partners / directors", purpose: "GST registration" },
      { document: "Aadhaar Card of authorized signatory", purpose: "Identity verification" },
      { document: "Proof of principal place of business", purpose: "Address proof", format: "Electricity bill / rent agreement" },
      { document: "Bank account details", purpose: "Bank account", format: "Cancelled cheque / bank statement" },
      { document: "Certificate of Incorporation / Partnership Deed", purpose: "Business constitution proof" },
      { document: "Photograph of authorized signatory", purpose: "GST portal" },
      { document: "Digital Signature Certificate (for companies/LLPs)", purpose: "DSC for signing" },
    ],
  },
  {
    service: "Income Tax Return",
    slug: "itr",
    items: [
      { document: "PAN Card", purpose: "Mandatory for ITR filing" },
      { document: "Aadhaar Card", purpose: "Linked with PAN (mandatory)" },
      { document: "Form 16 (for salaried)", purpose: "TDS certificate from employer" },
      { document: "Form 26AS / AIS / TIS", purpose: "Tax credit statement" },
      { document: "Bank account statements", purpose: "Interest income, etc." },
      { document: "Investment proofs (80C, 80D, etc.)", purpose: "Deduction claims" },
      { document: "Capital gains statements", purpose: "For equity/MF transactions" },
      { document: "Rent receipts / HRA documents", purpose: "HRA exemption" },
      { document: "Home loan interest certificate", purpose: "Section 24 deduction" },
      { document: "Business income details (for proprietors)", purpose: "Profit/loss computation" },
    ],
  },
  {
    service: "PF / ESI Registration",
    slug: "pf-esi",
    items: [
      { document: "Certificate of Incorporation / Partnership Deed / GST Certificate", purpose: "Entity proof" },
      { document: "PAN of the establishment", purpose: "Mandatory for registration" },
      { document: "Bank account details of establishment", purpose: "Contribution remittance" },
      { document: "List of employees with details", purpose: "Employee registration", format: "Name, DOB, salary, Aadhaar" },
      { document: "Address proof of establishment", purpose: "Registered address" },
      { document: "DSC of owner / director / partner", purpose: "Digital signing on EPFO/ESIC portal" },
      { document: "Cancelled cheque", purpose: "Bank account verification" },
    ],
  },
  {
    service: "Trademark Registration",
    slug: "trademark",
    items: [
      { document: "Logo / brand name / tagline to be registered", purpose: "Trademark application", format: "JPEG (for logo)" },
      { document: "PAN of applicant", purpose: "Identity proof" },
      { document: "Aadhaar of individual applicant", purpose: "KYC" },
      { document: "Certificate of Incorporation (for companies)", purpose: "Entity proof" },
      { document: "MSME Certificate (if applicable)", purpose: "Reduced filing fees for MSME" },
      { document: "Details of goods / services", purpose: "Classification under Nice classes" },
      { document: "Date of first use of mark (if used earlier)", purpose: "TM application details" },
    ],
  },
  {
    service: "12A / 80G Registration",
    slug: "12a-80g",
    items: [
      { document: "Registration certificate (Trust / Society / Section 8 Certificate)", purpose: "Entity proof" },
      { document: "Trust Deed / MOA of Society / MOA & AOA of Section 8", purpose: "Constitution document" },
      { document: "PAN of the NGO", purpose: "Mandatory" },
      { document: "Audited financials for last 3 years (or since inception)", purpose: "Financial history" },
      { document: "Activity report for last 3 years", purpose: "Charitable activities evidence" },
      { document: "List of current trustees / directors / members", purpose: "Governance details" },
      { document: "Bank statements of the NGO", purpose: "Financial transparency" },
    ],
  },
];
