import { Injectable, QueryList } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Post } from 'src/dto/post';
import { HandleError, HttpErrorHandler } from '../http-error-handler.service';
@Injectable({
  providedIn: 'root'
})
export class JsonApiService {
  private handleErrors: HandleError;
  baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor(
    private httpClient: HttpClient, 
    httpErrorHandler: HttpErrorHandler) {
      this.handleErrors = httpErrorHandler.createHandleError('JsonApiService');}
  get_posts(): Observable<HttpResponse<Post[]>> {
    return this.httpClient.get<Post[]>(this.baseUrl + '/posts', { observe: 'response' })
    .pipe(
      //upon failure it retries up to 3 times
      retry(3),
      catchError(this.handleErrors)
    );;
    };
addPost(post: Post): Observable<Post> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  return this.httpClient.post<Post>(this.baseUrl + '/posts', post, httpOptions)
    .pipe(
      catchError(this.handleErrors('addHero', post))
    );
}
}
