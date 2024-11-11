import ServiceComp from "@/components/serviceComp"
import { Link } from "react-router-dom"

const Consulting = () => {
  const md = {
    "name": "Consulting",
    "text": "Our consulting services provide expert guidance to help your business navigate the complexities of technology and digital transformation. Whether you're a startup in need of strategic advice or a large enterprise looking to optimize your IT infrastructure, our experienced consultants offer tailored solutions that align with your business goals. We conduct in-depth assessments of your current systems and processes, providing actionable insights and recommendations to enhance efficiency, reduce costs, and drive innovation. From IT strategy development to process improvement and project management, our consulting services empower you to make informed decisions and stay ahead in an ever-changing technological landscape.",
    "cards":[ "Business Process Optimization",
      "IT Strategy Consulting",
      "Project Management",
      "Risk Management Consulting",]
  }
  return (
    <section className="w-full">
      <div className="bg-woman bg-cover w-full lg:min-h-[20vh] min-h-[50%] flex flex-col items-center py-24 backdrop-grayscale-1 gap-y-1">
        <h1 className='text-3xl text-gray-800 font-bold mt-6'>Consulting</h1>
        <h2 className='text-lg text-gray-800 font-bold'><Link to={'/'}>Home</Link>{'>'}<Link to={'/service'}>service</Link>{'>'}consulting</h2>
      </div>
      <ServiceComp {...md} />
    </section>
  )
}

export default Consulting