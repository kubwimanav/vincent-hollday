import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './User.css'
import {useForm} from "react-hook-form"
import Tour from '../Tour';
import axios from 'axios';
function User() {
   
  const onSubmit = async (tour) => {
    const formData = new FormData();
    formData.append("destination", tour.destination);
    formData.append("Title", tour.title);
    formData.append("Description", tour.description);
    formData.append("Duration", tour.duration);
    formData.append("GroupSize", tour.groupSize);
    formData.append("Price", tour.price);
    formData.append("Discount", tour.discount);
    formData.append("backdropImage", tour.image[0]);
    formData.append("Gallery", tour.gallery[0]);
    try {
      const res = await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/tour/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.data) {
        alert('tour  created')
        window.location.reload()
        console.log("Tour created", res.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  return (
    <div className='charts'>
       <div class="formtour-add">
        <div class="form-content">
            <h1 class="form-titlee">Your Form Title</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-groupp">
                    <label for="gallery">Gallery</label>
                    <input
              type="file"
              name="gallery"
              accept="image/*"
              {...register("gallery", { required: true })}
            />
                </div>

                <div class="form-groupp">
                    <label for="gallery">Backdropimage</label>
                    <input
              type="file"
              name="image"
              accept="image/*"
              {...register("image", { required: true })}
            />
                </div>

                <div class="form-groupp">
                    <label for="country">Country</label>
                    <input type="text" name="destination" className='addinput'{...register("destination",{required:true})}/>
                </div>
                <div class="form-groupp">
                    <label for="month">Month</label>
                    <input type="text" name="title" className='addinput'{...register("title",{required:true})}/>
                </div>
                <div class="form-groupp">
                    <label for="group-size">Group Size</label>
                    <input type="text"  name="groupSize" className='addnumber'{...register("groupSize",{required:true})}/>
                </div >
                <div class="form-groupp">
                    <label for="group-size">Description</label>
                    <input type="text"  name="description" className='addnumber'{...register("description",{required:true})}/>
                </div >
                <div class="form-groupp">
                    <label for="group-size">Duration</label>
                    <input type="text"  name="duration" className='addnumber'{...register("duration",{required:true})}/>
                </div >
                <div class="form-groupp">
                    <label for="group-size">Discount</label>
                    <input type="number"  name="discount" className='addnumber'{...register("discount",{required:true})}/>
                </div >
                <div class="form-groupp">
                    <label for="group-size">Price</label>
                    <input type="text"  name="price" className='addnumber'{...register("price",{required:true})}/>
                </div >
                <div className='addtourss'>
                <button type="submit" className='addtours'  >Add</button>
                {/* <button type="cancel"  className='addtours' >Cancel</button> */}
                </div>
               
            </form>
        </div>
    </div>
    </div>
  )
}


export default User