import {Component, OnInit, ElementRef, AfterViewInit, ViewChild} from "@angular/core";
import {AppState} from "../../app.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-nav-bar-left',
    templateUrl: 'nav-bar-left.component.html',
    styleUrls: ['nav-bar-left.component.scss']
})
export class NavBarLeftComponent implements AfterViewInit {

    @ViewChild('sideMenu') el:ElementRef;

    public constructor(public appState: AppState, public router: Router) {
    }

    // public ngOnInit() {
    //     console.log(this.appState.state.navbar_left)
    //     setTimeout(() => {
    //         //noinspection TypeScriptUnresolvedFunction
    //         $('#sideMenu').metisMenu();
    //     }, 250)
	//
    // }
    public ngAfterViewInit(): void {
        console.log('hoho')
        //noinspection TypeScriptUnresolvedFunction
        // $(this.el.nativeElement).metisMenu();

        console.log(this.el.nativeElement);
    }

    public navigate(menu) {
        if(menu.children) {
            menu.active = true;
            console.info(menu);
            return ;

        }
        return this.router.navigate([menu.url]);
    }

}
