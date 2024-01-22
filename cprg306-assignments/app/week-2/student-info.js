import Link from "next/link";

// using traditional function

export default function StudentInfo() {
let studentName = "Sang Lee";
return(
    <>
        <p>
            Student Name: {studentName}
        </p>
        <p>
            <Link href="https://github.com/Sanghyeon111/cprg306-assignments">Github Link</Link>
        </p>
        <p>
          <Link href="../">Home</Link>
          {/* The advantage over using <a> is that Link provides prefetching and client-side navigation. */}
        </p>
    </>
);
}


// using arrow function

// const StudentInfo = () => {
//     let studentName = "Sang Lee";
  
//     return (
//       <>
//         <p>Student Name: {studentName}</p>
//         <p>
//           <Link href="https://github.com/Sanghyeon111/cprg306-assignments">
//             Github Link
//           </Link>
//         </p>
//       </>
//     );
//   };
  
//   export default StudentInfo;