import { Component, OnInit } from '@angular/core';

interface Book {
  name: string;
  newPrice: number;
  oldPrice: number;
  discount: number;
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books: Book[] = [
    { name: "Kỷ nguyên ronaldo và messi", newPrice: 280000, oldPrice: 100000, discount: 64 },
    { name: "Kỷ nguyên ronaldo và messi", newPrice: 280000, oldPrice: 100000, discount: 64 },
    { name: "Kỷ nguyên ronaldo và messi", newPrice: 280000, oldPrice: 100000, discount: 64 },
    { name: "Kỷ nguyên ronaldo và messi", newPrice: 280000, oldPrice: 100000, discount: 64 },
    { name: "Kỷ nguyên ronaldo và messi", newPrice: 280000, oldPrice: 100000, discount: 64 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
