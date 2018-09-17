import { Pager } from './../../models/pager.model';
import { ShortUrl } from './../../models/short-url.model';
import { Copied } from './../../models/copied.model';
import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
    ViewChildren,
    QueryList,
    AfterViewInit,
    OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnDestroy {

    @Input() shortUrls: ShortUrl[];
    @Input() pager: Pager;
    @Output() emitCopied: EventEmitter<Copied> = new EventEmitter<Copied>();

    @ViewChildren('headers') tableHeaders: QueryList<ElementRef>;
    @ViewChildren('rows') tableRows: QueryList<ElementRef>;
    @ViewChild('body') tableBody: ElementRef;
    formatDate: 'dd/MM/YYYY';
    truncSymbols = 40;
    private headerText: any[] = [];
    private subs: Subscription;

    constructor() { }

    ngAfterViewInit() {
        if (this.tableRows.length && this.tableHeaders.length) {
            this.subs = this.tableRows.changes.subscribe(changes => this.buildTableHeaders());
            this.buildTableHeaders();
        }
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }

    copied(ev: Copied) {
        this.emitCopied.emit(ev);
    }

    private buildTableHeaders() {
        const headers = this.tableHeaders.toArray();
        const rows = this.tableRows.toArray();
        for (let i = 0; i < headers.length; i++) {
            this.headerText.push(headers[i].nativeElement.textContent.replace(/\r?\n|\r/, ''));
        }
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i].nativeElement;
            for (let j = 0; j < row.cells.length; j++) {
                const col = row.cells[j];
                col.setAttribute('data-th', this.headerText[j]);
            }
        }
    }

}
