import { motion } from "framer-motion";
import { useFadeInYAxisAnimSettings } from "../animations/animationHooks";
import AnchorIcon from "../components/AnchorIcon/AnchorIcon";
import ContactForm from "../components/ContactForm/ContactForm";


const SellYachts = () => {
  const fadeInAnimSettings = useFadeInYAxisAnimSettings();
  return (
    <main className="sellYachts">
      <article className="sellYachts__hero">
        <div className=" sellYachts-hero-background">
          <motion.h1 {...fadeInAnimSettings}>Sell Your Yacht</motion.h1>
          <motion.div className="heroParagraph" {...fadeInAnimSettings}>
            Unlock the potential of your yacht. Our experienced team will guide
            you through the process, ensuring a smooth and profitable sale.
          </motion.div>
        </div>
      </article>

      <div className="wrapper">
        <article className="sellYachts__intro">
          <motion.h1 className="sellYachts-intro-title" {...fadeInAnimSettings}>
            Sell Your Yacht with Ease and Confidence
          </motion.h1>
          <motion.div
            className="sellYachts-intro-description subtitle"
            {...fadeInAnimSettings}
          >
            At our brokerage firm, we understand the importance of selling your
            yacht quickly and efficiently. With our expertise and network of
            potential buyers, we can help you navigate the selling process with
            ease. Our team of experienced professionals will handle all the
            details, from marketing your yacht to negotiating the best price.
            Trust us to make your yacht selling experience seamless and
            stress-free.
          </motion.div>
        </article>
      </div>

      <article className="sellYachts__section1">
        <div className="wrapper sectionLayout">
          <img
            src="/sellYachst2.jpg"
            alt="marina"
            className="imageCover imageOrder"
          />
          <motion.div
            className="sectionContentLayout section2-content"
            {...fadeInAnimSettings}
          >
            <h2>Why Choose Our Yacht Brokerage Firm?</h2>
            <p>
              Our yacht brokerage firm offers a seamless selling experience,
              providing expert guidance and personalized service to ensure a
              successful transaction. With our extensive network and industry
              knowledge, we connect yacht owners with qualified buyers,
              maximizing the value of their vessel.
            </p>
          </motion.div>
        </div>
      </article>

      <article className="sellYachts__contact">
        <div className="wrapper">
          <motion.div className="sellYachts-info-title" {...fadeInAnimSettings}>
            <h2>Contact Us</h2>
            <p>For any inquiries, please feel free to reach out to us.</p>
            <AnchorIcon />
          </motion.div>

          <div className="sellYachts-form-container">
        <ContactForm />
           
            
          </div>
        </div>
      </article>
    </main>
  );
};

export default SellYachts;
