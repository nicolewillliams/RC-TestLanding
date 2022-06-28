import Marquee from "react-fast-marquee";

const MarqueeBanner = () => (
    <div className="rn-banner-area rn-section-gapTop3">
        <div className="container">
            <Marquee className="marquee-container" gradient={false}>
                <div className="marquee border-white">
                    <p>
                        Coming Soon! Our devs are hard at work creating a new,
                        decentralized music experience. Check out this preview
                        of what &apos;s to come and don &apos;t forget to sign
                        up for early access!
                    </p>
                </div>
            </Marquee>
        </div>
    </div>
);

export default MarqueeBanner;
