import { CustomInput } from './../../models/custom-input.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    @Output() emitUrl: EventEmitter<string> = new EventEmitter<string>();
    formGroup: FormGroup;
    inputs: CustomInput[];

    constructor(private formBuild: FormBuilder) {
        this.formGroup = this.formBuild.group({
            url: [ null, [Validators.required] ]
        });
    }

    ngOnInit() {
        this.initControls();
    }

    initControls() {
        this.inputs = [
            {
                id: 'url',
                value: null,
                placeholder: 'Your original URL here',
                errorText: 'URL is required',
                type: 'text'
            }
        ];
    }

    creatShortUrl() {
        this.emitUrl.emit(this.inputs[0].value);
    }

}
