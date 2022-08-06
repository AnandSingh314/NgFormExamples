import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillSetComponent implements OnInit {

  @Input() formGroupName !: string;

  form!:FormArray;

  constructor(private formGroupDirective: FormGroupDirective, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formGroupDirective.control.get(this.formGroupName) as FormArray;
  }

  addNewSkill(newSkill: string): void {
    this.form.push(this.formBuilder.control(newSkill));
  }

  removeSkill(index: number): void {
    this.form.removeAt(index)
  }

}
