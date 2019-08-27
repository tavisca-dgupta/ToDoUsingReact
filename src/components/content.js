import React from 'react'

class Content extends React.Component{
    constructor(props)
    {
        super();
        this.state={
            firstName:props.userDetails.firstName,
            lastName:props.userDetails.lastName
        }
        this.changeName=this.changeName.bind(this);
        this.changeLastName=this.changeLastName.bind(this);
    }
    
    changeName(e)
    {
        this.setState({
            firstName:e.target.value
        })
    }
    changeLastName(e)
    {
        this.setState({
            lastName:e.target.value
        })
    }
    resetParam(first,last)
    {
        this.setState({
            firstName:first,
            lastName:last
        })
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            firstName:newProps.userDetails.firstName,
            lastName:newProps.userDetails.lastName
        })
    }



    render(){
       // console.log(this.state.firstName)
            return <div className="content">
            FirstName:<input text="firstName" value={this.state.firstName} onChange={this.changeName}></input><br/><br/>
            LastName:<input text="lastName" value={this.state.lastName} onChange={this.changeLastName}></input><br/><br/>
            <input type="submit" value="update" onClick={()=>this.props.updateData(this.props.userDetails.id,this.state.firstName,this.state.lastName)}></input>

        </div>
    }

}
export default Content