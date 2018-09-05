import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'paging',
    pure: false
})
export class PagingPipe implements PipeTransform {

    transform(arr: Array<any> = [], page: number, pageSize: number): Array<any> {
        return pageSize === 0 ? arr : arr.slice(pageSize * (page - 1), pageSize * page);
    }

}
