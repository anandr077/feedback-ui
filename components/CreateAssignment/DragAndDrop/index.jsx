import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Avatar } from '@boringer-avatars/react';

function DragAndDrop(props) {
  const { students, reviewedBy, setReviewedBy } = props;

  const [dragFromHere, setDragFromHere] = useState(students);

  const handleDragAndDrop2 = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === 'group') {
      const reorderedStudets = [...students];

      const studentSourceIndex = source.index;
      const studentDestinatonIndex = destination.index;

      const [removedStudent] = reorderedStudets.splice(studentSourceIndex, 1);
      reorderedStudets.splice(studentDestinatonIndex, 0, removedStudent);

      return setStudents(reorderedStudets);
    }
  };

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

const DnDContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const StudentsDnD = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white-pointer);
  padding: 20px;
  width: 150px;
`;

const Heading = styled.h3`
  font-family: var(--font-family-ibm_plex_sans);
`

const StudentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
`;
const StudentDnD = styled(Droppable)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Student = styled(Draggable)`
  display: flex;
  flex-direction: row;
  // background-color: var(--white);
  padding: 10px;
`;

const StudentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 5px;
  background-color: var(--white);
  border-radius: 10px;
`;

const OptionName = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
`

export default DragAndDrop;
