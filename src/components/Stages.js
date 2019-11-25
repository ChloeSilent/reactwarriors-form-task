import React, {Fragment} from "react";

const Stages = ()=> {
    return(
        <Fragment>
            <div className="steps mb-4">
                <div className="step is-active">
                    <div className="step__marker">1</div>
                    <div className="step__title mt-1">Basic</div>
                </div>
                <div className="step">
                    <div className="step__marker">2</div>
                    <div className="step__title mt-1">Contacts</div>
                </div>
                <div className="step">
                    <div className="step__marker">3</div>
                    <div className="step__title mt-1">Avatar</div>
                </div>
                <div className="step">
                    <div className="step__marker">4</div>
                    <div className="step__title mt-1">Finish</div>
                </div>
            </div>
        </Fragment>
    )
};

export default Stages;