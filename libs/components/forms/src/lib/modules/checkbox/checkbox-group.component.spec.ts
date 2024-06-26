import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@skyux-sdk/testing';

import { SkyIconCheckboxGroupComponent } from './fixtures/icon-checkbox-group.component';
import { SkyStandardCheckboxGroupComponent } from './fixtures/standard-checkbox-group.component';

describe('Checkbox group component', function () {
  function getCheckboxes(
    checkboxGroupFixture: ComponentFixture<any>,
    standard = true,
  ): HTMLElement[] {
    const selector = `.${standard ? 'sky-checkbox-group-stacked' : 'sky-checkbox-group-inline'} sky-checkbox`;
    return checkboxGroupFixture.nativeElement.querySelectorAll(selector);
  }

  function getLegend(checkboxGroupFixture: ComponentFixture<any>): HTMLElement {
    return checkboxGroupFixture.nativeElement.querySelector('legend');
  }

  function getCheckboxGroup(
    checkboxGroupFixture: ComponentFixture<any>,
  ): HTMLElement {
    return checkboxGroupFixture.nativeElement.querySelector(
      'sky-checkbox-group',
    );
  }

  describe('standard checkboxes', () => {
    let fixture: ComponentFixture<SkyStandardCheckboxGroupComponent>;
    let componentInstance: SkyStandardCheckboxGroupComponent;

    beforeEach(function () {
      TestBed.configureTestingModule({
        imports: [SkyStandardCheckboxGroupComponent],
      });

      fixture = TestBed.createComponent(SkyStandardCheckboxGroupComponent);
      componentInstance = fixture.componentInstance;

      fixture.detectChanges();
    });

    it('should render the checkboxes in the stacked group', () => {
      const checkboxes = getCheckboxes(fixture);

      expect(checkboxes.length).toBe(3);

      checkboxes.forEach((checkbox) => expect(checkbox).toBeVisible());
    });

    it('should display label text', () => {
      const legend = getLegend(fixture);

      expect(legend).toBeVisible();
      expect(legend.textContent?.trim()).toBe('Contact method');
    });

    it('should visually hide the label text by only displaying it for screen readers when labelHidden is true', () => {
      componentInstance.labelHidden = true;
      fixture.detectChanges();

      const legend = getLegend(fixture);

      expect(legend.textContent?.trim()).toBe('Contact method');
      expect(legend).toHaveClass('sky-screen-reader-only');
    });

    it('should have the lg margin class if stacked is true', () => {
      const group = getCheckboxGroup(fixture);

      expect(group).toHaveClass('sky-margin-stacked-lg');
    });

    it('should not have the lg margin class if stacked is false', () => {
      componentInstance.stacked = false;
      fixture.detectChanges();

      const group = getCheckboxGroup(fixture);

      expect(group).not.toHaveClass('sky-margin-stacked-lg');
    });

    it('should render custom form errors', () => {
      const checkbox = getCheckboxes(fixture)?.[0];
      const checkboxInput = checkbox?.querySelector('input');

      // check and uncheck the checkbox to trigger the validation error
      checkboxInput?.click();
      fixture.detectChanges();

      checkboxInput?.click();
      fixture.detectChanges();

      const formError = fixture.nativeElement.querySelector('sky-form-error');
      expect(formError).toBeVisible();
    });
  });

  describe('icon checkboxes', () => {
    let fixture: ComponentFixture<SkyIconCheckboxGroupComponent>;

    beforeEach(function () {
      TestBed.configureTestingModule({
        imports: [SkyIconCheckboxGroupComponent],
      });

      fixture = TestBed.createComponent(SkyIconCheckboxGroupComponent);

      fixture.detectChanges();
    });

    it('should render the checkboxes in the inline group', () => {
      const checkboxes = getCheckboxes(fixture, false);

      expect(checkboxes.length).toBe(3);

      checkboxes.forEach((checkbox) => expect(checkbox).toBeVisible());
    });
  });
});
