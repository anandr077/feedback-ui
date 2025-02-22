import { Typography } from '@mui/material';

export const accordionItems = [
  {
    title: 'Why am I here?',
    content: (
      <>
        <Typography paragraph>
          Great news! Your school has partnered with Jeddle, which means that
          you and your students now have access to its curriculum-specific
          English text guides and writing modules, as well as its game-changing
          feedback and marking tools. Because you have just clicked on 'JeddAI',
          you are currently on the feedback and marking section of the platform,
          which is separate from the English text guides and writing modules.
        </Typography>
        <Typography paragraph>
          While on the JeddAI portal, you can assign class work and provide
          personalised feedback in a fraction of the time, helping students
          improve their results while lightening your workload.
        </Typography>
        <Typography paragraph>
          If you’re looking for Jeddle’s text guides and writing modules
          instead, you’ll find them under the ‘My Courses’ tab at jeddle.com. If
          no courses appear, check with your head of department to confirm
          whether they subscribed exclusively to JeddAI.
        </Typography>
      </>
    ),
  },
  {
    title: 'What is JeddAI and how will it help me and my students?',
    content: (
      <>
        <Typography paragraph>
          With JeddAI, marking essay drafts and class work has never been
          easier.
        </Typography>
        <Typography paragraph>
          JeddAI is your personal marking assistant, combining specialised
          feedback tools and optional AI suggestions to accelerate the feedback
          process on formative writing tasks. JeddAI works with you to save
          hours on marking while helping students improve their writing through
          fast and reliable feedback.
        </Typography>
        <Typography>With JeddAI, you can:</Typography>
        <ul
          style={{
            listStyleType: 'disc',
            paddingLeft: '1.5em',
            marginTop: 0,
            marginBottom: 10,
          }}
        >
          <li>
            <Typography component="span">
              <Typography component="span" sx={{ fontWeight: 'bold' }}>
                Set work for your class:
              </Typography>{' '}
              Create formative writing tasks with options for self-assessment
              and peer-to-peer feedback to encourage student reflection and
              collaboration. Submissions can be typed or handwritten.
            </Typography>
          </li>
          <li>
            <Typography component="span">
              <Typography component="span" sx={{ fontWeight: 'bold' }}>
                Accelerate your feedback:
              </Typography>{' '}
              Customise rubrics and comment banks to provide detailed,
              actionable feedback to students in just one click.
            </Typography>
          </li>
          <li>
            <Typography component="span">
              <Typography component="span" sx={{ fontWeight: 'bold' }}>
                Use your personal AI-marking assistant:
              </Typography>{' '}
              Use our teacher-trained AI-marking assistant to generate feedback
              suggestions on student work in less than 60 seconds (yes,
              seconds). Specifically, JeddAI can provide a first draft of
              personalised feedback on a student’s response (all of which is
              tailored to your chosen rubric and comment bank for that task),
              before allowing you to edit and share those suggestions with the
              student. Talk about a headstart! This allows students to receive
              feedback that is timely, relevant, and actionable.
            </Typography>
          </li>
        </ul>
        <Typography paragraph>
          Please note: JeddAI is not a chatbot and will not write a student’s
          work for them. We believe in a world where AI empowers teaching rather
          than undermining learning, and with almost every student now engaging
          with AI, it’s vital they use tools that build skills, not shortcuts.
        </Typography>
      </>
    ),
  },
  {
    title: 'How do I set up my classes?',
    content: (
      <>
        <Typography paragraph>
          If your school subscribed to Jeddle on your behalf, your classes have
          already been registered using details provided by your school
          administrator or head of department.
        </Typography>
        <ul
          style={{
            listStyleType: 'disc',
            paddingLeft: '1.5em',
            marginTop: 0,
            marginBottom: 10,
          }}
        >
          <li>
            <Typography component="span">
              To view your classes, navigate to the ‘Class Insights’ tab. Class
              codes will appear along the top of the page, and you can scroll
              down to see a list of students.
            </Typography>
          </li>
          <li>
            <Typography component="span">
              To assign work to a class, click ‘New Task’ in the top menu.
            </Typography>
          </li>
        </ul>
        <Typography paragraph>
          Students can log in to Jeddle using their school email address. Their
          default password is the same as their school email address (lower
          case).
        </Typography>
        <Typography>
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            Username:
          </Typography>{' '}
          school email address (lower case)
        </Typography>
        <Typography paragraph>
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            Password:
          </Typography>{' '}
          school email address (lower case)
        </Typography>
        <Typography paragraph>
          If you require any changes for your class lists, email us at
          hello@jeddle.com.
        </Typography>
      </>
    ),
  },
  {
    title: 'Can students use JeddAI without me?',
    content: (
      <Typography paragraph>
        Yes, but only if you have enabled JeddAI for your classes in the
        ‘Marking Tools’ section of the portal. If enabled, students can
        independently submit a draft response to a question and receive
        rubric-aligned feedback in less than 60 seconds.
      </Typography>
    ),
  },
  {
    title: 'What type of feedback does the AI provide?',
    content: (
      <>
        <Typography paragraph>
          JeddAI uses your selected rubrics and comment banks to provide:
        </Typography>
        <ul
          style={{
            listStyleType: 'disc',
            paddingLeft: '1.5em',
            marginTop: 0,
            marginBottom: 10,
          }}
        >
          <li>
            <Typography component="span">
              Specific in-text annotation (like comments on a Word Document or
              Google Docs) with personalised suggestions.
            </Typography>
          </li>
          <li>
            <Typography component="span">
              Overall feedback based on strengths and target areas.
            </Typography>
          </li>
          <li>
            <Typography component="span">
              Indicative grading based on the provided rubric (if enabled in
              ‘Marking Tools’).
            </Typography>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Can I disable the AI for my classes?',
    content: (
      <>
        <Typography paragraph>
          Yes, JeddAI includes optional AI tools that you can turn on or off in
          your ‘Marking Tools’ tab. When switched off, students will not be able
          to receive independent feedback from JeddAI.
        </Typography>
        <Typography paragraph>
          JeddAI is designed to empower teachers, not replace them, so you’ll be
          in control every step of the way. Even when the AI is turned off,
          JeddAI will drastically reduce your workload through its one-click
          comment banks and rubrics, self-assessment and peer-review tools, and
          virtual library of exemplars.
        </Typography>
      </>
    ),
  },
  {
    title: 'How do I start using JeddAI?',
    content: (
      <>
        <Typography paragraph>
          This onboarding guide will show you exactly how to get started, with
          step-by-step video tutorials for each feature.
        </Typography>
        <Typography paragraph>If you need additional support:</Typography>
        <ul>
          <li>
            <Typography component="span">
              Click the help icon in the top right corner.
            </Typography>
          </li>
          <li>
            <Typography component="span">
              Email us at hello@jeddle.com or call us on <b>02 7908 3835</b>
            </Typography>
          </li>
          <li>
            <Typography component="span">
              Schedule a personalised onboarding session using this{' '}
              <Typography component="span" sx={{ fontWeight: 'bold' }}>
                <a
                  href="https://calendly.com/d/zhj-c6q-pkq/jeddle-demonstration"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  link
                </a>
              </Typography>
              .
            </Typography>
          </li>
        </ul>
      </>
    ),
  },
];
