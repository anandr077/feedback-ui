import styled from 'styled-components';
import {
  IbmplexsansNormalShark12px,
  IbmplexsansNormalRiverBed14px,
  IbmplexsansNormalShark20px,
} from '../../styledMixins';

export const RemarkText = styled.div`
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: 500;
  line-height: 16.9px;
  text-align: left;
  color: #7b7382;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

export const StatusContainer = styled.div`
  width: 100%;
  margin: 10px 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TaskTitle = styled.p`
  ${IbmplexsansNormalShark20px}
  font-size: 16px;
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  word-break: break-word;
`;
export const Remark = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #4b464f;
`;
export const SmallTaskTitle = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-l);
  line-height: 20px;
  color: var(--text);
  font-style: normal;
  position: relative;
  align-self: stretch;
  margin: 3px 0;
  letter-spacing: 0;
  word-break: break-word;
`;
export const ClassText = styled.div`
  ${IbmplexsansNormalRiverBed14px}
  font-size: 14px;
  position: relative;
  align-self: stretch;
  letter-spacing: 0.11px;
  line-height: normal;
`;

export const SmallClassText = styled.div`
  color: var(--river-bed);
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -2.5%;
  position: relative;
  align-self: stretch;
`;

export const Frame1282 = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  align-self: stretch;
`;

export const IconClock = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;
export const SmallIconClock = styled.img`
  position: relative;
  min-width: 13px;
  height: 13px;
`;

export const DueAt = styled.p`
  ${IbmplexsansNormalRiverBed14px}
  font-size: 14px;
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0.11px;
  line-height: normal;
`;
export const SmallDueAt = styled.p`
  ${IbmplexsansNormalRiverBed14px}
  font-size: 13px;
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0.11px;
  line-height: normal;
`;

export const AcceptContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #f5ebfe;
  margin: 10px 0px;
`;

export const DeclineText = styled.div`
  color: #505050;
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.84px;
  cursor: pointer;
`;
export const AcceptText = styled(DeclineText)`
  color: #7200e0;
`;

export const TeacherComment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 8px;
  border-radius: 6px;
  background-color: #f2f1f3;
  width: 100%;
`;
export const ReadMoreButton = styled.span`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #7200e0;
  cursor: pointer;
`;
