import { AlertType } from './enums/alert-type.enum';
export class Alert {
    type: AlertType;
    message: string;
    alertId: string;

    constructor(init?: Partial<Alert>) {
        Object.assign(this, init);
    }
}
