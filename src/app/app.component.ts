import {Component, ViewEncapsulation} from "@angular/core";
import {AppState} from "./app.service";
import {AuthService} from "./modules/core/services/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(private appState: AppState, public authService: AuthService, public router: Router) {}

    ngOnInit() {
        // check if the user is logged in and update the state.
        this.authService.checkForAuthenticatedUser();
        console.info('mmhhmh');

    }

    getMainClasses() {
        return {
            'row': this.appState.state.authorized,
            'wrapper': this.appState.state.authorized,
            'wrapper-content': this.appState.state.authorized,
            'zix-background': !this.appState.state.authorized,
        };
    }

    getWrapperClasses() {
        return {
            'page-wrapper':  this.appState.state.authorized,
            'gray-bg': this.appState.state.authorized,

        };
    }

}
