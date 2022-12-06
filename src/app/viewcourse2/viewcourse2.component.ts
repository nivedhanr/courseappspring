import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewcourse2',
  templateUrl: './viewcourse2.component.html',
  styleUrls: ['./viewcourse2.component.css']
})
export class Viewcourse2Component {
  constructor(private api:ApiService){
    api.fetchcourses().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }
  data:any=[]
}
