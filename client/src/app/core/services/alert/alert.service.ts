import { Alert } from './../../../shared/models/alert.model';
import { AlertType } from './../../../shared/models/enums/alert-type.enum';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

@Injectable()
export class AlertService {

    private subject: Subject<Alert> = new Subject<Alert>();

    constructor() { }

    getAlert(alertId?: string): Observable<any> {
        return this.subject.asObservable().filter((x: Alert) => x && x.alertId === alertId);
    }

    success(message: string) {
        this.alert(new Alert({ message, type: AlertType.Success }));
    }

    error(message: string) {
        this.alert(new Alert({ message, type: AlertType.Error }));
    }

    alert(alert: Alert) {
        this.subject.next(alert);
    }

    clear(alertId?: string) {
        this.subject.next(new Alert({ alertId }));
    }

}
