import AnchorIcon from "../components/AnchorIcon/AnchorIcon";
import { motion } from "framer-motion";
import { useFadeInYAxisAnimSettings } from "../animations/animationHooks";
import { Link } from "react-router-dom";
import TeamMember from "../components/TeamMember/TeamMember";
import { brokersInfo } from "../data/brokersInfo";
import { useContext } from "react";
import { Contexts } from "../contexts/contexts";

import { MdSmartphone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";


const About = () => {
  const fadeInAnimSettings = useFadeInYAxisAnimSettings();
  const { memberMain } = useContext(Contexts);

  return (
    <main className="about">
      <header className="about__hero">
        <div className="heroBgStyle">
          <motion.div {...fadeInAnimSettings}>
            <h1>Connecting Yacht Enthusiasts</h1>
            <div className="heroParagraph">
              We are a yacht brokerage firm dedicated to helping yacht owners
              and buyers navigate the seas of transactions.
            </div>
          </motion.div>
        </div>
      </header>

      <div className="wrapper">
        <article className="about__team">
          <motion.div className="team-title" {...fadeInAnimSettings}>
            <p>Experienced</p>
            <h2 className="about-bg-text">Meet Our Team</h2>
            <div className="subtitle">
              Get to know the experts behind our yacht brokerage firm.
            </div>
            <AnchorIcon />
          </motion.div>

          <div className="team-members-info">
            <div className="members">
              {brokersInfo.map((member) => (
                <TeamMember key={member.id} memberInfo={member} />
              ))}
            </div>

            <div className="member-details" id="member-info">
              {/* <TeamMember memberInfo={memberMain} /> */}

              <figure className="member-image">
                <img
                  src={memberMain.image}
                  alt={`${memberMain.firstName} ${memberMain.lastName} profile image`}
                  loading="lazy"
                />
                <figcaption>
                  <div className="textLLora bold">
                    {memberMain.firstName} {memberMain.lastName}{" "}
                    {memberMain.isOwner ? "| Owner" : ""}
                  </div>
                </figcaption>
              </figure>

              <div className="member-content">
                <div className="contact-info textMJost">
                  <>
                    {memberMain.cell && (
                      <div className="info-align">
                        <MdSmartphone
                          className="iconStyles"
                          aria-label="Phone Icon"
                        />
                        <a
                          href={`tel:${memberMain.cell}`}
                          aria-label={`Call ${memberMain.firstName} ${memberMain.lastName} at +${memberMain.cell}`}
                        >
                          +{memberMain.cell}
                        </a>
                      </div>
                    )}
                  </>
                  <div>
                    {" "}
                    {memberMain.email && (
                      <div className="info-align">
                        <TfiEmail
                          className="iconStyles"
                          aria-label="Email Icon"
                        />{" "}
                        <a
                          href={`mailto:${memberMain.email}`}
                          aria-label={`Email ${memberMain.firstName} ${memberMain.lastName}`}
                        >
                          {" "}
                          {memberMain.email}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                <div className="description textMRoboto">
                  {memberMain.description}
                </div>
              </div>
            </div>
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

          <img
            src="/about2.webp"
            alt="A closeup of half of the boat"
            className="imageCover"
            loading="lazy"
          />
        </div>
      </article>
    </main>
  );
};

export default About;
