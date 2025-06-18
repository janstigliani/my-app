import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Cards } from '../cards/cards';
import { Api } from '../../services/api';

@Component({
  selector: 'app-list',
  imports: [CommonModule, Cards],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {

  apiServ = inject(Api)
}
