import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NgFormExamples';

  profileForm !: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      name: this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
      }),
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        country: ['', Validators.required],
      }),
      skills: this.formBuilder.array(['Java','Angular'], [Validators.required,
                                          Validators.minLength(1),
                                          Validators.maxLength(3),
                                          UNIQUE_VALUES_ONLY])
    });
  }

  onSubmit(): void {
    console.log(this.profileForm);
  }

}

const UNIQUE_VALUES_ONLY = (control: FormControl): ValidationErrors | null => {
    let values: [] = control.value as [];
    let uniqueValues = Array.from(new Set(values));
    if (values.length === uniqueValues.length) {
        return null;
    }
    return {
        duplicate: true
    }
}


// skills controls: https://netbasal.com/angular-reactive-forms-the-ultimate-guide-to-formarray-3adbe6b0b61a
// custom validator: https://codecraft.tv/courses/angular/advanced-topics/basic-custom-validators/
// Splitting angular reactive form into multiple small components : https://youtu.be/2DOkiQFB5ic
// custome form control input component : https://youtu.be/WGU-DnhpsA0
