/* eslint-disable react/prop-types */
export default function ActionButton({ BtnContent, onFunc }) {
  return (
    <button onClick={onFunc} className="action__button btn-more">
      {BtnContent}
    </button>
  );
}
