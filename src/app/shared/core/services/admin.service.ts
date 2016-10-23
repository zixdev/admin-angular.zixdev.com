import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AppState} from "../../../app.service";
import {environment} from "../../../../environments/environment";

@Injectable()
export class AdminService implements CanActivate {


    constructor(private router: Router, public appState: AppState) {}

    canActivate() {
        const isAuth = this.isAuthorize();
        // if the user not authed redirect to login page or doesn't have the admin access.
        if (!isAuth && (
            this.appState.state.user_permissions.includes('full_access') ||
            this.appState.state.user_permissions.includes('view_admin')
        )) {
            this.router.navigate(['', 'auth', 'login']);
        }

        return isAuth;
    }


    isAuthorize(): boolean {
        return Boolean(localStorage.getItem(environment.JWT_TOKEN));
    }




}
