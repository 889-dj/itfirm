import ServiceComp from "@/components/serviceComp"
import { Link } from "react-router-dom"

const Web = () => {
  const md = {
    "name": "Web Development",
    "text": "At our IT firm, we specialize in crafting cutting-edge web development solutions that empower businesses to thrive in the digital landscape. Our team of experienced developers is adept at building highly functional, responsive, and scalable websites tailored to your specific needs. Whether you're looking for a corporate website, a dynamic e-commerce platform, or a custom web application, we ensure seamless user experiences across all devices. Our approach emphasizes clean code, fast loading times, and robust security features, ensuring that your website not only looks great but also performs exceptionally. With a focus on both front-end and back-end development, we integrate advanced technologies like React, Node.js, and cloud hosting to create a web presence that can grow with your business.",
    "cards":["Landing Pages","Business Websites","Backend Management","Performance Optimizations","Progressive Web Apps"]
  }
  return (
    <section className="w-full">
      <div className="bg-woman bg-cover w-full lg:min-h-[20vh] min-h-[50%] flex flex-col items-center py-24 backdrop-grayscale-1 gap-y-1">
        <h1 className='text-3xl text-gray-800 font-bold mt-6'>Web Development</h1>
        <h2 className='text-lg text-gray-800 font-bold'><Link to={'/'}>Home</Link>{'>'}<Link to={'/service'}>service</Link>{'>'}web</h2>
      </div>
      <ServiceComp {...md} />
    </section>
  )
}

export default Web