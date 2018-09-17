import { OriginalUrl } from './../../../shared/models/original-url.model';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ShortUrl } from '../../../shared/models/short-url.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CreateShortUrlService {

    headers = new Headers();
    ulrsObj: OriginalUrl;

    constructor(private http: Http) { }

    createShortUrl(url): Observable<ShortUrl> {
        this.ulrsObj = {
            originalUrl: url,
            shortBaseUrl: environment.shortBaseUrl
        };
        return this.http.post(`${environment.apiUrl}/item`, this.ulrsObj, { headers: this.headers })
            .map(urlData => urlData.json())
            .catch(err => this.handleError(err));
    }

    getShortUrls(): Observable<ShortUrl[]> {
        return this.http.get(`${environment.apiUrl}/items`, { headers: this.headers })
            .map(urlsData => {
                const urls = this.sortUrls(urlsData.json(), 'createdAt');
                return urls;
            })
            .catch(err => this.handleError(err));
    }

    private sortUrls(arr: ShortUrl[], key: string): ShortUrl[] {
        return arr.sort(function(a, b) {
            let x = a[key];
            let y = b[key];

            if (typeof x === 'string') {
                x = x.toLowerCase();
            }
            if (typeof y === 'string') {
                y = y.toLowerCase();
            }

            return ((x < y) ? -1 : ((x > y) ? 0 : 1));
        });
    }

    private handleError(err) {
        return Observable.throw(err);
    }

}
