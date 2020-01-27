import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {

  data: any;
  // input_desc_model: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      // if (params && params.city_data) {
      //   this.data = JSON.parse(params.city_data);
      // }

      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.city_data;
        console.log(this.data);
      }
    });
   }

  ngOnInit() {
  }

   ionViewWillLeave() {
    console.log('Opuszczono stronę miasta: ' + this.data.name);
  }
}
