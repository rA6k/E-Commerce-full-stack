import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  logo:string="../../../assets/image/home.jpeg"
  constructor() { }

  ngOnInit(): void {
  }
  images = ['../../assets/image/1.jpg', '../../assets/image/2.jpg', '../../assets/image/3.jpg'];

}
