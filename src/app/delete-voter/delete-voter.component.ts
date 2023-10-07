import { Component } from '@angular/core';
import { VoterService } from '../voter.service';

@Component({
  selector: 'app-delete-voter',
  templateUrl: './delete-voter.component.html',
  styleUrls: ['./delete-voter.component.css']
})
export class DeleteVoterComponent {

  constructor(private service:VoterService){}

  voterList:any;

  ngOnInit():void{
    this.showAllUser();
  }

  showAllUser(){
    this.service.getAllVoters().subscribe(data=> this.voterList = data);
    console.log(this.voterList);
  }

  deleteVoter(a:any){
    alert("Voter Deleted Successfully");
    console.log(a);
    this.service.deleteVoter(a).subscribe();
    this.showAllUser();
  }


}
