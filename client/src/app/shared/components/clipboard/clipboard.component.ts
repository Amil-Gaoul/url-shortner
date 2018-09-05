import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Copied } from './../../models/copied.model';

@Component({
    selector: 'app-clipboard',
    templateUrl: './clipboard.component.html',
    styleUrls: ['./clipboard.component.scss']
})
export class ClipboardComponent implements OnInit {

    @Input() content: string;
    @Output() emitCopied: EventEmitter<Copied> = new EventEmitter<Copied>();
    faCopy = faCopy;

    constructor() { }

    ngOnInit() {
    }

    copied(ev: Copied) {
        this.emitCopied.emit(ev);
    }

}
