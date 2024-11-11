import SubserviceComp from "@/components/subserviceComp"

const ProgressiveWebApps = () => {
  const md = {
    parent:"Web",
    name:"Progressive web apps",
    content:`Progressive Web Apps (PWAs) ensure that your web applications load quickly, run smoothly, and provide an optimal user experience across devices and platforms. We enhance speed, reliability, and efficiency to keep your users engaged.

What We Offer:

👉 Page Load Speed Optimization: We optimize your web app’s loading times by reducing resource sizes, utilizing lazy loading, and enhancing caching techniques.
👉 Mobile Optimization: We ensure that both your web and progressive web apps deliver fast, responsive performance on mobile devices, even in areas with low connectivity.
👉 SEO & Lighthouse Audits: We conduct SEO audits and use Google Lighthouse to analyze performance and implement best practices for optimal web and PWA performance.

Deliver a fast, seamless, and efficient experience to your users with our performance optimization services.`,
    img:"../../../public/w5.jpg"
  }
  return (
    <SubserviceComp {...md}/>
  );
};

export default ProgressiveWebApps;
