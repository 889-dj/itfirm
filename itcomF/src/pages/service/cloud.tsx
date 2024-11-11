import ServiceComp from "@/components/serviceComp"
import { Link } from "react-router-dom"

const Cloud = () => {
  const md = {
    "name": "Cloud services",
    "text": "Harness the power of the cloud with our comprehensive cloud services designed to provide scalability, flexibility, and cost-efficiency for your business. We offer cloud migration, management, and optimization services, ensuring a smooth transition from traditional infrastructure to cloud-based solutions. Our team works with leading cloud platforms like AWS, Microsoft Azure, and Google Cloud to deliver secure and scalable cloud environments that meet your unique business requirements. Whether you're looking to implement a hybrid cloud, a private cloud solution, or fully embrace the public cloud, we ensure your infrastructure is optimized for performance, security, and cost-effectiveness. Enjoy the benefits of reduced hardware costs, remote accessibility, and real-time collaboration with our cloud expertise.",
    "cards":[
      "Cloud Migration",
      "Cloud Infrastructure Management",
      "Cloud Security",
      "SaaS Solutions",
      "Cloud Cost Optimization"
    ],
  }
  return (
    <section className="w-full">
      <div className="bg-woman bg-cover w-full lg:min-h-[20vh] min-h-[50%] flex flex-col items-center py-24 backdrop-grayscale-1 gap-y-1">
        <h1 className='text-3xl text-gray-800 font-bold mt-6'>Cloud services</h1>
        <h2 className='text-lg text-gray-800 font-bold'><Link to={'/'}>Home</Link>{'>'}<Link to={'/service'}>service</Link>{'>'}cloud</h2>
      </div>
      <ServiceComp {...md} />
    </section>
  )
}

export default Cloud