import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
import Header from './components/Header'
import SideNavLi from './components/sideNavLi';
import Content from './components/content';


const userlist=[{firstName: "Dharna",
      lastName:"Gupta",
    id:0
  },
    {firstName: "Shravan",
      lastName:"Ramdurg",
    id:1
  },
    {firstName: "Aditi",
      lastName:"Rupade",
    id:2
  }]

//const names=[dharna,shravan,aditi];
class App extends React.Component{
  updateData = (id,first,last) =>
  {
    userlist[id].firstName=first;
    userlist[id].lastName=last;
      this.setState({
        user:userlist
      })

  }
  updateSelected = async (users) => {
    await this.setState({
      selected:users.id,
    })
  }
  constructor()
    {
        super();
        this.state={
          user:userlist,
          selected:0
        }
        // this.updateData=this.updateData.bind(this);
        // this.updateSelected=this.updateSelected.bind(this);
    }


  render(){
    return (
      <div className="App">
      <div className="grid-container">
      <div className="grid-item header">
        <Header></Header>
      </div>
      <div className="grid-item menu">
        <nav>
          <ul>
            
            <SideNavLi key={this.state.user[0].id} users={this.state.user[0]} updateSelected={this.updateSelected}></SideNavLi>
            <SideNavLi key={this.state.user[1].id} users={this.state.user[1]} updateSelected={this.updateSelected}></SideNavLi>
            <SideNavLi key={this.state.user[2].id} users={this.state.user[2]} updateSelected={this.updateSelected}></SideNavLi>
          </ul>
        </nav>
  
      </div>
      <div className="grid-item content">
        <Content userDetails={this.state.user[this.state.selected]} updateData={this.updateData}></Content>
      </div>
      <div className="grid-item footer">
        <Footer></Footer>
      </div>
      </div>
              
        
            
          
      </div>
    );
  }
}


export default App;
