let studentsData = require('../data/students-data.json');

function topStudentFinding(data) {
  data.forEach((group) => {
    let maxScore = 0;
    let earliestDate;
    let topStudent = null;
    group.forEach((student) => {
      if (student.score > maxScore) {
        maxScore = student.score;
        earliestDate = student.date;
        topStudent = student;
      } else if (student.score === maxScore && student.date < earliestDate) {
        earliestDate = student.date;
        topStudent = student;
      }
      return topStudent
    });
    if (topStudent && topStudent.score > 0) {
      console.log(
        `Поздравляем лучшего студента ${topStudent.name}`
      );
    } else {
      console.log(`В группе нет подходящих студентов`);
    }
  });
} 

module.exports = topStudentFinding;