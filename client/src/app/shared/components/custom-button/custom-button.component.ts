import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-custom-button',
    templateUrl: './custom-button.component.html',
    styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {

    @Output() emitClick = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    btnClick() {
        this.emitClick.emit();
    }

}
