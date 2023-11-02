import jsPDF from 'jspdf';

const generatePdf = (pdfData) => {
  const doc = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
    margin: {
      top: 0,
      bottom: 10,
      left: 0,
      right: 0,
    },
  });

  const totalpdf = document.createElement('div');

  const title = document.createElement('div');
  title.style.fontFamily = "'IBM Plex Sans', 'Helvetica'";
  title.style.color = '#25222a';
  title.style.fontSize = '40px';
  title.style.fontWeight = '700';
  title.style.textAlign = 'flex-start';
  title.style.marginBottom = '50px';
  title.textContent = pdfData.title;
  totalpdf.appendChild(title);
  totalpdf.appendChild(pdfData.content);

  const options = {
    callback: function (generatedDoc) {
      generatedDoc.save(`${pdfData.title}.pdf`);
    },
    x: 0,
    y: 0,
    width: 170,
    windowWidth: 1180,
    margin: 20,
    autoSize: true,
  };

  doc.html(totalpdf, options);
};




const getAssignmentContent = (submission) => {
  const totalpdf = document.createElement('div');
  const assignmentQuestions = new Array(
    submission.assignment.questions.length + 1
  );
  const assignmentAnswers = new Array(
    submission.assignment.questions.length + 1
  );
  submission.assignment.questions.map((question) => {
    assignmentQuestions[question.serialNumber] = question.question;
    if (question.type === 'MCQ') {
      const options = document.createElement('div');
      question.options.map((option) => {
        const optiondiv = document.createElement('div');
        optiondiv.style.fontFamily = "'IBM Plex Sans', 'Helvetica'";
        optiondiv.style.fontSize = option.isCorrect ? '36px' : '32px';
        optiondiv.style.fontWeight = option.isCorrect ? 'bold' : 'normal';
        optiondiv.style.color = option.isCorrect ? 'green' : 'black';

        optiondiv.style.marginBottom = '10px';
        optiondiv.textContent = option.option;
        options.appendChild(optiondiv);
      });
      assignmentAnswers[question.serialNumber] = options;
    }
  });
  submission.answers.map((answer) => {
    const parser = new DOMParser();
    const htmlContent = answer.answer.answer;
    const parsedContent = parser.parseFromString(htmlContent, 'text/html').body
      .textContent;
    if (answer.answer.answer) {
      assignmentAnswers[answer.serialNumber] = parsedContent;
    }
  });
  for (let i = 1; i < assignmentQuestions.length; i++) {
    const question = document.createElement('div');
    question.style.fontFamily = "'IBM Plex Sans', 'Helvetica'";
    question.style.color = '#301b72';
    question.style.fontSize = '36px';
    question.style.fontWeight = '500';
    question.style.fontStyle = 'normal';
    question.style.lineHeight = '26px';
    question.style.marginBottom = '10px';
    question.textContent = i + '. ' + assignmentQuestions[i];
    totalpdf.appendChild(question);

    const answer = document.createElement('div');
    answer.style.fontFamily = "'IBM Plex Sans', 'Helvetica'";
    answer.style.border = '1px solid #7200e0';
    answer.style.borderRadius = '20px';
    answer.style.padding = '15px';
    answer.style.fontWeight = '400';
    answer.style.fontSize = '32px';
    answer.style.marginBottom = '40px';
    answer.style.lineHeight = '26px';
    if (assignmentAnswers[i] instanceof HTMLElement) {
      answer.appendChild(assignmentAnswers[i]);
    } else {
      answer.textContent = assignmentAnswers[i];
    }
    totalpdf.appendChild(answer);
  }
  return totalpdf;
};

export const downloadTaskPdf = (submission) => {
  const pdfData = {
    title: submission.assignment.title,
    content: getAssignmentContent(submission),
  };
  generatePdf(pdfData);
};

export const downloadPortfolioPdf = (previewData) => {
 
  const pdfData = {
    title: previewData.assignment.title,
    content:getAssignmentContent(previewData),
  };
  generatePdf(pdfData);
};
