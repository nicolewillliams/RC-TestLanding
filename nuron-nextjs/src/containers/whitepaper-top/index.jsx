import PropTypes from "prop-types";
import clsx from "clsx";
import AddressBox from "@components/address-box";

const WhitepaperTopArea = ({ space, className }) => (
    <div
        className={clsx(
            "rn-contact-top-area bg_color--5",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-5">
                <div
                    className="col-lg-12"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="800"
                >
                    <div className="section-title mb--30 text-center">
                        <h2 className="title">Sign up for our Whitepaper!</h2>
                        <p className="description">
                            We'll be releasing the whitepaper for the project on
                            an invite-only basis. <br /> Subscribe to be
                            included and see the full details of the business
                            model and project.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

WhitepaperTopArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

WhitepaperTopArea.defaultProps = {
    space: 1,
};

export default WhitepaperTopArea;
