import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  #message = {
    title: "Soy un mensaje",
    description: "Soy una descripción"
  }

  constructor() { }

  getMessage(){
    return this.#message
  }
}
