import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {UserInterface, FormInterface} from "../../../contracts";
import {GuestService} from "../../../services/guest.service";
import {AppState} from "../../../../../app.service";
import {AuthService} from "../../../services/auth.service";


@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent {
    public user: UserInterface = <UserInterface>{};
    public form: FormInterface = <FormInterface>{};

    public constructor(public guestService: GuestService,
                       public authService: AuthService,
                       private appState: AppState,
                       public router: Router,) {
    }


    public login() {
        this.form.submitting = true;

        this.guestService.login(this.user)
            .subscribe(
                response => {
                    if (response.permissions.includes('full_access') || response.permissions.includes('view_admin')) {
                        localStorage.setItem('token', response.token);
                        this.appState.set('token', response.token);
                        this.form.submitted = true;

                        setTimeout(() => {
                            this.appState.set('authorized', true);
                            // TODO:: tmp
                            console.log(this.appState.state)
                            if (this.appState.state.redirect_route) {
                                this.router.navigate([this.appState.state.redirect_route]);
                            } else {
                                this.router.navigate(['']);
                            }
                        }, 1000);

                        return;
                    }
                    this.authService.logout();
                    this.form.errors = {message: 'You don\'t have access to view the admin panel'};
                    return this.form.submitting = false;

                }, error => {
                    this.form.errors = error.json();
                    this.form.submitting = false;
                }
            );
    }

}
