import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {
  
  courseTitle=""
  courseDescription=""
  courseDate=""
  courseDuration=""
  distributor=""
  courseVenue=""
  constructor(private api:ApiService){}
  readValues=()=>
{
  let data:any={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"distributor":this.distributor,"courseDate":this.courseDate,"courseVenue":this.courseVenue}
  console.log(data)
  this.api.addcourse(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.status == "success") {
        alert("Course added successfully")
        this.courseTitle=""
        this.courseDate=""
        this.courseDescription=""
        this.courseVenue=""
        this.courseDuration=""
        this.distributor=""
      }else{
        alert("Something went wrong")
      }
      }
  )
}
}
