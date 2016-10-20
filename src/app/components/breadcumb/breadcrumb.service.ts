import {Injectable} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Injectable()
export class BreadcrumbService {

    private routeFriendlyNames: any = {};
    public description: string;


    public  constructor(private titleService: Title,) {
    }

    /**
     * Specify a friendly name for the corresponding route. Please note this should be the full url of the route,
     * as in the same url you will use to call router.navigate().
     *
     * @param route
     * @param name
     */
    public addFriendlyNameForRoute(route: string, name: string): void {
        this.routeFriendlyNames[route] = name;
    }

    /**
     * Show the friendly name for a given url. If no match is found the url (without the leading '/') is shown.
     *
     * @param route
     * @returns {*}
     */
    public getFriendlyNameForRoute(route: string): string {
        return this.routeFriendlyNames[route] ? this.routeFriendlyNames[route] : false;
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    public updateBreadcrumb(router: ActivatedRoute) {
        router.data.subscribe(
            (data: any) => {
                this.setTitle(data.title);
                this.description = data.description;
            }
        );
    }
}
