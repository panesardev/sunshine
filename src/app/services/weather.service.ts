import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { CurrentWeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {

	constructor(private http: HttpClient) { }

	getResponse(location: string = 'brampton'): Observable<CurrentWeatherData> {
		const CURRENT_WEATHER_URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${environment.apikey}&units=metric`;
		return this.http.get<CurrentWeatherData>(CURRENT_WEATHER_URL);
	}

	getCountry(countryCode: string): Observable<{}> {
		const COUNTRY_URL: string = `https://restcountries.eu/rest/v2/alpha/${countryCode}`;
		return this.http.get(COUNTRY_URL);
	}

}
