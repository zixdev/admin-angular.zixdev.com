import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SiteInterface} from "../../../../contracts/site";
import {SiteService} from "../../../../services/site.service";
import {BreadcrumbService} from "../../../../../../components/breadcumb/breadcrumb.service";

@Component({
    selector: 'app-index',
    templateUrl: 'index.component.html',
    styleUrls: ['index.component.scss']
})
export class IndexComponent implements OnInit {

    public sites: SiteInterface[] = [];

    public constructor(public siteService: SiteService, public breadcrumb: BreadcrumbService, public router: ActivatedRoute) {
    }

    public ngOnInit() {
        this.breadcrumb.updateBreadcrumb(this.router);
        this.siteService.all()
            .subscribe(
                response => {
                    this.sites = response;
                },
                error => {
                    console.log(error);
                }
            );
    }

}

