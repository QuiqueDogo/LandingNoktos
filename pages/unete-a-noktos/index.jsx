import {Row} from "react-bootstrap";
import {Container} from "@material-ui/core";
import HomeLayout from "../../components/layouts/HomeLayout/HomeLayout";
import Iframe from "react-iframe";
import styles from "./styles.module.scss"
const JoinNoktos = () => {
    return (
        <HomeLayout>
            <Container>
                <Row className='my-3'>
                    <img className={styles.banner} src="/img/landing-join/UNETE.jpg" alt=""/>
                    <Iframe url="https://airtable.com/embed/shrMLOiH6Cxdpjegv?backgroundColor=green"
                            className={styles.iframeForm}/>
                </Row>
            </Container>
        </HomeLayout>)
}

export default JoinNoktos