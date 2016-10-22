import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {IndexComponent} from "./index/index.component";
import {ShowComponent} from "./show/show.component";
import {CreateComponent} from "./create/create.component";

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
        RouterModule.forChild(SITES_ROUTES)
    ],
    declarations: [IndexComponent, ShowComponent, CreateComponent]
})
export class SitesModule {}
