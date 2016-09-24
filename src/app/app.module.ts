import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";

import {CoreModule} from "./modules/core/core.module";
import {AppState} from "./app.service";
import {HomeComponent} from "./modules/core/containers/home/home.component";
import {NavBarLeftComponent} from "./components/nav-bar-left/nav-bar-left.component";
import {NavBarTopComponent} from "./components/nav-bar-top/nav-bar-top.component";
import {NavBarRightComponent} from "./components/nav-bar-right/nav-bar-right.component";
import { FooterComponent } from './components/footer/footer.component';
import { BreadcumbComponent } from './components/breadcumb/breadcumb.component';

const APP_ROUTES = [

    {path: '', component: HomeComponent}

];


// Application wide providers
const APP_PROVIDERS = [
    AppState
];

@NgModule({
    declarations: [
        AppComponent,
        NavBarTopComponent,
        NavBarRightComponent,
        NavBarLeftComponent,
        FooterComponent,
        BreadcumbComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        // RouterModule.forRoot(APP_ROUTES, {useHash: true}),
        RouterModule.forRoot(APP_ROUTES),

        CoreModule
    ],
    providers: [
        ...APP_PROVIDERS
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
