import './super-header.js';
import './super-footer.js';
import './student-card.js';
import './super-grid.js';
import './student-add.js';
import './student-edit.js';
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
