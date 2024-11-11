import ServiceComp from "@/components/serviceComp"
import { Link } from "react-router-dom"

const Security = () => {
  const md = {
    "name":"Security and  Compliance",
    "text":"In an era where cyber threats are more sophisticated than ever, protecting your business is critical. Our cybersecurity solutions provide comprehensive protection against threats such as malware, ransomware, data breaches, and insider attacks. We take a proactive approach to security, conducting thorough risk assessments, implementing advanced security protocols, and offering continuous monitoring to keep your business safe. From securing your network and cloud environments to ensuring compliance with industry standards and regulations, our cybersecurity experts create a multi-layered defense system tailored to your business. Whether you need endpoint protection, firewalls, encryption, or employee training programs, we ensure that your business is resilient against ever-evolving cyber threats.",
    "cards":[
      "Network Security",
      "Threat Intelligence",
      "Security Audits",
      "Vulnerability Assessments"
    ],
  }
    return (
      <section className="w-full">
        <div className="bg-woman bg-cover w-full lg:min-h-[20vh] min-h-[50%] flex flex-col items-center py-24 backdrop-grayscale-1 gap-y-1">
        <h1 className='text-3xl text-gray-800 font-bold mt-6'>Security</h1>
        <h2 className='text-lg text-gray-800 font-bold'><Link to={'/'}>Home</Link>{'>'}<Link to={'/service'}>service</Link>{'>'}security</h2>
      </div>
      <ServiceComp {...md}/>
      </section>
    )
  }
  
  export default Security