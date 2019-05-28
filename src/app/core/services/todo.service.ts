import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Todo} from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl: string;

  constructor(
    protected http: HttpClient
  ) {
    this.baseUrl = environment.api.url;
  }

  public getAll(): Observable<Todo[]> {
    const me = this;

    return me.http.get<any>(me.baseUrl, { observe: 'response' })
      .pipe(map(response => response.body.data.map(todo => (new Todo()).fromJson(todo))));
  }

  public post(todo): Observable<any> {
    const me = this;

    return me.http.post<any>(me.baseUrl, todo, { observe: 'response' })
      .pipe(map(response => (new Todo()).fromJson(response.body.data)));
  }

  public delete(todo):Observable<any> {
    const me = this;

    return me.http.delete<any>(me.baseUrl + '/' + todo.id, { observe: 'response' })
      .pipe(map(response => response));
  }
}
