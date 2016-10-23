import {NgModule, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import * as Services from "./services";
import { HomeComponent } from './modules/home/home.component';
import {AppState} from "../../app.service";
import {CORE_MENU} from "./core.menu";

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

const CORE_ROUTES = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [Services.AuthService, Services.AdminService]
    },

    {
        path: 'auth',
        loadChildren: 'app/shared/core/modules/+auth/auth.module#AuthModule',
    },

    {
        path: 'system',
        loadChildren: 'app/shared/core/modules/+system/system.module#SystemModule',
        canActivate: [Services.AuthService, Services.AdminService]
    },
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(CORE_ROUTES)
    ],
    declarations: [HomeComponent],
    providers: [
        ...mapValuesToArray(Services)
    ]
})
export class CoreModule {


    public constructor(public appState: AppState) {
        this.appState.set('navbar_left', CORE_MENU);
    }

}
