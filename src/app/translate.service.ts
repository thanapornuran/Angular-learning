import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  constructor(private http: HttpClient) { }

  apiUrl = "https://libretranslate.com/translate";

  getData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  addPost(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/posts`, post);
  }

}
