import { PopupData } from './../../../shared/models/popup-data.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class PopupService {

    activePopup: Observable<PopupData>;
    onPopupClose: Observable<boolean>;

    private activePopupSubj: Subject<PopupData> = new Subject<PopupData>();
    private onPopupCloseSubj = new Subject<boolean>();
    private popupStack: any[] = [];

    constructor() {
        this.activePopup = this.activePopupSubj.asObservable();
        this.onPopupClose = this.onPopupCloseSubj.asObservable();
    }

    openPopup(data: PopupData) {
        this.popupStack.push(data);
        this.displayPopup();
    }

    closePopup() {
        this.popupStack.pop();
        this.onPopupCloseSubj.next(true);
        if (this.popupStack.length) {
            this.displayPopup();
        } else {
            this.activePopupSubj.next(null);
        }
    }

    private displayPopup() {
        this.activePopupSubj.next(this.popupStack[this.popupStack.length - 1]);
    }

}
