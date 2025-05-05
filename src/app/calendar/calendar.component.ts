import { Component, OnInit } from '@angular/core';
import { OpportunityServiceService } from '../serviceOpportunity/opportunity-service.service';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { Subject } from 'rxjs';
import { addDays, addWeeks, addMonths, subDays, subWeeks, subMonths, isSameDay, isSameMonth } from 'date-fns';
import { CalendarMonthViewDay } from 'angular-calendar';
import { startOfDay, endOfDay } from 'date-fns';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@Component({
  selector: 'app-calendar',
  imports: [
    BrowserModule,
    // other modules
    CalendarModule,
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  refresh: Subject<void> = new Subject<void>();  activeDayIsOpen: boolean = false;

  constructor(private opportunityService: OpportunityServiceService) {}

  ngOnInit(): void {
    this.loadOpportunities();
  }

  loadOpportunities(): void {
    this.opportunityService.getAllOpportunities().subscribe((opportunities) => {
      this.events = opportunities.map((opportunity) => {
        return {
          start: startOfDay(new Date(opportunity.datePosted)),
          title: opportunity.title,
          color: {
            primary: '#1e90ff',
            secondary: '#D1E8FF'
          },
          allDay: true,
          resizable: {
            beforeStart: true,
            afterEnd: true
          },
          draggable: true,
          meta: {
            opportunity: opportunity,
          },
        };
      });
  
      // Rafraîchir l'affichage
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
        // Ce cas ne devrait jamais arriver si CalendarView est bien typé
        changeFn = addDays; // Fallback par défaut
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
    // Vous pouvez maintenant accéder directement aux propriétés de l'événement
    console.log('Event clicked:', event.title, 'from', event.start, 'to', event.end);
    
    // Ajoutez votre logique ici, par exemple:
    // - Ouvrir un modal avec les détails
    // - Naviguer vers une autre vue
    // - Modifier l'événement
  }
}