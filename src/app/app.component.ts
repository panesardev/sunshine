import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { CurrentWeatherData } from './models/weather.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	location: string;
	locationIsEntered: boolean = false;
	locationIsCorrect: boolean = false;
	weatherData: CurrentWeatherData;

	currentTemp: number;
	windkmps: number;
	feelsLike: number;
	tempMax: number;
	tempMin: number;
	country: string;

	constructor(private weatherService: WeatherService) {}
	
	async displayWeatherData(): Promise<any> {
		let locationElement = document.querySelector('.input-div');
		
		if (!this.location || '' === this.location) {
			this.locationIsEntered = false;
			locationElement.classList.remove('invalid-field');
		} else {
			this.locationIsEntered = true;

			try {
				this.weatherData = await this.weatherService.getResponse(this.location).toPromise();
				locationElement.classList.remove('invalid-field');
				this.locationIsCorrect = true;
				this.setWeatherData();
			} catch (error) {
				locationElement.classList.add('invalid-field');
				this.locationIsCorrect = false;
			}

			const countryResponse = await this.weatherService.getCountry(this.weatherData.sys.country).toPromise();
			this.country = countryResponse['name'];
		}
	}

	setWeatherData(): void {
		this.currentTemp = Number(this.weatherData.main.temp.toFixed());
		this.windkmps = Number(((this.weatherData.wind.speed * 18)/5).toFixed(2));
		this.feelsLike = Number(this.weatherData.main.feels_like.toFixed());
		this.tempMax = Number(this.weatherData.main.temp_max.toFixed());
		this.tempMin = Number(this.weatherData.main.temp_min.toFixed());
	}

}