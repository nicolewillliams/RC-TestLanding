import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-03";
import Footer from "@layout/footer/footer-04";
import HeroArea from "@containers/hero/layout-06";
import ExploreProductArea from "@containers/explore-product/layout-02";
import CreatorArea from "@containers/creator/layout-01";
import ServiceArea from "@containers/services/layout-01";
import RankingArea from "@containers/ranking";
import MarqueeBanner from "@components/marquee";
import { normalizedData } from "@utils/methods";
import useMobileDetect from "use-mobile-detect-hook";
import mixpanel from "mixpanel-browser";

// Demo data
import homepageData from "../data/homepages/home-06.json";
import homepageDataMobile from "../data/homepages/home-06-mobile.json";
import sellerData from "../data/sellers.json";
import productData from "../data/products.json";
import rankingData from "../data/ranking.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const mixpanelToken = "ff164408b5395416a023efd17a895e4e";

const Home = () => {
    const detectMobile = useMobileDetect();
    const content = detectMobile.isMobile()
        ? normalizedData(homepageData?.content || [])
        : normalizedData(homepageData?.content || []);

    mixpanel.init(mixpanelToken, { debug: true });
    mixpanel.track("Viewed homepage");
    return (
        <Wrapper>
            <SEO />
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
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Home;
