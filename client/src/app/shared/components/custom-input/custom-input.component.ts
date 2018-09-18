import { FormGroup, FormControl } from '@angular/forms';
import { CustomInput } from './../../models/custom-input.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-custom-input',
    templateUrl: './custom-input.component.html',
    styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

    @Input() model: CustomInput;
    @Input() form: FormGroup;
    @Output() emitValue: EventEmitter<string> = new EventEmitter<string>();
    control: FormControl;
    error: any;

    constructor() { }

    ngOnInit() {
        this.control = <FormControl>this.form.controls[this.model.id];
    }

    changeValue() {
        this.emitValue.emit();
    }

}
