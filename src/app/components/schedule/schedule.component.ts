import {Component, OnInit} from '@angular/core';
import {Agenda, AgendaItem, ScheduleService} from './schedule.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
})
export class ScheduleComponent {

  agenda$: Observable<Agenda>;

  constructor(private scheduleService: ScheduleService) {
    this.agenda$ = scheduleService.getAgenda();
  }

}
