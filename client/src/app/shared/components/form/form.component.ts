import { CustomInput } from './../../models/custom-input.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    formGroup: FormGroup;
    isDisabled: boolean;
    inputs: CustomInput[];

    constructor(private formBuild: FormBuilder) { }

    ngOnInit() {
        this.isDisabled = true;
        this.initForm();
    }

    initForm() {
        this.formGroup = this.formBuild.group({
            url: [ '', Validators.required ]
        });
    }

    initControls() {
        this.inputs = [
            {
                id: 'url',
                value: null,
                placeholder: 'Your original URL here',
                type: 'text'
            }
        ];
    }

    validForm() {
        if (this.formGroup.valid) {
            this.isDisabled = false;
            return;
        }
        this.isDisabled = true;
    }

}
