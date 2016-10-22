import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import * as Services from "./services";
import { HomeComponent } from './modules/home/home.component';

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

const CORE_ROUTES = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [Services.AuthService]
    },

    {
        path: 'auth',
        loadChildren: 'app/shared/core/modules/+auth/auth.module#AuthModule',
    },
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(CORE_ROUTES),
    ],
    declarations: [HomeComponent],
    providers: [
        ...mapValuesToArray(Services)
    ]
})
export class CoreModule {
}
