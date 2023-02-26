import Swal from "sweetalert2";
import styles from "./styles.module.scss";
import { makeStyles } from "@material-ui/styles";
import { InputLabel, Select } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Button, MenuItem, Box } from "@material-ui/core";
import { useState, useEffect, useCallback, useRef } from "react";
import { showToast } from "../../../../../../../../../utils/utils";
import { FormControl, FormLabel, FormHelperText } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { showLoader } from "../../../../../../../../../redux/actions/application";
import { hideLoader } from "../../../../../../../../../redux/actions/application";
import { updateRFCRequest } from "../../../../../../../../../services/usersService";
import { setCDFI_ID } from "../../../../../../../../../redux/actions/packagesAction";
import { getCFDIUseRequest } from "../../../../../../../../../services/invoiceService";

const useStyles = makeStyles({
    formInputAddCard: {
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderRadius: 15,
            },
            "&.Mui-focused fieldset": {
                borderColor: "rgba(0, 0, 0, 0.54)",
            },
        },
    },
    updateRFC: {
        width: 120,
        color: "#161616",
        fontSize: 15,
        fontWeight: 600,
        letterSpacing: 1,
        borderRadius: 20,
        border: "2px solid #00c2ff",
        textTransform: "none",
    },
});

// =======================================================================

const InvoiceForm = () => {
    const classes = useStyles();
    let isMounted = useRef(true);
    const dispatch = useDispatch();
    const [CFDI, setCFDI] = useState([]);
    const [RFC, setRFC] = useState("");
    const { CFDI_Id } = useSelector(({ noktosPackages }) => noktosPackages);
    const { company } = useSelector(({ company }) => company);

    const handleChangeCDFI = ({ target }) => dispatch(setCDFI_ID(target.value));

    const RFCValid = (RFC) => {
        const regexRFC =
            /^([A-ZÑ a-zñ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z a-z\d]{2})([A a\d])$/;
        return regexRFC.test(RFC);
    };

    const updateRFC = async () => {
        try {
            dispatch(showLoader());
            const body = {
                compania_id: company?.id,
                rfc: RFC,
            };
            await updateRFCRequest(body);
            // NO DEBERIA MUTARSE EL ESTADO EN REDUX DIRECTAMENTE
            // ESTO DEBERIA CAMBIARSE
            company.rfc = RFC;
            setRFC("");
            showToast({
                type: "success",
                text: "El RFC se actualizó exitosamente",
                duration: 3000,
            });
        } catch (err) {
            console.log(err);
            Swal.fire({
                title: "Intenta de nuevo",
                text: "Error al actualizar el RFC",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        } finally {
            dispatch(hideLoader());
        }
    };

    const handleUpdateRFC = async () => {
        const isRFCValid = RFCValid(RFC);
        if (isRFCValid) {
            const { isConfirmed } = await Swal.fire({
                title: `RFC: ${RFC}`,
                text: "¿Está seguro de que la información ingresada es correcta?",
                icon: "info",
                showCancelButton: true,
                confirmButtonText: "Confirmar",
                cancelButtonText: "Cancelar",
            });
            if (isConfirmed) updateRFC();
        } else {
            setRFC("");
            Swal.fire({
                title: "RFC inválido",
                text: `Vuelve a intentarlo`,
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    };

    // =====================================================
    // BRING DATA OF THE CDFI
    const getCFDI = useCallback(async () => {
        try {
            dispatch(showLoader());
            const { data } = await getCFDIUseRequest();
            const { res, cdfis } = data;
            if (res && isMounted) setCFDI(cdfis);
        } catch (err) {
            console.log(err);
        } finally {
            dispatch(hideLoader());
        }
    }, []);

    useEffect(() => {
        getCFDI();
        return () => {
            isMounted = false;
        };
    }, []);
    // =====================================================

    return (
        <div className="animate__animated animate__fadeIn animate__faster">
            <div className={styles.InvoiceForm}>
                <div>
                    <div>
                        <label>Datos de facturación</label>
                    </div>
                    <ValidatorForm>
                        <div className={styles.InvoiceForm__RFC}>
                            <FormControl>
                                <FormLabel>
                                    <b>RFC: {company?.rfc.toUpperCase()}</b>
                                </FormLabel>
                                <TextValidator
                                    size="small"
                                    variant="outlined"
                                    value={RFC}
                                    className={classes.formInputAddCard}
                                    onChange={({ target }) =>
                                        setRFC(target.value)
                                    }
                                />
                            </FormControl>
                            <Box ml={2}>
                                <Button
                                    variant="outlined"
                                    className={classes.updateRFC}
                                    onClick={handleUpdateRFC}
                                >
                                    Actualizar
                                </Button>
                            </Box>
                        </div>

                        <Box my={3}>
                            <FormControl fullWidth>
                                <InputLabel id="CDFI">
                                    <b
                                        style={{
                                            marginBottom: 4,
                                            fontSize: 21,
                                        }}
                                    >
                                        CDFI
                                    </b>
                                </InputLabel>
                                <Select
                                    labelId="CDFI"
                                    id="select-cdfi"
                                    value={CFDI_Id}
                                    onChange={handleChangeCDFI}
                                    style={{ marginTop: 26 }}
                                >
                                    <MenuItem value="">Seleccionar</MenuItem>
                                    {CFDI?.map(
                                        ({ id, c_UsoCFDI, descripcion }) => (
                                            <MenuItem key={id} value={id}>
                                                {c_UsoCFDI} - {descripcion}
                                            </MenuItem>
                                        )
                                    )}
                                </Select>
                                <FormHelperText>
                                    <b
                                        style={{
                                            fontSize: 15,
                                        }}
                                    >
                                        Selecciona el motivo de facturación.
                                    </b>
                                </FormHelperText>
                            </FormControl>
                        </Box>
                    </ValidatorForm>
                </div>
            </div>
        </div>
    );
};

export default InvoiceForm;
