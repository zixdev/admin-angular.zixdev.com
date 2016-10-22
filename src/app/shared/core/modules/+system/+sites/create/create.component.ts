import {Component, trigger, state, style, transition, animate} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {FormInterface, SiteInterface} from "../../../../contracts";
import {SiteService} from "../../../../services/site.service";
import {BreadcrumbService} from "../../../../../../components/breadcumb/breadcrumb.service";

@Component({
  selector: 'app-create',
  templateUrl: 'create.component.html',
    styleUrls: ['create.component.scss'],
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
export class CreateComponent{

    public form: FormInterface = <FormInterface>{};
    public site: SiteInterface = <SiteInterface>{};
    public edit: boolean = false;

    public constructor (
        public siteService: SiteService,
        public router: Router,
        public _router: ActivatedRoute,
        public breadcrumb: BreadcrumbService
    ) {}

    public ngOnInit() {

        this._router.params.subscribe(params => {
            if(params['id']) {
                this.edit = true;
                this.siteService.get(params['id'])
                    .subscribe(
                        response => {
                            this.breadcrumb.addFriendlyNameForRoute(`/system/sites/${params['id']}`,  response.name);
                            this.site = response;
                        }
                    );
            }
        });
    }


    public save() {
        this.form.submitting = true;

        if(this.edit)
            return this.update();
        return this.create();

    }

    protected create() {
        this.siteService.create(this.site)
            .subscribe(
                res => {
                    this.router.navigate(['', 'system', 'sites', res.id, 'ui']);
                },
                err => {
                    this.form.errors = err.json();
                    this.form.submitting = false;
                }
            );
    }

    protected update() {
        this.siteService.update(this.site.id, this.site)
            .subscribe(
                () => {
                    this.router.navigate(['', 'system', 'sites']);
                }
            );
    }

}
