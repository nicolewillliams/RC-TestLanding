import { useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { MoralisProvider } from "react-moralis";
import sal from "sal.js";
import { ThemeProvider } from "next-themes";
import "../assets/css/bootstrap.min.css";
import "../assets/css/feather.css";
import "../assets/scss/style.scss";
import "react-toastify/dist/ReactToastify.css";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const moralisAppId = "Zgi9h3xvYrvXHJZmYjgzbfxlTPnDq6H3RytmW0qt";
const moralisServerURL = "https://mrnuat16od8z.usemoralis.com:2053/server";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtTEtq1k1MECRh23fcuyazExBdR3dav-Q",
    authDomain: "radiochain-15501.firebaseapp.com",
    projectId: "radiochain-15501",
    storageBucket: "radiochain-15501.appspot.com",
    messagingSenderId: "803030147779",
    appId: "1:803030147779:web:54aa9a1ac7e576edb6b876",
    measurementId: "G-8F9EHKG26P",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();
    useEffect(() => {
        sal({ threshold: 0.1, once: true });
    }, [router.asPath]);

    useEffect(() => {
        sal();
    }, []);
    useEffect(() => {
        document.body.className = `${pageProps.className}`;
    });
    return (
        <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
            <ThemeProvider defaultTheme="dark">
                <Component {...pageProps} />
            </ThemeProvider>
        </MoralisProvider>
    );
};

MyApp.propTypes = {
    Component: PropTypes.elementType,
    pageProps: PropTypes.shape({
        className: PropTypes.string,
    }),
};

export default MyApp;
