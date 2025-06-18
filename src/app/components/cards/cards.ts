import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cards',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.scss'
})
export class Cards {

 title = input('', {alias: 'book-title' });
  author = input('', {alias: 'book-author'});

}
