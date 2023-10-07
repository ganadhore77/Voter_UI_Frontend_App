import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VoterService {
  constructor(private http: HttpClient) {}

  public getAllVoters() {
    return this.http.get('http://localhost:8080/voter/getVoter');
  }

  public addVoter(voter:any) {
    console.log(voter);
    return this.http.post('http://localhost:8080/voter/addVoter',voter);
  }

  public deleteVoter(id:any) {
    // return this.http.delete('http://localhost:8080/voter/deleteVoter?id='+id);
    return this.http.delete('http://localhost:8080/voter/deleteVoter/'+id);
  }

  public updateVoter(voter:any) {
    return this.http.put('http://localhost:8080/voter/updateVoter',voter);
  }
}
