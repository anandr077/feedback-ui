import React from 'react';
import {
  ButtonsContainer,
  Heading,
  HeadingContainer,
  InnerContainer,
  LeftContainer,
  MainContainer,
  OptionContainer,
  OptionIcon,
  OptionText,
  OptionsContainer,
  PreviewButton,
  PreviewButtonIcon,
  PreviewButtonText,
  RightContainer,
  SaveButton,
  SaveButtonText,
  TableContainer,
} from './style';

import settings from '../../static/icons/settings.svg';
import banks from '../../static/icons/banks.svg';
import marking from '../../static/icons/marking.svg';
import Eye from '../../static/icons/Eye.svg';

function MarkingTemplateStrengthsTargets() {
  return (
    <>
      <MainContainer>
        <InnerContainer>
          <LeftContainer>
            <OptionsContainer>
              <OptionContainer>
                <OptionIcon src={settings} />
                <OptionText>User Settings</OptionText>
              </OptionContainer>
              <OptionContainer style={{ background: '#F1E6FC' }}>
                <OptionIcon src={marking} />
                <OptionText>Marking Templates</OptionText>
              </OptionContainer>
              <OptionContainer>
                <OptionIcon src={banks} />
                <OptionText>Comment Banks</OptionText>
              </OptionContainer>
            </OptionsContainer>
          </LeftContainer>
          <RightContainer>
            <HeadingContainer>
              <Heading>New Marking Template</Heading>
              <ButtonsContainer>
                <PreviewButton>
                  <PreviewButtonIcon src={Eye} />
                  <PreviewButtonText>Preview</PreviewButtonText>
                </PreviewButton>
                <SaveButton>
                  <SaveButtonText>Save Template</SaveButtonText>
                </SaveButton>
              </ButtonsContainer>
            </HeadingContainer>
            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th>Criteria</th>
                    <th>Strengths</th>
                    <th>Targets</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan="4" style={{ textAlign: 'center' }}>
                      <input
                        style={{
                          width: '100%',
                          height: '100%',
                          boxSizing: 'border-box',
                          padding: '5px',
                        }}
                        type="text"
                        placeholder="Cut out words from the beginning and/or end of the
                      quotation"
                      />
                    </td>
                    <td>
                      Cut out words from the beginning and/or end of the
                      quotationGupta
                    </td>
                    <td>
                      Cut out words from the beginning and/or end of the
                      quotation
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Cut out words from the beginning and/or end of the
                      quotationGupta
                    </td>
                    <td>
                      Cut out words from the beginning and/or end of the
                      quotation
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Cut out words from the beginning and/or end of the
                      quotationGupta
                    </td>
                    <td>
                      Cut out words from the beginning and/or end of the
                      quotation
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Cut out words from the beginning and/or end of the
                      quotationGupta
                    </td>
                    <td>
                      Cut out words from the beginning and/or end of the
                      quotation
                    </td>
                  </tr>
                </tbody>
                <tr>
                  <td>'</td>
                  <td></td>
                  <td></td>
                </tr>
                <tbody>
                  <tr>
                    <td rowSpan="4">
                      Cut out words from the beginning and/or end of the
                      quotation
                    </td>
                    <td>
                      Cut out words from the beginning and/or end of the
                      quotationGupta
                    </td>
                    <td>
                      Cut out words from the beginning and/or end of the
                      quotation
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Cut out words from the beginning and/or end of the
                      quotationGupta
                    </td>
                    <td>
                      Cut out words from the beginning and/or end of the
                      quotation
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Cut out words from the beginning and/or end of the
                      quotationGupta
                    </td>
                    <td>
                      Cut out words from the beginning and/or end of the
                      quotation
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Cut out words from the beginning and/or end of the
                      quotationGupta
                    </td>
                    <td>
                      Cut out words from the beginning and/or end of the
                      quotation
                    </td>
                  </tr>
                </tbody>
              </table>
            </TableContainer>
          </RightContainer>
        </InnerContainer>
      </MainContainer>
    </>
  );
}

export default MarkingTemplateStrengthsTargets;
