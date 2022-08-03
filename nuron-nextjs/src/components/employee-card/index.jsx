import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import ImageType from "@utils/types";

const EmployeeCard = ({ className, title, desc, image }) => (
    <div className={clsx("employee-card-inner", className)}>
        {image?.src && (
            <div className="thumbnail">
                <Image
                    src={image.src}
                    alt={image?.alt || "Employee_Pic"}
                    width={140}
                    height={140}
                    layout="fixed"
                />
            </div>
        )}

        <div className="content-wrapper">
            <h6 className="title">{title}</h6>
            <p>{desc}</p>
        </div>
    </div>
);

EmployeeCard.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    image: ImageType,
};

export default EmployeeCard;
