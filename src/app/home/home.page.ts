import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cities = [
    {
      name: 'Zielona Góra',
      imgurl: '/assets/city1.png',
      description: 'Some text to show about Zielona Góra'
    },
    {
      name: 'Kraków',
      imgurl: '/assets/city2.png',
      description: 'Some text to show about Krakow'
    },
    {
      name: 'Lublin',
      imgurl: '/assets/city3.png',
      description: 'Some text to show about Lublin'
    },
    {
      name: 'Gdańsk',
      imgurl: '/assets/city4.png',
      description: 'Some text to show about Gdańsk'
    }
  ];

  photos: any[];
  constructor(private router: Router, public camera: Camera, public file: File) {}

  openDetailsWithQueryParams(id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        city_data: JSON.stringify(this.cities[id])
      }
    };
    this.router.navigate(['city'], navigationExtras);
  }

  showCity(id) {
    let navigationExtras: NavigationExtras = {
      state: {
        city_data : this.cities[id]
      }
    };
    this.router.navigate(['city'], navigationExtras);
  }
}
