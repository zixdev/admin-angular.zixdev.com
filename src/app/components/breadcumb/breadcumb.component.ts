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
        public breadcrumb: BreadcrumbService,
    ) {}

    ngOnInit() {
        this.router.events.subscribe((navigationEnd: NavigationEnd) => {
            this.routes = [];
            this.generateBreadcrumbTrail(navigationEnd.urlAfterRedirects ? navigationEnd.urlAfterRedirects : navigationEnd.url);
            let name = this.routes[this.routes.length - 1].name;
            this.breadcrumb.setTitle(name.charAt(0).toUpperCase() + name.slice(1))
        });
    }


    generateBreadcrumbTrail(url: string): void {
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
