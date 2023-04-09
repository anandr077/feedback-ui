import React from "react";

export default function Loader() {
  const myDiv = document.getElementById("myDiv");

  // fetch('/Users/adityachondke/Projects/Freelance/Jeddle/feedbackUIAnimaap/components/Loader/data.html')
  //   .then(response => response.text())
  //   .then(html => {
  //     myDiv.innerHTML = html;
  //   });

  return <div id="loader">Loading ...</div>;
}
