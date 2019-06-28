import { Post } from 'src/dto/post';
import { getTestBed } from '@angular/core/testing';
import { JsonApiService } from './../../services/json-api.service';
import { Component, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-tables-data',
  templateUrl: './tables-data.component.html',
  styleUrls: ['./tables-data.component.scss']
})
export class TablesDataComponent implements OnInit {

  constructor(public jsonService: JsonApiService) { }



  posts: Post[];
  cols: any[];
  headers;


  ngOnInit() {

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Title' },
      { field: 'body', header: 'Body' },
    ];



    this.loadData();



  }

  loadData() {


    this.jsonService.get_posts().subscribe(resp => {


      // display its headers
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);

      this.posts = resp.body;


      console.log(this.headers);

    }

    );

  }



  addPost() {
let postToAdd = new Post();

postToAdd.userId = 9999999;
postToAdd.id = 9999999;
postToAdd.body = 'this is random';
postToAdd.title = 'this is even more random';

    this.jsonService.addPost(postToAdd).subscribe(post => {

      this.posts.push(post);
      console.log(post);

    });





  }





}
