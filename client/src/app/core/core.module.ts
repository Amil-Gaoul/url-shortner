import { AlertService } from './services/alert/alert.service';
import { CreateShortUrlService } from './services/create-short-url/create-short-url.service';
import { PaginationService } from './services/pagination/pagination.service';
import { NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupService } from './services/popup/popup.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ ],
    providers: [
        PaginationService,
        CreateShortUrlService,
        AlertService,
        PopupService
    ]
})
export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
