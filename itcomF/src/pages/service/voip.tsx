import ServiceComp from "@/components/serviceComp"
import { Link } from "react-router-dom"

const Voip = () => {
  const md = {
    "name": "VoIP",
    "text": "Revolutionize your business communications with our VoIP (Voice over IP) solutions, designed to streamline your operations and reduce costs. VoIP enables businesses to make phone calls over the internet, offering greater flexibility, scalability, and advanced features compared to traditional phone systems. Our VoIP solutions are tailored to your business needs, whether you're a small business looking for a simple setup or a large enterprise needing a robust, multi-location system. We provide secure, crystal-clear voice and video communications, integration with your existing CRM or collaboration tools, and advanced features like call forwarding, auto attendants, and conference calling. With our VoIP services, you can stay connected with clients and teams from anywhere in the world, boosting productivity and reducing overhead.",
    "cards": [
      "VoIP Installation and Setup",
      "VoIP Call Center Solutions",
      "VoIP Security",
      "VoIP Call Monitoring",
      "Hosted VoIP Solutions",
      "VoIP Integration with CRM"
    ],
  }
  return (
    <section className="w-full">
      <div className="bg-woman bg-cover w-full lg:min-h-[20vh] min-h-[50%] flex flex-col items-center py-24 backdrop-grayscale-1 gap-y-1">
        <h1 className='text-3xl text-gray-800 font-bold mt-6'>VoIP</h1>
        <h2 className='text-lg text-gray-800 font-bold'><Link to={'/'}>Home</Link>{'>'}<Link to={'/service'}>service</Link>{'>'}VoIP</h2>
      </div>
      <ServiceComp {...md} />
    </section>
  )
}

export default Voip