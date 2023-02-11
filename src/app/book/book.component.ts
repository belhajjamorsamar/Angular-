import { Component,Input } from '@angular/core';
import  {Book} from '../types/Book'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book:Book = {} as Book;

  addTocard(){
    alert("it's work")
  }
}
