import { ClientService } from './../service/client.service';
import { Component, ChangeDetectorRef, OnInit, Injectable } from '@angular/core';
import {BreadcrumbService} from '../../app.breadcrumb.service';
import { CompactType, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
    templateUrl: './vgc.component.html',
    styleUrls: ['../../../assets/sass/layout/_gridster.scss'],
})
// 
// @Injectable({
//   providedIn: 'root'
// })
export class EmptyDemoComponent implements OnInit{

  selectedItem :any= {}; // holder for tab object
  display = false; // dialog visible state
  activeIndex1: number = 0;
  activeIndex2: number = 0;
  tabs = [  
    {header: "header"}
  ];
  menuItems: MenuItem[];
  cardItem: any;
  client: any;
  detectChanges: any;
  

    constructor(private breadcrumbService: BreadcrumbService,
                private changeDetection: ChangeDetectorRef,
                private primengConfig: PrimeNGConfig,
                private clientService: ClientService) {
        this.breadcrumbService.setItems([
            {label: 'Empty Page'}
        ]);
        this.detectChanges = clientService.searchChange.subscribe((value) => {
          this.client = clientService.getClient();
        })
        
    }

    options: GridsterConfig;
    dashboard: Array<GridsterItem>;

   static itemChange(item, itemComponent) {
     console.info('itemChanged', item, itemComponent);
   }

   static itemResize(item, itemComponent) {
     console.info('itemResized', item, itemComponent);
   }

   ngOnInit() {

    this.primengConfig.ripple = true;

     this.options = {
      compactType: CompactType.None,
      draggable: {
        enabled: true
      },
      gridType: GridType.Fit,
      resizable: {
        enabled: true
      },
      minItemCols: 2,
      maxCols: 6,
      
      
      pushItems: true,
       itemChangeCallback: EmptyDemoComponent.itemChange,
       itemResizeCallback: EmptyDemoComponent.itemResize,
     };

     this.dashboard = [];
     
   }

   changedOptions() {
     this.options.api.optionsChanged();
   }

   removeItem(item) {
     this.dashboard.splice(this.dashboard.indexOf(item), 1);
   }

   addItem(cardTitle: string) {
     this.dashboard.push({cols: 2, rows: 1, y: 0, x: 0, cardTitle: cardTitle, color: "#0d89ec"});
   }


  addNewTabView() {
    this.tabs.push({header: "onglet"});
  }

  showDialog(selectedItem) {
    this.selectedItem = selectedItem; // set the current tab object
    this.display = true; // trigger the dialog visibility 
  }

  setItem(item) {
    this.cardItem = item;
  }

  changeCardColor(item, theColor: string) {
    item.color = theColor;
  }

}
