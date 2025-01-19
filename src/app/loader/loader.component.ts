import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderState } from 'src/assets/models/loader-state';

import { LoaderService } from 'src/assets/services/loader/loader.service';

@Component({
    selector: 'app-loader',
    templateUrl: 'loader.component.html',
    styleUrls: ['loader.component.scss']
})

export class LoaderComponent implements OnInit, OnDestroy {

    show = false;
    private subscription: Subscription;

    constructor(private loaderService: LoaderService) {
    }

    ngOnInit() {
        this.subscription = this.loaderService.loaderState.subscribe((state: LoaderState) => {
            this.show = state.show;
        });
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
