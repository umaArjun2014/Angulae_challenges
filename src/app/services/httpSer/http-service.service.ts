import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private REST_API_SERVER = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }

  // send the list of users from API call
  sendGetReponce() {
    return this.http.get(this.REST_API_SERVER);
  }
}
