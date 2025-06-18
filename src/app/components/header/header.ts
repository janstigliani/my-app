import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Api } from '../../services/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {


  apiServ = inject(Api);
  selectedCategoryId = -1;

  constructor() {

  }

  getSelectId() {
    const id = this.selectedCategoryId;
    console.log(id)
    this.apiServ.filterByCategory(id)
  }

  filterByText() {
    const div = document.getElementById("search") as HTMLDivElement;
    console.log(div);
    const text = div.innerText;
    console.log(text);
    this.apiServ.filterByText(text)
  }
}
