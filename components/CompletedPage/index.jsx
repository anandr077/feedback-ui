import React from "react";
import { getCompletedTasks } from "../../service.js";
import ReactiveRender from "../ReactiveRender";
import CompletedRoot from "../Completed/CompletedRoot";
import { groupBy, groupedData } from "lodash";
import { dateOnly } from "../../dates.js";

export default function CompletedPage() {
    const [tasks, setTasks] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
  
    React.useEffect(() => {
      getCompletedTasks().then((result) => {
        if (result) {        
          setTasks(result);
          setIsLoading(false);
        }
      });
    }, []);
    if (isLoading) {
      return <div>Loading...</div>;
    }
    const groups = groupBy(tasks, (task) => dateOnly(task.completedAt));

    return (
      <CompletedRoot groups={groups} title="Completed"></CompletedRoot>
    );
  }