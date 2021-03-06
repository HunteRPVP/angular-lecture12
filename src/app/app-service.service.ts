import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  a: number = 5;

  constructor() { }

  square(): number {
    return this.a * this.a;
  }
}
