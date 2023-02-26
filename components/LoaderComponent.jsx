import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";

const LoaderComponent = ({ loading }) => {
    if (!loading) return null;
    return (
        <div className="loader__main_container">
            <Loader type="Circles" color="#00253e" height={150} width={150} />
        </div>
    );
};

function mapStateToProps(state) {
    return { loading: state.applicationReducer.loading };
}
export default connect(mapStateToProps)(LoaderComponent);
