import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent implements OnInit {
  firstName = signal('sakib');
  lastName = signal('al hasan');
  finame:string=""
  laname:string=""
  userForm:any;
  employee = signal<object[]>([
    {name:'sakib', email:'bsse1209'},
    {name:'hasan',email:'bsse1212'}
  ]);

  fullName = computed(() => this.firstName()+ ' ' + this.lastName())

  constructor(private formBuilder:FormBuilder){}
  employeeForm!: FormGroup;
  
  employees = signal([
    { name: 'John Smith', position: 'Manager', department: 'Sales' },
    { name: 'Jane Doe', position: 'Engineer', department: 'Engineering' },
    { name: 'Bob Johnson', position: 'Marketing Specialist', department: 'Marketing' },
    { name: 'Sarah Lee', position: 'HR Manager', department: 'Human Resources' },
    { name: 'Michael Brown', position: 'IT Support', department: 'IT' }
  ]);

  empAdding= signal<boolean>(false);

  toggleAddBlock(){
    this.empAdding.update(status => !status);
  }
  
  
  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      department: ['', Validators.required]
    });
  }

  onSubmit() {
    this.employees.update(empList => [...empList, this.employeeForm.value]);
    this.employeeForm.reset()
   // Update the position of the employee at index 1 to 'Software Engineer'
this.employees.update(value => [
  ...value.slice(0,1),
  { ...value[1], position: 'Software Engineer' },
  ...value.slice(2)
]);

  }
  

  changeFirstName(name:string){
    console.log(name);
    this.firstName.set(name);
  }

  changeLastName(name:string){
    this.lastName.set(name);
  }
}
