import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addcourse=(datatosend:any)=>
{
  return this.http.post("http://localhost:8080/add",datatosend)
}
  fetchcourses=()=>
  {
    return this.http.get("http://localhost:8080/view")
}

}
