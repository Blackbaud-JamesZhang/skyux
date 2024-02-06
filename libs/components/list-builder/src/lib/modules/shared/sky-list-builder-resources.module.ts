/* istanbul ignore file */

/**
 * NOTICE: DO NOT MODIFY THIS FILE!
 * The contents of this file were automatically generated by
 * the 'ng generate @skyux/i18n:lib-resources-module lib/modules/shared/sky-list-builder' schematic.
 * To update this file, simply rerun the command.
 */
import { NgModule } from '@angular/core';
import {
  SKY_LIB_RESOURCES_PROVIDERS,
  SkyAppLocaleInfo,
  SkyI18nModule,
  SkyLibResources,
  SkyLibResourcesProvider,
  SkyLibResourcesService,
  getLibStringForLocale,
} from '@skyux/i18n';

const RESOURCES: Record<string, SkyLibResources> = {
  'EN-US': {
    skyux_list_show_secondary_actions_button: { message: 'More' },
    skyux_list_multiselect_clear_all: { message: 'Clear all' },
    skyux_list_multiselect_select_all: { message: 'Select all' },
    skyux_list_multiselect_show_selected: {
      message: 'Only show selected items',
    },
    skyux_list_view_switcher_dropdown_title: { message: 'Select view' },
  },
};

SkyLibResourcesService.addResources(RESOURCES);

export class SkyListBuilderResourcesProvider
  implements SkyLibResourcesProvider
{
  public getString(
    localeInfo: SkyAppLocaleInfo,
    name: string,
  ): string | undefined {
    return getLibStringForLocale(RESOURCES, localeInfo.locale, name);
  }
}

/**
 * Import into any component library module that needs to use resource strings.
 */
@NgModule({
  exports: [SkyI18nModule],
  providers: [
    {
      provide: SKY_LIB_RESOURCES_PROVIDERS,
      useClass: SkyListBuilderResourcesProvider,
      multi: true,
    },
  ],
})
export class SkyListBuilderResourcesModule {}
