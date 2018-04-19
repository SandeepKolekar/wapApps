import { Component, OnInit , ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  employeeData = [];
  employeeTempData = [];
  idSortFlag = false ;
  nameSortFlag = false ;
  emailSortFlag = false ;
  mobileSortFlag = false ;
  currentPage = 1 ;

  constructor(private router: Router) {
   // Create 100 users
   const users: UserData[] = [];
   for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

   // Assign the data to the data source for the table to render
   this.dataSource = new MatTableDataSource(users);

  }
  // Change Page No--------------------------------------
  changePageNo(pageNo){
  }

  closePage(){
    this.router.navigate(['home/dashboard']);
  }

  // Table coulmn sort--------------------------------------
  tableSort(sortValue , sortFlag) {
    this.employeeData.sort((a, b) => {
      let aPz = a[sortFlag];
      let bPz = b[sortFlag];

      if (sortValue) {
        return bPz - aPz;
       } else {
        return aPz - bPz;
       }
    });
  /*
      this.employeeData.sort( function(employeeDataA, employeeDataB) {
  	    if ( employeeDataA[sortFlag] < employeeDataB[sortFlag] ){
  	    	return -1;
  	    }else if( employeeDataA[sortFlag] > employeeDataB[] ){
  	        return 1;
  	    }else{
  	    	return 0;
  	    }
  	});
  */
    return  sortValue ;
  }

  // Table filter------------------------------------------------
  tableFilter( id , name , email , mobile) {
    this.employeeData = this.employeeTempData ;
    if (id) {
      this.employeeData = this.employeeData.filter( data =>  (data.id).includes(id));
    }
    if (name) {
      this.employeeData = this.employeeData.filter( data =>  (data.name).includes(name));
    }
    if (email) {
      this.employeeData = this.employeeData.filter( data =>  (data.email).includes(email)); 
    }
    if (mobile) {
      this.employeeData = this.employeeData.filter( data =>  (data.mobile).includes(mobile));
    }
  }
  // ng On Init------------------------------------------------
  ngOnInit() {
    this.employeeData = [
      {id : '1', name: 'sandeep kolekar', email: 'sandeep@gmail.com', mobile: '9857585525'},
      {id : '3', name: 'manisha kadam', email: 'manisha@gmail.com', mobile: ''},
      {id : '2', name: 'manisha kadam', email: 'manisha@gmail.com', mobile: '4525255555'},
      {id : '2', name: 'manisha kadam', email: 'manisha@gmail.com', mobile: '4525255555'},
      {id : '2', name: 'manisha kadam', email: 'manisha@gmail.com', mobile: '1455555555'},
      {id : '2', name: 'manisha kadam', email: '', mobile: '4525255555'},
      {id : '11', name: 'manisha kadam', email: 'manisha@gmail.com', mobile: '4525255555'},
      {id : '2', name: 'manisha kadam', email: 'manisha@gmail.com', mobile: ''},
      {id : '3', name: 'kedar medhekar', email: 'kedar@gmail.com', mobile: '4525125255'
      }
    ];
    this.employeeTempData = this.employeeData  ;
  }

  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };



}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
