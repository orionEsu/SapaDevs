import { useState } from "react";
import Nav from "../components/Nav";
import BackHomeIcon from "../assets/svgs/contact-back.webp";
import PartOfMoveImage from "../assets/svgs/Part-of-move.svg";
import ThreeDImage from "../assets/svgs/3d-graphic-designer.webp";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";
import ActionButton from "../components/ActionButton";
import ScrollTriggerWrapper from "../components/ScrollTriggerWrapper";
import Modal from "../components/Modal";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    team_name: "",
    phone_number: "",
    email: "",
    project_topic: "",
    category: 0,
    group_size: 1,
  });

  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle checkbox input separately
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked, // Set to true if checked, false if unchecked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value, // Just set the value directly without parsing
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation checks
    const errors = {};

    // Check if the name is less than 3 characters
    if (formData.team_name?.length < 3) {
      errors.team_name = "Name must be at least 3 characters long";
    }

    const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailPattern.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (formData.phone_number?.length < 11) {
      errors.phone_number = "Invalid Phone Number";
    }

    if (formData.project_topic?.length < 3) {
      errors.project_topic = "Topic must be at least 3 characters long";
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      console.log(errors);
      return;
    }

    console.log(formData);

    // Make a POST request to the backend API
    const baseUrl = "https://backend.getlinked.ai";
    const registrationEndpoint = `${baseUrl}/hackathon/registration`;

    try {
      setIsLoading(true);

      const response = await fetch(registrationEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        // Registration successful
        console.log("Sucess");
        setIsLoading(false);
        setModalStatus("Success");
      } else {
        // Registration failed
        setIsLoading(false);
        setModalStatus("Error");
        console.error("Registration failed");
      }
    } catch (error) {
      // Handle network or server errors
      console.error("Error occurred during registration:", error);
      setIsLoading(false);
      setModalStatus("Error");
    }

    // Clear form fields and errors after submission
    setFormData({
      team_name: "",
      phone_number: "",
      email: "",
      project_topic: "",
      category: "Default",
      group_size: 1,
    });
    setFormErrors({});
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
        <div className="container register-section">
          <ScrollTriggerWrapper startPer="100" className="register__image">
            <h2 className="heading-2 primary__col_util heading-hidden">
              Register
            </h2>
            <img
              className="three-d"
              src={ThreeDImage}
              alt="Graphic designer showing thumbs up"
            />
          </ScrollTriggerWrapper>
          <ScrollTriggerWrapper direction="right" startPer="120">
            <div className="register">
              <h2 className="heading-2 primary__col_util">Register</h2>
              <div>
                <p>Be part of this movement</p>
                <img src={PartOfMoveImage} alt="Part of move" />
              </div>

              <p className="register__form--title">CREATE YOUR ACCOUNT</p>
              <form onSubmit={handleSubmit} className="register__form">
                <div className="register__form--grid">
                  <div className="register-form__name">
                    <label htmlFor="name">Team&apos;s Name</label>
                    <input
                      className="register-form__input"
                      type="text"
                      name="team_name"
                      required
                      placeholder="Enter the name of your group"
                      value={formData.team_name}
                      onChange={handleChange}
                    />
                    {formErrors.team_name && (
                      <p className="error__text">{formErrors.team_name}</p>
                    )}
                  </div>

                  <div className="register-form__number">
                    <label htmlFor="number">Phone Number</label>
                    <input
                      className="register-form__input"
                      type="tel"
                      name="phone_number"
                      id="number"
                      required
                      placeholder="Enter your phone number"
                      value={formData.phone_number}
                      onChange={handleChange}
                    />
                    {formErrors.phone_number && (
                      <p className="error__text">{formErrors.phone_number}</p>
                    )}
                  </div>

                  <div className="register-form__mail">
                    <label htmlFor="mail">Email</label>
                    <input
                      className="register-form__input"
                      type="email"
                      name="email"
                      id="mail"
                      required
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {formErrors.email && (
                      <p className="error__text">{formErrors.email}</p>
                    )}
                  </div>

                  <div className="register-form__topic">
                    <label htmlFor="topic">Project Topic</label>
                    <input
                      className="register-form__input"
                      type="text"
                      name="project_topic"
                      id="topic"
                      placeholder="What is your group project topic"
                      required
                      value={formData.project_topic}
                      onChange={handleChange}
                    />
                    {formErrors.project_topic && (
                      <p className="error__text">{formErrors.project_topic}</p>
                    )}
                  </div>

                  <div className="register-form__category">
                    <label htmlFor="category">Category</label>
                    <select
                      name="category"
                      id="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option value="Default">Select your category</option>
                      <option value="UI/UX">UI/UX</option>
                      <option value="Cyber Security">Cyber Security</option>
                      <option value="Game Development">Game Development</option>
                    </select>
                    {formErrors.category && (
                      <p className="error__text">{formErrors.category}</p>
                    )}
                  </div>
                  <div className="register-form__group">
                    <label htmlFor="group">Group Size</label>
                    <select
                      name="group_size"
                      id="group"
                      value={formData.group_size}
                      onChange={handleChange}
                    >
                      <option value={0}>Select</option>
                      <option value={5}>0 to 5</option>
                      <option value={20}>6 to 20 </option>
                      <option value={50}>21 to 50</option>
                    </select>
                    {formErrors.group_size && (
                      <p className="error__text">{formErrors.group_size}</p>
                    )}
                  </div>
                </div>
                <p className="review">
                  Please review your registration details before submitting
                </p>
                <div className="register__form--check">
                  <input
                    type="checkbox"
                    name="privacy_policy_accepted"
                    value={false}
                    required
                    onChange={handleChange}
                  />

                  <label htmlFor="terms">
                    I agree with the event terms and conditions and privacy
                    policy
                  </label>
                </div>
                <ActionButton BtnContent={"Submit"} type="submit" />
                {isLoading && <p style={{ textAlign: "center" }}>Loading...</p>}
              </form>
            </div>
          </ScrollTriggerWrapper>
          {modalStatus && (
            <Modal status={modalStatus} setModalStatus={setModalStatus} />
          )}
        </div>
      </section>
    </>
  );
}
