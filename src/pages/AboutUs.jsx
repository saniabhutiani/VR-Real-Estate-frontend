import { Link } from "react-router-dom";

const AboutUs = () => {

  const galleryImages = [
    "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
    "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    "https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg",
    "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
    "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg",
    "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
    "https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg",
    "https://images.pexels.com/photos/18089842/pexels-photo-18089842.jpeg",
       ];

  const detailCards = [
    {
      title: "Verified Properties",
      desc: "Each listing is carefully reviewed to ensure trust, accuracy and real-world relevance."
    },
    {
      title: "Modern Architecture",
      desc: "Properties showcase contemporary layouts with premium design aesthetics."
    },
    {
      title: "Smart Search",
      desc: "Future-ready architecture supports filters, categories and immersive browsing."
    },
    {
      title: "Responsive Design",
      desc: "Seamless experience across desktop, tablet and mobile devices."
    },
    {
      title: "Academic Excellence",
      desc: "Designed as a professional academic project aligned with industry standards."
    },
    {
      title: "User First Approach",
      desc: "Clear layouts, readable content and intuitive navigation."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors duration-500">

      {/*HERO IMAGE*/}
      <section className="relative h-[650px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
          className="absolute inset-0 w-full h-full object-cover scale-110 animate-[zoom_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-black/75 flex items-center justify-center">
          <div className="text-center max-w-5xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About VR Real Estate
            </h1>
            <p className="text-slate-200 text-lg leading-relaxed">
              A modern, technology-driven real estate platform designed to deliver
              immersive property browsing experiences with clean UI and scalable architecture.
            </p>
          </div>
        </div>
      </section>

   {/*THEORY SECTION */}
<section className="max-w-7xl mx-auto px-6 py-28 space-y-36">

  {/* WHO WE ARE */}
  <div className="grid md:grid-cols-2 gap-20 items-center">
    <div>
      <h2 className="text-4xl font-bold text-indigo-600 mb-8">
        Who We Are
      </h2>

      <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
        VR Real Estate is a student-driven academic web application developed to
        simulate real-world real estate platforms using modern frontend technologies.
        The project focuses on demonstrating how professional UI design, reusable
        components and scalable architecture can be implemented in a real estate
        environment.
      </p>

      <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
        This platform reflects industry-level standards by combining clean layouts,
        responsive design and user-friendly navigation. Every section is structured
        carefully to provide clarity, trust and a smooth browsing experience.
      </p>

      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
        VR Real Estate also acts as a strong foundation for future enhancements such
        as backend integration, authentication systems, database connectivity and
        advanced property management features.
      </p>
    </div>

    <img
      src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg"
      className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
    />
  </div>

  {/* OUR MISSION */}
  <div className="grid md:grid-cols-2 gap-20 items-center">
    <img
      src="https://images.pexels.com/photos/13907870/pexels-photo-13907870.jpeg"
      className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
    />

    <div>
      <h2 className="text-4xl font-bold text-indigo-600 mb-8">
        Our Mission
      </h2>

      <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
        Our mission is to simplify property discovery by presenting accurate, visually appealing, and well-organized property information through a clean and intuitive digital interface. VR Real Estate is designed to reduce the complexity commonly found in traditional real estate platforms by focusing on clarity, structure, and ease of use.

      </p>

      <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
       We aim to provide users with a seamless browsing experience that prioritizes usability, consistency, and performance across all devices. From layout design to content presentation, every component is carefully crafted to ensure users can explore properties confidently without confusion or unnecessary distractions.The platform emphasizes trust and transparency by organizing property details in a clear and meaningful way. By using thoughtful UI/UX principles, VR Real Estate helps users make informed decisions while maintaining a smooth and engaging interaction flow throughout the application.
      </p>

      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
      Our mission also reflects modern industry practices by integrating responsive design, scalable architecture, and reusable components. This ensures that the platform remains adaptable for future enhancements such as backend integration, real-time data handling, and advanced property management features.Through this mission, VR Real Estate demonstrates how academic projects can achieve professional-level quality while preparing students for real-world software development challenges in the real estate domain.

      </p>
    </div>
  </div>

  {/* OUR VISION */}
  <div className="grid md:grid-cols-2 gap-20 items-center">
    <div>
      <h2 className="text-4xl font-bold text-indigo-600 mb-8">
        Our Vision
      </h2>

      <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
        Our vision is to build a future-ready real estate platform that supports
        immersive property browsing, smart filtering and interactive user experiences.
      </p>

      <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
        The platform is designed with scalability and flexibility in mind, allowing
        easy integration of APIs, databases and advanced backend services as the
        project evolves.
      </p>

      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
        This vision ensures long-term relevance in the digital real estate ecosystem
        while maintaining academic excellence and professional design standards.
      </p>
    </div>

    <img
      src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg"
      className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
    />
  </div>

</section>


{}
<section className="max-w-7xl mx-auto px-6 py-24">
  <div className="grid md:grid-cols-2 gap-20 items-center">

    {/* LEFT SIDE IMAGE (SAME IMAGE AS BEFORE) */}
    <div>
      <img
        src="https://images.pexels.com/photos/11448511/pexels-photo-11448511.jpeg"
        alt="Future Ready Real Estate"
        className="rounded-2xl shadow-xl w-full
        hover:scale-105 transition duration-500"
      />
    </div>

    {/* RIGHT SIDE THEORY */}
    <div>
      <h2 className="text-4xl font-bold text-blue-600 mb-6">
        Future-Ready Real Estate Experience
      </h2>

      <p className="text-slate-700 dark:text-slate-300 mb-5 leading-relaxed">
        VR Real Estate is designed to evolve alongside modern digital real estate
        trends. The platform supports immersive browsing experiences that allow
        users to visually connect with properties before making important decisions.
      </p>

      <p className="text-slate-700 dark:text-slate-300 mb-5 leading-relaxed">
        By combining smart layouts, interactive components and structured property
        data, the platform creates a seamless flow between discovery, comparison
        and exploration.
      </p>

      <p className="text-slate-700 dark:text-slate-300 mb-5 leading-relaxed">
        The system architecture allows easy expansion with advanced features such
        as virtual tours, real-time availability and personalized recommendations.
      </p>

      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
        This approach ensures long-term adaptability while maintaining academic
        quality, professional UI standards and user-focused design principles.
      </p>
    </div>

  </div>
</section>

{/* PLATFORM INSIGHTS*/}
<section className="bg-slate-50 dark:bg-slate-900 py-28">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-blue-600 mb-14">
      Platform Insights & Approach
    </h2>

    <div className="grid md:grid-cols-2 gap-16 items-start">

      {}
      <div>
        <h3 className="text-2xl font-semibold mb-5 text-blue-600">
          Design Philosophy
        </h3>

        <p className="text-slate-700 dark:text-blue-300 leading-relaxed mb-4">
          The design philosophy of VR Real Estate focuses on clarity, simplicity
          and user comfort. Each section is intentionally structured to reduce
          cognitive load and allow users to focus on property details without
          unnecessary distractions.
        </p>

        <p className="text-slate-700 dark:text-blue-300 leading-relaxed">
          Typography, spacing and color choices follow modern UI standards to
          create a visually balanced and professional real estate browsing
          experience.
        </p>
      </div>

      {/* USER EXPERIENCE STRATEGY */}
      <div>
        <h3 className="text-2xl font-semibold mb-5 text-blue-600">
          User Experience Strategy
        </h3>

        <p className="text-slate-700 dark:text-blue-300 leading-relaxed mb-4">
          The platform prioritizes intuitive navigation and predictable
          interactions. Users can easily explore listings, understand layouts
          and move between sections without confusion.
        </p>

        <p className="text-slate-700 dark:text-blue-300 leading-relaxed">
          Smooth hover effects, transitions and responsive layouts contribute
          to a polished and engaging browsing flow across devices.
        </p>
      </div>

    </div>
  </div>
 
</section>

{}
<section className="max-w-7xl mx-auto px-6 py-28">
  <div className="grid md:grid-cols-2 gap-16 items-start">

    <div>
      <h3 className="text-2xl font-semibold mb-5 text-indigo-600">
        Academic Significance
      </h3>

      <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
        This project serves as a strong academic demonstration of frontend engineering
        concepts such as component reusability, state-driven UI rendering and responsive
        design techniques.
      </p>

      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
        It highlights how theoretical knowledge can be applied to build real-world
        web applications with professional standards.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-semibold mb-5 text-indigo-600">
        Industry Readiness
      </h3>

      <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
        VR Real Estate is structured to be easily extended with backend services,
        authentication systems and real property data APIs.
      </p>

      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
        The modular architecture ensures scalability and long-term maintainability,
        making it suitable for real-world deployment scenarios.
      </p>
    </div>

  </div>
</section>

      {/*PROPERTY GALLERY */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-16">
          Property Gallery
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {galleryImages.map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-2xl h-56 w-full object-cover
              shadow-lg hover:scale-110 transition"
            />
          ))}
        </div>
      </section>

      {/*DETAILS BOXES  */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid md:grid-cols-3 gap-8">
          {detailCards.map((card, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8
              shadow-md hover:shadow-xl hover:-translate-y-2 transition"
            >
              <div className="h-1 w-12 bg-indigo-500 mb-4 rounded"></div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                {card.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {}
<section className="w-full min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700
flex items-center justify-center">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
      Explore Verified Properties Today
    </h2>

    <p className="text-slate-100 text-lg leading-relaxed mb-6">
      Discover trusted listings, modern homes and immersive real estate
      experiences built with performance, scalability and clean UI principles.
    </p>

    <p className="text-slate-200 leading-relaxed max-w-4xl mx-auto mb-10">
      VR Real Estate is designed to help users explore verified properties with
      confidence. The platform combines clean design, structured data and
      intuitive navigation to support informed real estate decisions while
      maintaining professional academic standards.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-6">
      <Link
        to="/properties"
        className="px-12 py-4 rounded-xl bg-white
        text-indigo-600 font-semibold
        hover:scale-105 transition shadow-xl"
      >
        View Properties
      </Link>

      <Link
        to="/contact"
        className="px-12 py-4 rounded-xl
        border border-white text-white font-semibold
        hover:bg-white hover:text-indigo-600 transition"
      >
        Contact Us
      </Link>
    </div>

  </div>
</section>

    </div>
  );
};

export default AboutUs;