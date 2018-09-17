import { Pager } from './../../models/pager.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

    @Input() pager: Pager;
    @Output() emitPage: EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
        console.log(this.pager);
    }

    emitActivePage(page: number) {
        this.emitPage.emit(page);
    }

}
