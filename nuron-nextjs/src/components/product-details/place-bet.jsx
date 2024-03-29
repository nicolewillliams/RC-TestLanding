import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Anchor from "@ui/anchor";
import Button from "@ui/button";
import PlaceBidModal from "@components/modals/placebid-modal";
import Countdown from "@ui/countdown/layout-02";
import { ImageType } from "@utils/types";

const PlaceBet = ({ highest_bid, auction_date }) => {
    const [showBidModal, setShowBidModal] = useState(false);
    const handleBidModal = () => {
        setShowBidModal((prev) => !prev);
    };
    return (
        <>
            <div className="place-bet-area">
                <div className="rn-bet-create">
                    <div className="bid-list winning-bid">
                        <h6 className="title">Lua Dipa Campaign Details</h6>
                        <div className="top-seller-inner-one">
                            <div className="top-seller-wrapper">
                                {highest_bid.bidder?.image?.src && (
                                    <div className="thumbnail">
                                        <Anchor path="/sign-up">
                                            <Image
                                                src={
                                                    highest_bid.bidder.image.src
                                                }
                                                alt="Nft_Profile"
                                                width={44}
                                                height={44}
                                                layout="fixed"
                                            />
                                        </Anchor>
                                    </div>
                                )}

                                <div className="top-seller-content">
                                    <span className="heighest-bid">Status</span>
                                    <span className="count-number">
                                        $40,256 / $50,000
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {auction_date && (
                        <div className="bid-list left-bid">
                            <h6 className="title">Time Remaining</h6>
                            <Countdown className="mt--15" date={auction_date} />
                        </div>
                    )}
                </div>
                <Button
                    color="primary-alta"
                    className="mt--30"
                    onClick={handleBidModal}
                >
                    Contribute
                </Button>
            </div>
            <PlaceBidModal show={showBidModal} handleModal={handleBidModal} />
        </>
    );
};

PlaceBet.propTypes = {
    highest_bid: PropTypes.shape({
        amount: PropTypes.string,
        bidder: PropTypes.shape({
            name: PropTypes.string,
            image: ImageType,
            slug: PropTypes.string,
        }),
    }),
    auction_date: PropTypes.string,
};

export default PlaceBet;
