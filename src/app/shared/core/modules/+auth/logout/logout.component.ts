import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
    selector: 'app-logout',
    template: `
        <div id="loader-wrapper">
            <div id="loader"></div>
            <div class="loader-section section-left"></div>
            <div class="loader-section section-right"></div>
        </div> 
    `,
})
export class LogoutComponent implements OnInit {

    public constructor(public router: Router, public authService: AuthService) { }

    public ngOnInit() {
        this.authService.logout().subscribe(() => this.logout(), () => this.logout());
    }

    private logout() {
        // Destroy token
        localStorage.removeItem('token');
        setTimeout(() => {
            this.router.navigate(['', 'auth', 'login']);
        }, 1000);
    }

}
