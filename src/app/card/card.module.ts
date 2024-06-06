// In app.module.ts
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule // Import CommonModule ที่นี่
  ],
})

export class CardModule { 

}