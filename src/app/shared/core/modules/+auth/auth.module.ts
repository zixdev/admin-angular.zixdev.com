import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import * as Services from "../../services";

const AUTH_ROUTES = [

    {path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [Services.GuestService]},
    {path: 'logout', component: LogoutComponent, pathMatch: 'full', canActivate: [Services.AuthService]},

];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule.forChild(AUTH_ROUTES)
    ],
    declarations: [LoginComponent, LogoutComponent]
})
export class AuthModule {
}
