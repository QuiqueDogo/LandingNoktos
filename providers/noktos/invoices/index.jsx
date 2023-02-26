import moment from "moment";
import Content from "./page";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showLoader, hideLoader } from "../../../redux/actions/application";
import { getInvoicesRequest } from "../../../services/invoiceService";

const Invoices = () => {
    let isMounted = useRef(true);
    const dispatch = useDispatch();
    const [invoices, setInvoices] = useState([]);
    const [reportFrom, setReportFrom] = useState("");
    const [auxInvoices, setAuxInvoices] = useState([]);
    const [filterInvoices, setFilterInvoices] = useState([]);
    const { company } = useSelector(({ company }) => company);
    // PAGINATOR
    const [currentPage, setCurrentPage] = useState(0);
    const [currentData, setCurrentData] = useState([]);
    const [invoicesPerPage, setInvoicesPerPage] = useState(4);

    const handlePageChange = (ev, value) => setCurrentPage(value);

    const handleRowsPerPage = ({ target }) => setInvoicesPerPage(target.value);

    // FILTER STAMPED INVOICES
    const validInvoices = (data) => {
        let validInvoices = [];
        data.map((invoice) => {
            const field = invoice.custom_fields.filter(
                ({ placeholder }) => placeholder === "cf_respuesta_sat"
            );
            if (field.length > 0) validInvoices.push(field);
        });
        return validInvoices;
    };

    // RESET FILTERS
    const resetFilters = () => setCurrentData(filterInvoices);

    // MONTH INVOICES
    const handleMonthInvoices = () => {
        const currentMonth = moment().month();
        const filterPerMonth = invoices?.filter(({ date }) => {
            const month = moment(date).month();
            if (month === currentMonth) return true;
        });
        setCurrentData(filterPerMonth);
    };

    // FILTER FROM X DAYS
    const filterFromXDays = (days) => {
        const customizeDate = moment().subtract(Number(days), "days");
        const newInvoices = filterInvoices.filter(({ date }) => {
            const invoiceDate = moment(date);
            if (invoiceDate.isAfter(customizeDate)) return true;
        });
        return newInvoices;
    };

    // =======================================================================
    // BRING ALL INVOICES
    const getAllInvoices = async () => {
        try {
            dispatch(showLoader());
            const { data: resp } = await getInvoicesRequest(company?.id);
            const { res, invoive: invoices } = resp;
            const invoicesData = invoices?.data?.invoices;
            setInvoices(invoicesData);
            // FILTRAMOS LAS FACTURAS
            const filterInvoices = validInvoices(invoicesData);
            if (res && isMounted) {
                setFilterInvoices(filterInvoices);
                setCurrentData(filterInvoices);
            }
        } catch (err) {
            console.log(err);
        } finally {
            dispatch(hideLoader());
        }
    };
    useEffect(() => {
        getAllInvoices();
        return () => {
            isMounted = false;
        };
    }, []);

    // REPORT FROM
    useEffect(() => {
        const filterInvoices = filterFromXDays(reportFrom);
        setCurrentData(filterInvoices);
    }, [reportFrom]);

    // =======================================================================
    // PAGINATOR
    useEffect(() => {
        const start = currentPage * invoicesPerPage;
        const end = (currentPage + 1) * invoicesPerPage;
        const slicedData = currentData?.slice(start, end);
        setAuxInvoices(slicedData);
    }, [currentData, invoicesPerPage, currentPage]);

    return (
        <Content
            invoices={auxInvoices}
            reportFrom={reportFrom}
            currentPage={currentPage}
            setReportFrom={setReportFrom}
            totalItems={currentData?.length}
            invoicesPerPage={invoicesPerPage}
            handlePageChange={handlePageChange}
            handleRowsPerPage={handleRowsPerPage}
            handleMonthInvoices={handleMonthInvoices}
        />
    );
};

export default Invoices;
