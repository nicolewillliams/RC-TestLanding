import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const SignupForm = ({ className }) => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });
    const onSubmit = (data, e) => {
        e.preventDefault();
        // eslint-disable-next-line no-console
        console.log(data);
        router.push({
            pathname: "/",
        });
    };

    return (
        <div className={clsx("form-wrapper-one", className)}>
            <h4>Sign Up For Radiochain</h4>
            <p>
                To enjoy access to the full site and features, join the
                Radiochain fam!
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="exampleInputEmail1"
                        {...register("exampleInputEmail1", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                    {errors.exampleInputEmail1 && (
                        <ErrorText>
                            {errors.exampleInputEmail1?.message}
                        </ErrorText>
                    )}
                </div>
                <Button
                    path="/login"
                    color="primary-alta"
                    size="medium"
                    fullwidth
                >
                    Continue
                </Button>
            </form>
        </div>
    );
};

SignupForm.propTypes = {
    className: PropTypes.string,
};
export default SignupForm;
