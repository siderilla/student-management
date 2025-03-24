import '../components/super-header.js';
import '../components/super-footer.js';
import '../components/student-card.js';
import '../components/super-grid.js';
import '../components/student-add.js';
import '../components/student-edit.js';
import StudentService from './student-service.js';

const service = new StudentService();
service.loadStudents().then(() => render(service.students))

// function render(students) {
//     const main = document.getElementById('main-div')
//     main.innerHTML = '';

//     for (const student of students) {
        
//         const card = document.createElement('student-card');
//         card.setAttribute('selected-student', JSON.stringify(student));
//         // card.student = student;

//         main.appendChild(card)
//     }
// }
