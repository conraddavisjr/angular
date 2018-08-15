describe('phoneListComponent', function () {

	beforeEach(module('phoneListComponent'))

	var componentController;
	beforeEach(inject(function ($componentController) {
		componentController = $componentController;
	}))

	it('should have the name Conrad with a capitol C', function() {
		var ctrl = componentController('phoneListComponent')
		expect(ctrl.name).toBe('Conrad')
	})
})