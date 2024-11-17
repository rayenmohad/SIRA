import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  user: any;

  constructor(@Inject(DataService) private dataservice: DataService) { }

  ngOnInit(): void {
    this.dataservice.getUserData().subscribe((data: any) => {
      this.user = data;
    });
  }

  generatePDF(): void {
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

