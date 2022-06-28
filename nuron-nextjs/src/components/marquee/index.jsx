import PropTypes from "prop-types";
import clsx from "clsx";
import Marquee from "react-fast-marquee";
import ChainGraphic from "@components/chain-graphic";

const MarqueeBanner = () => {
    return (
        <div className="rn-banner-area rn-section-gapTop3">
            <div className="container">
                <ChainGraphic />
                <Marquee className="marquee-container" gradient={false}>
                    <div className="marquee border-white">
                        <p>
                            Coming Soon! Our devs are hard at work creating a
                            new, decentralized music experience. Check out this
                            preview of what's to come and don't forget to sign
                            up for early access!{" "}
                        </p>
                    </div>
                </Marquee>
                <ChainGraphic />
            </div>
        </div>
    );
};

export default MarqueeBanner;
