// #region imports
import {
  Component,
  ViewChild
} from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  FormControl
} from '@angular/forms';

import {
  SkyRadioGroupComponent
} from '../radio-group.component';
// #endregion

@Component({
  templateUrl: './radio-group.component.fixture.html'
})
export class SkyRadioGroupTestComponent {
  @ViewChild(SkyRadioGroupComponent)
  public radioGroupComponent: SkyRadioGroupComponent;

  public radioGroupEnabled = true;

  public radioForm: FormGroup;

  public tabIndex: number;

  public ariaLabelledBy: string = 'radio-group-label';

  public ariaLabel: string;

  public options = [
    { name: 'Lillith Corharvest', disabled: false },
    { name: 'Harima Kenji', disabled: false },
    { name: 'Harry Mckenzie', disabled: false }
  ];

  public radioControl = new FormControl();

  constructor(
    private fb: FormBuilder
  ) {
    this.radioForm = this.fb.group({
      option: this.radioControl
    });
  }

  public changeOptions(): void {
    this.options = [
      { name: 'Lillith Corharvest', disabled: false },
      { name: 'Hank Salizar', disabled: false },
      { name: 'Harima Kenji', disabled: false },
      { name: 'Harry Mckenzie', disabled: false }
    ];
  }
}
