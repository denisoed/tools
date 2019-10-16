module.exports = {
  /**
   * 
   * @param {array} array - Массив который нужно порезать на массивы с указанной длиной
   * @param {number} size - Количество частей на которые порежется массив
   * @returns {array} Вернет двумерный массив
   * @example
   * 
   * tools.chunk([1, 2, 3, 5, 6, 7, 8], 2);
   * // => [[1, 2], [3, 4], [5, 6], [7, 8]]
   */
  chunk(array, step) {
    const result = [];
    const loopCount = Math.ceil(array.length / step);
    let count = 0;
    let nextStep = step;
    for (let i = 0; i < loopCount; i++) {
      result.push(array.slice(count, nextStep));
      count += step;
      nextStep += step;
    }
    return result;
  }
};
