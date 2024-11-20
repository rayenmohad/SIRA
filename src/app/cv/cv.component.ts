import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule], 
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  user = {
    name: '',
    profession: '',
    email: '',
    phone: '',
    linkedin: '',
    experience: [
      {
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        duties: ['']
      }
    ],
    education: {
      degree: '',
      institution: ''
    },
    skills: ['']
  };

  constructor(@Inject(DataService) private dataservice: DataService) {}

  ngOnInit() {
    this.dataservice.getUserData().subscribe((data: any) => {
      this.user = data['users'][0];
    });
    console.log(this.user);
  }

  addExperience() {
    this.user.experience.push({
      title: '',
      company: '',
      startDate: '',
      endDate: '',
      duties: ['']
    });
  }

  addDuty(index: number) {
    this.user.experience[index].duties.push('');
  }

  addSkill() {
    this.user.skills.push('');
  }

  generatePDF() {
    const data = document.getElementById('cv-template');
    if (data) {
      html2canvas(data).then(canvas => {
        const imgWidth = 208;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('cv.pdf');
      });
    }
  }
}
