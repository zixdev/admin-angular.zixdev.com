import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";

import {ApiService} from "./api.service";
import {AppState} from "../../../app.service";
import {environment} from "../../../../environments/environment";

@Injectable()
export class AuthService implements CanActivate {


    constructor(private router: Router, private apiService: ApiService, private appState: AppState) {
    }

    canActivate() {
        const isAuth = this.isAuthorize();
        // if the user not authed redirect to login page
        if (!isAuth) {
            this.router.navigate(['', 'auth', 'login']);
        }

        return isAuth;
    }


    isAuthorize(): boolean {
        return Boolean(localStorage.getItem(environment.JWT_TOKEN));
    }

    checkForAuthenticatedUser() {
        const token = localStorage.getItem(environment.JWT_TOKEN);
        // If we have a token, consider the user to be signed in.
        if (token) {
            // we need to update application state
            this.appState.set('authorized', true);
            this.appState.set('token', localStorage.getItem(environment.JWT_TOKEN));
            this.apiService.updateTheHeaders();
            this.getUser()
                .subscribe(response => {
                    this.appState.set('user', response.user);
                    return this.appState.set('user_permissions', JSON.stringify(response.permissions));
                }, () => {
                    // Destroy token
                    localStorage.removeItem(environment.JWT_TOKEN);

                    // set authorized in app state to false
                    this.appState.set('authorized', false);
                    this.appState.set('user', {});
                    this.appState.set('user_permissions', {});
                    return this.router.navigate(['', 'auth', 'login']);
                });
        }

        return this.router.navigate(['', 'auth', 'login']);
    }

    logout() {
        this.appState.set('authorized', false);
        this.apiService.updateTheHeaders();
        return this.apiService.get('logout');
    }

    getUser() {
        return this.apiService.get('user');
    }

    getUserInfo() {
        return this.apiService.get('user/info');
    }

    updateUser(data) {
        return this.apiService.post('user', data);
    }

    updateUserInfo(data) {
        return this.apiService.post('user/info', data);
    }

    activateUserAccount(code) {
        return this.apiService.post('user/account/activate', code);
    }
}
