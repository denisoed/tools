module.exports = {
  /**
   * Создает двумерный массив с частями исходного массива в виде массивов
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
  },
  /**
   * Удаляет из массива не валидные значения false, null, "", undefined, и NaN. Так же можно добавлять свои слова исключения
   * @param {array} array - Массив который будет отфильтрован
   * @param {array} exclude - Массив который содержит кастомные слова исключения
   * @returns Вернет массив без не валидных значений
   * @example
   * 
   * tools.compact([1, NaN, 2, 0, false, 3]);
   * // => [1, 2, 3]
   * 
   * tools.compact([1, NaN, 2, "!!!"], ["!!!"]);
   * // => [1, 2]
   */
  compact(array, exclude = []) {
    const notValid = [false, null, "", undefined, NaN];
    if (exclude.length) exclude.forEach(element => notValid.push(element));
    return array.filter(element => notValid.every(exclude => exclude !== element));
  }
};
