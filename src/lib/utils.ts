import { type ClassValue, clsx } from "clsx"
import { da } from "date-fns/locale"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface ApplicationInfo {
  id: number,
  name: string
}

export interface AppControlInfo {
  id: number,
  name: string,
  complaince: number
  exceptions: boolean
  description: string | null
}

export interface AppControlsInfo {
  id: number,
  appControlInfo: AppControlInfo[]
}


export function getApplicationData(): ApplicationInfo[] {
  const data: ApplicationInfo[] =
    [
      { id: 4467, name: "Aggregate Spend Repository", },
      { id: 4494, name: "ADP Benefits" },
      { id: 4495, name: "Biogen Electronic Authoring Management System" },
      { id: 4499, name: "Clinical & Biometrics Shared Drive" },
      { id: 4507, name: "170 Markview" },
      { id: 4517, name: "ActiveBatch for finance" },
      { id: 4538, name: "ARCADE - Central Admin, and Data Exchange Platform" },
      { id: 4573, name: "Data Mgmt.sFTP" },
      { id: 4586, name: "Delta V System for RTP Manufacturing" },
      { id: 4610, name: "Building Management System for Cambridge" },

      { id: 4612, name: "Building Management System for RTP" },
      { id: 4618, name: "Biogen Regulatory Environment for Electronic Submissions(BREES)" },
      { id: 4634, name: "CallMiner" },
      { id: 4648, name: "Chemistry Registration" },
      { id: 4657, name: "Clearwell" },
      { id: 4686, name: "Electronic Laboratory Notebook for Chemistry" },
      { id: 4725, name: "HireRight" },
      { id: 4734, name: "Hyperion Platform" },
      { id: 4745, name: "InfoBatch for RTP" },
      { id: 4746, name: "Infor Advanced Scheduling (AS)" },
      { id: 4749, name: "Informatica for Financial Data Warehouse" },
      { id: 4764, name: "Empower 3 for Quality Control (QC) RTP" },
      { id: 4775, name: "Electronic Submission Gateway (ESG) Axway" },
      { id: 4779, name: "Everbridge Mass Notification System" },
      { id: 4786, name: "Fax Service for Patient Services - Biscom" },
      { id: 4789, name: "Financial Data Warehouse" },
      { id: 4832, name: "myCIMS - eDocS - QUMAS" },
      { id: 4841, name: "Nice Call Recording" },
      { id: 4855, name: "Oracle Clinical RDC" },
      { id: 4857, name: "Oracle eBusiness Suite R12 Platform" },
      { id: 4877, name: "JCI Launcher - Johnson Controls (JCI) Launcher - Cambridge" },
      { id: 4884, name: "KNEAT" },
      { id: 4908, name: "Lorenz eValidator" },
      { id: 4928, name: "Oracle Financials" },
      { id: 4940, name: "Oracle Product Lifecycle Management" },
      { id: 4950, name: "PleaseReview (On-Premise)" },
      { id: 4963, name: "Process Data Historian (PI) System for RTP" },
      { id: 4978, name: "RAVE" },
      { id: 4987, name: "RSA eGRC - Risk Monitoring System (RMS) - RSA Archer Electronic Governance Risk and Compliance (eGRC) Suite" },
      { id: 5006, name: "SBOL - Simca Batch On-Line (SBOL) for RTP" },
      { id: 5011, name: "Oracle Supply Chain Management for Manufacturing and Maintenance" },
      { id: 5016, name: "Oracle Single Sign-On" },
      { id: 5018, name: "Oracle Value Chain Planning (VCP)" },
      { id: 5021, name: "OSI PI Server for Technical Development (TD)" },
      { id: 5026, name: "Parallel Line Assay (PLA) v3.0.5 for Quality Control (QC)" },
      { id: 5033, name: "PML Case Management System" },
      { id: 5050, name: "TIBCO Spotfire" },
      { id: 5052, name: "TiPS Alarm - LogMate for RTP" },
      { id: 5055, name: "TOUCH Analytics / Tysabri Outreach Unified Commitment to Health" },
      { id: 5056, name: "TOUCH / Tysabri Outreach Unified Commitment to Health" },
      { id: 5057, name: "TrackWise" },
      { id: 5059, name: "TxP2" },
      { id: 5082, name: "Veeva Vault PromoMats" },
      { id: 5097, name: "Watson LIMS - Watson Laboratory Information Management System (LIMS)" },
      { id: 5119, name: "SharePoint" },
      { id: 5163, name: "Safety Total Adverse Reporting Suite" },
      { id: 5174, name: "Syncade for RTP" },
      { id: 5264, name: "Workday" },
      { id: 5265, name: "Workflow" },
      { id: 7321, name: "Microsoft Active Directory - Domain Services" },
      { id: 7339, name: "IBM Sterling" },
      { id: 7345, name: "CDH" },
      { id: 11326, name: "Informatica Platform" },
      { id: 11334, name: "Microsoft Exchange" },
      { id: 11348, name: "NICE IEX Workforce Management" },
      { id: 11349, name: "Okta Federation/SSO" },
      { id: 11351, name: "Oracle Fusion Platform" },
      { id: 11355, name: "Oracle Business Intelligence Enterprise Edition Platform" },
      { id: 11361, name: "Proofpoint" },
      { id: 11382, name: "Splunk" },
      { id: 11383, name: "ActiveBatch Platform" },
      { id: 11418, name: "Exchange Online" },
      { id: 11461, name: "CMMS" },
      { id: 11462, name: "Determine Contract Lifecycle Management" },
      { id: 13953, name: "Genedata Screener" },
      { id: 13958, name: "LabWare LES or Laboratory Execution System" },
      { id: 13998, name: "Oracle GRC or Oracle Governance Risk & Compliance (GRC)" },
      { id: 14005, name: "SharePoint Online" },
      { id: 14012, name: "Statistica" },
      { id: 14142, name: "API Management" },
      { id: 14521, name: "Clincapture EDC" },
      { id: 14541, name: "PriceRight" },
      { id: 16101, name: "Meridian" },
      { id: 16317, name: "Microsoft Azure" },
      { id: 16376, name: "Amazon AWS" },
      { id: 17481, name: "SynTQ" },
      { id: 18909, name: "Ultimate Software" },
      { id: 18922, name: "Milestone" },
      { id: 19057, name: "ServiceNow" },
      { id: 19061, name: "Oracle Application Express Hub" },
      { id: 19125, name: "Enterprise Archiving Solution - Structured Data Manager" },
      { id: 19129, name: "Enterprise Archiving Solution - EAS" },
      { id: 19584, name: "Raw Material Information Platform" },
      { id: 21507, name: "Microsoft Office Online" },
      { id: 21509, name: "Microsoft OneDrive" },
      { id: 21523, name: "Microsoft Teams - Collaboration" },
      { id: 21563, name: "IQVIA/Wingspan eTMF" },
      { id: 21567, name: "Syncade for Solothurn" },
      { id: 21721, name: "Inova" },
      { id: 22213, name: "Medical Affairs Research System (MARS)" },
      { id: 22292, name: "Okta Adaptive Multi-Factor Authentication" },
      { id: 22295, name: "Swisslog SynQ" },
      { id: 22465, name: "Rave EDC" },
      { id: 22616, name: "Sproxil" },
      { id: 22617, name: "Outcome Infosario Electronic Data Capture (EDC)" },
      { id: 22643, name: "SMA Treatment Support" },
      { id: 22649, name: "Genesys PureConnect / Interactive Intelligence / ININ" },
      { id: 22654, name: "Empower 3 for Quality Control in Solothurn" },
      { id: 22660, name: "Domain Name Servers" },
      { id: 22741, name: "Databricks Data Analysis Platform-Prod" },
      { id: 22779, name: "Oracle Fusion Platform 12c" },
      { id: 22780, name: "Managed File Transfer Platform" },
      { id: 23125, name: "Microsoft Local Administrator Password Solution (LAPS)" },
      { id: 23129, name: "NeoPLM" },
      { id: 23135, name: "Foundation IP" },
      { id: 23140, name: "Oracle Fusion Middleware Platform - MCN" },
      { id: 23161, name: "Blackline Account Recon & Journal Entry System" },
      { id: 23224, name: "S2" },
      { id: 23407, name: "Zscaler Cloud Portal" },
      { id: 23529, name: "Global Regulatory Information Tracking" },
      { id: 23535, name: "Palo Alto" },
      { id: 23539, name: "Desigo CC for Solothurn" },
      { id: 23540, name: "Version Dog for Solothurn" },
      { id: 23564, name: "Citrix Gxp" },
      { id: 23681, name: "ThinManager for Solothurn" },
      { id: 23695, name: "Diligent" },
      { id: 23859, name: "SIMCA-online for SOL" },
      { id: 23941, name: "OSIsoft PI Historian SOL" },
      { id: 23983, name: "Splunk Cloud" },
      { id: 24126, name: "MSPT Cloud - Philips" },
      { id: 24134, name: "Delta V System for Solothurn Manufacturing" },
      { id: 24135, name: "Simatic Logon Server" },
      { id: 24201, name: "Trial Master EDC" },
      { id: 24302, name: "Bitbucket Datacenter" },
      { id: 24621, name: "Workiva" },
      { id: 25081, name: "Archer BC SaaS" },
      { id: 25309, name: "Health Cloud" },
      { id: 25381, name: "REMS Registry" },
      { id: 25632, name: "Infor Cloud Advanced Scheduling" },
      { id: 25722, name: "Business Objects XI 3.1 Archive" },
      { id: 25883, name: "Reimbursement Accrual Contract Excellence" },
      { id: 26067, name: "Medicine Graph" },
    ]
  return data
}

