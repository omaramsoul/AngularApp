
import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { EmptyDemoComponent } from '../vgc.component';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  @Output() newTab = new EventEmitter<number>();

  items: MenuItem[];
   constructor(private cardAdder: EmptyDemoComponent){}
  ngOnInit() {
      this.items = [
          {
            label: 'Ajouter vue',
            icon: 'pi pi-clone',
            items: [
              {
                label:'Risques',
                items:[
                   {
                      label:'Alertes Commerciales', command: () =>  {
                        this.cardAdder.addItem('Alertes Commerciales');
                      }
                      
                   },
                   {
                      label:'Crédits', command: () =>  {
                        this.cardAdder.addItem('Crédits');
                      }
                   },
                   {
                     label:'Impayes DAI/PTF', command: () =>  {
                       this.cardAdder.addItem('Impayes DAI/PTF');
                     }
                     
                  },
                  {
                     label:'Mouvements en attente', command: () =>  {
                       this.cardAdder.addItem('Mouvements en attente');
                     }
                     
                  },
                ]
             },
             {
                label:'Info client',
                
                items:[
                  {
                     label:'Comptes', command: () =>  {
                       this.cardAdder.addItem('Comptes');
                     }
                     
                  },
                  {
                     label:'Contact client', command: () =>  {
                       this.cardAdder.addItem('Contact client');
                     }
                  },
                  {
                    label:'Informations', command: () =>  {
                      this.cardAdder.addItem('Informations');
                    }
                    
                 },
                 {
                    label:'Géolocalisation', command: () =>  {
                      this.cardAdder.addItem('Géolocalisation');
                    }
                    
                 },
                 {
                  label:'Pièces dossier', command: () =>  {
                    this.cardAdder.addItem('Pièces dossier');
                  }
                  
               },
               {
                  label:'Signature client', command: () =>  {
                    this.cardAdder.addItem('Signature client');
                  }
                  
               },
   
                ]
             },
             {
                label:'Autorisation', command: () =>  {
                  this.cardAdder.addItem('Autorisation');
                }
               
             },
             {
                label:'Mouvements',
                items:[
                   {
                      label:'Mouvements client', command: () =>  {
                        this.cardAdder.addItem('Mouvements');
                      }
                      
                     
                   },
                   {
                      label:'Prélèvement', command: () =>  {
                        this.cardAdder.addItem('Prélèvement');
                      }
                      
                   }
                ]
             }, 
             {
                label:'Remises',
                items:[
                  {
                     label:'Remises daily', command: () =>  {
                       this.cardAdder.addItem('Remises daily');
                     }
                     
                    
                  },
                  {
                     label:'Remises protefeuille', command: () =>  {
                       this.cardAdder.addItem('Remises protefeuille');
                     }
                     
                  }
               ]
                
             },
             {
               label:'Reporting',
               items:[
                 {
                    label:'Synthèse client', command: () =>  {
                      this.cardAdder.addItem('Synthèse client');
                    }
                    
                   
                 },
                 {
                    label:'Reporting client', command: () =>  {
                      this.cardAdder.addItem('Reporting client');
                    }
                    
                 }
              ]
               
            }
            ]
          },
      ];
  }

}

