/* eslint-disable no-unused-expressions */
import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";
import { useState } from "react";

const SignupForm = ({ className, status, message, onValidated }) => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userType, setUserType] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            firstName &&
            lastName &&
            userType &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email,
                MERGE1: firstName,
                MERGE2: lastName,
                MERGE3: userType,
            });
        email &&
            !firstName &&
            !lastName &&
            !userType &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email,
            });
    };

    return (
        <div className={clsx("form-wrapper-one", className)}>
            <h4>Sign Up For Radiochain</h4>
            <p>
                To enjoy access to the full site and features, join the
                Radiochain fam!
            </p>
            <form onSubmit={(e) => handleSubmit(e)}>
                {status === "sending" && (
                    <div className="text-primary mt-2 d-inline-block">
                        Processing...
                    </div>
                )}

                {status === "error" && (
                    <div
                        className="text-danger mt-2 d-inline-block"
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}

                {status === "success" && (
                    <div
                        className="text-success mt-2 d-inline-block"
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}

                {status !== "success" ? (
                    <div className="mb-5">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                        >
                            Email address
                        </label>
                        <input
                            onChange={(event) =>
                                setEmail(event?.target?.value ?? "")
                            }
                            type="email"
                            id="exampleInputEmail1"
                        />
                        <label htmlFor="firstname" className="form-label">
                            First Name
                        </label>
                        <input
                            onChange={(event) =>
                                setFirstName(event?.target?.value ?? "")
                            }
                            type="text"
                            id="firstname"
                        />
                        <label htmlFor="lastname" className="form-label">
                            Last Name
                        </label>
                        <input
                            onChange={(event) =>
                                setLastName(event?.target?.value ?? "")
                            }
                            type="text"
                            id="lastname"
                        />
                        <label htmlFor="usertype" className="form-label">
                            User Type
                        </label>
                        <input
                            onChange={(event) =>
                                setUserType(event?.target?.value ?? "")
                            }
                            type="radio"
                            id="usertype"
                        />
                    </div>
                ) : null}

                {status === "success" ? (
                    <Button
                        path="/"
                        fullwidth
                        customClass="g__justify-self-center"
                    >
                        Close
                    </Button>
                ) : (
                    <Button
                        onClick={handleSubmit}
                        color="primary-alta"
                        size="medium"
                        fullwidth
                    >
                        Continue
                    </Button>
                )}
            </form>
        </div>
    );
};

SignupForm.propTypes = {
    className: PropTypes.string,
    status: PropTypes.string,
    message: PropTypes.string,
    onValidated: PropTypes.func,
};
export default SignupForm;
