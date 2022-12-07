import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private api:ApiService){}
  coursetitle=""
  readValues:any=[]
  readValue=()=>{
    let data={"coursetitle":this.coursetitle}
    console.log(data)
    this.api.readValues(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("invalid course")
          
        } else {
          this.readValues=response
          
        }
      }
    )
  }
  

}
