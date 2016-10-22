import {Component, OnInit, trigger, state, style, transition, animate} from "@angular/core";
import {Router, ActivatedRoute} from '@angular/router';
import {SiteService} from "../../../../services/site.service";
import {environment} from "../../../../../../../environments/environment";
import {SiteInterface, SiteVersionInterface, FormInterface} from "../../../../contracts";

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
export class CreateComponent implements OnInit {

    public site: SiteInterface = <SiteInterface>{};
    public version: SiteVersionInterface = <SiteVersionInterface>{};
    public form: FormInterface = <FormInterface>{};
    public dropZone:any;

    public constructor(
        public router: Router,
        public _router: ActivatedRoute,
        public siteService: SiteService
    ) { }

    public ngOnInit() {

        this._router.params.subscribe(params => {
            this.siteService.get(params['id'])
                .subscribe(
                    response => {
                        this.site = response;
                        this.setUpDropZone();
                    }
                );
        });


    }

    protected setUpDropZone() {
        this.dropZone = new Dropzone('form.dropzone', {
            url:  `${environment.api_url}sites/${this.site.id}/versions`,
            dictDefaultMessage: "<strong>Drop your UI zip file here. </strong>",
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem(environment.JWT_TOKEN),
            },
            paramName: "ui", // The name that will be used to transfer the file
            maxFilesize: 100, // MB,

            success: () => {
                this.router.navigate(['', 'system', 'sites', this.site.id, 'ui']);
            },

            error: (item, err) => {
                console.log(err);
                this.form.errors = err;
            }
        });
    }

}
