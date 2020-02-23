import { Injectable } from '@angular/core';
import { Employee } from '../employee.modal';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private listEmployees:Employee[]=[
  {
    name:'vadlakonda',
    email:'raju8696@getMaxListeners.com'
  },
  {
    name:'vadlakonda',
    email:'raju8696@getMaxListeners.com'
  }
];
  constructor() { }
  save(employee : Employee){
    this.listEmployees.push(employee);
  }
  getEmployees(){
    return this.listEmployees;
  }
}
