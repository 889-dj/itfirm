import { FormComp } from "@/components/formcomp"
import { MyMap } from "@/components/MyMap"
import { FaLocationDot, FaWind } from "react-icons/fa6"
import { IoCall } from "react-icons/io5"
import { RxDoubleArrowRight } from "react-icons/rx"
import { Link } from "react-router-dom"
import { IoMdMail } from "react-icons/io";
import { motion } from 'framer-motion';

const slideInFromLeft = {
  hidden: { x: -200, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  transition:{ duration: 0.6, ease: "easeInOut", delay: 0.2 }
}

const slideInFromRight = {
  hidden: { x: 200, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  transition:{ duration: 0.6, ease: "easeInOut", delay: 0.4 }
}

const Contact = () => {

  return (
    <section className="w-full">
      <div className="bg-woman bg-cover w-full lg:min-h-[20vh] min-h-[50%] flex flex-col items-center py-24 backdrop-grayscale-1 gap-y-1">
        <h1 className='text-3xl text-gray-800 font-bold mt-6'>Contact</h1>
        <h2 className='text-lg text-gray-800 font-bold flex gap-x-1'>
          <Link to={'/'}>Home</Link>
          <RxDoubleArrowRight className="text-violet-700 self-center" />
          Contact
        </h2>
      </div>

      <div className="w-full px-6 py-12">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2 text-xl text-blue-500 font-bold">
            <FaWind />Contact Us
          </div>
          <div className="flex flex-col gap-y-6 justify-between gap-x-4 lg:flex-row">
            <h3 className="text-5xl font-bold">
              Grow your business with <span className="text-blue-500">Our Expertise</span>
            </h3>
            <p className="text-lg">
              We understand the importance of approaching each work integrally and believe in the power of simple.
            </p>
          </div>
        </div>
      </div>

      {/* form and contact info with animations */}
      <div className="flex flex-col justify-around gap-y-6 lg:flex-row py-16 px-4">
        <motion.div
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-evenly gap-y-4"
        >
          <div className="flex gap-x-4 p-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg">
            <div className="flex items-center justify-center w-[40%]">
              <FaLocationDot className="scale-[2] text-blue-700" />
            </div>
            <div className="flex flex-col justify-center lg:max-w-[80%]">
              <h3 className="text-xl font-semibold">Office Address</h3>
              <p className="text-md text-gray-700">Digital Agency Network 20 Eastbourne Terrace London W2 6LG</p>
            </div>
          </div>
          <div className="flex gap-x-4 p-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg">
            <div className="flex items-center justify-center w-[30%]">
              <IoCall className="scale-[2] text-blue-700" />
            </div>
            <a href="tel: +91 123456789">
            <div className="flex flex-col justify-center max-w-[80%]">
              <h3 className="text-xl font-semibold">Telephone</h3>
              <p className="w-full text-md text-gray-700 flex flex-col items-center justify-center">
                <p >+91123456789</p>
                <p >+91987654321</p>
              </p>
            </div>

            </a>
          </div>
          <div className="flex gap-x-4 p-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg">
            <div className="flex items-center justify-center w-[30%]">
              <IoMdMail className="scale-[2] text-blue-700" />
            </div>
            <div className="flex flex-col justify-center max-w-[80%]">
              <h3 className="text-xl font-semibold">Mail address</h3>
              <p className="text-md text-gray-700">
                <p>help@envato.com</p>
                <p>help@support.com</p>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromRight}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="p-6 border border-solid border-gray-700 rounded-lg"
        >
          <FormComp />
        </motion.div>
      </div>

      {/* map */}
      <div className="mt-2">
        <MyMap height={350} />
      </div>
    </section>
  )
}

export default Contact;
