import { Injectable, signal } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class Api {

  readonly BASE_URL = "";
  
  books = signal<Book[]>([]);

  constructor() {
   
  }

  getBooks(){
    // const url = this.BASE_URL + "get";

    // fetch(url)
    // .then(resp => resp.json())
    // .then(data => this.books.set(data))
    // .catch(err => console.log(err))

    
  }

}
