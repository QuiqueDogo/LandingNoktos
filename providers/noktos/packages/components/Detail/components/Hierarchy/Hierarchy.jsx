import axios from "axios";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState, useEffect, useCallback, useRef } from "react";
import { apiRoutes } from "../../../../../../../utils/apiRoutes";
import { showLoader } from "../../../../../../../redux/actions/application";
import { hideLoader } from "../../../../../../../redux/actions/application";
import { setConfigurationRequest } from "../../../../../../../utils/requests";
import { setCostCenterId } from "../../../../../../../redux/actions/packagesAction";

const Hierarchy = () => {
    let isMounted = useRef(true);
    const dispatch = useDispatch();
    const headers = setConfigurationRequest();
    // STATE
    const [costCenter, setCostCenter] = useState([]);
    const { company } = useSelector(({ company }) => company);
    const { costCenterId } = useSelector(
        ({ noktosPackages }) => noktosPackages
    );

    const handleChange = ({ target }) =>
        dispatch(setCostCenterId(target.value));

    const getCostCenter = useCallback(async () => {
        try {
            dispatch(showLoader());
            const { baseUrl, costCenters } = apiRoutes;
            const URL = `${baseUrl}${costCenters}/${company?.id}`;
            const { data } = await axios.get(URL, headers);
            const { res, centro_costos } = data;
            if (res && isMounted) setCostCenter(centro_costos);
        } catch (err) {
            console.log(err);
        } finally {
            dispatch(hideLoader());
        }
    }, []);

    useEffect(() => {
        getCostCenter();
        return () => {
            isMounted = false;
        };
    }, [getCostCenter]);

    return (
        <div className={styles.Hierarchy}>
            <div>
                <span>CENTRO DE COSTOS</span>
            </div>
            <div>
                <select value={costCenterId} onChange={handleChange}>
                    {costCenter?.map(({ id, nombre }) => (
                        <option key={id} value={id}>
                            {nombre}
                        </option>
                    ))}
                </select>
                <div>
                    <ExpandMoreIcon />
                </div>
            </div>
        </div>
    );
};

export default Hierarchy;
