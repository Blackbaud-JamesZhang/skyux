import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkyAgGridModule } from '@skyux/ag-grid';
import { SkyDataManagerModule } from '@skyux/data-manager';
import { SkyCheckboxModule } from '@skyux/forms';
import { SkyToolbarModule } from '@skyux/layout';
import { SkySearchModule } from '@skyux/lookup';
import { SkyModalModule } from '@skyux/modals';
import { SkyDropdownModule } from '@skyux/popovers';

import { AgGridModule } from 'ag-grid-angular';

import { LipsumModule } from '../lipsum/lipsum.module';

import { DataManagerMenuComponent } from './data-manager-context-menu.component';
import { DataManagerEditModalComponent } from './data-manager-edit-modal.component';
import { DataManagerFiltersModalComponent } from './data-manager-filter-modal.component';
import { DataManagerFlyoutComponent } from './data-manager-flyout.component';
import { DataManagerViewGridComponent } from './data-manager-view-grid.component';
import { DataManagerComponent } from './data-manager.component';

@NgModule({
  declarations: [
    DataManagerMenuComponent,
    DataManagerComponent,
    DataManagerEditModalComponent,
    DataManagerFiltersModalComponent,
    DataManagerViewGridComponent,
    DataManagerFlyoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SkyToolbarModule,
    SkySearchModule,
    AgGridModule,
    SkyAgGridModule,
    SkyModalModule,
    SkyDropdownModule,
    SkyDataManagerModule,
    SkyCheckboxModule,
    LipsumModule,
  ],
  exports: [DataManagerFlyoutComponent],
})
export class DataManagerModule {}