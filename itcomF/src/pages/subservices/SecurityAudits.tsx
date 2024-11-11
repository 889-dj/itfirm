import SubserviceComp from "@/components/subserviceComp"

const SecurityAudits = () => {
  const md = {
    parent:"Security",
    name:"Security Audits",
    content:`Our Security Audits are designed to assess the effectiveness of your organization's security measures and identify vulnerabilities before they can be exploited. We evaluate your IT infrastructure, policies, and procedures to ensure that you are compliant with best practices and industry standards.

What We Offer:

👉 Comprehensive Security Assessments: We conduct in-depth reviews of your network, systems, applications, and security protocols to identify weaknesses.
👉 Vulnerability Scanning & Penetration Testing: Our team uses advanced scanning tools and simulates attacks to detect vulnerabilities and test your defenses.
👉 Compliance Audits: We evaluate your systems against regulatory requirements such as GDPR, HIPAA, or PCI-DSS, ensuring compliance and reducing the risk of penalties.
👉 System & Network Configuration Review: We examine your system and network configurations to ensure they are set up securely, preventing unauthorized access and attacks.
👉 Employee Security Training: We assess your staff's security awareness and offer training to reduce human error and phishing risks.

Ensure your systems are secure and compliant with regular security audits that identify and address potential risks before they become serious threats.

`
  }
  return (
    <SubserviceComp {...md}/>
  );
};

export default SecurityAudits;
