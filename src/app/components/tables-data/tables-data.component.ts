import { getTestBed } from '@angular/core/testing';
import { Post } from './../../../dto/post';
import { JsonApiService } from './../../services/json-api.service';
import { Component, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-tables-data',
  templateUrl: './tables-data.component.html',
  styleUrls: ['./tables-data.component.scss']
})
export class TablesDataComponent implements OnInit {

  constructor(public jsonService : JsonApiService) { }



  posts: Post[];


  ngOnInit() {


    this.jsonService.get_products().subscribe(posts => {

      this.posts = posts
      console.log(posts);

    }
  
      );

  }





}
