import { OriginalUrl } from './../../../shared/models/original-url.model';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ShortUrl } from '../../../shared/models/short-url.model';

@Injectable()
export class CreateShortUrlService {

    headers = new HttpHeaders();
    ulrsObj: OriginalUrl;

    constructor(private http: HttpClient) { }

    createShortUrl(url): Observable<ShortUrl> {
        this.ulrsObj = {
            originalUrl: url,
            shortBaseUrl: environment.shortBaseUrl
        };
        return this.http.post<ShortUrl>(`${environment.apiUrl}/item`, this.ulrsObj, { headers: this.headers });
    }

    getShortUrls(): Observable<ShortUrl[]> {
        return this.http.get<ShortUrl[]>(`${environment.apiUrl}/items`, { headers: this.headers });
    }

}
