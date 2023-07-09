import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import "./preview.css";
import { groupBy, groupedData, flatten } from "lodash";

export default function PreviewDialog({ setMarkingCriteriaPreviewDialog,  criterias}) {
  console.log("criterias: " + criterias);
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    setMarkingCriteriaPreviewDialog(false);
  };
  createLevels(criterias)
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          
          <table>
            <tr>
              {createHeading(criterias)}
            </tr>
            <tr>
              
            </tr>
          </table>
        </DialogContent>
      </Dialog>
    </>
  );
}
const createHeading = (criterias) => {
  return criterias.map(criteria=>{
    return <td>{criteria.title}</td>
  })
}

const createLevels = (criterias) => {

  let groups = _.groupBy(_.flatten(criterias.map((criteria, criteriaIndex) => {
    return criteria.levels.map((level, levelIndex) => {
        return {
            criteriaIndex: criteriaIndex,
            levelIndex: levelIndex,
            title: criteria.title,
            levelName: level.name,
            levelDescription: level.description,
        };
    });
})), 'levelName');

console.log("groups", groups);
}





/**
 * "criterias": [
            {
                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
                "levels": [
                    {
                        "name": "Nam quis nulla. Integer malesu",
                        "description": "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit"
                    },
                    {
                        "name": "Nam quis nulla. Integer malesu",
                        "description": "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit"
                    },
                    {
                        "name": "Nam quis nulla. Integer malesu",
                        "description": "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit"
                    }
                ]
            },
            {
                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
                "levels": [
                    {
                        "name": "Nam quis nulla. Integer malesu",
                        "description": "Nam quis nulla. Integer malesuada. In in enim a arcu im"
                    },
                    {
                        "name": "Nam quis nulla. Integer malesu",
                        "description": "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus."
                    },
                    {
                        "name": "Nam quis nulla. Integer malesu",
                        "description": "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. "
                    }
                ]
            },
            {
                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "levels": [
                    {
                        "name": "Nam quis nulla. Integer malesu",
                        "description": "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus."
                    },
                    {
                        "name": "Nam quis nulla.",
                        "description": "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus."
                    },
                    {
                        "name": "Nam quis nulla. Integer malesu",
                        "description": "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus."
                    }
                ]
            }
        ]
    }
 */