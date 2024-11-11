import { Button } from "./ui/button";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoLogoBehance, IoLogoDribbble, IoLogoFacebook, IoLogoTwitter, IoMail, IoSend } from "react-icons/io5";
import { Input } from "./ui/input";
import { MyMap } from "./MyMap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent the default form submission
        if (email) {
            try {
                const response = await fetch('http://localhost:5000/api/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }), // Send email in the request body
                });
    
                if (response.ok) {
                    const result = await response.json();
                    console.log(result.message); // Log the success message 
                    toast.success("Yay! You were signed up!"); 
                    setEmail(""); // Clear the email input
                } else {
                    toast.error("Something went wrong. Please try again.");
                }
            } catch (error) {
                console.error('Error submitting email:', error);
                toast.error("Failed to connect to the server.");
            }
        } else {
            toast.error("Please enter a valid email.");
        }
    };
    
    

    return (
        <footer className="w-full bg-gray-800 text-white px-6 flex flex-col gap-y-10">
            <ToastContainer /> {/* Toast container to display notifications */}
            <div className="flex-col flex md:flex-row justify-between">
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold">Looking for the best IT business solutions?</h2>
                    <p>Get in touch with us today to learn more about our services</p>
                </div>
                <div className="md:mt-1 md:py-6">
                    <Button className="bg-blue-500 hover:bg-blue-800">Get a Quote</Button>
                </div>
            </div>
            <hr />
            <div className="flex flex-col md:flex-row md:gap-y-6 justify-between">
                <div className="flex flex-col gap-y-6">
                    <div className="flex flex-col gap-y-3">
                        <div className="lg:w-[22%] w-[30%]">
                            <img src='../../public/logo.svg' alt="logo" className="w-full h-full" />
                        </div>
                        <p>We work with a passion for taking challenges and creating new ones in the advertising sector.</p>
                        <Button className="max-w-24 bg-blue-500 hover:bg-blue-800">
                            <Link to={'/about'}>About Us</Link>
                        </Button>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <div>
                            <h3 className="text-xl font-semibold">Official Info</h3>
                            <div className="w-10 h-1 bg-blue-500"></div>
                        </div>
                        <p className="flex items-center gap-x-2"><FaLocationDot /> BSI building, Rise Tower Noida Sector 63</p>
                        <p className="flex items-center gap-x-1"><IoCall /> +91 9876543210</p>
                        <p className="flex items-center gap-x-1"><IoMail /> PSS@service.com</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6">
                    <div className="flex flex-col gap-y-3">
                        <div>
                            <h3 className="text-xl font-semibold">Newsletter</h3>
                            <div className="w-10 h-1 bg-blue-500"></div>
                        </div>
                        <p>Subscribe to our newsletter to get our latest updates & news</p>
                        {/* Email subscription form */}
                        <form onSubmit={handleSubmit} className="flex">
                            <Input 
                                className="focus:outline-none text-gray-800" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="Enter your email"
                            />
                            <Button type="submit" className="bg-blue-500">
                                <IoSend className="w-8 h-8" />
                            </Button>
                        </form>
                        <div className="flex gap-x-2">
                            <IoLogoFacebook className="text-gray-500 hover:scale-105 hover:text-slate-100" />
                            <IoLogoTwitter className="text-gray-500 hover:scale-105 hover:text-slate-100" />
                            <IoLogoDribbble className="text-gray-500 hover:scale-105 hover:text-slate-100" />
                            <IoLogoBehance className="text-gray-500 hover:scale-105 hover:text-slate-100" />
                        </div>
                    </div>
                    <div>
                        <MyMap />
                    </div>
                </div>
            </div>
            <div></div>
        </footer>
    );
};

export default Footer;