export function getAppControlData(): AppControlInfo[] {
  const data: AppControlInfo[] = [
    {
      id: 1,
      name: "AC- 1: Lifecycle Management",
      complaince: 0,
      exceptions: false,
      description: null
    },
    {
      id: 2,
      name: "AC-2: Backup & Disaster Recovery",
      complaince: 0,
      exceptions: false,
      description: null
    },
    {
      id: 3,
      name: "AC-3: Multifactor Authentication",
      complaince: 0,
      exceptions: false,
      description: null
    },

    {
      id: 4,
      name: "AC-4: Privileged Accounts",
      complaince: 0,
      exceptions: false,
      description: null
    },
    {
      id: 5,
      name: "AC-5: Third Party Risk Management",
      complaince: 0,
      exceptions: false,
      description: null
    },
    {
      id: 6,
      name: "AC-6: Vulnerability & Patch Management",
      complaince: 0,
      exceptions: false,
      description: null
    },
    {
      id: 7,
      name: "AC-7: Encryption",
      complaince: 0,
      exceptions: false,
      description: null
    },
    {
      id: 8,
      name: "AC-8: System Hardening",
      complaince: 0,
      exceptions: false,
      description: null
    },
    {
      id: 9,
      name: "AC-9: Cybersecurity Toolset",
      complaince: 0,
      exceptions: false,
      description: null
    },
    {
      id: 10,
      name: "AC- 1: Lifecycle Management",
      complaince: 0,
      exceptions: false,
      description: null
    },
    {
      id: 11,
      name: "AC-10: Audit Logs",
      complaince: 0,
      exceptions: false,
      description: null
    },
  ]
  return data;
}

