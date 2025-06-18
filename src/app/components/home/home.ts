import { Component, inject } from '@angular/core';
import { Api } from '../../services/api';
import { Header } from "../header/header";
import { List } from "../list/list";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-home',
  imports: [Header, List, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  apiServ = inject(Api);
  bookArray= [];

  constructor()
  {
   console.log(this.apiServ.books());
  }

}
