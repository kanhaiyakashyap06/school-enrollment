import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { CommomserviceService } from '../_service/commomservice.service';

@Component({
  selector: 'app-addressinfo',
  templateUrl: './addressinfo.component.html',
  styleUrls: ['./addressinfo.component.css']
})
export class AddressinfoComponent implements OnInit {
  addressForm!: FormGroup
  submitted!: boolean;
  addressinfodata: any;
  @Input() formGroupName: any;
  constructor(private fb: FormBuilder,private rootFormGroup: FormGroupDirective,private commonservice: CommomserviceService) {
    
   }

  ngOnInit(): void {
    this.addressForm=this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }
  
  get address(): any {
    return this.addressForm.get('address');
  }
  get aditional(): any {
    return this.addressForm.get('aditional');
  }
  get pincode(): any {
    return this.addressForm.get('pincode');
  }
  get state(): any {
    return this.addressForm.get('state');
  }
  get city(): any {
    return this.addressForm.get('city');
  }
  numInputStream(data: any) {
    return data.target.value = data.target.value.replace(/[^0-9.]/g, '');
  }
  
}
