// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "./Chooseus.module.css";
// import img1 from "../assets/images/choose.jpg";
// import img2 from "../assets/images/banner/5.png";

// const Chooseus = () => {
//   const [activeSection, setActiveSection] = useState(0);

//   const sections = [
//     {
//       title: "Experience",
//       content:
//         "Over 5 decades of trusted logistics and stevedoring excellence.",
//       image: img1,
//     },
//     {
//       title: "Innovation",
//       content: "Modern equipment, digital tracking, and process optimization.",
//       image: img2,
//     },
//     {
//       title: "Customer Focus",
//       content: "Our commitment to delivering the best service to clients.",
//       image: img1,
//     },
//     {
//       title: "Safety First",
//       content: "We prioritize the safety of our team and operations.",
//       image: img1,
//     },
//     {
//       title: "Our Team",
//       content: "A dedicated team of skilled professionals working together.",
//       image: img1,
//     },
//     {
//       title: "Our Partners",
//       content:
//         "Collaborating with the best in the industry for mutual success.",
//       image: img1,
//     },
//   ];

//   return (
//     <div className={`container mt-5 ${styles.chooseUsSection}`}>
//       <h2 className="text-center mb-4">
//         Why Choose <br /> Badaruddin Stevedoring?
//       </h2>
//       <div className="row">
//         {/* Left Sidebar */}
//         <div className="col-md-6">
//           <div className={styles.sidebar}>
//             {sections.map((section, index) => (
//               <div
//                 key={index}
//                 className={`${styles.sidebarItem} ${
//                   activeSection === index ? styles.active : ""
//                 }`}
//                 onClick={() => setActiveSection(index)}
//               >
//                 <div className={styles.titleRow}>
//                   <span className={styles.title}>{section.title}</span>
//                   {activeSection === index && (
//                     <div className={styles.activeLine}></div>
//                   )}
//                 </div>
//                 {activeSection === index && (
//                   <p className={styles.content}>{section.content}</p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="col-md-6 text-center">
//           <div className={styles.imageWrapper}>
//             <img
//               src={sections[activeSection].image}
//               alt={sections[activeSection].title}
//               className={styles.image}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chooseus;
import React, { useState, useEffect, useRef } from "react";
import styles from "./Chooseus.module.css";

// Note: You'll need to import your actual images
import img1 from "../assets/images/choose.jpg";
import img2 from "../assets/images/banner/5.png";

const features = [
  {
    title: "Experience",
    desc: "Over 5 decades of trusted logistics and stevedoring excellence.",
    image: img1,
  },
  {
    title: "Innovation",
    desc: "Modern equipment, digital tracking, and process optimization.",
    image: img2,
  },
  {
    title: "Customer Focus",
    desc: "Our commitment to delivering the best service to clients.",
    image: img1,
  },
  {
    title: "Safety First",
    desc: "We prioritize the safety of our team and operations.",
    image: img1,
  },
  {
    title: "Our Team",
    desc: "A dedicated team of skilled professionals working together.",
    image: img1,
  },
  {
    title: "Our Partners",
    desc: "Collaborating with the best in the industry for mutual success.",
    image: img1,
  },
];

export default function Chooseus() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Set up auto-rotation
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
      }, 2000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  // Calculate line height
  useEffect(() => {
    const activeItem = document.getElementById(`feature-${activeIndex}`);
    if (activeItem) {
      const listTop =
        document.getElementById("featureList").getBoundingClientRect().top +
        window.scrollY;
      const center =
        activeItem.getBoundingClientRect().top +
        window.scrollY +
        activeItem.offsetHeight / 2;
      setLineHeight(center - listTop);
    }
  }, [activeIndex]);

  // Handle manual selection
  const handleFeatureClick = (index) => {
    setActiveIndex(index);
    // Pause auto-play when user interacts
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  return (
    <div className={`container py-5 ${styles.featureWrap}`}>
      <h2 className="text-center pb-5 my-4">
        Why Choose <br /> Badaruddin Stevedoring?
      </h2>
      <div className="row">
        <div className={`col-lg-6 pe-lg-5 ${styles.titlesCol}`}>
          <div className={styles.progressTrack}></div>
          <div
            className={styles.progressLine}
            style={{ height: `${lineHeight}px` }}
          ></div>
          <ul
            className={`list-group ${styles.featureList}`}
            id="featureList"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {features.map((f, i) => (
              <li
                key={i}
                id={`feature-${i}`}
                className={`list-group-item ${
                  i === activeIndex ? styles.activeItem : ""
                }`}
                onClick={() => handleFeatureClick(i)}
              >
                <div className={styles.title}>{f.title}</div>
                <div
                  className={`${styles.desc} ${
                    i === activeIndex ? styles.show : ""
                  }`}
                >
                  {f.desc}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-lg-6 d-flex justify-content-center">
          <div className={styles.imageCard}>
            <img
              src={features[activeIndex].image}
              alt={features[activeIndex].title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
