import { Pager } from './../../../shared/models/pager.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PaginationService {

    constructor() { }

    getPager(totalItems: number, currentPage: number = 1, pageSize: number = 5): Pager {

        let totalPages = Math.ceil(totalItems / pageSize),
            startPage: number, endPage: number;

        console.log(totalItems);
        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            } else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }

        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}
