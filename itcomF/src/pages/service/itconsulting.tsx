import ServiceComp from "@/components/serviceComp"
import { Link } from "react-router-dom"

const ItConsulting = () => {
  const md = {
    "name": "ITConsulting",
    "text": "In today’s fast-paced digital world, businesses require more than just IT support—they need strategic guidance. Our IT consulting services are designed to help you maximize the value of your technology investments and align IT strategies with your business objectives. We provide expert advice on infrastructure optimization, IT governance, digital transformation, and cybersecurity. Our consultants work closely with your team to understand your specific challenges and develop solutions that improve operational efficiency, scalability, and innovation. Whether you're planning a system overhaul, seeking to implement new technologies, or needing to address cybersecurity risks, our IT consulting services offer the knowledge and expertise to guide your business through every step of the process.",
    "cards":[
      "IT Infrastructure Consulting",
      "Digital Transformation",
      "System Integration",
      "IT Budgeting and Planning"
    ],
  }
  return (
    <section className="w-full">
      <div className="bg-woman bg-cover w-full lg:min-h-[20vh] min-h-[50%] flex flex-col items-center py-24 backdrop-grayscale-1 gap-y-1">
        <h1 className='text-3xl text-gray-800 font-bold mt-6'>IT Consulting</h1>
        <h2 className='text-lg text-gray-800 font-bold'><Link to={'/'}>Home</Link>{'>'}<Link to={'/service'}>service</Link>{'>'}it consulting</h2>
      </div>
      <ServiceComp {...md} />
    </section>
  )
}

export default ItConsulting