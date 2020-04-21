import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../app.model';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AssignmentService } from '../assignment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'image'];
  ELEMENT_DATA: User[];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private assignmentService:AssignmentService, private router:Router) {}
  
  ngOnInit() {
    this.assignmentService.getUsersData().subscribe((data)=> {
      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    },(err)=> {
      console.log(err);
    })
  }

  detailUser(user:User) {
    this.assignmentService.userDetail = user.login;
    this.router.navigate(['userDetail']);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
