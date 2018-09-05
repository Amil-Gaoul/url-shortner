import { AlertService } from './services/alert/alert.service';
import { ShortUrlService } from './services/short-url/short-url.service';
import { PaginationService } from './services/pagination/pagination.service';
import { NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ ],
    providers: [
        PaginationService,
        ShortUrlService,
        AlertService
    ]
})
export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
