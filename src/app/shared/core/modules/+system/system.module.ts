import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {IndexComponent} from "./index/index.component";

const SYSTEM_ROUTES = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path : 'sites',
        loadChildren: 'app/shared/core/modules/+system/+sites/sites.module#SitesModule',
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(SYSTEM_ROUTES)
    ],
    declarations: [IndexComponent]
})
export class SystemModule {
}
