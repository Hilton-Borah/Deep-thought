import React from 'react'
import "./Styles/Theard.css";
import { SlArrowUp } from "react-icons/sl"

const Thredbuilder = () => {
  return (
    <div>
      <div className='threadFirst'>
        <div>
          <SlArrowUp />
        </div>
        <div>
          Thread A
        </div>
      </div>
      <div className='secondboxes'>
        <div>
          <div>Sub thread 1</div>
          <input type="text" placeholder='Enter Text Here' />
        </div>
        <div>
          <div>Sub interpretation 1</div>
          <input type="text" placeholder='Enter Text Here' />
        </div>
      </div>
      <div className='thirdBoxes'>
        <div>
          <img src='./Images/bulb.png' />
          <img src='./Images/msg.png' />
          <img src='./Images/question.png' />
          <img src='./Images/diya.png' />
        </div>
        <div>
          <select name="" id="">
            <option value="">Select Category</option>
          </select>
          <select name="" id="">
            <option value="">Select Process</option>
          </select>
        </div>
      </div>
      <div className='buttonDivtwo'>
        <div>
          <div>+ Sub-thread</div>
        </div>
      </div>
      <div  className='lastThreadbox'>
        <div>
          <div>Summary for Thread A</div>
          <input type="text" placeholder='Enter Text Here' />
        </div>
      </div>
    </div>
  )
}

export default Thredbuilder
