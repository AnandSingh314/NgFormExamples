import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameComponent implements OnInit {

  rootFormGroup !:FormGroup

  constructor(private formGroupDirective: FormGroupDirective) {

   }

  ngOnInit(): void {
    this.rootFormGroup = this.formGroupDirective.control;
  }

}
