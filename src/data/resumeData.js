/**
 * S. Venkata Sai Teja - Professional Resume Data
 * Single Source of Truth: SAITEJA_RESUME.pdf
 * Strict adherence: No fabricated metrics, employers, or credentials.
 */

export const resumeData = {
  personal: {
    name: "S. Venkata Sai Teja",
    initials: "ST",
    title: "Finance & Accounting Professional",
    positioning: "MBA Finance | Financial Accounting | GST Compliance | Financial Reporting",
    summary:
      "Finance professional with hands-on experience in financial accounting, GST compliance, bank reconciliation, accounts payable and receivable, invoicing, ledger reconciliation and financial reporting. Experienced in Tally Prime, ERP systems and MS Excel, with strong analytical, reconciliation and coordination skills. Currently pursuing an MBA in Finance, with a B.Com in Computers and practical accounting experience since 2023. Seeking opportunities in Finance, Accounting, Financial Operations, Risk or Business Analysis.",
    location: "Hyderabad, Telangana",
    phone: "+91 9100210320",
    phoneHref: "tel:+919100210320",
    email: "saitejasuravaram@gmail.com",
    emailHref: "mailto:saitejasuravaram@gmail.com",
    resumePdfUrl: "/SAITEJA_RESUME.pdf",
    availability: "Available for Finance & Accounting Roles",
  },

  experience: [
    {
      role: "Junior Accountant",
      company: "Mahasai Aluminium Profiles Pvt Ltd",
      period: "2023 – Present",
      location: "Hyderabad, Telangana",
      type: "Full-time Professional Experience",
      overview:
        "Managing core day-to-day accounting operations, statutory GST filings, multi-party ledger reconciliations, and financial tracking utilizing Tally Prime, enterprise ERP, and MS Excel.",
      responsibilities: [
        {
          heading: "Day-to-Day Accounting Operations",
          detail:
            "Manage day-to-day accounting operations and maintain accurate books of accounts in strict accordance with financial and compliance requirements.",
          category: "General Ledger & Bookkeeping",
        },
        {
          heading: "GST Returns Filing & Statutory Compliance",
          detail:
            "Prepare and file GST returns, including GSTR-1 (outward supplies) and GSTR-3B (monthly summary returns), ensuring timely statutory compliance and comprehensive supporting documentation.",
          category: "Tax & Compliance",
        },
        {
          heading: "Invoicing, Billing & Cash Flow Operations",
          detail:
            "Handle invoicing, commercial billing, banking transactions, cash handling, and payment follow-ups to support smooth, uninterrupted finance operations.",
          category: "Operations & Treasury",
        },
        {
          heading: "Bank Reconciliation Statements (BRS) & AP/AR",
          detail:
            "Perform periodic Bank Reconciliation Statements (BRS), maintain accounts payable (AP), accounts receivable (AR), and ledger reconciliations; investigate balance discrepancies and maintain accurate ledger balances.",
          category: "Reconciliation & Controls",
        },
        {
          heading: "System Bookkeeping & Financial Reporting",
          detail:
            "Use Tally Prime, ERP systems, and advanced MS Excel functions for systematic bookkeeping, management financial reporting, data management, and continuous account tracking.",
          category: "Financial Systems",
        },
        {
          heading: "Vendor & Customer Financial Coordination",
          detail:
            "Coordinate directly with vendors and customers on payment terms, account statement verifications, invoice clarifications, and financial record alignments.",
          category: "Stakeholder Relations",
        },
      ],
      toolsUsed: ["Tally Prime", "ERP Systems", "MS Excel (VLOOKUP, Pivot Tables)", "GST Portal"],
    },
  ],

  operationalWorkflow: [
    {
      step: "01",
      code: "TXN",
      title: "Commercial Transaction",
      description: "Receipt of purchase orders, commercial goods dispatches, and initial transaction logging.",
      verification: "Voucher verification & basic document check",
    },
    {
      step: "02",
      code: "INV",
      title: "Invoicing & Billing",
      description: "Generation of tax invoices, bill processing, cash handling, and payment terms logging.",
      verification: "GST rates, item descriptions & terms alignment",
    },
    {
      step: "03",
      code: "ACC",
      title: "Bookkeeping & Posting",
      description: "Posting double-entry journal entries in Tally Prime and ERP into respective sub-ledgers.",
      verification: "Accounts Payable (AP) & Accounts Receivable (AR) ledgers",
    },
    {
      step: "04",
      code: "REC",
      title: "Bank & Ledger Reconciliation",
      description: "Execution of Bank Reconciliation Statements (BRS) against bank passbooks to resolve timing differences.",
      verification: "Investigation of discrepancies & balance corrections",
    },
    {
      step: "05",
      code: "TAX",
      title: "GST Compliance & Returns",
      description: "Preparation and filing of GSTR-1 and GSTR-3B returns alongside supporting documentation.",
      verification: "Statutory deadline adherence & input tax verification",
    },
    {
      step: "06",
      code: "REP",
      title: "Financial Reporting",
      description: "Preparation of internal management reports, ledger balances, and vendor/customer statements.",
      verification: "Accurate trial balances and management visibility",
    },
  ],

  reconciliationEngine: {
    title: "Bank & Ledger Reconciliation Architecture",
    description:
      "A systematic accounting process performed at Mahasai Aluminium Profiles Pvt Ltd to harmonize bank records with internal books, identify discrepancy sources, and safeguard reporting integrity.",
    stages: [
      {
        stage: "Input Records",
        action: "Capture Internal & External Records",
        detail: "Extract General Ledger cash/bank book entries alongside corresponding commercial bank statements.",
      },
      {
        stage: "Direct Comparison",
        action: "Transaction-by-Transaction Matching",
        detail: "Cross-reference cheques issued, direct credits, RTGS/NEFT receipts, and automatic debits.",
      },
      {
        stage: "Discrepancy Identification",
        action: "Isolate Timing & Non-Timing Variances",
        detail: "Pinpoint unpresented cheques, uncleared deposits, bank charges, or voucher entry discrepancies.",
      },
      {
        stage: "Rigor Investigation",
        action: "Source Documentation Audit",
        detail: "Investigate root cause with banks, customers, or vendors through invoice clarifications.",
      },
      {
        stage: "Accurate Balance",
        action: "Adjusted Cash Book & Final BRS",
        detail: "Post necessary adjusting entries to achieve an exact reconciled balance between books and bank.",
      },
    ],
  },

  gstSpotlight: {
    title: "GST Compliance & Statutory Filing",
    subtitle: "Hands-on experience preparing and submitting statutory GST returns for manufacturing/trading operations.",
    components: [
      {
        form: "GSTR-1",
        name: "Details of Outward Supplies",
        purpose: "Comprehensive monthly/quarterly reporting of all sales invoices, credit/debit notes, and taxable supplies.",
        coreTasks: [
          "Extraction and validation of B2B and B2C sales invoices from ERP/Tally",
          "Verification of recipient GSTINs, HSN/SAC codes, and applicable GST rates",
          "Timely return upload and verification of uploaded summary figures",
        ],
      },
      {
        form: "GSTR-3B",
        name: "Monthly Summary Return",
        purpose: "Self-declaration of summarized outward taxable supplies, input tax credit (ITC) claims, and tax payment.",
        coreTasks: [
          "Computation of net output tax liability across IGST, CGST, and SGST",
          "Reconciliation of eligible Input Tax Credit against purchase ledgers",
          "Timely submission before the monthly statutory deadline to avoid penalties",
        ],
      },
      {
        form: "Supporting Docs",
        name: "Audit Trail & Verification",
        purpose: "Maintaining verifiable physical and digital archives for each invoice, e-way bill, and tax voucher.",
        coreTasks: [
          "Systematic archival of commercial purchase bills and payment receipts",
          "Maintenance of delivery challans and e-way bill references",
          "Preparation for internal reviews and annual statutory audits",
        ],
      },
    ],
  },

  skills: {
    categories: [
      {
        id: "finance-accounting",
        name: "Finance & Accounting",
        skills: [
          { name: "Financial Accounting", description: "Maintenance of accurate books of accounts and double-entry general ledgers." },
          { name: "Accounts Payable (AP)", description: "Vendor invoice verification, aging tracking, and payment scheduling." },
          { name: "Accounts Receivable (AR)", description: "Customer invoicing, payment tracking, and ledger balance reconciliation." },
          { name: "Bank Reconciliation (BRS)", description: "Monthly BRS execution, timing variance identification, and balance adjustment." },
          { name: "Ledger Reconciliation", description: "Periodic sub-ledger and general ledger cross-verification." },
          { name: "Bookkeeping", description: "Systematic recording of daily cash, bank, journal, and sales vouchers." },
          { name: "Financial Reporting", description: "Preparation of trial balances, ledger summaries, and operational financial trackers." },
        ],
      },
      {
        id: "tax-compliance",
        name: "Tax & Compliance",
        skills: [
          { name: "GST Filing & Compliance", description: "Comprehensive statutory tax compliance on the official GST portal." },
          { name: "GSTR-1 Return Preparation", description: "Reporting outward supply details, B2B invoice schedules, and credit notes." },
          { name: "GSTR-3B Return Preparation", description: "Computing monthly tax liabilities and eligible input tax credits." },
          { name: "Supporting Documentation", description: "Maintaining tax invoices, proof of delivery, and statutory compliance files." },
        ],
      },
      {
        id: "operations",
        name: "Operations & Treasury",
        skills: [
          { name: "Invoicing & Commercial Billing", description: "Accurate generation of commercial invoices compliant with tax laws." },
          { name: "Vendor Management", description: "Vendor statement verification, payment follow-up, and invoice clarifications." },
          { name: "Customer Coordination", description: "Accounts communication, payment collection follow-ups, and balance confirmations." },
          { name: "Payment Follow-up", description: "Proactive tracking of overdue receivables to maintain healthy working capital." },
          { name: "Banking Transactions", description: "Processing RTGS, NEFT, cheque deposits, and bank operational authorizations." },
          { name: "Cash Handling", description: "Physical cash maintenance, petty cash vouchers, and daily cash log reconciliation." },
        ],
      },
      {
        id: "tools",
        name: "Tools & Systems",
        skills: [
          { name: "Tally Prime", description: "Primary accounting system for voucher entry, ledgers, inventory, and BRS." },
          { name: "Enterprise ERP Systems", description: "Organizational transaction management, billing, and accounting data workflows." },
          { name: "MS Excel (VLOOKUP & Pivot)", description: "Financial data consolidation, lookup models, variance analysis, and reporting." },
          { name: "MS Office Suite", description: "Word documentation, PowerPoint financial presentations, and formal letters." },
          { name: "Data Management", description: "Structured financial archiving, record retention, and data hygiene." },
        ],
      },
    ],
  },

  tools: [
    {
      name: "Tally Prime",
      category: "Accounting & ERP",
      context: "Daily bookkeeping, voucher entry (Payment, Receipt, Sales, Purchase), ledger creation, and bank reconciliation.",
    },
    {
      name: "ERP Systems",
      category: "Enterprise Systems",
      context: "Corporate business operations tracking, billing processing, and inter-departmental accounting data workflows.",
    },
    {
      name: "MS Excel",
      category: "Financial Analysis & Data",
      context: "VLOOKUP formulas, Pivot Tables, bank reconciliation workbooks, ledger comparisons, and balance sheets.",
    },
    {
      name: "MS Office Suite",
      category: "Productivity",
      context: "Professional business correspondence, documentation, management reporting, and spreadsheet audits.",
    },
    {
      name: "Data Management",
      category: "Information Systems",
      context: "Maintaining structured financial archives, invoice tracking repositories, and digital audit trails.",
    },
  ],

  education: [
    {
      degree: "MBA – Finance",
      institution: "Narasimha Reddy Engineering College",
      location: "Hyderabad, Telangana",
      year: "2026",
      status: "Results Awaited",
      description: "Advanced post-graduate studies focused on Corporate Finance, Financial Analysis, Risk Management, and Investment Decision-Making.",
    },
    {
      degree: "B.Com – Computers",
      institution: "Fortune School of Business",
      location: "Hyderabad, Telangana",
      year: "2023",
      grade: "CGPA: 7.63",
      status: "Graduated",
      description: "Comprehensive foundational degree integrating financial accounting, commerce, taxation, business law, and computer information systems.",
    },
    {
      degree: "Intermediate – MEC (Mathematics, Economics, Commerce)",
      institution: "Sri Chaitanya Junior College",
      location: "Hyderabad, Telangana",
      year: "2020",
      grade: "796 / 1000",
      status: "Completed",
      description: "Rigorous quantitative and economic foundation in commercial mathematics, micro/macro economics, and introductory accountancy.",
    },
    {
      degree: "SSC (Secondary School Certificate)",
      institution: "Nava Jyothi High School",
      location: "Hyderabad, Telangana",
      year: "2018",
      grade: "CGPA: 8.3",
      status: "Completed",
      description: "Secondary education with strong academic standing in mathematics and general sciences.",
    },
  ],

  certification: {
    title: "Lower Typing Certification",
    institution: "Sri Laxmi Type Institute",
    location: "Hyderabad, Telangana",
    relevance: "High-speed, high-accuracy keyboard data entry for high-volume ledger postings and commercial documentation.",
  },

  targetRoles: [
    {
      role: "Finance Analyst",
      rationale: "Leveraging MBA Finance training, analytical rigor, and financial modeling skills to evaluate business performance.",
    },
    {
      role: "Accounting Analyst",
      rationale: "Applying hands-on general ledger, trial balance, and accounting standards experience to ensure accurate reporting.",
    },
    {
      role: "Finance Operations Analyst",
      rationale: "Streamlining transaction flows, billing lifecycles, payment follow-ups, and vendor-customer reconciliation.",
    },
    {
      role: "Risk Analyst",
      rationale: "Utilizing discrepancy investigation skills, audit trail verification, and variance controls to mitigate financial exposure.",
    },
    {
      role: "Tax Analyst",
      rationale: "Harnessing direct experience in GSTR-1, GSTR-3B filings, input tax credit checks, and statutory tax documentation.",
    },
    {
      role: "Business Analyst",
      rationale: "Synthesizing commerce foundations (B.Com Computers), ERP workflow insight, and MS Excel data analysis for decision support.",
    },
  ],
};
