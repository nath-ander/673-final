/** @format */

const a = {
	data: {},
	layers: {},
	location: {
		feedBack: '#locateFeedback',
		info: {},
		weather: '',
	},
	domain: {
		unit: 'county',
		state: ['21'],
		data: '2020/acs/acs5',
	},
	variables: [
		{
			name: 'Soil Erosion Rate',
			label: '2020',
			var: 'PIMPV_2020',
		},
		{
			name: 'Soil Erosion Rate',
			label: '2021',
			var: 'PIMPV_2021',
		},
	],
	vars: {
		aV: '2020',
		nV: '2021',
	},
	geojsons: {
		counties: 'data/wbdhu12_a_ky.geojson',
	},
	map: {
		div: 'map',
		options: {
			zoomSnap: 1,
			zoomControl: false,
		},
		tooltip: function (name, a, b) {
			const tooltipInfo = `<b>${name} County </b></br>
                                 ${((a / b) * 100).toFixed(1)} Rate of Erosion`;
			return tooltipInfo;
		},
		styles: {
			default: {
				color: '#20282e',
				weight: 2,
				fillOpacity: 1,
				fillColor: '#1f78b4',
			},
			mouseover: {
				color: '#ff6e00',
			},
			mouseout: {
				color: '#20282e',
			},
		},
		fitOptions: {
			padding: [20, 20],
			animate: false,
		},
		zoomOptions: {
			position: 'bottomright',
		},
	},
	tiles: {
		url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
		options: {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		},
	},
	buttons: {
		dropdown: {
			id: 'dropdown-ui',
			select: '#dropdown-ui select',
			options: {
				position: 'topright',
			},
		},
		locate: {
			id: '#geolocate-ui',
		},
	},
	legend: {
		div: 'legend',
		colors: {
			5: ['#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d'],
			7: ['#ffffe0', '#b9e5dd', '#93c4d2', '#73a2c6', '#5681b9', '#3761ab', '#00429d'],
		},
		makePercent: function (a, b, color) {
			const classLabel = `<div><span style ="background: ${color}"></span>
                                <label>${(a * 100).toFixed(1)} &mdash;
                                ${(b * 100).toFixed(1)}%</label></div>`;
			return classLabel;
		},
		options: {
			position: 'topleft',
		},
		getColor: function (d, breaks, classes) {
			const colors = a.legend.colors[classes];
			for (let i = 0; i < classes; i++) {
				if (d <= breaks[i][1]) {
					return colors[i];
				}
			}
		},
	},
	classes: {
		number: 5,
	},
};
