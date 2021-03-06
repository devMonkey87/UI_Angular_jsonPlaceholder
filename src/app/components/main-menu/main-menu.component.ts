import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

     textButton = "puta rata ";

    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Data', icon: 'pi pi-table',
                items: [
                    [
                        {
                            label: 'Random tables',
                            items: [{
                                label: 'Demo Tables',
                                routerLink: '/tables'



                            }, { label: 'Random Graphs' }]
                        }
                    ]
                ]
            },
            {
                label: 'User', icon: 'pi pi-user',
                items: [
                    [
                        {
                            label: 'Sports 1',
                            items: [{ label: 'Sports 1.1' }, { label: 'Sports 1.2' }]
                        },
                        {
                            label: 'Sports 2',
                            items: [{ label: 'Sports 2.1' }, { label: 'Sports 2.2' }]
                        },

                    ]   
                    
                ]
            }
        ];
    }

}
