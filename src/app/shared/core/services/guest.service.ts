import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {CanActivate, Router} from "@angular/router";
import {environment} from "../../../../environments/environment";

@Injectable()
export class GuestService implements CanActivate {

    public constructor(private apiService: ApiService, private router: Router) {
    }

    public canActivate() {
        const isGuest = this.isNotAuthorize();
        // if the is not a guest redirect him to the home page.
        if (!isGuest) {
            this.router.navigate(['']);
        }

        return isGuest;
    }


    public isNotAuthorize(): boolean {
        return !Boolean(localStorage.getItem(environment.JWT_TOKEN));
    }


    public login(user) {
        return this.apiService.post('login', user);
    }


}
