import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Datahandlers } from '../../services/datahandlers';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{
  activeTab = 0
  allLinks : any;
  onChange(data: any) {
    this.activeTab = data
  }

  constructor(private dataServe : Datahandlers){

  }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.dataServe.getAlllinks().subscribe((res : any)=>{
      console.log(res);
      this.allLinks = res?.data;
    })
  }
  toggleMenu(){
    const toggle = document.getElementById('navLinks');
    if(toggle){
      toggle.classList.toggle('show')
    }
  }
  getLinksurl(){
    window.open(this.allLinks?.getLink_url, '_blank');
  }
  getWhtspurl(){
    window.open(this.allLinks?.whatsapp_url, '_blank');
  }
  getWhtspurl2(){
    window.open(this.allLinks?.whatsapp2_url, '_blank');
  }
  getWhtspurl3(){
    window.open(this.allLinks?.whatsapp3_url, '_blank');
  }
  getDownloadurl(){
    window.open(this.allLinks?.download_url, '_blank');
  }
  scrollTo(id: string, event: Event) {
  event.preventDefault(); // 🚀 stops reload

  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
}
}
