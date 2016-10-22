import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { HomeComponent } from './modules/home/home.component';

const CORE_ROUTES = [
    {
        path: '',
        component: HomeComponent
    },
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(CORE_ROUTES),
    ],
    declarations: [HomeComponent]
})
export class CoreModule {
}
