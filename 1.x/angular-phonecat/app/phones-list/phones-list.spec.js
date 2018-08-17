describe('phones-list', function() {
	beforeEach(module('phones-list'));

	describe('phonesListConteoller', function() {
		var ctrl;
		beforeEach(inject(function($componentController) {
			ctrl = $componentController('phonesList');
		}));

		it('should create a `phones` model with 3 phones', function() {
	    expect(ctrl.name).toBe('Conrad');
	  });

	  it('should have 3 results for phones', function() {
	  	expect(ctrl.phones.length).toBe(3);
	  })

	  it('should have the orderProp default to age', function() {
	  	expect(ctrl.orderProp).toBe('age');
	  })
	})
})