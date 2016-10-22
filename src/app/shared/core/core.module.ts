import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import * as Services from "./services";
import { HomeComponent } from './modules/home/home.component';
import {DataTableModule} from "./components/data-table/data-table.module";

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

const CORE_ROUTES = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [Services.AdminService]
    },

    {
        path: 'auth',
        loadChildren: 'app/shared/core/modules/+auth/auth.module#AuthModule',
    },

    {
        path: 'system',
        loadChildren: 'app/shared/core/modules/+system/system.module#SystemModule',
        canActivate: [Services.AdminService]
    },
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(CORE_ROUTES),
        DataTableModule
    ],
    declarations: [HomeComponent],
    providers: [
        ...mapValuesToArray(Services)
    ]
})
export class CoreModule {
}
