import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {IndexComponent} from "./index/index.component";
import {ShowComponent} from "./show/show.component";
import {CreateComponent} from "./create/create.component";
import {DataTableModule} from "../../../components/data-table/data-table.module";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

const SITES_ROUTES = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'add',
        component: CreateComponent
    },
    {
        path: ':id',
        component: ShowComponent
    },
    {
        path: ':id/edit',
        component: CreateComponent
    }
];


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule.forChild(SITES_ROUTES),
        DataTableModule
    ],
    declarations: [IndexComponent, ShowComponent, CreateComponent]
})
export class SitesModule {}
