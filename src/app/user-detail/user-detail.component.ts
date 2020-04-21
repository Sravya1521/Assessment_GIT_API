import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../assignment.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  UserName: string;
  UserImage: string;
  repoList: any[];
  followerList: any[];

  constructor(private assignmentService: AssignmentService) { }

  ngOnInit() {
    this.assignmentService.getUserDetails(this.assignmentService.userDetail).subscribe((data) => {
      this.UserName = data.login;
      this.UserImage = data.avatar_url;
      this.assignmentService.getReposList(data.repos_url).subscribe((data) => {
        this.repoList = data;
      },(err)=> {
        console.log(err);
      });
      this.assignmentService.getFollowersList(data.followers_url).subscribe((data) => {
        console.log(data);
        this.followerList = data;
      },(err)=> {
        console.log(err);
      });
    },(err)=> {
      console.log(err);
    });
  }

}
