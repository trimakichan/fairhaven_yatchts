import AnchorIcon from "../components/AnchorIcon/AnchorIcon";
import { motion } from "framer-motion";
import { useFadeInYAxisAnimSettings } from "../animations/animationHooks";
import { Link } from "react-router-dom";
import TeamMember from "../components/TeamMember/TeamMember";
import { brokersInfo } from "../data/brokersInfo";

const About = () => {
  const fadeInAnimSettings = useFadeInYAxisAnimSettings();
  return (
    <main className="about">
      <article className="about__hero">
        <div className="heroBgStyle">
          <motion.div {...fadeInAnimSettings}>
            <h1>Connecting Yacht Enthusiasts</h1>
            <div className="heroParagraph">
              We are a yacht brokerage firm dedicated to helping yacht owners
              and buyers navigate the seas of transactions.
            </div>
          </motion.div>
        </div>
      </article>

      <div className="wrapper">
        <article className="about__team">
          <motion.div className="team-title" {...fadeInAnimSettings}>
            <p>Experienced</p>
            <h2>Meet Our Team</h2>
            <div className="subtitle">
              Get to know the experts behind our yacht brokerage firm.
            </div>
            <AnchorIcon />
          </motion.div>

          <div className="team-members">
            {brokersInfo.map((memeber, index) => (
              <TeamMember key={index} memberInfo={memeber} />
            ))}
          </div>
        </article>
      </div>

      <article className="about__section1">
        <div className="wrapper sectionLayout">
          <motion.div
            className="sectionContentLayout about-content"
            {...fadeInAnimSettings}
          >
            <h2>Our Firm's History and Achievements</h2>
            <p>
              With over 20 years of experience, our yacht brokerage firm has
              established itself as a leader in the industry. We have
              successfully facilitated countless smooth transactions for yacht
              owners and buyers, earning a reputation for excellence and trust.
            </p>

            <Link to="/contact">
              <p>
                <span className="linkText">Contact Us&nbsp; &gt;</span>
              </p>
            </Link>
          </motion.div>

          <img src="/about2.jpg" alt="A boat image" className="imageCover" />
        </div>
      </article>
    </main>
  );
};

export default About;
