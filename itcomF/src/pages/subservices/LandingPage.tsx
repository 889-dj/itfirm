import SubserviceComp from '@/components/subserviceComp'

const LandingPage = () => {
  const md = {
    parent:"Web",
    name:"Landig pages",
    content:`Our Landing Page services are designed to help you create highly engaging and conversion-optimized landing pages that attract visitors and drive results. Whether you're running a marketing campaign or launching a new product, we craft landing pages that turn visitors into customers.

What We Offer:

👉 Custom Design & Development: We create unique, visually appealing landing pages that reflect your brand and effectively communicate your message.
👉 Responsive Design: Our landing pages are fully responsive, ensuring that your page looks great and functions seamlessly on desktops, tablets, and mobile devices.
👉 A/B Testing & Analytics: We use A/B testing to evaluate different elements of your landing page and continually optimize it based on user behavior and analytics.
👉 SEO Optimization: We ensure that your landing page is SEO-friendly, increasing visibility and helping drive organic traffic from search engines.

Enhance your online presence and drive higher conversions with professionally designed landing pages that convert visitors into loyal customers.`,
    img:"../../../public/w3.jpg"
  }
  return (
    <SubserviceComp {...md}/>
  );
}

export default LandingPage