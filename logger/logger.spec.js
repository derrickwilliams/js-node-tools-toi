var dw = dw || {};

dw.consoleReporter = function consoleReporter(console, context, msg) {
  console.log('[' + context + ']', msg);
};

dw.logger = function logger(options) {
  var context = options.context || 'Unknown';
  return options.reporter.bind(null, context);
};

//describe('dw.logger', function() {
//
//  it('passes `Unknown` context with given message to reporter when no context provided', function() {
//    var log, args, reporter = createSpy('mockReporter');
//
//    log = dw.logger({ reporter: reporter });
//    log('wuddup');
//
//    args = reporter.calls[0].args;
//
//    expect(args[0]).toBe('Unknown');
//    expect(args[1]).toBe('wuddup');
//  })
//
//  it('passes given context and message to reporter', function() {
//    var log, args, reporter = createSpy('mockReporter');
//
//    log = dw.logger({ context: 'Test context', reporter: reporter });
//    log('wuddup');
//
//    args = reporter.calls[0].args;
//
//    expect(args[0]).toContain('Test context');
//    expect(args[1]).toBe('wuddup');
//  })
//
//});
//
//describe('dw.consoleReporter', function() {
//
//  it('passes context and message to console.log', function() {
//
//    var args, consoleMock = { log: createSpy('consoleMock') };
//
//    dw.consoleReporter(consoleMock, 'Crazy', 'Train');
//
//    debugger
//    args = consoleMock.log.calls[0].args;
//
//    expect(args[0]).toContain('Crazy');
//    expect(args[1]).toBe('Train');
//
//  });
//
//});
