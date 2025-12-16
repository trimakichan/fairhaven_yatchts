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
  const emailErrorId = "email-error";
  const phoneErrorId = "phone-error";

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
          <span className="textMJost">First Name *</span>
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
          <span className="textMJost">Last Name *</span>
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
          <span className="textMJost">Email *</span>
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
          aria-invalid={!isEmailValid && isTouched.email}
          aria-describedby={!isEmailValid && isTouched.email ? emailErrorId : undefined}
          required
        />
        {!isEmailValid && isTouched.email && (
          <p className="textSRoboto info-error" role="alert" id={emailErrorId}>
            <IoInformationCircleSharp />
            Please provide a valid email address
          </p>
        )}
      </div>

      <div className="form-field w50">
        <label htmlFor="phone">
          <span className="textMJost">Phone Number</span>
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
          aria-invalid={!isPhoneValid && isTouched.phone}
          aria-describedby={!isPhoneValid && isTouched.phone ? phoneErrorId : undefined}
        />
        {!isPhoneValid && isTouched.phone && (
          <p className="textSRoboto info-error" role="alert" id={phoneErrorId}>
            <IoInformationCircleSharp />
            Please provide a valid phone number
          </p>
        )}
      </div>

      <div className="form-field w100">
        <label htmlFor="message">
          <span className="textMJost">Message *</span>
        </label>
        <textarea
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
