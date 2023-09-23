import Nav from "../components/Nav";
import "../styles/Contact.css";
import XIcon from "../assets/svgs/x.svg";
import InstagramIcon from "../assets/svgs/instagram.svg";
import FacebookIcon from "../assets/svgs/facebook.svg";
import LinkedinIcon from "../assets/svgs/linkedin.svg";
import BackHomeIcon from "../assets/svgs/contact-back.webp";
import ActionButton from "../components/ActionButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollTriggerWrapper from "../components/ScrollTriggerWrapper";
import Modal from "../components/Modal";
import Star from "../components/Star";

export default function Contact() {
  // const [errorMessage, setErrorMessage] = useState(null);
  const [modalStatus, setModalStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    message: "",
    // Add other form fields here with their initial values
  });

  const [formErrors, setFormErrors] = useState({
    first_name: null,
    email: null,
    message: null,
    // Add other form fields here with their initial error messages
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Indicator");

    // Validation checks for each field
    const errors = {};

    // Check if the name is less than 3 characters
    if (formData.first_name?.length < 3) {
      errors.first_name = "Name must be at least 3 characters long";
    }

    const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailPattern.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (formData.message?.length < 5) {
      errors.message = "Message must be at least 5 characters long";
    }

    // If there are errors, update the formErrors state and prevent submission
    if (Object.keys(errors)?.length > 0) {
      setFormErrors(errors);
      console.log(errors);

      return;
    }
    setFormErrors(errors);
    // Reset errors after 5 seconds

    // If all checks pass, send the data to the backend
    const baseUrl = "https://backend.getlinked.ai";
    const contactEndpoint = `${baseUrl}/hackathon/contact-form`;

    try {
      console.log("Trying");
      setIsLoading(true);
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send all form data
      });

      if (response.status === 201) {
        // Successful submission
        setIsLoading(false);
        console.log("It worked");
        setModalStatus("Success");
      } else {
        setModalStatus("Error");
        // Submission failed

        setIsLoading(false);
        console.log("Submission failed");
      }
    } catch (error) {
      console.log("Catch some errors", error);
      setModalStatus("Error");
      setIsLoading(false);
    }

    // Clear form fields and errors after submission
    setFormData({
      first_name: "",
      email: "",
      message: "",
      // Clear other form fields as needed
    });
    setFormErrors({
      first_name: null,
      email: null,
      message: null,
      // Clear other form field errors as needed
    });
  };

  return (
    <>
      <div className="contact__header">
        <Nav />
        <div onClick={() => navigate("/")} className="back__home">
          <img src={BackHomeIcon} alt="" />
        </div>
      </div>
      <section>
        <div className="contact__section container">
          <ScrollTriggerWrapper className="animated">
            <div className="contact__text">
              <h2 className="heading-2  primary__col_util">Get in Touch</h2>
              <p>
                <strong>
                  Contact <br />
                  Information
                </strong>
              </p>
              <ul>
                <li>27,Alara Street </li>
                <li>Yaba 100012 </li>
                <li>Lagos State</li>
              </ul>
              <p>
                Call Us : <strong>07067981819</strong>
              </p>
              <p>
                We are open from <strong>Monday - Friday</strong> <br /> 08:00am
                - 05:00pm
              </p>
              <div className="contact__socials">
                <p className="primary__col_util">Share on</p>
                <ul>
                  <a
                    href="https://www.instagram.com/getlinked.ai/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={InstagramIcon} alt="IG Icon" />
                  </a>

                  <a
                    href="https://twitter.com/getLinkedai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={XIcon} alt="X Icon" />
                  </a>

                  <a
                    href="https://web.facebook.com/getLinkedai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={FacebookIcon} alt="Facebook Icon" />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/getlinked-ai/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={LinkedinIcon} alt="LinkedIn Icon" />
                  </a>
                </ul>
              </div>
            </div>
          </ScrollTriggerWrapper>

          <div className="contact__form-area">
            <ScrollTriggerWrapper direction="right">
              <div className="contact__container">
                <h2 className="heading--title  primary__col_util">
                  <p>Questions or need assitance?</p>
                  <p>Let us know about it!</p>
                </h2>
                <p className="mobile__message">
                  Email us below for any questions related to our event
                </p>
                <form className="contact__form" onSubmit={handleSubmit}>
                  <label htmlFor="Name">
                    <input
                      type="text"
                      placeholder="First name"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                      name="first_name"
                    />
                    {formErrors.first_name && (
                      <p className="error__text ">{formErrors.first_name}</p>
                    )}
                  </label>
                  <label htmlFor="Email">
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      name="email"
                    />
                    {formErrors.email && (
                      <p className="error__text ">{formErrors.email}</p>
                    )}
                  </label>
                  <label htmlFor="Message">
                    <textarea
                      name="message"
                      id="Message"
                      cols="30"
                      rows="7"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    {formErrors.message && (
                      <p className="error__text ">{formErrors.message}</p>
                    )}
                  </label>
                  <ActionButton BtnContent={"Submit"} type="submit" />
                  {isLoading && (
                    <p style={{ textAlign: "center" }}>Loading...</p>
                  )}
                  <div className="contact__socials form__socials">
                    <p className="primary__col_util">Share on</p>
                    <ul>
                      <a
                        href="https://www.instagram.com/getlinked.ai/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={InstagramIcon} alt="IG Icon" />
                      </a>

                      <a
                        href="https://twitter.com/getLinkedai"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={XIcon} alt="X Icon" />
                      </a>

                      <a
                        href="https://web.facebook.com/getLinkedai"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={FacebookIcon} alt="Facebook Icon" />
                      </a>

                      <a
                        href="https://www.linkedin.com/company/getlinked-ai/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={LinkedinIcon} alt="LinkedIn Icon" />
                      </a>
                    </ul>
                  </div>
                </form>
              </div>
            </ScrollTriggerWrapper>
          </div>
          <Star color="purple" top={15} left={5} />
          <Star color="purple" top={70} left={30} />
          <Star color="gray" top={20} left={70} />
          <Star color="white" top={80} left={80} />
        </div>
      </section>

      {modalStatus && (
        <Modal status={modalStatus} setModalStatus={setModalStatus} />
      )}
    </>
  );
}
