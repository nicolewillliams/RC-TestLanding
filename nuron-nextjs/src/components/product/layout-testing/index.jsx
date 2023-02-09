import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import clsx from "clsx";
import Anchor from "@ui/anchor";
import CountdownTimer from "@ui/countdown/layout-01";
import ClientAvatar from "@ui/client-avatar/testing";
import ProductBid from "@components/product-bid/index_noETH";
import Button from "@ui/button";
import { ImageType } from "@utils/types";
import PlaceBidModal from "@components/modals/placebid-modal";
import useMobileDetect from "use-mobile-detect-hook";

const Product = ({
    overlay,
    title,
    slug,
    artist,
    //price,
    likeCount,
    auction_date,
    image,
    authors,
    placeBid,
}) => {
    const [showBidModal, setShowBidModal] = useState(false);
    const handleBidModal = () => {
        setShowBidModal((prev) => !prev);
    };

    const detectMobile = useMobileDetect();

    return (
        <>
            <div
                className={clsx(
                    "product-style-one",
                    !overlay && "no-overlay",
                    placeBid && "with-placeBid"
                )}
            >
                <div className="card-thumbnail">
                    {image?.src && (
                        //<Anchor path={`/product/${slug}`}>
                        <Image
                            src={image.src}
                            alt={image?.alt || "NFT_portfolio"}
                            width={533}
                            height={533}
                        />
                        // </Anchor>
                    )}
                    {auction_date && <CountdownTimer date={auction_date} />}
                    {placeBid && (
                        <Button onClick={handleBidModal} size="small">
                            Place Bid
                        </Button>
                    )}
                </div>
                <div>
                    {detectMobile.isMobile() ? (
                        <br />
                    ) : (
                        <div className="product-share-wrapper">
                            <div className="profile-share">
                                {authors?.map((client) => (
                                    <ClientAvatar
                                        key={client.name}
                                        name={client.name}
                                        image={client.image}
                                    />
                                ))}
                                <Anchor
                                    className="more-author-text"
                                    path="/sign-up"
                                >
                                    Biggest Fans
                                </Anchor>
                            </div>
                        </div>
                    )}
                </div>
                <Anchor>
                    <span className="product-name">{title}</span>
                </Anchor>
                <span className="latest-bid">Artist: {artist}</span>
                <ProductBid likeCount={likeCount} />
            </div>
            <PlaceBidModal show={showBidModal} handleModal={handleBidModal} />
        </>
    );
};

Product.propTypes = {
    overlay: PropTypes.bool,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    /*
    price: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
    */
    likeCount: PropTypes.number.isRequired,
    auction_date: PropTypes.string,
    image: ImageType.isRequired,
    authors: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            image: ImageType.isRequired,
        })
    ),
    placeBid: PropTypes.bool,
};

Product.defaultProps = {
    overlay: false,
};

export default Product;
