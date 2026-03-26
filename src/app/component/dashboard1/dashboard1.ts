import { Component } from '@angular/core';
import { Datahandlers } from '../../services/datahandlers';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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
  whatsapp2 = {
    type: "whatsapp2",
    "url": ""
  }
  whatsapp3 = {
    type: "whatsapp3",
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
  constructor(private dataSav: Datahandlers, private router: Router) { }
  ngOnInit() {
    // this.userDetails();
    this.getOldData();
  }

  getOldData() {
    this.dataSav.getAlllinks().subscribe((res: any) => {
      this.whatsapp.url = res?.data?.whatsapp_url;
      this.whatsapp2.url = res?.data?.whatsapp2_url;
      this.whatsapp3.url = res?.data?.whatsapp3_url;
      this.getlink.url = res?.data?.getLink_url;
      this.download.url = res?.data?.download_url
    });
  }
  updateWhatsap(data: any) {
    this.dataSav.updateLink(data).subscribe((res: any) => {
      Swal.fire({
        title: 'Success!',
        text: res?.message,
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }, () => {
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
logout() {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will be logged out!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, logout',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.clear();
      Swal.fire({
        title: 'Logged out!',
        text: 'You have been logged out successfully.',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
      });

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1500);
    }
  });
}
}
