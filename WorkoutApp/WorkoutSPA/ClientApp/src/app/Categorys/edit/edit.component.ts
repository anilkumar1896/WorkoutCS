import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../Services/category.service';
import { error } from 'util';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
/** edit component*/
export class EditComponent implements OnInit {
  
  /** edit ctor */
  constructor(private activated: ActivatedRoute, private service: CategoryService) {

  }
  ngOnInit() {
    let id = this.activated.snapshot.paramMap.get('id');
    this.service.getById(id).subscribe(
      (data) => console.log(data),
      (error) => alert('error'));
  }
}
