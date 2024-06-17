import "./contactForm.scss";

const ContactForm = () => {
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
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
      </div>

      <div className="form-field w50">
        <label htmlFor="phone">
          <div className="textMJost">Phone Number</div>
        </label>
        <input
          type="email"
          name="phone"
          id="phone"
          placeholder="Phone Number"
        />
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
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
