import SubserviceComp from "@/components/subserviceComp"

const VoIPCallMonitoring = () => {
  const md = {
    parent:"VoIP",
    name:"VoIP call monitoring",
    content:`Our VoIP Call Monitoring services ensure your communication systems are performing optimally, providing real-time insights into call quality, agent performance, and system reliability. We offer monitoring tools that help businesses detect issues early and enhance the overall call experience.

What We Offer:

👉 Real-Time Call Monitoring: We provide live monitoring tools that let you observe active calls and provide immediate support to agents, ensuring quality service is maintained at all times.
👉 Call Quality Analysis: Our monitoring solutions track call quality metrics, such as jitter, latency, and packet loss, ensuring clear, uninterrupted communication.
👉 Call Recording & Playback: We offer call recording capabilities for quality assurance, training, and compliance purposes, making it easy to review and improve customer interactions.
👉 Alert & Notification System: Automated alerts notify you of any issues with your VoIP system, allowing for rapid troubleshooting and minimizing downtime.

Improve your communication efficiency with real-time insights and monitoring that ensure high-quality, productive VoIP calls.

`,
    img:"../../../public/v5.avif"
  }
  return (
    <SubserviceComp {...md}/>
  );
};

export default VoIPCallMonitoring;
