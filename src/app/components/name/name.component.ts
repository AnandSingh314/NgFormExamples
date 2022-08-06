import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameComponent implements OnInit {

  @Input() formGroupName !: string;

  form !: FormGroup;

  constructor(private formGroupDirective: FormGroupDirective) {

  }

  ngOnInit(): void {
    this.form = this.formGroupDirective.control.get(this.formGroupName) as FormGroup;
  }

}
