import React, {Fragment} from "react"


const Avatar = props => {
    const {avatar, firstName, onChangeAvatar, errorAvatar,onPrevAvatar, onSubmitAvatar} = props;
    return (
        <Fragment>
            <img className="mb-4"
                 width="100%"
                 src={avatar}
                 alt={firstName}
            />
            <div className="mb-4">
                <div className="custom-file">
                    <input type="file"
                           className="custom-file-input"
                           id="customFile"
                           name="avatar"
                           onChange={onChangeAvatar}
                    />
                    <label className="custom-file-label"
                           htmlFor="customFile">Choose avatar</label>
                </div>
                {{errorAvatar} ? (
                    <div className="invalid-feedback">{errorAvatar}</div>
                ) : null}
            </div>
            <div className="d-flex justify-content-center">
                <button type="button"
                        className="btn btn-light mr-4"
                        onClick={onPrevAvatar}
                >
                    Previous
                </button>
                <button type="button"
                        className="btn btn-secondary"
                        onClick={onSubmitAvatar}>
                    Next
                </button>
            </div>
        </Fragment>
    )
};

export default Avatar;