import {ActivatedRoute} from "@angular/router";
import {Component, OnInit, trigger, state, style, transition, animate} from "@angular/core";
import {SiteService} from "../../../../services/site.service";
import {SiteVersionInterface} from "../../../../contracts/site";
import {BreadcrumbService} from "../../../../../../components/breadcumb/breadcrumb.service";

@Component({
    selector: 'app-index',
    templateUrl: 'index.component.html',
    styleUrls: ['index.component.scss'],
    animations: [
        trigger('routeAnimation', [
            state('*', style({opacity: 1})),
            transition('void => *', [
                style({opacity: 0}),
                animate(500)
            ]),
            transition('* => void', animate(500, style({opacity: 0})))
        ])
    ],
})
export class IndexComponent implements OnInit {

    public site_id;
    public uis: SiteVersionInterface[] = [];

    public constructor(
        public _router: ActivatedRoute,
       public siteService: SiteService,
       public breadcrumb: BreadcrumbService
    ) {}

    public ngOnInit() {
        this.breadcrumb.updateBreadcrumb(this._router);
        this._router.params.subscribe(params => {
            this.site_id = params['id'];
            this.siteService.getVersion(params['id'])
                .subscribe(
                    response => {
                        this.uis = response;
                    }
                );
            this.siteService.get(params['id'])
                .subscribe(
                    response => {
                        this.breadcrumb.addFriendlyNameForRoute(`/system/sites/${params['id']}`, response.name);
                    }
                );
        });
    }
}
