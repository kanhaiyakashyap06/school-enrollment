import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { CommomserviceService } from '../_service/commomservice.service';

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})
export class BasicinfoComponent implements OnInit {
  basicinfoForm!: FormGroup
  @Input() formGroupName: any;
  submitted!: boolean;
  basicinfodata: any;
  constructor(private fb: FormBuilder,private rootFormGroup: FormGroupDirective,private commonservice: CommomserviceService) { }

  ngOnInit(): void {
    this.basicinfoForm=this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }
get studentName(): any {
  return this.basicinfoForm.get('studentName');
}
get mobile(): any {
  return this.basicinfoForm.get('mobile');
}
get email(): any {
  return this.basicinfoForm.get('email');
}
get dob(): any {
  return this.basicinfoForm.get('dob');
}
get gender(): any {
  return this.basicinfoForm.get('gender');
}
/*
  for validation
  get studentName()
  get mobile()
  numInputStream(data: any)
  charInputStream(data:any)
  */
numInputStream(data: any) {
  return data.target.value = data.target.value.replace(/[^0-9.]/g, '');
}
charInputStream(data:any) {
  return data.target.value = data.target.value.replace(/[^A-z .]/g, '');
}
emailInputStream(data:any){
  return data.target.value = data.target.value.replace(/[^A-z ^0-9 @_ .]/g, '');
}

show = false;
  buttonName = 'Show';
  hide: any;

  toggle() {
  this.show = !this.show

  if(this.show) {
  this.buttonName = 'Hide'
  }
  else {
  this.buttonName = 'Show'
  }
  }
}
