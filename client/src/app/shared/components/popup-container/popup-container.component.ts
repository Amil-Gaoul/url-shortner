import { PopupAnimation } from './popup.animation';
import { PopupData } from './../../models/popup-data.model';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PopupService } from '../../../core/services/popup/popup.service';

@Component({
    selector: 'app-popup-container',
    templateUrl: './popup-container.component.html',
    styleUrls: ['./popup-container.component.scss'],
    animations: [PopupAnimation]
})
export class PopupContainerComponent implements OnInit, OnDestroy {

    show: boolean;
    data: PopupData;

    private sub: Subscription;

    constructor(private popupService: PopupService) {
        this.sub = this.popupService.activePopup.subscribe(data => {
            if (!data) {
                this.show = false;
                this.data = null;
                return;
            }
            this.show = true;
            this.data = data;
        });
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    close() {
        this.popupService.closePopup();
    }

}
