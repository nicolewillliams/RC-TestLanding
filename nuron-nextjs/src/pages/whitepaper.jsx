import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-03";
import Footer from "@layout/footer/footer-04";
import Breadcrumb from "@components/breadcrumb";
import WhitepaperTopArea from "@containers/whitepaper-top";
import SignupArea from "@containers/signup";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Contact = () => (
    <Wrapper>
        <SEO pageTitle="Whitepaper ||" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Whitepaper" currentPage="Whitepaper" />
            <WhitepaperTopArea />
            <SignupArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Contact;
