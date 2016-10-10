import {Component, OnInit} from "@angular/core";
import {ApiConfig} from "../../config/api.config";

@Component({
    selector: 'app-file-uploader',
    templateUrl: './file-uploader.component.html',
    styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        // Dropzone.options.dropzoneForm = {
        //     url: ApiConfig.api_url + 'media',
        //     paramName: "media", // The name that will be used to transfer the file
        //     maxFilesize: 100, // MB
        //     dictDefaultMessage: "<strong>Drop files here or click to upload. </strong></br> (This is just a demo dropzone. Selected files are not actually uploaded.)"
        // };
    }


}
