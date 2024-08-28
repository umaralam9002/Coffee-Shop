import { Fragment } from "react";
import TeaSummary from "./TeaSummary";
import TeaList from "./TeaList";

const Teas = ()=>{
    return(
        <Fragment>
            <TeaSummary/>
            <TeaList/>
        </Fragment>
    );
}

export default Teas;