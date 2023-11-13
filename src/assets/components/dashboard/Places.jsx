import './Place.css'
import {React,  useEffect,  useState } from 'react';
import Edit from './Edit';
import { mycontext } from '../../contexts/ContextProvider';
import axios from 'axios';
import reactpaginate from 'react-paginate';
import Notiflix from 'notiflix'
import ReactPaginate from 'react-paginate';
function Places() {
  

  const {users} =mycontext();

  const [isEditModalOpen,setEditModalOpen]=useState(false);
  const [pageNumber,setPagenumber] =useState(0);
  // const[user, setuser] = useState([]);

  // const [user, setUser] = useState({
  //   fullNames: '', 
  //   email: '', 
  //   password: '', 
  //   phoneNumber: '', 
  //   location: '', 
  //   role: '', 

    
  // });

  const handleEditclick= () => {
 setEditModalOpen((previsEditModal) =>!previsEditModal)
  };



  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const handleConfirmDelete = async(id) => {
    try {
 Notiflix.Confirm.show(
  'Confirm delete tour',
  'Do you agree with me?',
  'Yes',
  'No',
  async() => {
    const res = await axios.delete( `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/delete/${id}`, {
      headers: {
        Authorization:`Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    window.location.reload()
  },
  () => {
  alert('If you say so...');
  },
  {
  },
  );
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteClick = (user) => {
    setTourToDelete(user);
    handleConfirmDelete()
    // setShowDeleteConfirm(true);
  };
  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };


 




  const [open, setOpen] = useState(false);
  function openForm() {
   
    setOpen((prevOpen) => !prevOpen);
  }

  // fetching
  

    
let i = 0;
const userspage=6;
const pageviseted= pageNumber*userspage;
const diplayusers= users
?.slice(pageviseted,pageviseted+userspage)
// .map(user=>{

const changepage= ({selected})=>{
    setPagenumber(selected);
     };

  return (
    <div className='friend-contnainer'>
    
    <table className='placetable'>
      <thead>
        <tr className='tablerows'>
          <td>id</td>
          {/* <th>Location</th> */}
          <td>Email</td>
          <td>Role</td>
          <td>Edit</td>
          <td>action</td>
          <td>action</td>
        </tr>
      </thead>
      <tbody>
        {diplayusers?.map((user) => (
          <tr key={user}>
               <td> {(i+=1)}</td>
               
               <td> {user. email}</td>
            <td> {user. role}</td>
            <td>{user.location}</td>
            {/* <td>{user.phoneNumber}</td> */}
            {/* <td>{user.role}</td> */}
            <td><button className='place-edit' onClick={openForm}>Edit</button></td>
            <td><button className='place-delete'
          onClick={() => handleConfirmDelete(user._id)} >
            Delete</button></td>
          </tr>
        ))}

{showDeleteConfirm && (
        <div className="popup">
          <p>Are you sure you want to delete {userToDelete._id}?</p>
          <button onClick={handleDeleteClick}>OK</button>
          <button onClick={handleCancelDelete}>Cancel</button>
        </div>
      )}



      </tbody>
    </table>

    <ReactPaginate
    pageCount={Math.ceil(users?.length  / userspage)}
    previousLabel={"Prev"}
    nextLabel={"Next"}
    onPageChange={changepage}
    containerClassName='pagination'
    previousLinkClassName='prevBtn'
    nextLinkClassName='next'
    disabledClassName='disabled'
    activeClassName='paginationactve'
    >

    </ReactPaginate>
    {open  &&(<Edit openForm={openForm} />)}
  </div>
  
  )
//   const pagecount=Math.ceil((users.length/userspage));
// 
//   return(
//     <div>
//       {diplayusers}
//       <reactpaginate>
//     previouslabel={'previous'}
//     nextlabel={'next'}
//     pagecount={pagecount}
//     onpagechange={pagechange}
//       </reactpaginate>
//     </div>
//   )
// });

}

export default Places