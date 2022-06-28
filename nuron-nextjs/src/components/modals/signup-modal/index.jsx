import PropTypes from "prop-types";
import MailchimpForm from "@containers/mailchimp-form";
import Modal from "react-bootstrap/Modal";

const SignupModal = ({ show, handleModal }) => (
    <Modal className="rn-popup-modal" show={show} onHide={handleModal} centered>
        {show && (
            <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleModal}
            >
                <i className="feather-x" />
            </button>
        )}
        <MailchimpForm />
    </Modal>
);

SignupModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
};
export default SignupModal;
