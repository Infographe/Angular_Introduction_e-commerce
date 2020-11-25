import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Introduction';

  products: Object[] = [
    {
      "type": "phone",
      "brand": "Peach",
      "name": "topPhone 8 32go",
      "popularity": 4,
      "price": 900,
      "picture": 'topphone.jpeg',
      "stock": 80
    },
    {
      "type": "phone",
      "brand": "Threestars",
      "name": "bigPhone 9",
      "popularity": 4,
      "price": 700,
      "picture": 'bigphone.jpeg',
      "stock": 150
    },
    {
      "type": "phone",
      "brand": "Peach",
      "name": "topPhone 8 256go",
      "popularity": 4,
      "price": 1300,
      "picture": 'topphone.jpeg',
      "stock": 100
    },
    {
      "type": "phone",
      "brand": "Konia",
      "name": "4000",
      "price": 200,
      "picture": 'konia4000.jpeg',
      "stock": 0
    }
  ];

  time: number;

  countChange(event){
    this.time = event;
  }
}
