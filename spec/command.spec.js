const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function () {
  //Test 1
  test("throws error if command type is NOT passed into constructor as the first parameter", function () {
    expect(function () { new Command(); }).toThrow(new Error('Command type required.'));
  });
  
  //Test 2
  test("constructor sets command type", function () {
    let modeCommand = new Command('MODE_CHANGE', 'LOW_POWER');
    expect(modeCommand.commandType).toBe('MODE_CHANGE');

  });

  //Test 3
  test("constructor sets a value passed in as the 2nd argument", function () {
    let moveCommand = new Command('MOVE', 12000);
    expect(moveCommand.value).toBe(12000);

  });

});