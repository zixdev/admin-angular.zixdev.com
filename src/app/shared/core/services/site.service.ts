import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";

@Injectable()

export class SiteService {

    public constructor(public apiService: ApiService) {
    }

    public  all() {
        return this.apiService.get('sites');
    }

    public get(id) {
        return this.apiService.get('sites/'+id);
    }

    public create(data) {
        return this.apiService.post('sites', data);
    }

    public update(id, data) {
        return this.apiService.put('sites/'+id, data);
    }

    public getVersion(id) {
        return this.apiService.get('sites/'+id+'/versions');
    }

    public createVersion(id, data) {
        return this.apiService.post('sites/'+id+'/versions', data);
    }
}
