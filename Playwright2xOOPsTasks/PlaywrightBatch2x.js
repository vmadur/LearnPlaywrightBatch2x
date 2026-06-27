class PlaywrightBatch2x {

    constructor(student_name, student_age, student_contact) {
        this.student_name = student_name;
        this.student_age = student_age;
        this.student_contact = student_contact;
    }

    static course_name = "Playwright Automation Mastery";
    static course_mentor = "Pramod Dutta";
    static course_duration = "3 months";

    static cohort_details() {
        console.log("Cohort Name:", this.course_name + " Cohort Mentor:", this.course_mentor + " Cohort Duration:", this.course_duration);
    }

    printStudentInfo() {
        console.log("Student Name:", this.student_name + " Student Age:", this.student_age + " Student Contact:", this.student_contact);
    }

}

const student1 = new PlaywrightBatch2x("Abir", 32, 8981285245);
const student2 = new PlaywrightBatch2x("Bishal", 24, 9830012345);
const student3 = new PlaywrightBatch2x("Chayan", 28, 9163254781);
const student4 = new PlaywrightBatch2x("Debasish", 35, 9874563210);
const student5 = new PlaywrightBatch2x("Esha", 22, 8100123456);
const student6 = new PlaywrightBatch2x("Farhan", 30, 7003123456);
const student7 = new PlaywrightBatch2x("Gargi", 26, 9051234567);
const student8 = new PlaywrightBatch2x("Hrishikesh", 31, 9433012345);
const student9 = new PlaywrightBatch2x("Ishita", 27, 8961012345);
const student10 = new PlaywrightBatch2x("Jyoti", 29, 9831123456);

student1.printStudentInfo();
student2.printStudentInfo();
student3.printStudentInfo();
student4.printStudentInfo();
student5.printStudentInfo();
student6.printStudentInfo();
student7.printStudentInfo();
student8.printStudentInfo();
student9.printStudentInfo();
student10.printStudentInfo();

PlaywrightBatch2x.cohort_details();