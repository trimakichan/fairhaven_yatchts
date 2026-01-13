import { useState } from "react";
import "./contactForm.scss";
import validator from "validator";

import { IoInformationCircleSharp } from "react-icons/io5";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isTouched, setIsTouched] = useState({ email: false, phone: false });

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(validator.isEmail(value));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    setIsPhoneValid(validator.isMobilePhone(value));
  };

  const handleBlur = (field) => {
    setIsTouched((prev) => ({ ...prev, [field]: true }));
  };

  const isFormValid = isEmailValid && (phone === "" || isPhoneValid);

  return (
    //Using Web3Forms for sending messages.  https://web3forms.com/#start
    <form
      className="form"
      action="https://api.web3forms.com/submit"
      method="POST"
    >
      <input
        type="hidden"
        name="access_key"
        value="d910ff7c-a314-4732-ad91-cd7e538cdffd"
      />

      <div className="form-field w50">
        <label htmlFor="fName">
          <div className="textMJost">First Name *</div>
        </label>
        <input
          type="text"
          name="fName"
          id="fName"
          placeholder="First Name"
          required
        />
      </div>
      <div className="form-field w50">
        <label htmlFor="lName">
          <div className="textMJost">Last Name *</div>
        </label>
        <input
          type="text"
          name="lName"
          id="lName"
          placeholder="Last Name"
          required
        />
      </div>

      <div className="form-field w50">
        <label htmlFor="email">
          <div className="textMJost">Email *</div>
        </label>
        <input
          className={!isEmailValid && isTouched.email ? "invalid" : ""}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          onBlur={() => handleBlur("email")}
          required
        />
        {!isEmailValid && isTouched.email && (
          <div className="textSRoboto info-error">
            <IoInformationCircleSharp />
            Please provide a valid email address
          </div>
        )}
      </div>

      <div className="form-field w50">
        <label htmlFor="phone">
          <div className="textMJost">Phone Number</div>
        </label>
        <input
          className={!isPhoneValid && isTouched.phone ? "invalid" : ""}
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone Number"
          value={phone}
          onChange={handlePhoneChange}
          onBlur={() => handleBlur("phone")}
        />
        {!isPhoneValid && isTouched.phone && (
          <div className="textSRoboto info-error">
            <IoInformationCircleSharp />
            Please provide a valid phone number
          </div>
        )}
      </div>

      <div className="form-field w100">
        <label htmlFor="message">
          <div className="textMJost">Message *</div>
        </label>
        <textarea
          type="text"
          name="message"
          id="message"
          placeholder="Enter your message"
          required
        />
      </div>

      <div className="button-container w100">
        <button
          type="submit"
          disabled={!isFormValid}
          className={!isFormValid ? "disable-button" : "active-button"}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
