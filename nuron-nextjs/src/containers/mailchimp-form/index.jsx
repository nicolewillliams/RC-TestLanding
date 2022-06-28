import SignupForm from "@components/signup-form";
import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const MailchimpForm = (props) => {
    const postUrl =
        "https://gmail.us14.list-manage.com/subscribe/post?u=7f83b9893953452fe7b251238&id=a9869c55e6";

    return (
        <div className="mb-5">
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <SignupForm
                        status={status}
                        message={message}
                        onValidated={(formData) => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
};

export default MailchimpForm;
