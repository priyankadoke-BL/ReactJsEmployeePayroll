import axios from 'axios';


class EmployeeService {
      baseUrl= "http://localhost:8080";
  
  addEmployee(data) {
    return axios.post(`${this.baseUrl}employeepayrollservice/create`, data);
  }

  getAllEmployees() {
    return axios.get(`${this.baseUrl}employeepayrollservice/get/all`);
  }

  getEmployee(employee_id) {
    return axios.get(`${this.baseUrl}employeepayrollservice/get/${employee_id}`);
  }

  updateEmployee(employee_id,data) {
    return axios.put(`${this.baseUrl}employeepayrollservice/update/${employee_id}`, data);
  }
  
  deleteEmployee(employee_id) {
    return axios.delete(`${this.baseUrl}employeepayrollservice/delete/${employee_id}`);
    
  }
}  
export default new EmployeeService();