import { motion } from "framer-motion";
import { useFadeInYAxisAnimSettings } from "../animations/animationHooks"
import AnchorIcon from "../components/AnchorIcon/AnchorIcon";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact = () => {
  const fadeInAnimSettings = useFadeInYAxisAnimSettings();

  return (
    <main className="contact">
      <article className="contact__hero">
        <div className="heroBgStyle">
          <motion.h1 {...fadeInAnimSettings}>Contact Us</motion.h1>
          <motion.div className="heroParagraph" {...fadeInAnimSettings}>
            We&apos;re here to assist you. Reach out to us for any inquiries or
            assistance.
          </motion.div>
        </div>
      </article>

      <div className="wrapper">
        <article className="contact__info">
          <motion.div className="contact-info-title" {...fadeInAnimSettings}>
            <h2>Contact Information</h2>
            <p>For any inquiries, please feel free to reach out to us.</p>
          </motion.div>

          <div className="contact-info-container">
            <div className="content-text-container textMJost">
              <div className="contact-email ">
                <MdOutlineEmail className="iconStyles" />
                <div className="bold">Email</div>
                <div>Send us an email</div>
                <a href="mailto:fairhavenyachtsales@gmail.com">
                  fairhavenyachtsales@gmail.com
                </a>
              </div>

              <div className="contact-phone">
                <FiPhone className="iconStyles" />
                <div className="bold">Phone</div>
                <div>Call us for assistance</div>
                <a href="tel:1-206-940-9088">+1-206-940-9088</a>
              </div>

              <div className="contact-location">
                <GrLocation className="iconStyles" />
                <div className="bold">Location</div>

                <div>
                  <div>La Conner Office</div>
                  <div>
                    PO Box 1531 <br />
                    105 N First Street <br />
                    La Conner, WA 98257 USA
                  </div>
                  <a
                    href="https://maps.app.goo.gl/e25YNJMbJQ2vSAE37"
                    target="_blank"
                  >
                    <div className="linkText hoverEffectColor">
                      Get Direction&nbsp; &gt;
                    </div>
                  </a>
                </div>

                <div>
                  <div>Kirkland Office</div>
                  <div>
                    5400 Carillon Point <br />
                    Kirkland, WA 98033 USA
                  </div>
                </div>
              </div>
            </div>

            <div className="content-map-container">
              <div className="textMJost bold">La Connner Office</div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2649.3647656227618!2d-122.50057561577943!3d48.39193779720139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548565a38b1c9f1f%3A0xc56e4674e6d989ab!2s105%20N%201st%20St%2C%20La%20Conner%2C%20WA%2098257!5e0!3m2!1sja!2sus!4v1715797290713!5m2!1sja!2sus"
                className="laConnerMap"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="La Conner Office"
              ></iframe>
            </div>
          </div>
        </article>
      </div>

      <div className="contact__form">
        <div className="wrapper">
          <motion.div className="form-title" {...fadeInAnimSettings}>
            <h2>Get in Touch</h2>
            <p>Have a question or need assistance? We&apos;re here to help.</p>
            <AnchorIcon />
          </motion.div>
          <div className="contact-form-container">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
