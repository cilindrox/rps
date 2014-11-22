'use strict';

describe('Service: playService', function () {

  // load the service's module
  beforeEach(module('rockPaperScissorsApp'));

  // instantiate service
  var playService;
  beforeEach(inject(function (_playService_) {
    playService = _playService_;
  }));

  it('should do something', function () {
    expect(!!playService).toBe(true);
  });

});
