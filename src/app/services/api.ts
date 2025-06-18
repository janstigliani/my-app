import { effect, Injectable, signal } from '@angular/core';
import { Book } from '../models/book';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class Api {

  readonly BASE_URL = "";

  books = signal<Book[]>([]);

  categories = signal<Category[]>([])

  constructor() {

    this.getBooks();
    this.getCategories();

  }

  getBooks() {
    // const url = this.BASE_URL + "get";

    fetch("/book.json")
    .then(resp => resp.json())
    .then(data => this.books.set(data))
    .catch(err => console.log(err));
  }

  async getCategories() {
    // const url = this.BASE_URL + "get";

    // const books = await fetch(url)
    // .then(resp => resp.json())
    // .then(data => this.books.set(data))
    // .catch(err => console.log(err));
    this.categories.set([{id : 1, name : "narrativa" }])
  }

  filterByCategory(id: number) {
    const url = this.BASE_URL + "get";

    const books = fetch(url)
    .then(resp => resp.json())
    .then(data => this.books.set(data))
    .catch(err => console.log(err));
  }

}
