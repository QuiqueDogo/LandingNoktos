import HeadTag from "./Components/Head";
import Footer from "../../Footer/Footer";
import Header from "./Components/Header/Header";
import LoaderComponent from "../../LoaderComponent";

const Content = ({ url, title, keywords, children, description }) => {
  return (
    <>
      <div>
        <HeadTag
          url={url}
          title={title}
          keywords={keywords}
          description={description}
        />
        <Header />
        <section>{children}</section>
        {/* <button
          type="button"
          className="btn landinglayout__purechat purechat-button-expand"
        >
          <i className="fas fa-comments" />
        </button> */}
        <Footer />
        <LoaderComponent />
      </div>
    </>
  );
};

export default Content;
