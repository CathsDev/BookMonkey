import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IBook } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'cbm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

    book?: IBook;

    constructor(
        private  bss: BookStoreService,
        private route: ActivatedRoute
        ) { }

    ngOnInit(): void {
        const params = this.route.snapshot.paramMap;
        this.book = this.bss.getBook(params.get('isbn') || '');
    }

    getRating(num: number) {
        return new Array(num);
    }

}
