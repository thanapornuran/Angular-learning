import {
  Component,
  OnInit,
  Pipe
} from '@angular/core';

import { TranslateService } from '../translate.service';
import { JsonPipe } from '@angular/common';

import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  imports: [RouterOutlet, RouterLink, JsonPipe]
})

export class CardComponent implements OnInit {
  constructor(private translateService: TranslateService) {}
  
  data: any;

  ngOnInit() {
    this.translateService.getData().subscribe(response => {
      this.data = response;
      console.log(this.data);
    });
  }

  inputWord = "";
  
  onChangeInputWord(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log(target);
    
    const parsedValue = target.value;
    console.log(parsedValue);

    this.inputWord = parsedValue;
  }
}
