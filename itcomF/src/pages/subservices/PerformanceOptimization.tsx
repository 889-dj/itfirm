import SubserviceComp from '@/components/subserviceComp'

const PerformanceOptimization = () => {
  const md = {
    parent:"Web",
    name:"Performance Optimization",
    content:`Our Performance Optimization services ensure that your applications load quickly, run smoothly, and provide an optimal user experience across devices and platforms. We enhance speed, reliability, and efficiency to keep your users engaged.

What We Offer:

👉 Code Optimization: Our team reviews and refines your app’s code to improve efficiency, remove unnecessary resources, and optimize data flow.
👉 Cross-Browser Compatibility: We test your web and PWA across multiple browsers to ensure a consistent, smooth experience for all users.
👉 SEO & Lighthouse Audits: We conduct SEO audits and use Google Lighthouse to analyze performance and implement best practices for optimal web and PWA performance.

Deliver a fast, seamless, and efficient experience to your users with our performance optimization services.`,
    img:"../../../public/w4.jpg"
  }
  return (
    <SubserviceComp {...md}/>
  );
}

export default PerformanceOptimization