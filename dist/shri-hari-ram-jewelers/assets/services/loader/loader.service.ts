import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderState } from 'src/assets/models/loader-state';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    private loaderSubject = new Subject<LoaderState>();
    loaderState = this.loaderSubject.asObservable();
    errors = [];
    backGroundUrls: string[] = [];

    constructor() {
    }

    show() {
        this.loaderSubject.next({show: true} as LoaderState);
    }

    hide() {
        this.loaderSubject.next({show: false} as LoaderState);
    }

}
