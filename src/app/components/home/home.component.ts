import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images=[]
  

  constructor(private _http: HttpClient) {
    this.images = [
      { name: '../../../assets/img/caresual imgs/1 (1).jpg' },
      { name: '../../../assets/img/caresual imgs/1 (2).jpg' },
      { name: '../../../assets/img/caresual imgs/1 (3).jpg' },
      { name: '../../../assets/img/caresual imgs/1 (4).jpg' },
      { name: '../../../assets/img/caresual imgs/1 (5).jpg' },
      { name: '../../../assets/img/caresual imgs/1 (6).jpg' },
      { name: '../../../assets/img/caresual imgs/1 (7).jpg' },     
    ]
  }
  

  ngOnInit() {
   
  }
  
  
 
  
}