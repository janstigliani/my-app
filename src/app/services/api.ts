import { effect, Injectable, signal } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class Api {

  readonly BASE_URL = "";

  books = signal<Book[]>([]);

  constructor() {

    this.getBooks();

  }

  async getBooks() {
    // const url = this.BASE_URL + "get";

    const books = await fetch("/book.json")
    .then(resp => resp.json())
    .then(data => this.books.set(data))
    .catch(err => console.log(err));
  }

}
