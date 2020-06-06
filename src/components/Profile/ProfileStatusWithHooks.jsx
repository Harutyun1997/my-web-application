import React, {useState, useEffect} from 'react';

const ProfileStatusWithHooks = (props) => {

    debugger;
    let state = {
        editMode: false,
        status: props.status
    };
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        debugger;
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
        console.log('activateEditMode');
        setEditMode(true);
        // console.log(this.state.editMode);
        // this.setState({
        //     editMode: true
        // });
        // console.log(this.state.editMode);
        // this.state.editMode = true;
        // this.forceUpdate();
    };
    const onStatusChange = (e) => {
        console.log('onStatusChange');
        setStatus(e.currentTarget.value);
        // this.setState({status: e.currentTarget.value});
    };

    const deactivateEditMode = () => {
        console.log('deactivateEditMode');
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
