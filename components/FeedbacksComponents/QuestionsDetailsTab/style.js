import styled from 'styled-components';

export const QuestionDetailsContainer = styled.div`
  position: absolute;
  right: ${(props) => (props.openRightPanel === 'tab3' ? '48px' : '-287px')};
  top: 0;
  bottom: 0;
  width: 287px;
  height: 100%;
  padding: 0;
  border: solid 1px rgba(201, 198, 204, 0.5);
  background-color: #fff;
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
`;

export const QuestionSection = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

export const QuestionBody = styled.div`
  width: 100%;
  border-radius: 6px;
  padding: 8px;
  border: 1px solid rgba(201, 198, 204, 0.5);
  box-shadow: 0px 2.04px 4px 0px rgba(112, 112, 112, 0.1);
  cursor: pointer;

  &:hover {
    background: var(--color-purple-80, rgba(241, 230, 252, 1));
  }
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 16px;
    height: 16px;
  }
`;

export const SerialNumber = styled.h1`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-l);
  line-height: 24px;
  color: rgba(30, 37, 42, 1);
`;

export const Question = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-s);
  line-height: 16px;
  color: rgba(75, 70, 79, 1);
  margin-top: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
