import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee.modal';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
employee: Employee = {
  name:null,
  email:null
};
  constructor(private empservice: EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }
  saveEmployee():void{
    this.empservice.save(this.employee);
    this.router.navigate(['list']);
  }

}
