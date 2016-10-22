import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {CoreModule} from "./shared/core/core.module";
import {BreadcumbComponent} from "./components/breadcumb/breadcumb.component";
import {NavBarTopComponent} from "./components/nav-bar-top/nav-bar-top.component";
import {NavBarRightComponent} from "./components/nav-bar-right/nav-bar-right.component";
import {NavBarLeftComponent} from "./components/nav-bar-left/nav-bar-left.component";
import {FooterComponent} from "./components/footer/footer.component";
// Application wide providers
const APP_PROVIDERS = [

];

@NgModule({
    declarations: [
        AppComponent,
        BreadcumbComponent,
        NavBarTopComponent,
        NavBarRightComponent,
        NavBarLeftComponent,
        FooterComponent
    ],

    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CoreModule


    ],
    providers: [
        ...APP_PROVIDERS
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
