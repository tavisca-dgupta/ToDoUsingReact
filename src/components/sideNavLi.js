import React from 'react'



class sideNavLi extends React.Component{

    

    render(){
        const users=this.props.users
        return <li key={users.firstName} onClick={()=>this.props.updateSelected(users)}> {users.firstName} {users.lastName}  </li>
    }
}

export default sideNavLi