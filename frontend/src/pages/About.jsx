import "./About.css";
import Slider from '../components/features/Shopping/Slider';
import { company as images } from "../assets/company";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import logo from '../assets/techligence.jpg';
import { Link } from "react-router-dom";

const About = () => {
  const testimonials = [
    {
      quote: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      name: "Matt Brandon",
      title: "Freelancer",
      image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720656000&semt=ais_user",
    },
    {
      quote: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      name: "John Larson",
      title: "Entrepreneur",
      image: "https://imgs.search.brave.com/C8oifWu1H8q5eCUciaobonRbHH1ewQrGYzKvceK9268/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC1jaGVl/cmZ1bC1jYXVjYXNp/YW4tbWFuXzUzODc2/LTEzNDQwLmpwZz9z/aXplPTYyNiZleHQ9/anBn",
    },
    {
      quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      name: "Saul Goodman",
      title: "Manager",
      image: "https://imgs.search.brave.com/BaHCQDR9EvfFHmgKtL-EjAr00jQt91ALpiZyjHHhwDA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2dhbGxl/cnkvUGVuY2lsLXNr/ZXRjaC1naXJsLWZh/Y2UtcG9ydHJhaXQt/cGljdHVyZS1nZW5l/cmF0ZWQtYnktRm90/b3ItQUktZmFjZS1n/ZW5lcmF0b3IuanBn",
    },
    {
      quote: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      name: "Matt Brandon",
      title: "Web Developer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgmx-1nKlOeEobj5K_3yuGDcH2Stw8noNgA&s",
    },
    {
      quote: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      name: "John Larson",
      title: "App Developer",
      image: "https://imgs.search.brave.com/Rpo0pfPBmC0j313FRvvY-lBKiSyK44nEkg4gIcqrgLY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jYXVzYWwteW91/bmctZ2lybC13aXRo/LWRldGFpbGVkLXNr/aW4tdGV4dHVyZWQt/ZmFjZV8xMDAwODIz/LTE4MjI1NS5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw",
    },
    {
      quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      name: "Saul Goodman",
      title: "CEO & Founder",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgmx-1nKlOeEobj5K_3yuGDcH2Stw8noNgA&s",
    },
  ];

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '20px 0',
    padding: '0 20px',
  };

  const halfWidthStyle = {
    flex: '1 1 50%',
    padding: '10px',
  };

  const centerTextStyle = {
    textAlign: 'center',
    padding: '0 20px',
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={halfWidthStyle}>
          <h1>We are Techligence</h1>
          <h3>
            We design, develop, test, maintain and grow high-performance web,
            mobile and wearable applications. We believe in the power of
            technology to enhance quality of life.
          </h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iure
            soluta doloribus aliquid quam minus ratione, in pariatur saepe
            explicabo vel accusantium temporibus repellat assumenda rem magnam
            excepturi expedita neque! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Enim possimus quia vel praesentium est quas.
          </p>
          <Link to='/'>
            <button className='button'>Checkout </button>
          </Link>
        </div>
        <div style={halfWidthStyle}>
          <img
            src={logo}
            alt=""
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
      <hr />
      <div style={containerStyle}>
        <div style={halfWidthStyle}>
          <img
            src="https://cdn-finae.nitrocdn.com/hRSwUytBAMOZcYjAQdJyIOUUHAzcrQlS/assets/images/optimized/rev-2f90748/ebpearls.com.au/wp-content/uploads/2023/07/Empiricism-Transparency-Inspection-and-Adaption.png"
            alt=""
            style={{ width: '100%', height: '300px',objectFit:'contain' }}
          />
        </div>
        <div style={halfWidthStyle}>
          <h2 style={{color:'#F37826'}}>Empiricism at the heart</h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero cum
            possimus deserunt nam vero? Odio? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Possimus iure, fugit ipsa nostrum
            repellat atque. Officia minus nostrum quas. Nam!
          </h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            maiores dolores accusantium, distinctio incidunt fugit possimus
            animi pariatur eius rem.
          </p>
        </div>
      </div>
      <hr />
      <h1 style={{ textAlign: "center" ,marginBottom:'10px'}}>Our Shared Beliefs</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          margin: '20px 0',
          padding: '0 20px',
          gap:'10px'
        }}
      >
        <div style={{ flex: '1 1 30%', padding: '10px', textAlign: 'center',backgroundColor:'#0A5688',color:'white' }}>
          <img
            src="https://cdn-finae.nitrocdn.com/hRSwUytBAMOZcYjAQdJyIOUUHAzcrQlS/assets/images/optimized/rev-2f90748/ebpearls.com.au/wp-content/uploads/2023/05/dazzle-woman-designing-a-website-1.png"
            alt=""
            style={{ width: '100%', height: '400px' }}
          />
          <h2>Passion for Best Quality</h2>
        </div>

        <div style={{ flex: '1 1 30%', padding: '10px', textAlign: 'center' ,backgroundColor:'#0A5688',color:'white'}}>
          <img
            src="https://cdn-finae.nitrocdn.com/hRSwUytBAMOZcYjAQdJyIOUUHAzcrQlS/assets/images/optimized/rev-2f90748/ebpearls.com.au/wp-content/uploads/2023/05/twinkle-online-education-1.png"
            alt=""
            style={{ width: '100%', height: '400px' }}
          />
          <h2>Continuous Learning</h2>
        </div>

        <div style={{ flex: '1 1 30%', padding: '10px', textAlign: 'center' ,backgroundColor:'#0A5688',color:'white'}}>
          <img
            src="https://cdn-finae.nitrocdn.com/hRSwUytBAMOZcYjAQdJyIOUUHAzcrQlS/assets/images/optimized/rev-2f90748/ebpearls.com.au/wp-content/uploads/2023/05/dazzle-idea-1.png"
            alt=""
            style={{ width: '100%', height: '400px' }}
          />
          <h2>Belief in innovation</h2>
        </div>
      </div>
      <hr />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Our Vision and Mission</h1>
      <div style={containerStyle}>
        <div style={halfWidthStyle}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faGraduationCap} size="3x" />
            <div style={{ marginLeft: '10px' }}>
              <h3><strong>Vision</strong></h3>
              <p>
                To establish global leadership in the field of Technology and
                develop competent human resources for providing service to
                society. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Incidunt, est!
              </p>
            </div>
          </div>
        </div>
        <div style={halfWidthStyle}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faFireFlameCurved} size="3x" />
            <div style={{ marginLeft: '10px' }}>
              <h3><strong>Mission</strong></h3>
              <p>
                To establish global leadership in the field of Technology and
                develop competent human resources for providing service to
                society. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Sequi, animi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div style={containerStyle}>
        <div style={halfWidthStyle}>
          <h1>Director's Message</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam quae
            soluta, Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Itaque, obcaecati dolor. Sequi eius doloremque ex molestiae libero
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            rerum nam aspernatur aliquid tenetur quam nihil! Molestias placeat
            in vel? numquam ipsam ullam! molestiae at reprehenderit repellat
            dolorum quasi hic porro quos officia facilis labore, id perspiciatis
            delectus omnis ea vero eum iure. A esse quas accusamus reprehenderit
            impedit repudiandae maxime cumque.
          </p>
        </div>
        <div style={halfWidthStyle}>
          <img
            src="https://imgs.search.brave.com/TthZQyuXk8GEeYcL1xShZBbHQr9XH6mbQ_0zd2pfVbk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzUzL1Bld2RpZXBp/ZV9oZWFkX3Nob3Qu/anBn"
            alt=""
            style={{ width: '100%', height: '500px',objectFit:'contain' }}
          />
        </div>
      </div>
      <hr />
      <motion.section
        className="team-section"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={centerTextStyle}
      >
        <h2 className="section-title">OUR TEAM</h2>
        <p className="section-subtitle">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            margin: '20px 0',
          }}
        >
          {testimonials.map((member, index) => (
            <motion.div
              key={index}
              className="team-member"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                flex: '1 1 200px',
                margin: '10px',
                textAlign: 'center',
              }}
            >
              <img
                src={member.image}
                alt={`${member.name}`}
                className="team-member-img"
                style={{ width: '150px', height: '150px',borderRadius:"50%",objectFit:'cover'}}
              />
              <div className="team-member-info">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-position">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <style jsx>{`
        @media (min-width: 1024px) {
          .about-container {
            flex-direction: row;
            padding: 20px;
          }
          .about-container > div {
            flex: 1 1 50%;
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default About;
