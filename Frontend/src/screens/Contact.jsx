import { motion } from "framer-motion";
import { useFadeInYAxisAnimSettings } from "../animations/animationHooks";
import AnchorIcon from "../components/AnchorIcon/AnchorIcon";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact = () => {
  const fadeInAnimSettings = useFadeInYAxisAnimSettings();

  return (
    <main className="contact">
      <section className="contact__hero">
        <div className="heroTitleBgStyle">
          <motion.h1 {...fadeInAnimSettings}>Contact Us</motion.h1>
          <motion.p className="heroParagraph" {...fadeInAnimSettings}>
            We&apos;re here to assist you. Reach out to us for any inquiries or
            assistance.
          </motion.p>
        </div>
      </section>

      <div className="wrapper">
        <section className="contact__info">
          <motion.div className="contact-info-title" {...fadeInAnimSettings}>
            <h2>Contact Information</h2>
            <p>For any inquiries, please feel free to reach out to us.</p>
          </motion.div>

          <div className="contact-info-container">
            <div className="content-text-container textMJost">
              <div className="contact-email ">
                <MdOutlineEmail className="iconStyles" />
                <h3>Email</h3>
                <p>Send us an email</p>
                <a href="mailto:fairhavenyachtsales@gmail.com">
                  fairhavenyachtsales@gmail.com
                </a>
              </div>

              <div className="contact-phone">
                <FiPhone className="iconStyles" />
                <h3>Phone</h3>
                <p>Call us for assistance</p>
                <a href="tel:1-206-940-9088">+1-206-940-9088</a>
              </div>

              <div className="contact-location">
                <GrLocation className="iconStyles" />
                <h3>Location</h3>

                <div>
                  <h4>La Conner Office</h4>
                  <address>
                    PO Box 1531 <br />
                    105 N First Street <br />
                    La Conner, WA 98257 USA
                  </address>
                  <a
                    href="https://maps.app.goo.gl/dAKMZjWnhZtbp7289"
                    target="_blank"
                  >
                    <span className="linkText hoverEffectColor">
                      Get Direction&nbsp; &gt;
                    </span>
                  </a>
                </div>

                <div>
                  <h4>Kirkland Office</h4>
                  <address>
                    5400 Carillon Point <br />
                    Kirkland, WA 98033 USA
                  </address>
                </div>
              </div>
            </div>

            <div className="content-map-container">
              <div className="textMJost bold">La Connner Office</div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2649.3283011878007!2d-122.49900062316863!3d48.392638133369445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548565ef16d00591%3A0x860e16b7cd005a72!2sFairhaven%20Yacht%20Sales!5e0!3m2!1sen!2sus!4v1718728986790!5m2!1sen!2sus"
                className="laConnerMap"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="La Conner Office"
              ></iframe>
            </div>
          </div>
        </section>
      </div>

      <section className="contact__form">
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
      </section>
    </main>
  );
};

export default Contact;
