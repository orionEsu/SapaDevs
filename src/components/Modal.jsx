/* eslint-disable react/prop-types */
import CancelIcon from "../assets/svgs/xmark.svg";
import SuccessIcon from "../assets/svgs/success.webp";
import ActionButton from "./ActionButton";
import Star from "./Star";

export default function Modal({ status, setModalStatus }) {
  return (
    <div className="modal__component">
      <div className="modal__content">
        {status === "error" ? (
          <>
            <div className="error">
              <img src={CancelIcon} alt="" />
              {/* */}
            </div>
            <h2>
              Unfortunately, an error occured.
              <br />
              Please try again
            </h2>
          </>
        ) : (
          <div style={{ position: "relative" }}>
            <img src={SuccessIcon} alt="" />
            <h2>
              Congratulations, <br />
              You&apos;ve successfully registered
            </h2>
            <p>Yes, it was easy and you did it!</p>
            <p>Check your mail for the next step</p>
            <Star color="gray" top={80} left={-20} />
            <Star color="purple" top={90} left={90} />
            <Star color="purple" top={10} left={90} />
          </div>
        )}

        <ActionButton
          BtnContent={"Go back"}
          onFunc={() => setModalStatus(false)}
        />
      </div>
    </div>
  );
}
