import "./About.css";
import Slider from '../components/features/Shopping/Slider'
import { company as images } from "../assets/company";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap   , faFireFlameCurved} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import logo from '../assets/techligence.jpg';
import { Link } from "react-router-dom";

const About = () => {
  const testimonials = [
    {
      quote:
        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      name: "Matt Brandon",
      title: "Freelancer",
      image:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720656000&semt=ais_user",
    },
    {
      quote:
        "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      name: "John Larson",
      title: "Entrepreneur",
      image:
        "https://imgs.search.brave.com/sjqUjZcq4hqU39YJBPj56ntcsR0pf0xGh53CiJ05uXw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NDI1NzAxMDYtYzNk/NGFlYjVjMTljP2Zt/PWpwZyZ3PTMwMDAm/YXV0bz1mb3JtYXQm/Zml0PWNyb3AmcT02/MCZpeGxpYj1yYi00/LjAuMyZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1U/RjhmR1poWTJWOFpX/NThNSHg4TUh4OGZE/QT0",
    },
    {
      quote:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      name: "Saul Goodman",
      title: "Manager",
      image:
        "https://imgs.search.brave.com/Rpo0pfPBmC0j313FRvvY-lBKiSyK44nEkg4gIcqrgLY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jYXVzYWwteW91/bmctZ2lybC13aXRo/LWRldGFpbGVkLXNr/aW4tdGV4dHVyZWQt/ZmFjZV8xMDAwODIz/LTE4MjI1NS5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw",
    },
    {
      quote:
        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      name: "Matt Brandon",
      title: "Web Developer",
      image:
        "https://imgs.search.brave.com/iP73H0MuYJPPvKIfJw5ulhxmzQPCx8tn4vpaz_-Gows/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wb3J0cmFpdC1z/ZXJpb3VzLWhhbmRz/b21lLW1hbi1sb29r/aW5nLWNhbWVyYS1h/Z2FpbnN0LXdoaXRl/LWJhY2tncm91bmRf/MjMtMjE0ODIxMzQx/MC5qcGc_c2l6ZT02/MjYmZXh0PWpwZw",
    },
    {
      quote:
        "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      name: "John Larson",
      title: "App Developer",
      image:
        "https://imgs.search.brave.com/0_QtziRMntuKAyP6LOT4OXoCL7GwQMcbQVZLaYxgA98/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/bGVhc2VkLXNtaWxp/bmctbWFuLXdpdGgt/YmVhcmQtbG9va2lu/Zy1jYW1lcmFfMTc2/NDIwLTE4MDQwLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn",
    },
    {
      quote:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      name: "Saul Goodman",
      title: "CEO & Founder",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgmx-1nKlOeEobj5K_3yuGDcH2Stw8noNgA&s",
    },
  ];

  return (
    <>
      <div className="container-1">
        <div className="left">
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
        <div className="right">
          <img
            src={logo}
            alt=""
          />
        </div>
      </div>
      <hr />
      <div className="container-3">
        <div className="left">
          <img
            src="https://cdn-finae.nitrocdn.com/hRSwUytBAMOZcYjAQdJyIOUUHAzcrQlS/assets/images/optimized/rev-2f90748/ebpearls.com.au/wp-content/uploads/2023/07/Empiricism-Transparency-Inspection-and-Adaption.png"
            alt=""
          />
        </div>
        <div className="right">
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
      <h1 style={{ textAlign: "center" ,marginBottom:'10px'}}>our shared beliefs</h1>
      <div className="container-4">
        <div className="image-wrap">
          <img
            src="https://cdn-finae.nitrocdn.com/hRSwUytBAMOZcYjAQdJyIOUUHAzcrQlS/assets/images/optimized/rev-2f90748/ebpearls.com.au/wp-content/uploads/2023/05/dazzle-woman-designing-a-website-1.png"
            alt=""
          />
          <span>Passion for Best Quality</span>
        </div>

        <div className="image-wrap">
          <img
            src="https://cdn-finae.nitrocdn.com/hRSwUytBAMOZcYjAQdJyIOUUHAzcrQlS/assets/images/optimized/rev-2f90748/ebpearls.com.au/wp-content/uploads/2023/05/twinkle-online-education-1.png"
            alt=""
          />
          <span>Continuous Learning</span>
        </div>

        <div className="image-wrap">
          <img
            src="https://cdn-finae.nitrocdn.com/hRSwUytBAMOZcYjAQdJyIOUUHAzcrQlS/assets/images/optimized/rev-2f90748/ebpearls.com.au/wp-content/uploads/2023/05/dazzle-idea-1.png"
            alt=""
          />
          <span>Belief in innovation</span>
        </div>
      </div>
      <hr />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Our vision and Mission
      </h1>
      <div className="container-5">
        <div className="vision">
          <div className="vision-wrap">
            <FontAwesomeIcon icon={faGraduationCap} size="3x" />
            <div>
              <span>
                <h3><strong>Vision</strong></h3> 
              </span>
              <p>
                To establish global leadership in the field of Technology and
                develop competent human resources for providing service to
                society. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Incidunt, est!
              </p>
            </div>
          </div>
        </div>
        <div className="mission">
          <div className="mission-wrap">
            <FontAwesomeIcon icon={faFireFlameCurved} size="3x" />
            <div>
              <span>
               <h3><strong>Mission</strong></h3> 
              </span>
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
      <div className="container-6">
        <div className="left">
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
        <div className="right">
          <img
            src="https://imgs.search.brave.com/TthZQyuXk8GEeYcL1xShZBbHQr9XH6mbQ_0zd2pfVbk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzUzL1Bld2RpZXBp/ZV9oZWFkX3Nob3Qu/anBn"
            alt=""
          />
        </div>
      </div>

    
      
<hr />

     
      <motion.section
          className="team-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="section-title">OUR TEAM</h2>
          <p className="section-subtitle">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
          <div className="team-container">
            {testimonials.map((member, index) => (
              <motion.div
                key={index}
                className="team-member"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={member.image}
                  alt={`${member.name}`}
                  className="team-member-img"
                />
                <div className="team-member-info">
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-position">{member.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
    </>
  );
};

export default About;
