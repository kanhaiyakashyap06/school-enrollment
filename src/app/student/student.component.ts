import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommomserviceService } from '../_service/commomservice.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentData: any
  userForm!: FormGroup;
  submitted!: boolean;
  basicinfodata: any;
  constructor(private commonservice: CommomserviceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    var newdata: any
    this.commonservice.getstudentinfo(newdata).subscribe(data => {
      this.studentData = data
      console.log(this.studentData)
    })
    this.createform()
  }
  createform() {
    this.userForm = this.fb.group({
      basicInfo: this.fb.group({
        studentName: ['', Validators.required],
        email: ['', Validators.required],
        mobile: ['', Validators.required],
        dob: ['', Validators.required],
        gender: ['', Validators.required]
      }),
      address: this.fb.group({
        address: ['', Validators.required],
        aditional: [''],
        pincode: ['', Validators.required],
        state: ['', Validators.required],
        city: ['', Validators.required]
      })
    })
  }

  submitfom() {
    if (!this.userForm.valid) {
      this.userForm.markAllAsTouched();
    }
    else {
      this.submitted = true;
      this.commonservice.poststudentinfo(this.userForm.value).subscribe(data => {
        this.basicinfodata = data
        console.log(this.basicinfodata)
      })

    }

  }

}
