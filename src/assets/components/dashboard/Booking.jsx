import React, { useState } from 'react'
import './Book.css'
import { mycontext } from '../../contexts/ContextProvider'
import ReactPaginate from 'react-paginate';
function Booking() {
const {booking} = mycontext();
const [pagenumber,setPagenumber]=useState(0);
const bookpage=5;
const pagevisited=pagenumber*bookpage;
const displaybook=booking
.slice(pagevisited,pagevisited+bookpage);


const changepage= ({selected})=>{
  setPagenumber(selected)
};

let i=0;
  return (
    <div>    <div className='data-table'>

    <table className="calendatable">
          <thead>
            <tr className='calendatda'>
              <td>id</td>
              <td>Tour Id</td>
              <td> UserId</td>
              <td>Payment Method</td>
              <td>action</td>
            </tr>
          </thead>
          <tbody>
            {displaybook.map((item, index) => (
              <tr key={index}>
                  <td> {(i+=1)}</td>
                  <td>{item.tourID}</td>
                  <td>{item.userID}</td>
                <td>{item.paymentMethod}</td>
                <button className='buttonbook'>Booked</button>
              </tr>
            ))}
          </tbody>
        </table>
       
        </div>
        <ReactPaginate
    pageCount={Math.ceil(booking?.length  / bookpage)}
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
        </div>
  )
}

export default Booking