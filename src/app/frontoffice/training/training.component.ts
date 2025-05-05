import { Component } from '@angular/core';
import { TrainingServiceService } from '../../serviceTraining/training-service.service';
import { Training } from '../../services/models/training';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-training',
  imports: [
    CommonModule,
   FormsModule],

  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {
  training: Training = {
    title: '',
    deadline:'',
    description: '',
    category: 'FORMATION',
    location: '',
    trainer: '',
    startDate: '',
    endDate: '',
    type: 'FULL_TIME'
  };

  constructor(private trainingService: TrainingServiceService) {}

  addTraining() {
    if (!this.validateForm()) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    console.log("Données envoyées :", this.training);

    this.trainingService.createTraining(this.training).subscribe({
      next: (response: any) => {
        console.log('Formation créée avec succès', response);
        alert('Formation ajoutée avec succès !');
        this.resetForm();
      },
      error: (error: any) => {
        console.error('Erreur lors de la création', error);
        alert('Erreur lors de la création de la formation.');
      }
    });
  }

  resetForm() {
    this.training = {
      title: '',
      description: '',
      category: 'FORMATION',
      location: '',
      trainer: '',
      startDate: '',
      endDate: '',
      type: 'FULL_TIME',
    deadline: '',
  };
  }

  validateForm(): boolean {
    return (
      this.training.title.trim() !== '' &&
      this.training.description.trim() !== '' &&
      this.training.startDate !== '' &&
      this.training.endDate !== ''
    );
  }
}
