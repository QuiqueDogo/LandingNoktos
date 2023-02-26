import {types} from "../types";
import {getStructureOfCompanyRequest} from "../../services/structureService";
import {showToast} from "../../utils/utils";

const {
    hide_loader,
    show_loader,
    get_company_structure
} = types;

export const getStructureData = (companyId) => (dispatch) => {
    dispatch({ type: show_loader });
    getStructureOfCompanyRequest(companyId)
        .then(response => {
            dispatch({ type: hide_loader });
            dispatch({
                type: get_company_structure,
                payload: { companyStructureData: response.data.jerarquias },
            })
        })
        .catch(error => {
            dispatch({ type: hide_loader });
            showToast({type: 'error', text: 'No se pudieron consultar los registros', duration: 3000})
        })
};