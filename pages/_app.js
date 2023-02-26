import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "../styles/main.scss";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import "react-datepicker/dist/react-datepicker.css";
import "react-dates/lib/css/_datepicker.css";
import { PersistGate } from "redux-persist/integration/react";
import returnStoreAndPersistor from "../redux/store";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setHistorialPages } from "../redux/actions/application";
import { clearHistorialPages } from '../redux/actions/application'
const { store, persistor } = returnStoreAndPersistor();

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [cleanHistorial, setCleanHistorial] = useState(false)

    useEffect(() => {
        if (!cleanHistorial) {
            setCleanHistorial(true)
            dispatch(clearHistorialPages())
        }
        const currentPath = router.asPath;
        dispatch(setHistorialPages(currentPath));
    }, [Component]);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    );
};

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);