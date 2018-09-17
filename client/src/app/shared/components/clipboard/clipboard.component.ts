import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Copied } from './../../models/copied.model';

@Component({
    selector: 'app-clipboard',
    templateUrl: './clipboard.component.html',
    styleUrls: ['./clipboard.component.scss']
})
export class ClipboardComponent implements OnInit {

    @Input() content: string;
    @Output() emitCopied: EventEmitter<Copied> = new EventEmitter<Copied>();

    constructor() { }

    ngOnInit() {
    }

    copied() {
        let copied: Copied;
        const result = this.copyLink();
        if (result) {
            copied = { content: this.content, isSuccess: true };
            this.emitCopied.emit(copied);
            return;
        }
        copied = { content: this.content, isSuccess: false };
        this.emitCopied.emit(copied);
    }

    private copyLink(): boolean {
        let copyBox = document.createElement('textarea');
        copyBox.style.position = 'fixed';
        copyBox.style.left = '0';
        copyBox.style.top = '0';
        copyBox.style.opacity = '0';
        copyBox.value = this.content;
        document.body.appendChild(copyBox);
        copyBox.focus();
        copyBox.select();
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                return true;
            }
        } catch (err) {
            return false;
        } finally {
            document.body.removeChild(copyBox);
        }
        return false;
    }

}
