import React, { Component } from "react";
import axios from "axios"
import EmployeeService from '../services/EmployeeService'
import SkillTrackerDataService from '../api/SkillTrackerDataService'
class SearchForm extends Component
{


    constructor(props) {
        super(props)
        this.state = { username: '',associateID: '', skillName: '', notes: '', employees: []  }
        //this.refreshSearchData = this.refreshSearchData.bind(this)
      }

      // componentDidMount(){    
      //     EmployeeService.getEmployees().then((res) => {
      //         this.setState({ employees: res.data});
      //     });
      // }

      refreshSearchData() {
        SkillTrackerDataService.retrieveAll()
          .then(
              response => {
                  console.log('Refresh data ' + response);
                  this.setState({employees : response.data})
              }
          ) 
        }

        refreshSearchDataBySkill(skill) {
          SkillTrackerDataService.retrieveBySkill(skill)
            .then(
                response => {
                    console.log('refreshSearchDataBySkill ' + JSON.stringify(response));
                    this.setState({employees : response.data})
                }
            ) 
          }

          refreshSearchDataByName(name) {
            SkillTrackerDataService.retrieveByName(name)
              .then(
                  response => {
                      console.log('retrieveByName ' + JSON.stringify(response));
                      this.setState({employees : response.data})
                  }
              ) 
            }

            refreshSearchDataById(Id) {
              SkillTrackerDataService.retrieveById(Id)
                .then(
                    response => {
                        console.log('retrieveByName ' + JSON.stringify(response));
                        this.setState({employees : response.data})
                    }
                ) 
              }

      componentDidMount() {
        axios.get(`http://localhost:8080/skill-tracker/api/v1/test/message`)
          .then(res => {
            console.log('Hi');
            const notes = res.data;
            this.setState({ notes });
            console.log(this.state.notes);
          })

          this.refreshSearchData();
          // axios.get(`http://localhost:8080/skill-tracker/api/v1/engineer/getAll`)
          // .then(res => {
          //   this.setState({ employees: res.data });

          //   console.log('Hi Stringify 123' + JSON.stringify(this.state.employees));
          //   //console.log(this.state.employees.map( (item) => (item.enggId) )          );
          // })
      }
       
        
      handleUserNameChange = (event) =>{
        this.setState({ username: event.target.value })
      }

      handleAssociateIdChange = (event) =>{
        this.setState({ associateID: event.target.value })
      }

      handleSkillNameChange = (event) =>{
        this.setState({ skillName: event.target.value })
      }
      handleSearchAssociateName = (event) => {
        //alert(this.state.username);
        event.preventDefault();
        this.refreshSearchDataByName(this.state.username);
      }

      handleSearchAssociateId = (event) => {
       // alert(this.state.associateID);
        event.preventDefault();
        this.refreshSearchDataById(this.state.associateID);
      }

      handleSearchSkillName = (event) => {
        //alert(this.state.skillName);
        event.preventDefault();
        this.refreshSearchDataBySkill(this.state.skillName);
      }


    render(){
        return(
            <div className="create">
              <h1>ADMIN PANEL</h1>
              <h3>Search Value</h3>
              <br/>
          <form onSubmit={this.handleSubmit}>
            <input
            type="text"
            value={this.state.username}
            onChange={this.handleUserNameChange} /> &nbsp;&nbsp;           
           <input type="button" onClick={this.handleSearchAssociateName} value="Search Name" />
            <br/>
            <input
            type="text"
            value={this.state.associateID}
            onChange={this.handleAssociateIdChange} /> &nbsp;&nbsp;
           <input type="button" onClick={this.handleSearchAssociateId}  value="Search Associate ID" />
           <br/>
           <select value={this.state.skillName} onChange={this.handleSkillNameChange}>            
           <option value="ANGULAR">ANGULAR</option>
            <option value="REACT">REACT</option>
            <option value="SPRING">SPRING</option>
            <option value="HIBERNATE">HIBERNATE</option>
            <option value="AWS">AWS</option>
            <option value="GIT">GIT</option>
            <option value="JAVA">JAVA</option>
          </select>&nbsp;&nbsp; 
           <input type="button" onClick={this.handleSearchSkillName} value="Search Skill Name" />
           </form>

          
<div className="container">
      <h1>Employee Search List</h1>
      <table className="table">
       <thead>
           <tr>
               <th>Name</th>
               <th>ID</th>
               <th>Email</th>
               <th>Mobile</th>
               <th width="30%">Skills</th>
           </tr>
       </thead>
       <tbody>
       {
           this.state.employees && this.state.employees.map (
            (employee,index) =>
                   <tr key={index}>
                       <td>{employee.enggName}</td>
                       <td>{employee.enggId}</td>
                       <td>{employee.email}</td>
                       <td>{employee.mobile}</td>
                       <td>{employee.skills && employee.skills.map( skill => {
          return (
            <tr key={index + " "+ skill.skillName}>
              <td> {skill.skillName} : {skill.expertise} </td>
            </tr>
          );
        }

                        ) 
                       
                       
                       }</td>
                   </tr>
           )
           }
       </tbody>
   </table>
   </div>
      </div>
        )
    }
}

export default SearchForm;