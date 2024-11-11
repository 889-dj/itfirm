import { Link } from "react-router-dom"
import ServiceComp from "@/components/serviceComp";


const Backup = () => {
  const md = {
    "name": "Backup & Recovery",
    "text": "Data is the backbone of any modern business, and protecting it is essential. Our backup and recovery solutions ensure that your critical business data is secure, compliant, and always accessible when you need it most. We offer comprehensive, automated backup strategies that safeguard your data from unforeseen disasters, hardware failures, or cyberattacks. In the event of data loss, our recovery services enable rapid restoration with minimal downtime, ensuring your business continues to operate smoothly. With our expertise in cloud-based and on-premise solutions, we tailor backup strategies to suit your specific business needs, providing both full and incremental backups, as well as secure off-site storage options. Trust us to protect your valuable data and keep your business running, no matter the circumstances.",
    "cards": [
      "Data Backup Automation",
      "Data Recovery Services",
      "Database Backup Solutions",
      "Off-Site Backup Management"
    ]
  
  }
  return (
    <section className="w-full">
      <div className="bg-woman bg-cover w-full lg:min-h-[20vh] min-h-[50%] flex flex-col items-center py-24 backdrop-grayscale-1 gap-y-1">
        <h1 className='text-3xl text-gray-800 font-bold mt-6'>Backup & Recovery</h1>
        <h2 className='text-lg text-gray-800 font-bold'><Link to={'/'}>Home</Link>{'>'}<Link to={'/service'}>service</Link>{'>'}backup</h2>
      </div>
      <ServiceComp {...md} />
    </section>
  )
}

export default Backup