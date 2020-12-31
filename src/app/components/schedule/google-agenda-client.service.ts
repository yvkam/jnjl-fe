import {Injectable} from '@angular/core';
import {AbstractRestClient, Get, PathParam, QueryParam, RestClient} from '@kanelu/declarative-rest-client';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
@RestClient({
  baseUrl: 'https://www.googleapis.com'
})
export class GoodleCalendarClient extends AbstractRestClient {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  @Get('/calendar/v3/calendars/{calendarId}/events')
  get(@PathParam('calendarId')calendarId: string, @QueryParam('key')key: string): Observable<GoogleAgenda> {
    // @ts-ignore
    return;
  }
}

export interface GoogleAgenda {
  items: Item[];
}

export interface Item {
  summary: string;
  description: string;
  start: End;
  hangoutLink?: string;
}


export interface End {
  dateTime: Date;
}


