import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  firstName = signal('sakib');
  lastName = signal('al hasan');
  finame:string=""
  laname:string=""

  fullName = computed(() => this.firstName()+ ' ' + this.lastName())
  // fuName = computed(()=> this.finame + " "+ this.laname);

  changeFirstName(name:string){
    console.log(name);
    this.firstName.set(name);
  }

  changeLastName(name:string){
    this.lastName.set(name);
  }
}
