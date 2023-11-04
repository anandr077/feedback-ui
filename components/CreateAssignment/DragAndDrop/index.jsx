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
} from './style';

function DragAndDrop(props) {
  const { students, reviewedBy, setReviewedBy } = props;

  const [dragFromHere, setDragFromHere] = useState(students);

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
        if (reviewedBy.length < students.length) {
          setReviewedBy([...reviewedBy, draggedStudent]);
        }
      }
    }
    if (
      source.droppableId === 'reviewedBy' &&
      destination.droppableId === 'reviewedBy'
    ) {
      const reorderedReviewedBy = [...reviewedBy];
      const [draggedStudent] = reorderedReviewedBy.splice(source.index, 1);
      reorderedReviewedBy.splice(destination.index, 0, draggedStudent);
      setReviewedBy(reorderedReviewedBy);
    }
  };

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
              <OptionName>{student.name}</OptionName>
            </StudentContainer>
          ))}
        </StudentsContainer>
      </StudentsDnD>

      <DragDropContext onDragEnd={handleDragAndDrop}>
        <StudentsDnD>
          <Heading>Reviewed By</Heading>
          <StudentDnD droppableId="reviewedBy" type="group">
            {(provided) => (
              <StudentsContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {reviewedBy.map((student, index) => (
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
                        <OptionName>{student.name}</OptionName>
                      </StudentContainer>
                    )}
                  </Student>
                ))}
                {provided.placeholder}
              </StudentsContainer>
            )}
          </StudentDnD>
        </StudentsDnD>
        <StudentsDnD>
          <Heading>Drag From Here</Heading>
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
                        <OptionName>{student.name}</OptionName>
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
