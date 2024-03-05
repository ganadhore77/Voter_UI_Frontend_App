import { Component } from '@angular/core';
import { VoterService } from '../voter.service';

@Component({
  selector: 'app-display-voter',
  templateUrl: './display-voter.component.html',
  styleUrls: ['./display-voter.component.css']
})
export class DisplayVoterComponent {

constructor(private service:VoterService){}

voterList:any;

ngOnInit():void{
this.service.getAllVoters().subscribe(data => this.voterList = data);

console.log(this.voterList);
}

}
