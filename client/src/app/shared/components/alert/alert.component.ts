import { FlyInOutAnimation } from './alert.animation';
import { AlertType } from './../../models/alert-type.enum';
import { Alert } from './../../models/alert.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    animations: [FlyInOutAnimation]
})
export class AlertComponent implements OnInit, OnChanges {

    @Input() alert: Alert;
    alerts: Alert[] = [];
    alertType;

    constructor() { }

    ngOnInit() {
        this.alertType = AlertType;
    }

    ngOnChanges(changes) {
        if ('alert' in changes && this.alert) {
            this.alerts.push(this.alert);
            this.removeAlert(this.alert);
        }
    }

    removeAlert(alert: Alert) {
        setTimeout(() => { this.alerts = this.alerts.filter(x => x !== alert); }, 5000);
    }

}
