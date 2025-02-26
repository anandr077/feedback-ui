import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 50px;
`;

export const Header = styled.header`
  text-align: center;
`;

export const MainSection = styled.main``;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 40px auto 20px;
`;

export const Title = styled.h3`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-m);
  line-height: 21px;
  color: rgba(86, 81, 91, 1);
  margin-bottom: 8px;
`;

export const ClassSection = styled.div``;

export const StudentSection = styled.div`
  margin-top: 20px;
`;

export const Student = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 4px 0;
`;

export const StudentName = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-m);
  line-height: 24px;
  color: rgba(0, 0, 0, 1);
`;

export const AllStudents = styled.div`
  height: 150px;
  overflow-y: scroll;

  scrollbar-width: thin;
  scrollbar-color: lightgray transparent;

  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-radius: 4px;
  }
`;

export const CreateTaskButton = styled.div`
  width: 220px;
  margin: 0 auto;
`;

export const ClassName = styled.span`
  background-color: ${(props) =>
    props.isSelected ? 'rgba(138, 43, 229, 1)' : 'transparent'};
  border: 1px solid rgba(201, 198, 204, 0.5);
  height: 36px;
  border-radius: 30px;
  padding: 6px 10px;
  color: ${(props) => (props.isSelected ? 'white' : 'rgba(0, 0, 0, 1)')};
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: ${(props) => (props.isSelected ? '600' : '400')};
  font-size: var(--font-size-m);
  line-height: 24px;
  white-space: nowrap;
  cursor: pointer;
`;

export const Image = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 50%;
`;

export const ClassContainer = styled.div`
  display: flex;
  gap: 6px;
  width: 100%;
  overflow-x: scroll;

  scrollbar-width: thin;
  scrollbar-color: lightgray transparent;

  &::-webkit-scrollbar {
    height: 2px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-radius: 4px;
  }
`;
