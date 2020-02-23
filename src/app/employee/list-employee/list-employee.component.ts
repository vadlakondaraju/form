import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
employees:any;
  constructor(private empservice: EmployeeService) { }

  
  ngOnInit(): void {
    this.employees=this.empservice.getEmployees();
  }

}
