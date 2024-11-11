import SubserviceComp from "@/components/subserviceComp"

const ThreatIntelligence = () => {
  const md = {
    parent:"Security",
    name:"Threat Intelligence ",
    content:`
Our Threat Intelligence services provide proactive solutions to identify, monitor, and respond to potential security threats before they impact your organization. By analyzing threat data and trends, we help businesses stay ahead of emerging threats and protect critical assets.

What We Offer:

👉 Real-Time Threat Monitoring: We continuously monitor your systems for potential threats, using advanced tools and techniques to detect and respond to emerging risks in real-time.
👉 Threat Data Analysis: Our experts analyze threat intelligence feeds to provide insights into potential cyber-attacks, trends, and tactics used by malicious actors.
👉 Early Warning System: We implement early warning systems to detect vulnerabilities and notify you of potential attacks, giving you time to prepare and take action.
👉 Threat Intelligence Reports & Dashboards: Our detailed reports and real-time dashboards keep you informed of the latest threats, vulnerabilities, and trends affecting your industry.

Stay ahead of cyber threats and strengthen your organization’s defenses with actionable threat intelligence services.
`,
    img:"../../../public/s2.jpg"
  }
  return (
    <SubserviceComp {...md}/>
  );
};

export default ThreatIntelligence;
