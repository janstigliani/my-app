import { effect, Injectable, signal } from '@angular/core';
import { Book } from '../models/book';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class Api {

  readonly BASE_URL = "https://localhost:7010/api/";

  books = signal<Book[]>([]);

  categories = signal<Category[]>([])

  constructor() {

    this.getBooks();
    this.getCategories();

  }

  getBooks() {
    const url = this.BASE_URL + "Book/all";

    fetch(url)
    .then(resp => resp.json())
    .then(data => this.books.set(data))
    .catch(err => console.log(err));
  }

  async getCategories() {
    const url = this.BASE_URL + "Category/all";

    const books = await fetch(url)
    .then(resp => resp.json())
    .then(data => this.categories.set(data))
    .catch(err => console.log(err));
    // this.categories.set([{id : 1, name : "narrativa" }])
  }

  filterByCategory(id: number) {
    const url = this.BASE_URL + "Book/bookByCategoryId/"+id;

    const books = fetch(url)
    .then(resp => resp.json())
    .then(data => this.books.set(data))
    .catch(err => console.log(err));
  }

  filterByText(text: string) {
    const url = this.BASE_URL + "Book/bookByTitle/"+text;

    const books = fetch(url)
    .then(resp => resp.json())
    .then(data => this.books.set(data))
    .catch(err => console.log(err));
  }

}
