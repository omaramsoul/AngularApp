import { ClientService } from './demo/service/client.service';
import {Component, OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { BreadcrumbService } from './app.breadcrumb.service';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html', 
    changeDetection: ChangeDetectionStrategy.Default,
    styleUrls: ['../assets/sass/layout/_topbar.scss'],
})
export class AppTopBarComponent implements OnDestroy{

    subscription: Subscription;
    clientId: string;
    clients:any;
    items: MenuItem[];
    detectChanges: any;

    constructor(public breadcrumbService: BreadcrumbService, 
                public app: AppComponent, 
                public appMain: AppMainComponent,
                private clientService: ClientService,
               ) {
        this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
            this.items = response;
        });
        // this.detectChanges = clientService.searchChange.subscribe((value) => {
        //     // this.client = clientService.getClient();
        //     console.log(this.clients)
        //     console.log('jjjj');
        //   })
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    getClientIdValue() {
        this.clientService.setClientIdValue(this.clientId);
        this.clientService.getClientById().subscribe(data => {
            this.clientService.setClient(data);
        });
    }
}
