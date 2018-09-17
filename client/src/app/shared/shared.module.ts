import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertComponent } from './components/alert/alert.component';
import { ClipboardComponent } from './components/clipboard/clipboard.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './components/pagination/pagination.component';

import { PagingPipe } from './pipes/paging/paging.pipe';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        PaginationComponent,
        TableComponent,
        CustomInputComponent,
        CustomButtonComponent,
        ClipboardComponent,
        AlertComponent,
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
        PagingPipe,
        TruncatePipe
    ]
})
export class SharedModule { }
