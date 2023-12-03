import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import closeIcon from '../../static/icons/closeIcon.png';
import menuIcon from '../../static/icons/menuBar.png';
import './portfolioSideBar.css';
const MainFolder = ({ classItem, selectedClass, handleClassToggle }) => {

    <>
        <div key={classItem.id}>
          <button onClick={() => handleClassToggle(classItem.id)}>
            {classItem.name}
          </button>
          {selectedClass === classItem.id && (
            <div>
              {/* Highlight 'Drafts' button if selected */}
              <button 
                onClick={() => dispatch({ type: 'SET_SELECTED_CATEGORY', payload: 'Drafts' })}
                style={{ backgroundColor: selectedCategory === 'Drafts' ? 'lightblue' : '' }}
              >
                Drafts
              </button>
              {/* For 'Tasks' */}
              <button 
                onClick={() => dispatch({ type: 'SET_SELECTED_CATEGORY', payload: 'Tasks' })}
                style={{ backgroundColor: selectedCategory === 'Tasks' ? 'lightblue' : '' }}
              >
                Tasks
              </button>
              {/* For 'Reviews' */}
              <button 
                onClick={() => dispatch({ type: 'SET_SELECTED_CATEGORY', payload: 'Reviews' })}
                style={{ backgroundColor: selectedCategory === 'Reviews' ? 'lightblue' : '' }}
              >
                Reviews
              </button>
            </div>
          )}
        </div>
    </>
}

export default MainFolder;