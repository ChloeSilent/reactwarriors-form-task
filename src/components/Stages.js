import React, { Fragment } from "react";

const Stages = props => {
  const { complete1, complete2, complete3, complete4 } = props;
  return (
    <Fragment>
      <div className="steps mb-4">
        <div className={complete1}>
          <div className="step__marker">1</div>
          <div className="step__title mt-1">Basic</div>
        </div>
        <div className={complete2}>
          <div className="step__marker">2</div>
          <div className="step__title mt-1">Contacts</div>
        </div>
        <div className={complete3}>
          <div className="step__marker">3</div>
          <div className="step__title mt-1">Avatar</div>
        </div>
        <div className={complete4}>
          <div className="step__marker">4</div>
          <div className="step__title mt-1">Finish</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Stages;
