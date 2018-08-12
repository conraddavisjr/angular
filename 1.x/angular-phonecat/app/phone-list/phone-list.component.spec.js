describe('phoneList', function() {

  beforeEach(module('phoneList'));

  it('should create a `phones` model with 3 phones', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('phoneList', {$scope: scope});

    expect(scope.phones.length).toBe(3);
  }));

});