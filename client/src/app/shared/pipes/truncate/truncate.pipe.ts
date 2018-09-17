import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

    transform(value: string, limit, completeWords = false, ellipsis = '...') {
        if (!value) {
            return '';
        }
        if (!limit) {
            limit = 25;
        }
        if (completeWords) {
            limit = value.substr(0, 13).lastIndexOf(' ');
        }
        if (value.length > limit) {
            return `${value.substr(0, limit)}${ellipsis}`;
        }
        return value;
    }

}
