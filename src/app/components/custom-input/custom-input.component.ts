import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CustomInputComponent,
    multi: true
  }]
})
export class CustomInputComponent implements OnInit, ControlValueAccessor {

  @Input() label !: string;

  value !: string;

  onValueChange !: (newValue: string) => void;
  onTouched !: () => void;

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onValueChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


}
