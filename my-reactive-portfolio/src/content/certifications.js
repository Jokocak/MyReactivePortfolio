import databricksLogo from '../assets/databricks-logo-asset.png';
import claudeLogo from '../assets/claude-logo-asset.png';

export const certifications = [
  {
    title: 'Claude Code Certification',
    description:
      'This certification demonstrates proficiency with Claude Code as an agentic AI coding assistant, covering the agentic loop and context window management, the Explore → Plan → Code → Commit workflow, persistent project memory via CLAUDE.md, custom subagents, MCP server integrations, and deterministic control through hooks.',
    logo: claudeLogo,
    logoAlt: 'Claude logo',
    verifyUrl: 'https://verify.skilljar.com/c/c55omqp8aznb',
    buttonText: 'Verify Credential',
  },
  {
    title: 'Databricks Certified Data Engineer Associate',
    description:
      'This certification shows proficiency in using the Databricks Lakehouse Platform for foundational data engineering tasks, including understanding its architecture, executing multi-hop ETL tasks with Apache Spark™ SQL and Python, processing data incrementally, deploying production pipelines and dashboards, and managing data governance.',
    logo: databricksLogo,
    logoAlt: 'Databricks logo',
    verifyUrl:
      'https://credentials.databricks.com/1e6ffc4a-ee0e-4e2b-9151-713b1e3d738f#acc.mi6sxoC8',
    buttonText: 'Verify Credential',
  },
];
