import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomInput } from './../../models/custom-input.model';
import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-custom-input',
    templateUrl: './custom-input.component.html',
    styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit, OnDestroy {

    @Input() model: CustomInput;
    @Input() form: FormGroup;
    @Output() emitValue: EventEmitter<string> = new EventEmitter<string>();
    control: FormControl;
    error: any;
    private subs: Subscription;

    constructor() { }

    ngOnInit() {
        this.control = <FormControl>this.form.controls[this.model.id];
        this.subs = this.control.statusChanges.subscribe(data => {
            this.error = !this.control.valid && !this.control.errors.hasOwnProperty('required') &&
                this.control.dirty && this.control.value;
        });
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }

    changeValue() {
        this.emitValue.emit();
    }

}
