import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {
  
  coursetitle=""
  description=""
  date=""
  duration=""
  venu=""
  constructor(private api:ApiService){}
  readValues=()=>
{
  let data:any={"coursetitle":this.coursetitle,"description":this.description,"duration":this.duration,"date":this.date,"venu":this.venu}
  console.log(data)
  this.api.addcourse(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.status == "success") {
        alert("Course added successfully")
        this.coursetitle=""
        this.date=""
        this.description=""
        this.venu=""
        this.duration=""
       
      }else{
        alert("Something went wrong")
      }
      }
  )
}
}
