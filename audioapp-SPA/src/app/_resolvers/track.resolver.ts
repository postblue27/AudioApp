import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TrackService } from '../_services/track.service';

@Injectable()
export class TrackResolver implements Resolve<any> {
    constructor(private trackService: TrackService, private alertify: AlertifyService,
        private router: Router) {}
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.trackService.getTrack(route.paramMap.get('trackId')).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['']);
                console.log('error');
                return of(null);
            })
        );
    }
}