angular
.module('phones-list')
.component('phonesList', {
	templateUrl: 'phones-list/phones-list.template.html',
	controller: ['$http', function ($http) {
		this.name = 'Conrad';

		$http.get('phones/phones.json').then((response) => {
			this.phones = response.data;
		})

    this.orderProp = 'age';
	}]
})