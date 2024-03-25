const topStudentFinding = require('../functions/top-student.function.js');

describe('Тестирование функции поиска топ-студента', () => {
    it.each([
      [
        [
          { name: 'Ivan', score: 35, date: '2022-05-10' },
          { name: 'Maria', score: 5, date: '2022-06-10' },
          { name: 'Olga', score: 0, date: '2022-07-10' }
        ],
        'Поздравляем лучшего студента Ivan'
      ],
      [
        [
          { name: 'Margo', score: 10, date: '2022-06-01' },
          { name: 'Natalia', score: 25, date: '2022-05-01' }
        ],
        'Поздравляем лучшего студента Natalia'
      ],
    ])('Тест при наличии одного топ-студента, подходящего по параметрам', (data, expectedOutput) => {
      const consoleSpy = jest.spyOn(console, 'log');
      topStudentFinding([data]);
      expect(consoleSpy).toHaveBeenCalledWith(expectedOutput);
      consoleSpy.mockRestore();
    });

    it.each([
        [
          [
            { name: 'Ivan', score: 35, date: '2022-05-10' },
            { name: 'Maria', score: 35, date: '2022-06-10' },
            { name: 'Olga', score: 0, date: '2022-07-10' }
          ],
          'Поздравляем лучшего студента Ivan'
        ],
        [
          [
            { name: 'Margo', score: 25, date: '2022-06-01' },
            { name: 'Natalia', score: 25, date: '2022-05-01' }
          ],
          'Поздравляем лучшего студента Natalia'
        ],
      ])('Тест, если у студентов одинаковое количество баллов, но разная дата выполнения', (data, expectedOutput) => {
        const consoleSpy = jest.spyOn(console, 'log');
        topStudentFinding([data]);
        expect(consoleSpy).toHaveBeenCalledWith(expectedOutput);
        consoleSpy.mockRestore();
      });

      it.each([
        [
          [
            { name: 'Ivan', score: 35, date: '2022-05-10' },
            { name: 'Maria', score: 35, date: '2022-05-10' },
            { name: 'Olga', score: 0, date: '2022-07-10' }
          ],
          'Поздравляем лучшего студента Maria'
        ],
        [
          [
            { name: 'Margo', score: 25, date: '2022-06-01' },
            { name: 'Natalia', score: 25, date: '2022-06-01' }
          ],
          'Поздравляем лучшего студента Natalia'
        ],
      ])('Тест, если у студентов одинаковое количество баллов и одинаковая дата выполнения', (data, expectedOutput) => {
        const consoleSpy = jest.spyOn(console, 'log');
        topStudentFinding([data]);
        expect(consoleSpy).toHaveBeenCalledWith(expectedOutput);
        consoleSpy.mockRestore();
      });

      it.each([
        [
          [
            { name: 'Ivan', score: 0, date: '2022-05-10' },
            { name: 'Maria', score: 0, date: '2022-05-10' },
            { name: 'Olga', score: 0, date: '2022-07-10' }
          ],
          'В группе нет подходящих студентов'
        ],
        [
          [
            { name: 'Margo', score: 0, date: '2022-06-01' },
            { name: 'Natalia', score: 0, date: '2022-06-01' }
          ],
          'В группе нет подходящих студентов'
        ],
      ])('Тест, если у студентов отсутсвуют баллы', (data, expectedOutput) => {
        const consoleSpy = jest.spyOn(console, 'log');
        topStudentFinding([data]);
        expect(consoleSpy).toHaveBeenCalledWith(expectedOutput);
        consoleSpy.mockRestore();
      });

      it.each([
        [
          [
            { name: 'Ivan', score: -1, date: '2022-05-10' },
            { name: 'Maria', score: -10, date: '2022-05-10' },
            { name: 'Olga', score: -2, date: '2022-07-10' }
          ],
          'В группе нет подходящих студентов'
        ],
        [
          [
            { name: 'Margo', score: -1, date: '2022-06-01' },
            { name: 'Natalia', score: -2, date: '2022-06-01' }
          ],
          'В группе нет подходящих студентов'
        ],
      ])('Тест, если у студентов отрицательное значение баллов', (data, expectedOutput) => {
        const consoleSpy = jest.spyOn(console, 'log');
        topStudentFinding([data]);
        expect(consoleSpy).toHaveBeenCalledWith(expectedOutput);
        consoleSpy.mockRestore();
  })
})

