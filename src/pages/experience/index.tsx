import React from "react";
import experienceBgImage from "../../assets/experience-bg.jpg";
import { FaBriefcase, FaUserGraduate } from "react-icons/fa";

const experiences = [
  {
    title: "Senior Engineer L1",
    subtitle: "Green Story Inc. (Simplizero Sustainable Pvt Ltd)",
    description: `
Developed responsive and dynamic user interfaces using React.JS, Next.JS, and Tailwind CSS, and managed state efficiently with Redux Toolkit. Utilized React Query for optimized API calls, enhancing data fetching and management. Collaborated with backend technologies like Node.JS, Express.JS, and Nest.JS for end-to-end development. 
Applied Domain-Driven Design (DDD) principles for scalable architecture. 
Implemented PostgreSQL, Sequelize, and TypeORM for database management. 
Integrated Swagger for API documentation and Google API for internationalization. 
Used Firebase for push notifications and implemented bulk upload feature for Excel data handling.`,
    date: "Jun 2022 – Present | Remote",
    icon: <FaBriefcase />,
  },
  {
    title: "Senior Process Associate",
    subtitle: "Tata Consultancy Services (TCS)",
    description: `
Developed intuitive ReactJS user interfaces using best practices. 
Used Formik and Yup for form validation and data integrity. 
Maintained code quality via linting, standards, and automated testing (Jest, RTL). 
Managed CI/CD pipelines with Git and GitLab. 
Received 'On the Spot' and 'Service and Commitment Award' for outstanding contributions. 
Implemented bug fixes and optimized frontend performance.`,

    date: "Mar 2019 – Jun 2022 | Gandhinagar, Gujarat",
    icon: <FaBriefcase />,
  },
  {
    title: "Bachelor’s in Technology and Science",
    subtitle: "Vaageswari College of Engineering",
    date: "2018 | Karimnagar, Telangana",
    icon: <FaUserGraduate />,
  },

  {
    title: "Diploma in Polytechnic",
    subtitle: "Jyothishmathi Institute of Technology & Science",
    date: "2015 | Karimnagar, Telangana",
    icon: <FaUserGraduate />,
  },

  {
    title: "Schooling - SSC",
    subtitle: "Loyola High School",
    date: "2012 | Karimnagar, Telangana",
    icon: <FaUserGraduate />,
  },
];

function Experience() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-white py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${experienceBgImage})`,
        backgroundSize: "cover",
        filter: "grayscale(100%) brightness(0.8)",
      }}
      id="Experience"
    >
      {/* foggy overlay */}
      <div className="absolute inset-0 bg-white/20"></div>

      <div className="relative z-10 w-full max-w-5xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Work Experience & Education
        </h2>

        <div className="relative border-l-2 border-cyan-400 ml-8">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6">
              {/* Icon */}
              <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-cyan-500 text-black rounded-full ring-4 ring-white/30">
                {exp.icon}
              </span>

              {/* Card */}
              <div className="bg-black/70 backdrop-blur-md p-5 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-cyan-300">{exp.subtitle}</p>
                <p className="text-sm mt-2 leading-relaxed whitespace-pre-line">
                  {exp.description}
                </p>
                <span className="block text-gray-400 text-sm mt-3">
                  {exp.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
