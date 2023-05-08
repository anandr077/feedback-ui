import React from "react";
import { getModelResponses } from "../../service.js";
import ReactiveRender from "../ReactiveRender";
import CompletedRoot from "../Completed/CompletedRoot";
import { groupBy, groupedData } from "lodash";
import { dateOnly } from "../../dates.js";
import { useLocation } from "react-router-dom";
import Loader from "../Loader";

export default function ExemplarResponsesPage(props) {
    const [exemplarResponses, setExemplarResponses] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [id, setId] = React.useState(null);
    const [publishActionCompleted, setPublishActionCompleted] = React.useState(false);

    const l = useLocation();
    console.log(l)
    React.useEffect(() => {
      const exemplarResponseId = new URLSearchParams(l.search).get("id");    
      setId(exemplarResponseId)
    }, []);
    React.useEffect(() => {
      getModelResponses().then((result) => {
        if (result) {
          setExemplarResponses(result);
          setIsLoading(false);
        }
       
      });
    }, []); 
    React.useEffect(() => {
      if (publishActionCompleted) {

        getModelResponses().then((result) => {
          if (result) {
            setExemplarResponses(result);
            setIsLoading(false);
          
          }
         
        });
        setPublishActionCompleted(false);
    }
    }, [publishActionCompleted]);
    if (isLoading) {
      return <Loader/>;
    }
    const groups = groupBy(exemplarResponses, (task) => dateOnly(task.reviewedAt));
    console.log("setPublishActionCompleted p", setPublishActionCompleted)
    return (
      <CompletedRoot title="Exemplar Responses" tasks={exemplarResponses} groups={groups} exemplar={true} id={id} setPublishActionCompleted={setPublishActionCompleted}></CompletedRoot>
    );
  }