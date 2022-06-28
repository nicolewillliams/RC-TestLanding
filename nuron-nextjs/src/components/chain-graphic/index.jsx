import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";

const ChainGraphic = () => {
    return (
        <div className="container">
            <Image
                src="/images/chainradio.png"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
        </div>
    );
};

export default ChainGraphic;
