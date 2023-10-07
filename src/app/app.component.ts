import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Voter';

  addFlag = false;
  deleteFlag = false;
  updateFlag = false;
  getFlag = false;

  deleteFunction(){
    this.deleteFlag=true;
    console.log("delete work");

    this.addFlag = false;
    this.updateFlag = false;
    this.getFlag = false;
  }

  updateFunction(){
    this.updateFlag=true;
    console.log("update work");

    this.addFlag = false;
    this.deleteFlag = false;
    this.getFlag = false;
  }

  getFunction(){
    this.getFlag=true;
    console.log("get work");

    this.addFlag = false;
    this.deleteFlag = false;
    this.updateFlag = false;
  }

  addFunction(){
    this.addFlag=true;
    console.log("add work");

    this.deleteFlag = false;
    this.updateFlag = false;
    this.getFlag = false;
  }
}
