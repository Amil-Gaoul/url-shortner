import { Pager } from './../../models/pager.model';
import { ShortUrl } from './../../models/short-url.model';
import { Copied } from './../../models/copied.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    @Input() shortUrls: ShortUrl[];
    @Input() pager: Pager;
    @Output() emitCopied: EventEmitter<Copied> = new EventEmitter<Copied>();

    constructor() { }

    ngOnInit() {
        console.log(this.shortUrls);
    }

    copied(ev: Copied) {
        this.emitCopied.emit(ev);
    }

}
