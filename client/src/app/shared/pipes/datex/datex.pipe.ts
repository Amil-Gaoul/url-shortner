import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'datex'
})
export class DatexPipe implements PipeTransform {

    transform(value: string | Date, format: string = ''): string {
        if (!value || value === '') {
            return '';
        } else {
            return moment(value).format(format);
        }
    }

}
