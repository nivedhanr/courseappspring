import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchcourses=()=>
  {
    return this.http.get("https://localhost:8080/view")
}
addcourse=(datatosend:any)=>
{
  return this.http.post("https://localhost:8080/add",datatosend)
}
}
