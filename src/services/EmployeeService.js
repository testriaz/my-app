import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/skill-tracker/api/v1/test/message";

class EmployeeService {

    getEmployees(){
        var test = axios.get(EMPLOYEE_API_BASE_URL);
        console.log(test.data);
        return test;
    }

    // createEmployee(employee){
    //     return axios.post(EMPLOYEE_API_BASE_URL, employee);
    // }

    // getEmployeeById(employeeId){
    //     return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    // }

    // updateEmployee(employee, employeeId){
    //     return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    // }

    // deleteEmployee(employeeId){
    //     return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    // }
}

export default new EmployeeService()