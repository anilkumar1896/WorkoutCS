import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../Services/category.service';
import { Category } from '../../Category';
import { error } from 'protractor';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
/** list component*/
export class ListComponent implements OnInit {
    
  /** list ctor */
  cat: Category[];
  constructor(private service: CategoryService) {

   
  }
  ngOnInit(): void {
    this.service.getAll().subscribe(
      (data) => this.cat = data,
      (error) => alert('errror')

    );
  }



}
