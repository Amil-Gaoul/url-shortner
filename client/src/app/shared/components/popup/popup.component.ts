import { PopupService } from './../../../core/services/popup/popup.service';
import { Component, OnInit, Input } from '@angular/core';
import { PopupData } from '../../models/popup-data.model';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

    @Input() model: PopupData;
    modalOpen: boolean;

    constructor() { }

    ngOnInit() {
    }

    closePopup() {
        
    }

}
