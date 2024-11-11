import SubserviceComp from '@/components/subserviceComp'

const BusinessWebsite = () => {
  const md = {
    parent:"Web",
    name:"Business website",
    content:`Our Business Website Development services are designed to create impactful, professional, and user-friendly websites that represent your brand and drive results. From small businesses to large enterprises, we build custom websites that are visually appealing, highly functional, and optimized for performance.

What We Offer:

👉 Custom Design & Branding: We create unique, responsive designs that reflect your brand identity and engage your target audience.
👉 SEO Optimization: Our websites are built with SEO best practices to help your business rank higher in search results, driving more traffic and visibility.
👉 E-commerce Integration: Whether you need a product showcase or a full-scale e-commerce platform, we seamlessly integrate shopping features for smooth transactions and customer satisfaction.

Elevate your online presence with a website that not only looks great but also delivers results. Let us help you build a business website that effectively communicates your value and supports your growth.

`,
    img:"../../../public/w2.jpg"
  }
  return (
    <SubserviceComp {...md}/>
  );
}

export default BusinessWebsite