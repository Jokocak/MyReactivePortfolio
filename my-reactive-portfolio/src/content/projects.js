export const softwareProjects = [
  {
    id: 7,
    title: 'PoppyCox Data Ingestion Pipeline',
    description:
      'Automated data ingestion and transformation pipeline that lands third-party financial and operational data in a Supabase-hosted PostgreSQL warehouse and rebuilds analytics tables on a schedule. Pulls from Toast and Plaid on a daily 5:00 AM ingest, runs a nightly dbt transform to rebuild the gold-layer tables, and preserves payroll calculations and payouts as an append-only, auditable ledger. The modeled data powers a Next.js back-office app used to run payroll and view employee hours.',
    iconKey: 'pipeline',
  },
  {
    id: 6,
    title: 'Clarus',
    description:
      'Cross-platform full-stack budgeting and debt-payoff app built in Flutter and Supabase. Aggregates accounts, balances, and liabilities from over 1,000 financial institutions via MethodFi and Plaid, and compares avalanche and snowball payoff strategies against realistic cash-flow constraints.',
    iconKey: 'wallet',
  },
];
