class Student {
    constructor(name, age, score) {
        this.name = name;
        this.age = age;
        this.score = score;
    }
}

class Classroom {
    constructor() {
        this.students = [];
    }

    addStudent(name, age, score) {
        this.students.push(new Student(name, age, score));
    }

    sortByScore() {
        this.students.sort((a, b) => b.score - a.score);
    }

    getAverageScore() {
        if (this.students.length === 0) {
            return 0;
        }

        return this.students.reduce(
            (total, student) => total + student.score,
            0
        ) / this.students.length;
    }

    getTopStudent() {
        return this.students[0] || null;
    }

    printReport() {
        console.log("Classroom Report");
        console.log("================");

        for (const student of this.students) {
            console.log(
                `${student.name} | Age: ${student.age} | Score: ${student.score}`
            );
        }

        console.log("================");
        console.log(`Students: ${this.students.length}`);
        console.log(`Average Score: ${this.getAverageScore().toFixed(2)}`);

        const topStudent = this.getTopStudent();

        if (topStudent) {
            console.log(`Top Student: ${topStudent.name}`);
            console.log(`Top Score: ${topStudent.score}`);
        }
    }
}

const classroom = new Classroom();

classroom.addStudent("Alice", 20, 94);
classroom.addStudent("Brian", 21, 87);
classroom.addStudent("Clara", 19, 98);
classroom.addStudent("David", 22, 91);

classroom.sortByScore();
classroom.printReport();