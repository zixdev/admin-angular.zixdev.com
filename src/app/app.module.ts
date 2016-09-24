import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";

import {
    HeaderComponent,
    FooterComponent,
    HomeBannerComponent
} from "./client/components";
import {
    HomeComponent,
    ContactUsComponent
} from "./client/containers";
import {CoreModule} from "./modules/core/core.module";
import {AppState} from "./app.service";

const APP_ROUTES = [
    {path: '', component: HomeComponent},
    {path: 'contact-us', component: ContactUsComponent},



];


// Application wide providers
const APP_PROVIDERS = [
    AppState
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        HomeBannerComponent,
        ContactUsComponent,
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
