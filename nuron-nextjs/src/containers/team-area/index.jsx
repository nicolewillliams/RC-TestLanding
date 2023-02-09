import PropTypes from "prop-types";
import clsx from "clsx";

import EmployeeCard from "@components/employee-card";
import { ImageType, ItemType, SectionTitleType, IDType } from "@utils/types";

const TeamArea = ({ space, className, data }) => {
    const team = data.team;

    return (
        <div
            className={clsx(
                "rn-employee-wrapper",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                <div className="employee-card">
                    <div className="row g-5">
                        <div className="about-title-m team-section">
                            {" "}
                            Our Team
                        </div>
                        {team?.map((member) => (
                            <div className="col-sm">
                                <EmployeeCard
                                    className="center-it"
                                    key={member.id}
                                    title={member.title}
                                    desc={member.description}
                                    image={member.image}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

TeamArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        team: PropTypes.arrayOf(
            PropTypes.shape({
                id: IDType,
                title: PropTypes.string,
                description: PropTypes.string,
                image: ImageType,
            })
        ),
    }),
};

TeamArea.defaultProps = {
    space: 1,
};

export default TeamArea;
