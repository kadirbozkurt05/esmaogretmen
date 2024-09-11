import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Student from "./Student";
import { useUser } from "../../context/userContext";
import Modal from "../general/Modal/Modal";

const AllStudents = () => {
  const { user, refreshUser } = useUser();
  const [userList, setUserList] = useState([]);
  const [filteredUserList, setFilteredUserList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [studentIdToUpdate, setStudentIdToUpdate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const onSuccess = (data) => {
    
    const students = data.filter(
      (student) => !student.isTeacher && !user.students.includes(student._id)
    );
    setUserList(students);
    setFilteredUserList(students);
  };

  const { performFetch } = useFetch(`/user/all`, onSuccess);
  const { performFetch: performPut } = useFetch(`/user/${user._id}`, () =>
    setShowModal(false)
  );

  useEffect(() => {
    performFetch();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = userList.filter(
      (user) =>
        user.firstName.toLowerCase().includes(query) ||
        user.lastName.toLowerCase().includes(query)
    );
    if (query === "") {
      setFilteredUserList(userList);
    }
    setFilteredUserList(filtered);
  };

  const positiveModal = async () => {
    const students = user.students;
    if (!students.includes(studentIdToUpdate)) {
      students.push(studentIdToUpdate);
      performPut({
        method: "PUT",
        body: JSON.stringify({ students }),
      });
      refreshUser()
    } else {
      alert("Zaten öğrenciniz...");
    }
  };

  return (
    <div className={`grid grid-cols-1 gap-4 items-center`}>
      {showModal && (
        <Modal
          title={"Öğrenci Ata"}
          text={
            "Bu öğrenciyi aktif öğrenciniz olarak atamak üzeresiniz. Devam etmek istiyor musunuz?"
          }
          positiveButton={"EVET"}
          positiveFunction={positiveModal}
          negativeButton={"HAYIR"}
          negativeFunction={() => setShowModal(false)}
        />
      )}
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Ara..."
        className="p-2 border border-gray-600 rounded-l"
        value={searchQuery}
      />
      {filteredUserList.map((student, index) => (
        <Student
          key={index}
          onClick={() => {
            setStudentIdToUpdate(student._id);
            setShowModal(true);
          }}
          student={student._id}
        />
      ))}
    </div>
  );
};

export default AllStudents;
