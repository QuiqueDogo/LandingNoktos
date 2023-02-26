export const setConfigurationRequest = () => {
    const token = localStorage.getItem("local_token");

    return {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    };
};

export const setBasicConfigurationRequest = () => {
    return {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    };
};
