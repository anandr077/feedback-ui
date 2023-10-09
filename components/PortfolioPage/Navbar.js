// Navbar.js
import React from 'react';
import { usePortfolioState, usePortfolioDispatch } from './PortfolioContext';

const Navbar = ({ classes }) => {
  const { selectedClass, selectedCategory } = usePortfolioState();
  const dispatch = usePortfolioDispatch();

  const handleClassToggle = (classId) => {
    if (selectedClass === classId) {
      dispatch({ type: 'SET_SELECTED_CLASS', payload: null });
    } else {
      dispatch({ type: 'SET_SELECTED_CLASS', payload: classId });
    }
  };

  return (
    <div>
      {classes.map((classItem) => (
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
      ))}
    </div>
  );
};

export default Navbar;
