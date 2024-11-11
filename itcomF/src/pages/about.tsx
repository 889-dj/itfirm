import { CarouselComp } from "@/components/carouselcomp"
import { TabsSec } from "@/components/tabsec"
import { Button } from "@/components/ui/button"
import { FaAward, FaFacebook, FaLinkedin, FaTwitter, FaWind } from "react-icons/fa6"
import { Modal } from "@/components/modal"
import { useState } from "react"
import { IoPlaySharp } from "react-icons/io5"
import { Link } from "react-router-dom"
import { AiOutlineTeam } from "react-icons/ai";
import CountUp from "react-countup"
import { GiTrophy } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { MdOutlinePreview } from "react-icons/md";


const About = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="w-full">
      <div className="bg-woman bg-cover w-full lg:min-h-[20vh] min-h-[50%] flex flex-col items-center py-24 backdrop-grayscale-1 gap-y-1">
        <h1 className='text-3xl text-gray-800 font-bold mt-6'>About Us</h1>
        <h2 className='text-lg text-gray-800 font-bold'><Link to={'/'}>Home</Link>{'>'}About</h2>
      </div>
      {/* section 2 */}
      <div className="py-6 px-8 flex flex-col lg:flex-row gap-y-6 gap-x-3">
        {/* left */}
        <div className=" flex flex-col gap-y-6 lg:w-[50%]">
          <div>
            <p className="text-xl text-blue-500 font-semibold">About us</p>
            <p className="text-3xl font-bold">Choose The <span className="text-blue-500">Best IT</span> Service Company</p>
          </div>
          <p>ITSoft has been optiimised to give your vsiitors the best experience in terms of UI/UX, with a unique design</p>
          <div className="my-2">
            <TabsSec />
          </div>
          <div className="flex items-center gap-x-2">
            <p className="font-semibold">check details about our company</p>
            <Button className="bg-blue-500 rounded-full p-3" onClick={openModal}>
              <IoPlaySharp />
            </Button>
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
        {/* right */}
        <div className="flex flex-col flex-wrap lg:w-[50%]">
          <div className="lg:max-h-[30vw] shadow-lg">
            <img className="w-full h-full object-cover" src="../../public/woman.jpg" alt="Woman" />
          </div>
          <div className="py-6 flex gap-x-4 shadow-lg px-8">
            <div className="flex items-center">
              <FaAward className="scale-[2.5] text-gray-600 stroke-slate-900" />
            </div>
            <div className="">
              <p className="text-xl font-bold">Best Awarded Company</p>
              <p>we adapt our delivery to the way your work, whether as an external provider</p>
            </div>
          </div>
        </div>
      </div>
      {/* section2 */}
      <div className="w-full flex justify-center px-14 py-4 bg-gradient-to-r from-cyan-400 to-blue-500">
        <CarouselComp />
      </div>
      {/* section 3 */}
      <div className="flex flex-col  items-center gap-y-6 py-0">
        <div className="flex flex-col items-center gap-y-1 px-4 py-16">
          <p className="text-blue-500 font-bold text-xl flex justify-center gap-x-2">
            <span className="flex items-center"><FaWind className="rotate-180" /></span>
            team members
            <span className="flex items-center"><FaWind /></span>
          </p>
          <h2 className="text-3xl font-bold text-center max-w-[85%]">Passionate Personalities, <span className="text-blue-500">Versatile</span> Brains</h2>
        </div>
        {/* cards */}
        <div className="flex lg:w-full lg:px-6 md:grid md:grid-cols-2 lg:flex justify-evenly flex-col gap-x-4 lg:flex-row  gap-y-6">
          {/* single card */}
          <div className="shadow-lg">
            <div className="max-w-[250px]">
              <img src="../../public/m2.png" alt="user" className="w-full h-full aspect-square" />
            </div>
            <div className="bg-gray-900 text-white w-full flex flex-col items-center py-4 px-2">
              <h3 className="text-xl font-semibold">Vishal Singh</h3>
              <p className="text-md text-blue-500 font-bold">Founder & CEO
              </p>
              <div className="flex gap-x-2 p-2">
                <div className='hover:text-blue-400'><FaFacebook /></div>
                <div className="hover:text-blue-400"><FaLinkedin /></div>
                <div className="hover:text-blue-400"><FaTwitter /></div>
              </div>
            </div>
          </div>
          <div className="shadow-lg">
            <div className="max-w-[250px]">
              <img src="../../public/m4.png" alt="user" className="w-full h-full aspect-square" />
            </div>
            <div className="bg-gray-900 text-white w-full flex flex-col items-center py-4 px-2">
              <h3 className="text-xl font-semibold">Ashish Sudra</h3>
              <p className="text-md text-blue-500 font-bold">Co-Founder & CTO
              </p>
              <div className="flex gap-x-2 p-2">
                <div className='hover:text-blue-400'><FaFacebook /></div>
                <div className="hover:text-blue-400"><FaLinkedin /></div>
                <div className="hover:text-blue-400"><FaTwitter /></div>
              </div>
            </div>
          </div>
          <div className="shadow-lg">
            <div className="max-w-[250px]">
              <img src="../../public/m3.png" alt="user" className="w-full h-full aspect-square" />
            </div>
            <div className="bg-gray-900 text-white w-full flex flex-col items-center py-4 px-2">
              <h3 className="text-xl font-semibold">Naveen Kumar</h3>
              <p className="text-md text-blue-500 font-bold">Founding Engineer
              </p>
              <div className="flex gap-x-2 p-2">
                <div className='hover:text-blue-400'><FaFacebook /></div>
                <div className="hover:text-blue-400"><FaLinkedin /></div>
                <div className="hover:text-blue-400"><FaTwitter /></div>
              </div>
            </div>
          </div>
          <div className="shadow-lg">
            <div className="max-w-[250px]">
              <img src="../../public/woman.jpg" alt="user" className="w-full h-full aspect-square" />
            </div>
            <div className="bg-gray-900 text-white w-full flex flex-col items-center py-4 px-2">
              <h3 className="text-xl font-semibold">Nusrat shrivastva</h3>
              <p className="text-md text-blue-500 font-bold">Partner
              </p>
              <div className="flex gap-x-2 p-2">
                <div className='hover:text-blue-400'><FaFacebook /></div>
                <div className="hover:text-blue-400"><FaLinkedin /></div>
                <div className="hover:text-blue-400"><FaTwitter /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* numbers */}
      <div className="w-[90%] mx-auto my-6 text-white flex flex-col justify-evenly bg-gray-800 px-4 py-8 gap-y-6 shadow-[0_35px_100px_-15px_rgba(0,0,0,1)] md:grid md:grid-cols-2 lg:flex lg:flex-row">
        <div className="flex flex-col items-center p-3">
          <div className="scale-[1.5] flex items-center"><AiOutlineTeam className="text-blue-500" />
            <CountUp start={0} end={150} delay={1}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />+
                </div>
              )}
            </CountUp>
          </div>
          <p>Team members</p>
        </div>
        <div className="flex flex-col items-center p-3">
          <div className="scale-[1.5] flex items-center"><GiTrophy className="text-blue-500" />
            <CountUp start={0} end={15} delay={1}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />+
                </div>
              )}
            </CountUp>
          </div>
          <p>Awards</p>
        </div>
        <div className="flex flex-col items-center p-3">
          <div className="scale-[1.5] flex items-center"><GrProjects className="text-blue-500" />
            <CountUp start={0} end={10} delay={1}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />K+
                </div>
              )}
            </CountUp>
          </div>
          <p>Completed Projects</p>
        </div>
        <div className="flex flex-col items-center p-3">
          <div className="scale-[1.5] flex items-center"><MdOutlinePreview className="text-blue-500" />
            <CountUp start={0} end={900} delay={0}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />+
                </div>
              )}
            </CountUp>
          </div>
          <p>Client Reviews</p>
        </div>
      </div>
    </section>
  )
}

export default About