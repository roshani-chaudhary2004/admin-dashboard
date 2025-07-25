// import React from 'react';

// function ActivityTable() {
//   return (
//     <section className="activity">
//       <h2>Recent Activity</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Activity</th>
//             <th>By</th>
//             <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Added Student</td>
//             <td>Admin Y</td>
//             <td>6 June 2025</td>
//           </tr>
//           <tr>
//             <td>Created Batch</td>
//             <td>Admin X</td>
//             <td>5 June 2025</td>
//           </tr>
//           <tr>
//             <td>Generated Report</td>
//             <td>Admin X</td>
//             <td>4 July 2025</td>
//           </tr>
//         </tbody>
//       </table>
//     </section>
//   );
// }

// export default ActivityTable;


import React, { useEffect, useState } from 'react';

function ActivityTable() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Backend se student data fetch karna
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/students`)
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  return (
    <section className="activity">
      <h2>Registered Students</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Father's Name</th>
            <th>Email</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.fatherName}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No student data available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}

export default ActivityTable;
