import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private apiUrl = 'http://localhost:9876';
  constructor(private http: HttpClient) { }


  tokenGenerate(username: string,password:string):Observable<{jwt:string}>{
    const url = `${this.apiUrl}/authenticate`;
    let jsonRequestBody: any={username:username,password:password};
    return this.http.post<{jwt:string}>(url,jsonRequestBody);
  }

  greet(token:string):Observable<string>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const url = `${this.apiUrl}/greet`;
    return this.http.get<string>(url,{headers,responseType: 'text' as 'json'});
  }
}


