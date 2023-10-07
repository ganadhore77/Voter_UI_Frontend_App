import { Component } from '@angular/core';
import { VoterService } from '../voter.service';

@Component({
  selector: 'app-add-voter',
  templateUrl: './add-voter.component.html',
  styleUrls: ['./add-voter.component.css'],
})
export class AddVoterComponent {
  firstName: any;
  middleName: any;
  lastName: any;
  permanentAddress: any;
  currentAddress: any;
  age: any;
  aadharNumber: any;
  email: any;

  constructor(private service: VoterService) {}

  clear() {
    this.firstName = '';
    this.middleName = '';
    this.lastName = '';
    this.permanentAddress = '';
    this.currentAddress = '';
    this.age = '';
    this.aadharNumber = '';
    this.email = '';
  }

  submit() {
    if (
      this.firstName != '' &&
      this.middleName != null &&
      this.lastName != null &&
      this.permanentAddress != null &&
      this.currentAddress != null &&
      this.age != null &&
      this.aadharNumber != null &&
      this.email != null
    ) {
      let obj = {
        firstName: this.firstName,
        middleName: this.middleName,
        lastName: this.lastName,
        permanentAddress: this.permanentAddress,
        currentAddress: this.currentAddress,
        age: this.age,
        aadharNumber: this.aadharNumber,
        email: this.email,
      };
      console.log(obj);
      alert("Voter added")
      this.service.addVoter(obj).subscribe((data) => console.log('saved'));
    }
    else{
      alert("Please enter the all fields..!")
    }
    this.clear();
  }
}
