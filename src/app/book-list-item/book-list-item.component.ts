import { Component, Input, OnInit } from '@angular/core';

import { IBook } from '../shared/book';

@Component({
  selector: 'cbm-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {

    @Input() book?: IBook;

    constructor() {
    }

    ngOnInit(): void {
    }

}
