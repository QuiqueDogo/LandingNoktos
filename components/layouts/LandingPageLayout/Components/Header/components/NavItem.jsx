import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

const NavItem = ({ title, link, setIsOpen }) => {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const { pathname } = router;
        if (link === pathname) setIsActive(true);
    });

    return (
        <Button
            style={{
                padding: "16px 20px",
                color: !isActive ? "#979797" : "#00c2ff",
                textTransform: "none",
                fontSize: 15.5,
                fontWeight: 600,
                fontFamily: "DM Sans Regular",
            }}
            onClick={() => {
                if (setIsOpen) setIsOpen(false);
                router.push(link);
            }}
        >
            {title}
        </Button>
    );
};

NavItem.defaultProps = {
    isActive: false,
    setIsOpen: null,
};

NavItem.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default NavItem;
