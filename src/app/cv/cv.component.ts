import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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
export class CvComponent {
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

  addExperience() {
    this.user.experience.push({
      title: '',
      company: '',
      startDate: '',
      endDate: '',
      duties: ['']
    });
  }

  addDuty(i: number) {
    this.user.experience[i].duties.push('');
  }

  addSkill() {
    this.user.skills.push('');
  }
  trackByIndex(index: number): number {
    return index; // Return the index to help Angular track the items more efficiently
  }
  
  generatePDF() {
    const template = document.getElementById('cv-professional-template');
    if (template) {
      // Show the template before capturing
      template.style.display = 'block';
      // Give time for Angular data binding to update the view
      setTimeout(() => {
        html2canvas(template).then(canvas => {
          const imgWidth = 208;
          const imgHeight = canvas.height * imgWidth / canvas.width;
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm', 'a4');

          if (imgData && imgData.includes('data:image/png;base64,')) {
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save('cv.pdf');
          } else {
            console.error('Generated image data is invalid or corrupt');
          }

          // Hide the template again after generating the PDF
          template.style.display = 'none';
        }).catch(err => {
          console.error('Error generating canvas:', err);
          // Hide the template again if an error occurs
          template.style.display = 'none';
        });
      }, 100); // Timeout to allow Angular to update data bindings before capturing
    } else {
      console.error('Element with id "cv-professional-template" not found');
    }
  }
}
