import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {GoodleCalendarClient, Item} from './google-agenda-client.service';
import {map} from 'rxjs/operators';


function convertToScheduleItem(item: Item): ScheduleItem {
  const [description, speaker] = item.description ? item.description.split('|') : [];
  const dateTime = new Date(item.start?.dateTime);
  return {
    dateTime,
    title: item.summary,
    description,
    speaker
  };
}

function convertToAgendaItems(scheduleItems: ScheduleItem[]): AgendaItem[] {
  const agendaItems: AgendaItem[] = [];
  scheduleItems.forEach(si => {
    const find = agendaItems.find(a => a.date.getDate() === si.dateTime.getDate())?.schedule?.push(si);
    if (!find) {
      agendaItems.push({
        date: new Date(si.dateTime),
        schedule: [si]
      });
    }
  });

  agendaItems.sort((it1, it2) => it1.date.getDate() - it2.date.getDate());

  return agendaItems;
}

function convertToAgenda(items: Item[]): Agenda {
  const scheduleItem: ScheduleItem[] = items.map(item => convertToScheduleItem(item));
  const agendaItems = convertToAgendaItems(scheduleItem);
  return {agendaItems};
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  readonly calendarId = 'e93brfb26rjq744ipq3ju1obuo@group.calendar.google.com';
  readonly key = 'AIzaSyA2zRmepRB48wwT1ZJm-fXouFy4mQHD3yo';

  constructor(private goodleCalendarClient: GoodleCalendarClient) {
  }

  getAgenda(): Observable<Agenda> {
    return this.goodleCalendarClient.get(this.calendarId, this.key).pipe(
      map(cal => convertToAgenda(cal.items))
    );
  }
}

export interface Agenda {
  agendaItems: AgendaItem[];
}

export interface ScheduleItem {
  dateTime: Date;
  title: string;
  description: string;
  speaker: string;
}

export interface AgendaItem {
  date: Date;
  schedule: ScheduleItem[];
}
