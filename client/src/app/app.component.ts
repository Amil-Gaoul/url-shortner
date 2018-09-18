import { Alert } from './shared/models/alert.model';
import { AlertService } from './core/services/alert/alert.service';
import { PaginationService } from './core/services/pagination/pagination.service';
import { CreateShortUrlService } from './core/services/create-short-url/create-short-url.service';

import { Pager } from './shared/models/pager.model';
import { Copied } from './shared/models/copied.model';
import { ShortUrl } from './shared/models/short-url.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    shortUrls: ShortUrl[] = [];
    isCopySucces: boolean;
    pager: Pager;
    pages = 5;
    currentPage: number;
    id: string;
    alert: Alert;

    constructor(
        private createShortUrlService: CreateShortUrlService,
        private paginationService: PaginationService,
        private alertService: AlertService
    ) {
        this.alertService.getAlert(this.id).subscribe((alert: Alert) => {
            if (!alert.message) {
                this.alert = null;
                return;
            }
            this.alert = alert;
        });
    }

    ngOnInit() {
        this.currentPage = 1;
        this.setActivePage(this.currentPage);
        this.getAllShortUrls();
    }

    creatShortUrl(url: string) {
        this.createShortUrlService.createShortUrl(url).subscribe(data => {
            if (data) {
                this.getAllShortUrls();
            }
        });
    }

    getAllShortUrls() {
        this.createShortUrlService.getShortUrls().subscribe(data => {
            this.shortUrls = data;
            if (this.shortUrls.length > 5) {
                this.setActivePage(this.currentPage);
            }
        });
    }

    copied(ev: Copied) {
        if (ev.isSuccess) {
            this.success('Short URL copied!');
            return;
        }
        this.error('Ups... Short URL not copied!');
    }

    setActivePage(page: number) {
        if ((page < 1) || (this.pager && (page > this.pager.totalPages) && this.pager.totalPages)) {
            return;
        }
        this.currentPage = page;
        this.pager = this.paginationService.getPager(this.shortUrls.length, page, this.pages);
    }

    private success(message: string) {
        this.alertService.success(message);
    }

    private error(message: string) {
        this.alertService.error(message);
    }

}
