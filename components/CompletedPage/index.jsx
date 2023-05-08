import React from "react";
import { getCompletedTasks } from "../../service.js";
import ReactiveRender from "../ReactiveRender";
import CompletedRoot from "../Completed/CompletedRoot";
import { groupBy, groupedData } from "lodash";
import { dateOnly } from "../../dates.js";
import _ from 'lodash';

export default function CompletedPage() {
    const [tasks, setTasks] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [filteredTasks, setFilteredTasks] = React.useState([]);

    React.useEffect(() => {
      getCompletedTasks().then((result) => {
        if (result) {        
          setTasks(result);
          setFilteredTasks(result);

          setIsLoading(false);
        }
      });
    }, []);
    if (isLoading) {
      return <div>Loading...</div>;
    }
    const groups = groupBy(filteredTasks, (task) => dateOnly(task.completedAt));
    const menuItems = [
      {
        name: 'TYPES',
        title: 'Types',
        items: [
          { value: 'ASSIGNMENT', label: 'Tasks' , category: 'TYPES'  },
          { value: 'REVIEW', label: 'Reviews' , category: 'TYPES' },
        ],
      },
    ];
  

  const filterTasks = (selectedItems) =>{
    console.log("selectedItems " + JSON.stringify(selectedItems))
    const groupedData = _.groupBy(selectedItems, 'category');
    let typesValues = _.map(_.get(groupedData, 'TYPES'), 'value');
    
    if (typesValues.length === 0) {
      typesValues = ["REVIEW", "ASSIGNMENT" ]
    }
    const filteredTasks = _.filter(tasks, (task) => _.includes(typesValues, task.type));

    setFilteredTasks(filteredTasks)
  }

    return (
      <CompletedRoot menuItems = {menuItems} filterTasks = {filterTasks} groups={groups} title="Completed"></CompletedRoot>
    );
  }