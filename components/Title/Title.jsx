import PropTypes from "prop-types";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Title = ({ title }) => {
    const router = useRouter();

    const handleClick = () => router.back();

    return (
        <div className={styles.Title}>
            <div>
                <IconButton aria-label="back" onClick={handleClick}>
                    <ArrowBackIosIcon />
                </IconButton>
                <h1>{title}</h1>
            </div>
        </div>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Title;
