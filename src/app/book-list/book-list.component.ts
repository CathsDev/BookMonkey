import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { IBook } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
    selector: 'cbm-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    books: IBook[] = [];
    @Output() showDetailsEvent = new EventEmitter<IBook>();

    constructor(private bss: BookStoreService) {
    }

    ngOnInit(): void {
        this.books = this.bss.getAllBooks();
    }

    showDetails(book: IBook) {
        this.showDetailsEvent.emit(book);
    }

}
