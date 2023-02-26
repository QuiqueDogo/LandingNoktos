import styles from "./styles.module.scss";
import Banner from "./components/Banner/Banner";
import Title from "../../../components/Title/Title";
import InvoicesTable from "./components/InvoicesTable/InvoicesTable";
import HomeLayout from "../../../components/layouts/HomeLayout/HomeLayout";

const Content = ({
    invoices,
    reportFrom,
    totalItems,
    currentPage,
    setReportFrom,
    invoicesPerPage,
    handlePageChange,
    handleRowsPerPage,
    handleMonthInvoices,
}) => (
    <HomeLayout>
        <section className={styles.Invoices}>
            <Title title="Facturas" />
            <div>
                <div>
                    <Banner />
                    <InvoicesTable
                        invoices={invoices}
                        reportFrom={reportFrom}
                        totalItems={totalItems}
                        currentPage={currentPage}
                        setReportFrom={setReportFrom}
                        invoicesPerPage={invoicesPerPage}
                        handlePageChange={handlePageChange}
                        handleRowsPerPage={handleRowsPerPage}
                        handleMonthInvoices={handleMonthInvoices}
                    />
                </div>
            </div>
        </section>
    </HomeLayout>
);

export default Content;
