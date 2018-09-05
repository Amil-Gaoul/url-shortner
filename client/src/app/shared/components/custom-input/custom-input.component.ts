import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-custom-input',
    templateUrl: './custom-input.component.html',
    styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

    @Output() emitValue: EventEmitter<string> = new EventEmitter<string>();
    value: string;

    constructor() { }

    ngOnInit() {
    }

    changeValue(ev) {
        this.emitValue.emit(ev);
    }

}
