import SubserviceComp from "@/components/subserviceComp";

const VoIPIntegrationwithCRM = () => {
  const md = {
    parent:"VoIP",
    name:"VoIP integration with CRM",
    content:`Our VoIP Integration with CRM services enhance your business communication by seamlessly integrating your VoIP system with Customer Relationship Management (CRM) software. This integration enables better customer insights, smoother workflows, and more personalized service.

What We Offer:

👉 Seamless CRM Integration: We integrate your VoIP system with popular CRM platforms like Salesforce, HubSpot, and Zoho, ensuring that customer interactions are automatically logged and managed within your CRM.
👉 Click-to-Call Functionality: Our integration allows agents to initiate calls directly from the CRM interface, improving efficiency and reducing response times.
👉 Customer Information Pop-Up: When a call comes in, relevant customer information from the CRM is displayed instantly, helping your agents personalize conversations and resolve issues more effectively.
👉 Call Logging & Data Syncing: All call details, including call duration, notes, and follow-ups, are automatically recorded in your CRM for easy access and tracking.
👉 Advanced Reporting: By combining VoIP call data with CRM information, we offer powerful reporting tools that provide insights into customer interactions, agent performance, and overall business metrics.

Enhance your customer interactions and streamline workflows by integrating VoIP with your CRM system.

`,
    img:"../../../public/v3.jfif"
  }
  return (
    <SubserviceComp {...md}/>
  );
};

export default VoIPIntegrationwithCRM;
