import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-03";
import Footer from "@layout/footer/footer-04";
import AboutArea from "@containers/about/layout-02";
import QuoteArea from "@containers/quote-area";
import CTAArea from "@containers/cta";
import TeamArea from "@containers/team-area";
import useMobileDetect from "use-mobile-detect-hook";
import { normalizedData } from "@utils/methods";
import { getAllPosts } from "../lib/api";

// Demo data
import aboutData from "../data/innerpages/about.json";
import aboutDataMobile from "../data/innerpages/aboutMobile.json";
import teamData from "../data/team.json";

const About = () => {
    const detectMobile = useMobileDetect();
    const content = detectMobile.isMobile()
        ? normalizedData(aboutDataMobile?.content || [])
        : normalizedData(aboutData?.content || []);
    return (
        <Wrapper>
            <SEO pageTitle="About" />
            <Header />
            <main id="main-content">
                <AboutArea data={content["about-section"]} />
                <QuoteArea data={content["quote-section"]} />
                <TeamArea data={{ team: teamData }} />
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
