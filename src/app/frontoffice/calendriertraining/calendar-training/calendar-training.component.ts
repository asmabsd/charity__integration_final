import { Component, OnInit } from '@angular/core';
import { TrainingServiceService } from '../../../serviceTraining/training-service.service';

import { Training } from '../../../services/models/training';
import { CalendarEvent, CalendarModule, CalendarView } from 'angular-calendar';
import { Subject } from 'rxjs';
import { addDays, addWeeks, addMonths, subDays, subWeeks, subMonths, isSameDay, isSameMonth, startOfDay } from 'date-fns';
import { CalendarMonthViewDay } from 'angular-calendar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar-training',
  imports: [
    CommonModule,
    CalendarModule
  ],
  templateUrl: './calendar-training.component.html',
  styleUrls: ['./calendar-training.component.css']
})
export class CalendarTrainingComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  refresh: Subject<void> = new Subject<void>();
  activeDayIsOpen: boolean = false;

  constructor(private trainingService: TrainingServiceService) {}

  ngOnInit(): void {
    this.loadTrainings();
  }

  loadTrainings(): void {
    this.trainingService.getAllTrainings().subscribe((trainings) => {
      this.events = trainings.map((training) => {
        return {
          start: startOfDay(new Date(training.startDate.toString())),
          end: training.endDate ? startOfDay(new Date(training.endDate.toString())) : undefined,
          title: `${training.title} (${training.location})`, // Affiche le titre et la location
          color: {
            primary: '#ad2121', // Rouge pour différencier des opportunités
            secondary: '#FAE3E3'
          },
          allDay: true,
          resizable: {
            beforeStart: true,
            afterEnd: true
          },
          draggable: true,
          meta: {
            training: training,
          },
        };
      });
      this.refresh.next();
    });
  }

  setView(view: CalendarView): void {
    this.view = view;
  }

  changeDate(direction: 'next' | 'prev'): void {
    let changeFn: (date: Date, amount: number) => Date;
    
    switch (this.view) {
      case CalendarView.Day:
        changeFn = direction === 'next' ? addDays : subDays;
        break;
      case CalendarView.Week:
        changeFn = direction === 'next' ? addWeeks : subWeeks;
        break;
      case CalendarView.Month:
        changeFn = direction === 'next' ? addMonths : subMonths;
        break;
      default:
        changeFn = addDays;
    }
  
    this.viewDate = changeFn(this.viewDate, 1);
  }

  today(): void {
    this.viewDate = new Date();
  }

  dayClicked({day}: {day: CalendarMonthViewDay}): void {
    if (isSameMonth(day.date, this.viewDate)) {
      this.activeDayIsOpen = !((isSameDay(this.viewDate, day.date) && this.activeDayIsOpen === true)) &&
        day.events.length > 0;
      this.viewDate = day.date;
    }
  }

  eventClicked({event}: {event: CalendarEvent<any>}): void {
    console.log('Formation cliquée:', event.title);
    // Vous pouvez ajouter ici une logique pour afficher plus de détails
    // Par exemple ouvrir un modal avec les informations complètes
  }
}