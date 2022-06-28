import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-03";
import Footer from "@layout/footer/footer-04";
import AboutArea from "@containers/about/layout-02";
import QuoteArea from "@containers/quote-area";
import CTAArea from "@containers/cta";
import { normalizedData } from "@utils/methods";
import { getAllPosts } from "../lib/api";

// Demo data
import aboutData from "../data/innerpages/about.json";

const About = () => {
    const content = normalizedData(aboutData?.content || []);
    return (
        <Wrapper>
            <SEO pageTitle="About" />
            <Header />
            <main id="main-content">
                <AboutArea data={content["about-section"]} />
                <QuoteArea data={content["quote-section"]} />
                <CTAArea data={content["cta-section"]} />
            </main>
            <Footer />
        </Wrapper>
    );
};

export async function getStaticProps() {
    const posts = getAllPosts([
        "title",
        "date",
        "slug",
        "image",
        "category",
        "timeToRead",
    ]);

    return {
        props: {
            posts: posts.slice(0, 4),
            className: "template-color-1",
        },
    };
}

export default About;
