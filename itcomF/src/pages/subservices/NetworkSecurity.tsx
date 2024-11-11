import SubserviceComp from "@/components/subserviceComp"

const NetworkSecurity = () => {
  const md = {
    parent:"Security",
    name:"Network Security ",
    content:`Our Network Security services are designed to protect your organization’s data and infrastructure from cyber threats. We implement robust security measures to defend against unauthorized access, attacks, and data breaches, ensuring your network remains secure and resilient.

What We Offer:

👉 Firewall Setup & Configuration: We deploy and configure advanced firewalls to prevent unauthorized access and protect your network from external and internal threats.
👉 Intrusion Detection & Prevention Systems (IDPS): We install and monitor IDPS to detect and prevent malicious activities, keeping your network safe from attacks like malware, ransomware, and unauthorized access.
👉 Virtual Private Network (VPN) Solutions: We offer secure VPN setups to ensure encrypted communication and provide remote access to your team, protecting sensitive data from exposure.
👉 Network Monitoring & Threat Intelligence: Our proactive network monitoring services detect potential security risks, and we use advanced threat intelligence to anticipate and mitigate attacks before they occur.


Protect your organization’s infrastructure and sensitive data with our comprehensive network security services.`,
    img:"../../../public/s1.jpg"
  }
  return (
    <SubserviceComp {...md}/>
  );
};

export default NetworkSecurity;
