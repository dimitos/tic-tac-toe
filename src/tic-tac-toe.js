class TicTacToe {
  constructor() {
    this.fieldСount = 0; // количество закрытых полей
    this.mark = 'X';
    this.map = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }
  //должен вернуться x или o
  getCurrentPlayerSymbol() {
    return (this.mark = this.mark === 'X' ? 'O' : 'X');
  }

  //должен правильно обновить состояние класса (изменить текущего игрока, обновить хранилище меток и т. д.)
  nextTurn(rowIndex, columnIndex) {}

  // должен возвращать истину, если игра завершена (например, есть победитель или это ничья)
  isFinished() {
    return this.getWinner() !== null || isDraw();
  }

  // должен возвращать символ победителя ( x или o) или null, если победителя еще нет
  // проверяем есть ли победитель
  getWinner() {}

  //должен вернуть истину, если больше нет полей для размещения x или o, если больше нет ходов
  // ложь, если ходы есть
  noMoreTurns() {
    return this.fieldСount >= 9;
  }

  // Это ничья, метод должен вернуть истину, если ходов больше нет и нет победителя
  isDraw() {
    return this.noMoreTurns() && this.getWinner() === null;
  }

  // должен возвращать matrix[row][col]значение (если есть) или null
  getFieldValue(rowIndex, colIndex) {
    return this.map[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
