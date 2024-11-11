import ServiceComp from "@/components/serviceComp"
import { Link } from "react-router-dom"

const Mobile = () => {
  const md = {
    "name": "Mobile Development",
    "text": "In today’s mobile-driven world, having a strong mobile presence is crucial for business success. Our mobile development services are designed to create highly responsive, secure, and feature-rich mobile applications for both iOS and Android platforms. From concept to deployment, we work closely with you to understand your business goals and user needs, delivering custom apps that are intuitive and engaging. Our team excels in developing native apps, cross-platform solutions, and progressive web apps (PWAs), ensuring that your business can reach its audience on any device. Whether it's an e-commerce app, a customer engagement tool, or an enterprise-level solution, we guarantee a smooth, efficient, and innovative mobile experience for your users, driving growth and enhancing customer satisfaction.",
    "cards": [
      "iOS App Development",
      "Android App Development",
      "Cross-Platform Solutions",
      "Mobile App Testing",
    ],
  }
  return (
    <section className="w-full">
      <div className="bg-woman bg-cover w-full lg:min-h-[20vh] min-h-[50%] flex flex-col items-center py-24 backdrop-grayscale-1 gap-y-1">
        <h1 className='text-3xl text-gray-800 font-bold mt-6'>Mobile Development</h1>
        <h2 className='text-lg text-gray-800 font-bold'><Link to={'/'}>Home</Link>{'>'}<Link to={'/service'}>service</Link>{'>'}mobile</h2>
      </div>
      <ServiceComp {...md} />
    </section>
  )
}

export default Mobile