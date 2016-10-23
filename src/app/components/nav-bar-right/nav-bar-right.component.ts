import {Component, OnInit} from "@angular/core";
import {AppState} from "../../app.service";

@Component({
    selector: 'app-nav-bar-right',
    templateUrl: 'nav-bar-right.component.html',
    styleUrls: ['nav-bar-right.component.scss']
})
export class NavBarRightComponent implements OnInit {

    public constructor(public appState: AppState) {}

    ngOnInit() {

    }

}
