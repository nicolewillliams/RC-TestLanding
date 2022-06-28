import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-03";
import Footer from "@layout/footer/footer-04";
import HeroArea from "@containers/hero/layout-06";
import ExploreProductArea from "@containers/explore-product/layout-02";
import CreatorArea from "@containers/creator/layout-01";
import ServiceArea from "@containers/services/layout-01";
import RankingArea from "@containers/ranking";
import SignupModal from "@components/modals/signup-modal";
import MarqueeBanner from "@components/marquee";
import { normalizedData } from "@utils/methods";
import { useState } from "react";

// Demo data
import homepageData from "../data/homepages/home-06.json";
import sellerData from "../data/sellers.json";
import productData from "../data/products.json";
import rankingData from "../data/ranking.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home = () => {
    const content = normalizedData(homepageData?.content || []);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const handleSignupModal = () => {
        setShowSignupModal((prev) => !prev);
    };
    return (
        <Wrapper>
            <SEO pageTitle="Home" />
            <Header />
            <main id="main-content">
                <HeroArea data={content["hero-section"]} />
                <MarqueeBanner />
                <ExploreProductArea
                    data={{
                        ...content["explore-product-section"],
                        products: productData,
                    }}
                />
                <CreatorArea
                    data={{
                        ...content["top-sller-section"],
                        creators: sellerData,
                    }}
                />
                <RankingArea data={{ ranking: rankingData }} />
                <ServiceArea data={content["service-section1"]} />
                <ServiceArea data={content["service-section2"]} />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Home;
