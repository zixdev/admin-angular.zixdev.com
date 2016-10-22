import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'data-table',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.scss']
})
export class TableComponent implements OnInit {

    public columns: any[] = [];
    public rows: any[] = [];
    public callbacks: any = {};

    constructor() {
    }

    public tempSeed() {
        this.columns.push({
            id: 'id',
            name: 'Id',
            callback: '',
            attr: ''
        });
        this.columns.push({
            id: 'name',
            name: 'Name',
            callback: '',
            attr: ''
        });
        this.columns.push({
            id: 'actions',
            name: 'Actions',
            callback: 'getActions',
            attr: ''
        });


        this.rows.push({
            id: 1,
            name: 'Badi Ifaoui',
            actions: 'tet'
        });

        this.callbacks.getActions = (data) => {
            return `<a href="#">${data.name} </a>   `;
        };

    }

    public ngOnInit() {
        this.tempSeed();
    }

    public getCallBack(column: any, row: any, data: string) {
        return this.callbacks[column.callback] ? this.callbacks[column.callback](row) : data;
    }

}
