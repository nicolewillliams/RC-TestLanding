import PropTypes from "prop-types";
import clsx from "clsx";
import MailchimpForm from "@containers/mailchimp-form";

const SignupArea = ({ className, space }) => (
    <div className={clsx(space === 1 && "rn-section-gapTop", className)}>
        <div className="signup-page-container">
            <MailchimpForm />
        </div>
    </div>
);

SignupArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};

SignupArea.defaultProps = {
    space: 1,
};
export default SignupArea;
