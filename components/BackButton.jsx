import React from "react";
import {useRouter} from "next/router";
const BackButton = () => {
    const router = useRouter()
    const backButton = () => {
        router.back()
    }
    return(
        <button className="btn generic__button_outlined_blue" type="button" onClick={() => backButton()}><i className="fas fa-chevron-left"/> Regresar</button>
    )
}

export default BackButton