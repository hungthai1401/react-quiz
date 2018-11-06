import React from "react";
import PropTypes from "prop-types";

const Modal = ({ modal: { state, praise } }) => {
  return (
    <div className={"correct-modal" + (state === "show" ? " modal-enter" : "")}>
      <div className="praise">{praise}</div>
    </div>
  );
};

Modal.propTypes = {
  modal: PropTypes.shape({
    state: PropTypes.string.isRequired,
    praise: PropTypes.string.isRequired
  })
};

export default Modal;
