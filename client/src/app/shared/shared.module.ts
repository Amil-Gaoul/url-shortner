import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertComponent } from './components/alert/alert.component';
import { ClipboardComponent } from './components/clipboard/clipboard.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClipboardModule } from 'ngx-clipboard';

import { PagingPipe } from './pipes/paging/paging.pipe';
import { DatexPipe } from './pipes/datex/datex.pipe';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FontAwesomeModule,
        ClipboardModule
    ],
    declarations: [
        PaginationComponent,
        TableComponent,
        CustomInputComponent,
        CustomButtonComponent,
        ClipboardComponent,
        AlertComponent,
        DatexPipe,
        PagingPipe,
        TruncatePipe
    ],
    exports: [
        PaginationComponent,
        TableComponent,
        CustomInputComponent,
        CustomButtonComponent,
        ClipboardComponent,
        AlertComponent,
        DatexPipe,
        PagingPipe,
        TruncatePipe
    ]
})
export class SharedModule { }
