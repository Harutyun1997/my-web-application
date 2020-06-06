import React from 'react';

export default class ProfileStatus extends React.Component {


    sлtate = {
        editMode: false,
        status: this.props.status
    };
    activateEditMode = () => {
        console.log(this.state.editMode);
        this.setState({
            editMode: true
        });
        console.log(this.state.editMode);
        // this.state.editMode = true;
        // this.forceUpdate();
    };
    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value});
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status, this.props.authMe);

    };

    componentDidUpdate(prevProps, prevState) {
        console.log(' NOT Update Component');
        if (prevProps.status !== prevState.status && !prevState.editMode) {
            this.setState({
                status: prevProps.status
            });
            console.log('NOT Update Component');
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&

                <div>
                    <span onDoubleClick={this.activateEditMode}
                    >{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
};
