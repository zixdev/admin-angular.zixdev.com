import {Component, OnInit} from "@angular/core";
import {Router, NavigationEnd, ActivatedRoute} from "@angular/router";
import {BreadcrumbService} from "./breadcrumb.service";

@Component({
    selector: 'app-breadcumb',
    templateUrl: 'breadcumb.component.html',
    styleUrls: ['breadcumb.component.scss']
})
export class BreadcumbComponent implements OnInit {

    private urls: string[];
    public routes: any[];

    constructor(
        private router: Router,
        private _router: ActivatedRoute,
        public breadcrumb: BreadcrumbService,
    ) {}

    ngOnInit() {
        // this.breadcrumb.addFriendlyNameForRoute('/', 'Home');
        // this.breadcrumb.addFriendlyNameForRoute('/system/sites', 'Sites');
        // this.breadcrumb.addFriendlyNameForRoute('/system/sites/add', 'Create');
        // this.breadcrumb.addFriendlyNameForRoute('/system/sites/*', 'Edit');




        this.router.events.subscribe((navigationEnd: NavigationEnd) => {
            this.urls = []; //Fastest way to clear out array
            this.routes = [];
            this.generateBreadcrumbTrail(navigationEnd.urlAfterRedirects ? navigationEnd.urlAfterRedirects : navigationEnd.url);
        });
    }


    generateBreadcrumbTrail(url: string): void {
        this.urls.unshift(url); //Add url to beginning of array (since the url is being recursively broken down from full url to its parent)
        let name = url.split('/');
        this.routes.unshift({
            url: url,
            name: name[name.length - 1]
        });
        if (url.lastIndexOf('/') > 0) {
            this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/'))); //Find last '/' and add everything before it as a parent route
        }
    }

    navigateTo(url: string): void {
        this.router.navigateByUrl(url);
    }

    friendlyName(route: any): string {
        return this.breadcrumb.getFriendlyNameForRoute(route.url) ? this.breadcrumb.getFriendlyNameForRoute(route.url) : route.name ;
    }





}
