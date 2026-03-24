import { Component } from '@angular/core';
import { Datahandlers } from '../../services/datahandlers';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard1',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard1.html',
  styleUrl: './dashboard1.css',
})
export class Dashboard1 {
  whatsapp = {
    type: "whatsapp",
    "url": ""
  }
  getlink = {
    type: "getLink",
    "url": ""
  }
  download = {
    type: "download",
    "url": ""
  }
  userData: any;
  userProfile: any;
  ngOnInit(): void {
    // this.userDetails();
  }
  constructor(private dataSav: Datahandlers) { }

  updateWhatsap(data: any) {

    // if (!this.whatsapp.url || !this.getlink.url || !this.download.url) {
    //   console.log("Enter number first");
    //   return;
    // }
    this.dataSav.updateLink(data).subscribe((res: any) => {
      console.log(res);
      // this.userData = res.data;
      Swal.fire({
        title: 'Success!',
        text: res?.message,
        icon: 'success',
        confirmButtonText: 'OK'
      });
      // console.log(res);
    }, (error: any) => {
      // console.error("number not added");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    })
  }

  // userDetails(){
  //    this.dataSav.userProfile().subscribe((res: any) => {
  //     console.log("data is", res);
  //     this.userProfile = res.profile;
  //   }, (error: any) => {
  //     console.error("there is no data");
  //   })
  // }
}
