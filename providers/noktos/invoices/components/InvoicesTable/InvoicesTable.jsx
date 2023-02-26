import { useState } from "react";
import { useRouter } from "next/router";
import { useStyles } from "./makeStyles";
import styles from "./styles.module.scss";
import { Button } from "@material-ui/core";
import { esES } from "@material-ui/core/locale";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { formatMoney } from "../../../../../utils/formatMoney";
import InvoiceItem from "./components/InvoiceItem/InvoiceItem";
import TablePagination from "@material-ui/core/TablePagination";
import InvoiceDetail from "./components/InvoiceDetail/InvoiceDetail";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const InvoicesTable = ({
    invoices,
    reportFrom,
    totalItems,
    currentPage,
    setReportFrom,
    invoicesPerPage,
    handlePageChange,
    handleRowsPerPage,
    handleMonthInvoices,
}) => {
    const router = useRouter();
    const classes = useStyles();
    const [itemSelected, setItemSelected] = useState(2);
    const [showModalDetail, setShowModalDetail] = useState(false);

    const handleShowModal = () => setShowModalDetail(true);
    const handleCloseModal = () => setShowModalDetail(false);
    const handleClickItem = (idItem) => setItemSelected(idItem);

    const theme = createTheme(esES);

    return (
        <div className={styles.InvoicesTable}>
            <div>
                <div>
                    {invoices?.length > 0 && (
                        <Button
                            disableElevation
                            variant="contained"
                            classes={{ root: classes.topButton }}
                            onClick={handleMonthInvoices}
                        >
                            Tus facturas del mes
                        </Button>
                    )}
                    <Button
                        disableElevation
                        variant="contained"
                        classes={{ root: classes.topButton }}
                        onClick={() => router.push("/payments")}
                    >
                        Ordenes no facturadas
                    </Button>
                </div>
                <div>
                    {invoices?.length > 0 && (
                        <FormControl fullWidth variant="outlined" size="small">
                            <InputLabel id="reportFrom">
                                Reporte desde
                            </InputLabel>
                            <Select
                                value={reportFrom}
                                labelId="reportFrom"
                                label="Reporte desde"
                                onChange={({ target }) =>
                                    setReportFrom(target.value)
                                }
                            >
                                <MenuItem value={15}>15 días</MenuItem>
                                <MenuItem value={30}>30 días</MenuItem>
                                <MenuItem value={90}>90 días</MenuItem>
                                <MenuItem value={180}>180 días</MenuItem>
                                <MenuItem value={365}>365 días</MenuItem>
                            </Select>
                        </FormControl>
                    )}
                </div>
            </div>
            {invoices?.length > 0 ? (
                <>
                    <div>
                        {invoices?.map((invoice) => (
                            <>
                                <InvoiceItem
                                    invoice={invoice}
                                    date={invoice?.date}
                                    key={invoice?.invoice_id}
                                    idItem={invoice?.invoice_id}
                                    title={invoice?.invoice_number}
                                    handleShowModal={handleShowModal}
                                    handleClickItem={handleClickItem}
                                    value={formatMoney(invoice?.total / 1.16)}
                                    isActive={
                                        itemSelected === invoice?.invoice_id
                                    }
                                />
                                <InvoiceDetail
                                    invoice={invoice}
                                    showModalDetail={showModalDetail}
                                    handleCloseModal={handleCloseModal}
                                />
                            </>
                        ))}
                    </div>
                    <div>
                        <ThemeProvider theme={theme}>
                            <TablePagination
                                component="div"
                                page={currentPage}
                                count={totalItems}
                                rowsPerPage={invoicesPerPage}
                                onPageChange={handlePageChange}
                                onRowsPerPageChange={handleRowsPerPage}
                                rowsPerPageOptions={[4, 8, 12]}
                            />
                        </ThemeProvider>
                    </div>
                </>
            ) : (
                <h2>No hay facturas para mostrar...</h2>
            )}
        </div>
    );
};

export default InvoicesTable;
