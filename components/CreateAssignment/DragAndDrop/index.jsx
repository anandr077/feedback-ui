import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Avatar } from '@boringer-avatars/react';
import {
  DnDContainer,
  StudentsDnD,
  Heading,
  StudentsContainer,
  StudentDnD,
  Student,
  StudentContainer,
  OptionName,
  StudentsPlaceHolderContainer,
} from './style';

function shuffleArray(array) {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function DragAndDrop(props) {
  const { students, reviewedByList, setReviewedByList, dragFromHere } = props;

  const [internalReviewedByList, setInternalReviewedByList] = useState(() =>
    shuffleArray(reviewedByList.length ? reviewedByList : students)
  );

  const handleDragAndDrop = (results) => {
    const { source, destination, draggableId } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    if (
      source.droppableId === 'dragFromHere' &&
      destination.droppableId === 'reviewedBy'
    ) {
      const draggedStudent = dragFromHere.find(
        (student) => student.id === draggableId
      );
      if (draggedStudent) {
        const reorderedReviewedBy = [...reviewedByList];
        reorderedReviewedBy[destination.index] = draggedStudent;
        setReviewedByList(reorderedReviewedBy);
      }
    }
    if (
      source.droppableId === 'reviewedBy' &&
      destination.droppableId === 'reviewedBy'
    ) {
      const reorderedReviewedBy = [...reviewedByList];
      const [draggedStudent] = reorderedReviewedBy.splice(source.index, 1);
      reorderedReviewedBy.splice(destination.index, 0, draggedStudent);
      setReviewedByList(reorderedReviewedBy);
    }
  };

  useEffect(() => {
    if (!reviewedByList.length) {
      let shuffledStudents = shuffleArray(students);
      let isUniqueAtEachIndex = shuffledStudents.every(
        (newReviewer, index) => newReviewer.id !== students[index].id
      );
      while (!isUniqueAtEachIndex) {
        shuffledStudents = shuffleArray(students);
        isUniqueAtEachIndex = shuffledStudents.every(
          (newReviewer, index) => newReviewer.id !== students[index].id
        );
      }

      setInternalReviewedByList(shuffledStudents);
      setReviewedByList(shuffledStudents);
    }
  }, [students, setReviewedByList]);

  function truncateName(name) {
    return name.length > 20 ? (
      <OptionName>
        <>{name.slice(0, 17)}...</>
        <span>{name}</span>
      </OptionName>
    ) : (
      <OptionName>{name}</OptionName>
    );
  }

  return (
    <DnDContainer>
      <StudentsDnD>
        <Heading>Submitted by</Heading>
        <StudentsContainer>
          {students.map((student) => (
            <StudentContainer>
              <Avatar
                title={false}
                size={25}
                variant="beam"
                name={student.name}
                square={false}
              />
              {truncateName(student.name)}
            </StudentContainer>
          ))}
        </StudentsContainer>
      </StudentsDnD>

      <DragDropContext onDragEnd={handleDragAndDrop}>
        <StudentsDnD>
          <Heading>Reviewed by</Heading>
          <StudentDnD droppableId="reviewedBy" type="group">
            {(provided) => (
              <StudentsContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {reviewedByList.map((student, index) => (
                  <Student
                    draggableId={index.toString()}
                    index={index}
                    key={index}
                  >
                    {(provided) => (
                      <StudentContainer
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <Avatar
                          title={false}
                          size={25}
                          variant="beam"
                          name={student.name}
                          square={false}
                        />
                        {truncateName(student.name)}
                      </StudentContainer>
                    )}
                  </Student>
                ))}
                {reviewedByList.length != students.length && (
                  <StudentsPlaceHolderContainer>
                    {provided.placeholder}
                  </StudentsPlaceHolderContainer>
                )}
              </StudentsContainer>
            )}
          </StudentDnD>
        </StudentsDnD>
        <StudentsDnD>
          <Heading>Drag from here</Heading>
          <StudentDnD droppableId="dragFromHere" type="group">
            {(provided) => (
              <StudentsContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {dragFromHere.map((student, index) => (
                  <Student
                    draggableId={student.id}
                    index={index}
                    key={student.id}
                  >
                    {(provided) => (
                      <StudentContainer
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <Avatar
                          title={false}
                          size={25}
                          variant="beam"
                          name={student.name}
                          square={false}
                        />
                        {truncateName(student.name)}
                      </StudentContainer>
                    )}
                  </Student>
                ))}
                {provided.placeholder}
              </StudentsContainer>
            )}
          </StudentDnD>
        </StudentsDnD>
      </DragDropContext>
    </DnDContainer>
  );
}

export default DragAndDrop;
