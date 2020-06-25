import React, {useState, useEffect} from 'react';
import {userDataType} from "../../type/alll-type";


type PropsType = {
    status: string
    updateStatus: (status: string, authMe: object) => void
    authMe: userDataType
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState<boolean>(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    // componentDidUpdate(prevProps, prevState)
    // {
    //     console.log(' NOT Update Component');
    //     if (prevProps.status !== prevState.status && !prevState.editMode) {
    //         this.setState({
    //             status: prevProps.status
    //         });
    //         console.log('NOT Update Component');
    //     }
    // }

    const activateEditMode = () => {
        setEditMode(true);
        // console.log(this.state.editMode);
        // this.setState({
        //     editMode: true
        // });
        // console.log(this.state.editMode);
        // this.state.editMode = true;
        // this.forceUpdate();
    };
    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
        // this.setState({status: e.currentTarget.value});
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status, props.authMe);
    };

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )
};

export default ProfileStatusWithHooks;
