import { FaCloud, FaPhone, FaDatabase, FaProjectDiagram } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function ServicesSection() {
    const services = [
        { title: "Backup & Recovery", icon: <FaCloud />, message: "Backup Solutions", link: "backup",imguri:"../../public/bac.jpg" },
        { title: "VoIP Solutions", icon: <FaPhone />, message: "VoIP Support", link: "voip",imguri:"../../public/tel.jpg" },
        { title: "Consulting Planning", icon: <FaDatabase />, message: "Consulting Services", link: "consulting",imguri:"../../public/cons2.jpg" },
        { title: "IT Consultancy", icon: <FaProjectDiagram />, message: "Consultancy for IT", link: "itconsulting",imguri:"../../public/cons.jpg" },
        { title: "Cyber Security", icon: <FaCloud />, message: "Security Solutions", link: "security",imguri:"../../public/sec.jpg" },
        { title: "Cloud Hosting", icon: <FaPhone />, message: "Cloud Services", link: "cloud",imguri:"../../public/cloud.jpg" },
        { title: "Web Development", icon: <FaDatabase />, message: "Web Design & Development", link: "web",imguri:"../../public/web.jpg" },
        { title: "App Development", icon: <FaProjectDiagram />, message: "Mobile App Development", link: "mobile",imguri:"../../public/mob.jpg" },
    ];

    return (
        <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <div key={index} className="relative group overflow-hidden bg-white rounded-lg shadow-lg">
                        <img
                            src={service.imguri}
                            alt={service.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="w-full flex flex-col justify-center items-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {service.message}
                                <div className='bg-gray-600 text-white rounded-xl p-2 flex items-center justify-center max-w-[50%]'>
                                    <Link to={`/service/${service.link}`}>See more</Link>
                                </div>
                            </p>
                        </div>
                        <div className="p-4 flex flex-col items-center justify-center">
                            <div className="text-4xl text-blue-600 mb-2">{service.icon}</div>
                            <h3 className="text-lg font-semibold">{service.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
