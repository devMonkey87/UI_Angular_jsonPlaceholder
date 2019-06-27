import { Injectable, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Post } from 'src/dto/post';

@Injectable({
  providedIn: 'root'
})
export class JsonApiService {

  constructor(private httpClient: HttpClient){ }


  baseUrl = 'https://jsonplaceholder.typicode.com';


  get_products(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.baseUrl + '/posts');
    };



}




