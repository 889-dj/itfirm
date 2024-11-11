import SubserviceComp from "@/components/subserviceComp"

const DataRecoveryServices = () => {
  const md = {
    parent:"Backup",
    name:"Data recovery",
    content:`
    Our Data Recovery services are designed to help businesses recover critical data from damaged, corrupted, or deleted storage systems. Whether you’ve experienced hardware failure, accidental deletion, or data corruption, we provide reliable recovery solutions to get your data back quickly and securely.

What We Offer:

👉 File Recovery: We recover lost or corrupted files from hard drives, SSDs, RAID arrays, and other storage devices, ensuring minimal data loss.
👉 Database Recovery: We specialize in recovering data from damaged or corrupted databases, ensuring that your business-critical information is restored.
👉 Disaster Recovery: Our disaster recovery solutions provide rapid data restoration after system failures, minimizing downtime and ensuring business continuity.
👉 Encrypted Data Recovery: We offer secure recovery solutions for encrypted data, ensuring that sensitive information is recovered without compromising security.
👉 24/7 Support: Our recovery team is available around the clock, providing rapid response and expert assistance when you need it most.

Trust our data recovery experts to retrieve your valuable information and restore your operations, no matter the complexity of the issue.`,
    img:"../../../public/b3.avif"
  }
  return (
    <SubserviceComp {...md}/>
  );
};

export default DataRecoveryServices;
