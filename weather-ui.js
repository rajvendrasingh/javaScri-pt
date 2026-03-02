// Weather UI script — renders mock data and supports OpenWeatherMap if API key provided.

const API_KEY = ""; // <-- Optional: paste your OpenWeatherMap API key here
const useMock = true; // set to false to attempt real API (requires API_KEY)

const $ = id => document.getElementById(id);

function formatTemp(k){
	// expecting Kelvin if using OWM; if mock provides Celsius, just return
	if (!k && k !== 0) return "—";
	if (API_KEY && !useMock) {
		// treat as Kelvin
		return Math.round(k - 273.15) + '°C';
	}
	return Math.round(k) + '°C';
}

function renderCurrent(data){
	const root = $('current');
	root.innerHTML = '';

	const card = document.createElement('div');
	card.className = 'card current-card';

	const left = document.createElement('div');
	left.className = 'meta';
	left.innerHTML = `
		<h2 class="temp">${formatTemp(data.temp)}</h2>
		<div class="desc">${data.description}</div>
		<div class="details">
			<div>Humidity: ${data.humidity}%</div>
			<div>Wind: ${data.wind} m/s</div>
		</div>
	`;

	const right = document.createElement('div');
	right.className = 'icon';
	right.style.textAlign = 'center';
	right.innerHTML = `<div style="font-size:48px">${data.icon || '☀️'}</div><div style="color:var(--muted)">${data.city}</div>`;

	card.appendChild(left);
	card.appendChild(right);
	root.appendChild(card);
}

function renderForecast(list){
	const root = $('forecast');
	root.innerHTML = '';
	list.forEach(item => {
		const f = document.createElement('div');
		f.className = 'forecast-card';
		f.innerHTML = `<div style="font-weight:600">${item.day}</div><div style="font-size:20px;margin:8px 0">${item.icon}</div><div style="color:var(--muted)">${formatTemp(item.temp)}</div>`;
		root.appendChild(f);
	});
}

function showLoader(text){
	const l = $('loader');
	if (l) l.innerText = text;
}

async function fetchWeather(city){
	showLoader('Loading...');
	if (useMock || !API_KEY) {
		// return mock data after short delay
		await new Promise(r => setTimeout(r, 500));
		const mock = {
			current:{city, temp:22, description:'Partly cloudy', humidity:64, wind:3.2, icon:'⛅'},
			forecast:[
				{day:'Today', temp:22, icon:'⛅'},
				{day:'Tue', temp:24, icon:'🌤️'},
				{day:'Wed', temp:19, icon:'🌧️'},
				{day:'Thu', temp:20, icon:'⛅'},
				{day:'Fri', temp:21, icon:'🌤️'}
			]
		};
		renderCurrent(mock.current);
		renderForecast(mock.forecast);
		return;
	}

	try {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}`;
		const res = await fetch(url);
		if (!res.ok) throw new Error('City not found');
		const json = await res.json();
		const cur = {
			city: `${json.name}, ${json.sys?.country || ''}`,
			temp: json.main.temp,
			description: json.weather?.[0]?.description || '',
			humidity: json.main.humidity,
			wind: json.wind.speed,
			icon: '🌤️'
		};
		renderCurrent(cur);

		// fetch simple forecast (onecall requires lat/lon)
		const onecallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${json.coord.lat}&lon=${json.coord.lon}&exclude=minutely,hourly,alerts&appid=${API_KEY}`;
		const fRes = await fetch(onecallUrl);
		if (fRes.ok){
			const fJson = await fRes.json();
			const days = fJson.daily.slice(0,5).map((d,i)=>({day: i===0? 'Today': new Date(d.dt*1000).toLocaleDateString(undefined,{weekday:'short'}), temp: d.temp.day, icon:'☀️'}));
			renderForecast(days);
		}
	} catch (err){
		showLoader('Error: '+err.message);
	}
}

function attach(){
	const btn = document.getElementById('searchBtn');
	const input = document.getElementById('cityInput');
	btn.addEventListener('click', ()=>{
		const q = input.value.trim();
		if (!q) { showLoader('Please enter a city'); return; }
		fetchWeather(q);
	});
	input.addEventListener('keyup', (e)=>{ if (e.key === 'Enter') btn.click(); });
}

document.addEventListener('DOMContentLoaded', ()=>{
	attach();
});

