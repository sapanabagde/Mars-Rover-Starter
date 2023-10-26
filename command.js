class Command {
  constructor(commandType, value) {
    this.commandType = commandType;
    if (!commandType) {                           //instructing to comment out
      throw Error("Command type required.");
    }                                             //instructing to comment out
    this.value = value;
  }
}

module.exports = Command;