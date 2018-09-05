import { Pager } from './../../models/pager.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

    @Input() pager: Pager;
    @Output() emitPage: EventEmitter<number> = new EventEmitter<number>();

    faCaretLeft = faCaretLeft;
    faCaretRight = faCaretRight;

    constructor() { }

    ngOnInit() {
        console.log(this.pager);
    }

    emitActivePage(page: number) {
        this.emitPage.emit(page);
    }

}
