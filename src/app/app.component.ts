import {
  Component,
  Pipe,
  OnInit
} from '@angular/core';
import {
  RouterOutlet, RouterLink
} from '@angular/router';
import {
  CardComponent
} from './card/card.component';
import {
  CovidApiService
} from './covid-api.service';
import {
  CommonModule,
  JsonPipe
} from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, CardComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  constructor(private covidApiService: CovidApiService) {

  }

  message = "";
  covid: any;

  onMouseOver() {
    this.message = 'Way to go 🚀';
    console.log("mouse enter");
  }

  ngOnInit(): any {
    this.covidApiService.getCovidData().subscribe(response => {
      this.covid = response;
      console.log(this.covid);
    });
  }
}
