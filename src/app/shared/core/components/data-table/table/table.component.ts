import {Component,  Input} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'data-table',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.scss']
})
export class TableComponent {
    @Input('columns') columns: any[] = [];
    @Input('rows') rows: any[] = [];
    @Input('callbacks') callbacks: any = {};

    public constructor(public sanitizer: DomSanitizer) {
    }



    public getCallBack(column: any, row: any, data: string) {
        return this.callbacks[column.callback] ? this.getCompiledHtml(this.callbacks[column.callback](row)) : data;
    }

    public getCompiledHtml(data) {

        return this.sanitizer.bypassSecurityTrustHtml(data)
    }

}
