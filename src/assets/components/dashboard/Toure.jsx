import {React, useState } from 'react';
import './Toure.css'
import { mycontext } from '../../contexts/ContextProvider';
import axios from 'axios';
import Notiflix from 'notiflix'
import { useForm } from 'react-hook-form';
import User from './User'

function Toure() {


  
  const [isEditModalOpen,setEditModalOpen]=useState(false);



  const handleEditclick= () => {
      setEditModalOpen((previsEditModal) =>!previsEditModal)
       };

  const [openn, setOpenn] = useState(false);
  function openFormm() {
   
    setOpenn((prevOpenn) => !prevOpenn);
  }
  


// const[user, setuser] = useState([]);
const[selected,setSelected] =useState({})

  const [edittour,setEdittour]=useState(null)

const{tour}=mycontext()
  

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  // defaultValues:{...selected}
});



  const [isToureModalOpen,setToureModalOpen]=useState(false);

  const handleToureclick= (tour) => {
   
 setToureModalOpen((previsEditModal) =>!previsToureModal)
  };

  const [open, setOpen] = useState(false);
  function openForm(user) {
    setEdittour(user),
    setOpen((prevOpen) => !prevOpen);
  }

  const handleSave = () =>{
    //onSave();
    //onClose();}
    // function handledelet () {
    //   axios.delete("https://holiday-planner-4lnj.onrender.com/api/v1/tour/delete/")

   }


    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [tourToDelete, setTourToDelete] = useState(null);
    const handleConfirmDelete = async(id) => {
      try {
   Notiflix.Confirm.show(
    'Confirm delete tour',
    'Do you agree with me?',
    'Yes',
    'No',
    async() => {
      const res =  await axios.delete(`https://holiday-planner-4lnj.onrender.com/api/v1/tour/delete/${id}`,{
       
      
      headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`
        }
        
      })
      // Notify.success('tour deleted');
     
      window.location.reload()
    },
    () => {
    alert('If you say so...');
    alter('Tour deleted ')
    },
    {
    },
    );
      } catch (error) {
        console.log(error);
      }
    };
    const handleDeleteClick = (tours) => {
      setTourToDelete(tours);
      handleConfirmDelete()
      // setShowDeleteConfirm(true);
    };
    const handleCancelDelete = () => {
      setShowDeleteConfirm(false);
    };

    const handleEditClick = (invo) => {
      // setTourToDelete(tours);
    setSelected (invo);
    setOpen (true);
    };
    const onSubmit = async (tour) => {

      console.log(tour);
      const formData = new FormData();
      formData.append("destination", tour.destination);
      formData.append("Title", tour.Title);
      formData.append("Description", tour.description);
      formData.append("Duration", tour.duration);
      formData.append("GroupSize", tour.groupSize);
      formData.append("Price", tour.price);
      formData.append("Discount", tour.discount);
      formData.append("backdropImage", tour.backdropImage[0])
      formData.append("Gallery", tour.gallery[0]);
      try {
        const res = await axios.put(
          `https://holiday-planner-4lnj.onrender.com/api/v1/tour/update/`+selected._id ,formData,
        
          {
            headers: {
              Authorization:`Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (res.data) {
          alert('tour  updated')
          window.location.reload()
          console.log("Tour created", res.data);
        }
      } catch (error) {
        alert(error)
        console.error("Error fetching data:", error);
      }
    };
  return (
    <div className='chartsss'>
      <p className='dashord'   onClick={openFormm}>   AddTour</p>
        {openn  &&(<User openFormm={openFormm} />)}
<table className='tourtable'>
    <thead>
      <tr  className='tablerows'> 
        <td>Image</td>
        <td>Country</td>
        <td>People</td>
        <td>duration</td>
        <td>price</td>
        <td>Actions</td>
      </tr>
    </thead>
    <tbody>
    {tour.map((invo)=>(
        <tr key={invo._id} >
          <td>
            <img src={invo.backdropImage} alt={invo.name} width="30" height="30" />
          </td>
          <td>{invo.Title}</td>
          <td>{invo.GroupSize}</td>
          <td>{invo.Duration}</td>
          <td>{invo.Price}</td>
          <td className='tourebuttons'>
            <button className='toure-edit'onClick={()=>handleEditClick(invo)}>  Edit</button>
            <button className='toure-delete' 
              
            onClick={() => handleConfirmDelete(invo._id)} >
              
              
              
              Delete</button>
          </td>
        </tr>
      ))}

{showDeleteConfirm && (
        <div className="popup">
          <p>Are you sure you want to delete {tourToDelete._id}?</p>
          <button onClick={handleDeleteClick}>OK</button>
          <button onClick={handleCancelDelete}>Cancel</button>
        </div>
      )}



    </tbody>
  </table>

  {open && selected &&(
  
  
  <div className="user-registration-container"  selected ={selected}  >
  <h2> Edit Tours</h2>
  <form  onSubmit={handleSubmit(onSubmit)} >
    {/* <div className="form-group">
      <input
              type="file"
              name="image"
              accept="image/*"  className="profile-image"
              defaultValue={selected?.c}/>
    </div> */}
     <div className="form-group">
  
      
  <input
         type="file"
         name="backdropImage"
         accept="image/*"  className="profile-image"
         defaultValue={selected?.image}
         {...register("backdropImage")}
         />
          
</div>
  
    <div className="form-group">
  
      
       <input
              type="file"
              name="gallery"
              accept="image/*"  className="profile-image"
              defaultValue={selected?.Gallery}
              {...register("gallery")}
              />
               
    </div>
    <div className="form-group">
      <label>Title:</label>
      <input
        type="text"
        name="title"
        className='edit-input'
        defaultValue={selected?.Title}
        {...register("Title")}
      />
    </div>
    <div className="form-group">
      <label>GroupSize:</label>
      <input
        type="text"
        name="groupSize"
        className='edit-input'
        defaultValue={selected?.GroupSize}
        {...register("groupSize")}
      />
    </div>
    <div className="form-group">
      <label>Duration:</label>
      <input
        type="tel"
        name="duration"
        className='edit-input'
        defaultValue={selected?.Duration}
        {...register("duration")}
      />
    </div>
    <div className="form-group">
      <label>price:</label>
      <input
        type="tel"
        name="price"
        className='edit-input'
        defaultValue={selected?.Price}
        {...register("price")}
      />
    </div>

    
    <div className="form-groupbut">
      <button  className="btn-register" onClick={handleSave}>Save</button>
      <button type="button" className="btn-register" onClick={openForm}>Cancel</button>

    </div>
  </form>
</div>
  



  )}
 
 
    </div>
  )
}

export default Toure 