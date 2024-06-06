import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CovidApiService } from '../covid-api.service';

import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private covidApiService: CovidApiService) {

  }

  covid: any;

  ngOnInit(): any {
    this.covidApiService.getCovidData().subscribe(response => {
      this.covid = response;
      console.log(this.covid);
    });
  }
}
