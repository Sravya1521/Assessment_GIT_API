import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  userDetail:string;

  constructor(private http:HttpClient) { }

  getUsersData():Observable<User[]>{
    return this.http.get<User[]>('https://api.github.com/users');
  }

  getUserDetails(name:string):Observable<any> {
    return this.http.get<any>('https://api.github.com/users/'+name);
  }

  getReposList(url:string):Observable<any> {
    return this.http.get<any>(url);
  }

  getFollowersList(url:string):Observable<any> {
    return this.http.get<any>(url);
  }
}
