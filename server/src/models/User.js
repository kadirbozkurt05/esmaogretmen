import { Timestamp } from "firebase/firestore";
class User {

  constructor(
    id,
    email,
    firstName,
    lastName,
    reference,
    studentClass,
    school,
    phone
  ) {

    (this.id = id),
      (this.firstName = firstName),
      (this.lastName = lastName),
      (this.studentClass = studentClass),
      (this.school = school),
      (this.picture = `https://ui-avatars.com/api/?name=${firstName}+${lastName}`),
      (this.parent = {
        firstName: "",
        lastName: "",
        occupation: "",
        phone: "",
        gender: "Anne",
      }),
      (this.contact = {
        phone,
        email,
        address: {
          province: "",
          district: "",
          zipCode: "",
          streetAddress: "",
        },
      }),
      (this.educationDetails = {
        schoolName: school || "",
        class: studentClass || 0,
        teacherName: "",
      }),
      (this.esCoin = {
        total: 50,
        transactions: [],
      }),
      (this.teacherNotes = []),
      (this.referenceTo = []),
      (this.referenceFrom = reference),
      (this.registerDate = Timestamp.fromDate(new Date())),
      (this.nextClasses = []),
      (this.previousLessons = []),
      (this.competitions = []),
      (this.homeworks = []),
      (this.isActive = false),
      (this.isTeacher = false),
      (this.isAdmin = false),
      (this.aboutMe = `Adım ${firstName} ${lastName} ${studentClass}. sınıf öğrencisiyim. ${school} okulunda okuyorum.`),
      (this.referenceNumber = id.substring(0, 8)),
      (this.teachers = []);
  }
}

export default User;
