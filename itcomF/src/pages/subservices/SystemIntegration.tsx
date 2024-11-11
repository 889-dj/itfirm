import SubserviceComp from "@/components/subserviceComp"

const SystemIntegration = () => {
  const md = {
    parent:"ITConsulting",
    name:"System Integration",
    content:`Our System Integration services enable businesses to streamline operations by connecting different software, platforms, and technologies into a cohesive system. We ensure seamless communication and data flow between various business functions, enhancing efficiency and productivity.

What We Offer:

👉 Custom Integration Solutions: We design and implement tailored integration solutions that connect your existing software and platforms, ensuring smooth communication and data sharing across systems.
👉 API Development & Management: We provide API integration services, enabling seamless interaction between different applications, and ensure data consistency and security.
👉 Enterprise Resource Planning (ERP) Integration: We integrate your ERP system with other business tools, such as CRM, finance software, and supply chain management systems, to improve visibility and decision-making.
👉 Automated Workflow Integration: We help automate repetitive tasks by integrating your systems and creating workflows that reduce manual effort and increase productivity.

Achieve operational efficiency and a unified IT environment with our expert system integration services.

`,
    img:"../../../public/i4.avif"
  }
  return (
    <SubserviceComp {...md}/>
  );
};

export default SystemIntegration;
