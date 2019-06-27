import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  items: MenuItem[];

        ngOnInit() {
            this.items = [
                {
                    label: 'TV', icon: 'fa fa-fw fa-check',
                    items: [
                        [
                            {
                                label: 'TV 1',
                                items: [{label: 'TV 1.1'},{label: 'TV 1.2'}]
                            },
                            {
                                label: 'TV 2',
                                items: [{label: 'TV 2.1'},{label: 'TV 2.2'}]
                            }
                        ],
                        [
                            {
                                label: 'TV 3',
                                items: [{label: 'TV 3.1'},{label: 'TV 3.2'}]
                            },
                            {
                                label: 'TV 4',
                                items: [{label: 'TV 4.1'},{label: 'TV 4.2'}]
                            }    
                        ]
                    ]
                },
                {
                    label: 'Sports', icon: 'fa fa-fw fa-soccer-ball-o',
                    items: [
                        [
                            {
                                label: 'Sports 1',
                                items: [{label: 'Sports 1.1'},{label: 'Sports 1.2'}]
                            },
                            {
                                label: 'Sports 2',
                                items: [{label: 'Sports 2.1'},{label: 'Sports 2.2'}]
                            },

                        ],
                        [
                            {
                                label: 'Sports 3',
                                items: [{label: 'Sports 3.1'},{label: 'Sports 3.2'}]
                            },
                            {
                                label: 'Sports 4',
                                items: [{label: 'Sports 4.1'},{label: 'Sports 4.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Sports 5',
                                items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
                            },
                            {
                                label: 'Sports 6',
                                items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
                            }
                        ]
                    ]
                }
            ];
        }

}