export function getAppControlsData() {
  const data: AppControlsInfo[] = [
    { id: 4467, appControlInfo: getAppControlData() },
    { id: 4494, appControlInfo: getAppControlData() } ,
    { id: 4495, appControlInfo: getAppControlData() },
    { id: 4499, appControlInfo: getAppControlData() },
    { id: 4507, appControlInfo: getAppControlData() },
    { id: 4517, appControlInfo: getAppControlData() },
    { id: 4538, appControlInfo: getAppControlData() },
    { id: 4573, appControlInfo: getAppControlData() },
    { id: 4586, appControlInfo: getAppControlData() },
    { id: 4610, appControlInfo: getAppControlData() },

    { id: 4612, appControlInfo: getAppControlData() },
    { id: 4618, appControlInfo: getAppControlData() },
    { id: 4634, appControlInfo: getAppControlData() },
    { id: 4648, appControlInfo: getAppControlData() },
    { id: 4657, appControlInfo: getAppControlData() },
    { id: 4686, appControlInfo: getAppControlData() },
    { id: 4725, appControlInfo: getAppControlData() },
    { id: 4734, appControlInfo: getAppControlData() },
    { id: 4745, appControlInfo: getAppControlData() },
    { id: 4746, appControlInfo: getAppControlData() },
    { id: 4749, appControlInfo: getAppControlData() },
    { id: 4764, appControlInfo: getAppControlData() },
    { id: 4775, appControlInfo: getAppControlData() },
    { id: 4779, appControlInfo: getAppControlData() },
    { id: 4786, appControlInfo: getAppControlData() },
    { id: 4789, appControlInfo: getAppControlData() },
    { id: 4832, appControlInfo: getAppControlData() },
    { id: 4841, appControlInfo: getAppControlData() },
    { id: 4855, appControlInfo: getAppControlData() },
    { id: 4857, appControlInfo: getAppControlData() },
    { id: 4877, appControlInfo: getAppControlData() },
    { id: 4884, appControlInfo: getAppControlData() },
    { id: 4908, appControlInfo: getAppControlData() },
    { id: 4928, appControlInfo: getAppControlData() },
    { id: 4940, appControlInfo: getAppControlData() },
    { id: 4950, appControlInfo: getAppControlData() },
    { id: 4963, appControlInfo: getAppControlData() },
    { id: 4978, appControlInfo: getAppControlData() },
    { id: 4987, appControlInfo: getAppControlData() },
    { id: 5006, appControlInfo: getAppControlData() },
    { id: 5011, appControlInfo: getAppControlData() },
    { id: 5016, appControlInfo: getAppControlData() },
    { id: 5018, appControlInfo: getAppControlData() },
    { id: 5021, appControlInfo: getAppControlData() },
    { id: 5026, appControlInfo: getAppControlData() },
    { id: 5033, appControlInfo: getAppControlData() },
    { id: 5050, appControlInfo: getAppControlData() },
    { id: 5052, appControlInfo: getAppControlData() },
    { id: 5055, appControlInfo: getAppControlData() },
    { id: 5056, appControlInfo: getAppControlData() },
    { id: 5057, appControlInfo: getAppControlData() },
    { id: 5059, appControlInfo: getAppControlData() },
    { id: 5082, appControlInfo: getAppControlData() },
    { id: 5097, appControlInfo: getAppControlData() },
    { id: 5119, appControlInfo: getAppControlData() },
    { id: 5163, appControlInfo: getAppControlData() },
    { id: 5174, appControlInfo: getAppControlData() },
    { id: 5264, appControlInfo: getAppControlData() },
    { id: 5265, appControlInfo: getAppControlData() },
    { id: 7321, appControlInfo: getAppControlData() },
    { id: 7339, appControlInfo: getAppControlData() },
    { id: 7345, appControlInfo: getAppControlData() },
    { id: 11326, appControlInfo: getAppControlData() },
    { id: 11334, appControlInfo: getAppControlData() },
    { id: 11348, appControlInfo: getAppControlData() },
    { id: 11349, appControlInfo: getAppControlData() },
    { id: 11351, appControlInfo: getAppControlData() },
    { id: 11355, appControlInfo: getAppControlData() },
    { id: 11361, appControlInfo: getAppControlData() },
    { id: 11382, appControlInfo: getAppControlData() },
    { id: 11383, appControlInfo: getAppControlData() },
    { id: 11418, appControlInfo: getAppControlData() },
    { id: 11461, appControlInfo: getAppControlData() },
    { id: 11462, appControlInfo: getAppControlData() },
    { id: 13953, appControlInfo: getAppControlData() },
    { id: 13958, appControlInfo: getAppControlData() },
    { id: 13998, appControlInfo: getAppControlData() },
    { id: 14005, appControlInfo: getAppControlData() },
    { id: 14012, appControlInfo: getAppControlData() },
    { id: 14142, appControlInfo: getAppControlData() },
    { id: 14521, appControlInfo: getAppControlData() },
    { id: 14541, appControlInfo: getAppControlData() },
    { id: 16101, appControlInfo: getAppControlData() },
    { id: 16317, appControlInfo: getAppControlData() },
    { id: 16376, appControlInfo: getAppControlData() },
    { id: 17481, appControlInfo: getAppControlData() },
    { id: 18909, appControlInfo: getAppControlData() },
    { id: 18922, appControlInfo: getAppControlData() },
    { id: 19057, appControlInfo: getAppControlData() },
    { id: 19061, appControlInfo: getAppControlData() },
    { id: 19125, appControlInfo: getAppControlData() },
    { id: 19129, appControlInfo: getAppControlData() },
    { id: 19584, appControlInfo: getAppControlData() },
    { id: 21507, appControlInfo: getAppControlData() },
    { id: 21509, appControlInfo: getAppControlData() },
    { id: 21523, appControlInfo: getAppControlData() },
    { id: 21563, appControlInfo: getAppControlData() },
    { id: 21567, appControlInfo: getAppControlData() },
    { id: 21721, appControlInfo: getAppControlData() },
    { id: 22213, appControlInfo: getAppControlData() },
    { id: 22292, appControlInfo: getAppControlData() },
    { id: 22295, appControlInfo: getAppControlData() },
    { id: 22465, appControlInfo: getAppControlData() },
    { id: 22616, appControlInfo: getAppControlData() },
    { id: 22617, appControlInfo: getAppControlData() },
    { id: 22643, appControlInfo: getAppControlData() },
    { id: 22649, appControlInfo: getAppControlData() },
    { id: 22654, appControlInfo: getAppControlData() },
    { id: 22660, appControlInfo: getAppControlData() },
    { id: 22741, appControlInfo: getAppControlData() },
    { id: 22779, appControlInfo: getAppControlData() },
    { id: 22780, appControlInfo: getAppControlData() },
    { id: 23125, appControlInfo: getAppControlData() },
    { id: 23129, appControlInfo: getAppControlData() },
    { id: 23135, appControlInfo: getAppControlData() },
    { id: 23140, appControlInfo: getAppControlData() },
    { id: 23161, appControlInfo: getAppControlData() },
    { id: 23224, appControlInfo: getAppControlData() },
    { id: 23407, appControlInfo: getAppControlData() },
    { id: 23529, appControlInfo: getAppControlData() },
    { id: 23535, appControlInfo: getAppControlData() },
    { id: 23539, appControlInfo: getAppControlData() },
    { id: 23540, appControlInfo: getAppControlData() },
    { id: 23564, appControlInfo: getAppControlData() },
    { id: 23681, appControlInfo: getAppControlData() },
    { id: 23695, appControlInfo: getAppControlData() },
    { id: 23859, appControlInfo: getAppControlData() },
    { id: 23941, appControlInfo: getAppControlData() },
    { id: 23983, appControlInfo: getAppControlData() },
    { id: 24126, appControlInfo: getAppControlData() },
    { id: 24134, appControlInfo: getAppControlData() },
    { id: 24135, appControlInfo: getAppControlData() },
    { id: 24201, appControlInfo: getAppControlData() },
    { id: 24302, appControlInfo: getAppControlData() },
    { id: 24621, appControlInfo: getAppControlData() },
    { id: 25081, appControlInfo: getAppControlData() },
    { id: 25309, appControlInfo: getAppControlData() },
    { id: 25381, appControlInfo: getAppControlData() },
    { id: 25632, appControlInfo: getAppControlData() },
    { id: 25722, appControlInfo: getAppControlData() },
    { id: 25883, appControlInfo: getAppControlData() },
    { id: 26067, appControlInfo: getAppControlData() },
  ]
  return data;
}