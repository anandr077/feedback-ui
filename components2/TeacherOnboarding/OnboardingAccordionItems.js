import { Typography } from '@mui/material';

export const accordionItems = [
  {
    title: 'Why am I here?',
    content: (
      <>
        <Typography paragraph>
          Your school has partnered with Jeddle, giving you and your students
          access to JeddAI - our game-changing feedback and marking tool.
        </Typography>
        <Typography paragraph>
          With JeddAI, you can quickly assign writing tasks and provide
          personalised, rubric-aligned feedback in seconds (yes, seconds).
          Students can also receive instant feedback based on your marking
          preferences.
        </Typography>
        <Typography paragraph>
          👉{' '}
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            Note:
          </Typography>{' '}
          JeddAI is separate from Jeddle’s English content library. To access
          text guides, video lessons, and quizzes, visit ‘My Courses’ on{' '}
          <a
            href="https://jeddle.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            jeddle.com
          </a>
          . If you don’t see any courses, check with your head of department.
        </Typography>
      </>
    ),
  },
  {
    title: 'What is JeddAI, and how does it help?',
    content: (
      <>
        <Typography paragraph>
          JeddAI is your AI-powered marking assistant, designed to make the
          entire feedback process more efficient for both teachers and students.
        </Typography>
        <Typography>By using the JeddAI platform, you can:</Typography>
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
                Assign writing tasks:
              </Typography>{' '}
              Include self-assessment and peer feedback options.
            </Typography>
          </li>
          <li>
            <Typography component="span">
              <Typography component="span" sx={{ fontWeight: 'bold' }}>
                Speed up marking:
              </Typography>{' '}
              Use custom rubrics and one-click comment banks.
            </Typography>
          </li>
          <li>
            <Typography component="span">
              <Typography component="span" sx={{ fontWeight: 'bold' }}>
                Use AI-assisted feedback:
              </Typography>{' '}
              Get instant, rubric-aligned feedback suggestions to edit and share
              with students.
            </Typography>
          </li>
          <li>
            <Typography component="span">
              <Typography component="span" sx={{ fontWeight: 'bold' }}>
                Share exemplars:
              </Typography>{' '}
              Share student work (anonymously) so that others can learn by
              example.
            </Typography>
          </li>
        </ul>
        <Typography paragraph>
          🔹 JeddAI is not a chatbot and will not write student responses for
          them.
        </Typography>
      </>
    ),
  },
  {
    title: 'How do I set up my classes?',
    content: (
      <>
        <Typography paragraph>
          If you were registered as part of a school subscription, your classes
          are{' '}
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            already set up
          </Typography>
          . You’ll see them at the end of this onboarding process.
        </Typography>
        <Typography paragraph>You can also:</Typography>
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
              View student lists and class codes on the{' '}
              <Typography component="span" sx={{ fontWeight: 'bold' }}>
                ‘Class Insights’
              </Typography>{' '}
              page, and
            </Typography>
          </li>
          <li>
            <Typography component="span">
              Assign work to a class (or multiple classes) by clicking the{' '}
              <Typography component="span" sx={{ fontWeight: 'bold' }}>
                ‘New Task’
              </Typography>{' '}
              button.
            </Typography>
          </li>
        </ul>
        <Typography paragraph>
          Students should be instructed to log in to Jeddle using their{' '}
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            school email
          </Typography>{' '}
          (lowercase) as both their{' '}
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            username and password
          </Typography>
          .
        </Typography>
        <Typography>
          For any class changes, email{' '}
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            hello@jeddle.com
          </Typography>
          .
        </Typography>
      </>
    ),
  },
  {
    title: 'Can students use JeddAI without me?',
    content: (
      <Typography paragraph>
        Yes - if JeddAI is switched ‘on’ in the{' '}
        <Typography component="span" sx={{ fontWeight: 'bold' }}>
          ‘Marking Tools’
        </Typography>{' '}
        section. When activated, students can submit drafts and receive
        AI-generated feedback in seconds.
      </Typography>
    ),
  },
  {
    title: 'What type of feedback does JeddAI provide?',
    content: (
      <>
        <Typography paragraph>JeddAI provides:</Typography>
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
                In-text annotations:
              </Typography>{' '}
              Personalised feedback on specific sections of a student response,
              including suggested improvements.
            </Typography>
          </li>
          <li>
            <Typography component="span">
              <Typography component="span" sx={{ fontWeight: 'bold' }}>
                Overall feedback:
              </Typography>{' '}
              General feedback on strengths and target areas.
            </Typography>
          </li>
          <li>
            <Typography component="span">
              <Typography component="span" sx={{ fontWeight: 'bold' }}>
                Indicative grading:
              </Typography>{' '}
              Based on your selected rubric (if enabled).
            </Typography>
          </li>
        </ul>
        <Typography paragraph>
          When using JeddAI as a marking assistant, you can review and edit all
          AI-generated feedback before sharing it with students.
        </Typography>
      </>
    ),
  },
  {
    title: 'Can I turn off the AI?',
    content: (
      <>
        <Typography paragraph>
          Yes! You turn the AI on or off in the{' '}
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            ‘Marking Tools’
          </Typography>{' '}
          section.
        </Typography>
        <Typography paragraph>
          When switched off, students won’t be able to receive instant
          AI-generated feedback, however you’ll still benefit from JeddAI’s
          one-click comment banks, customisable rubrics, self-assessment tools
          and peer-review options.
        </Typography>
      </>
    ),
  },
  {
    title: 'How do I start using JeddAI?',
    content: (
      <>
        <Typography paragraph>
          This onboarding guide includes step-by-step tutorials.
        </Typography>
        <Typography paragraph>For extra help:</Typography>
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
              Click the help icon (top right)
            </Typography>
          </li>
          <li>
            <Typography component="span">
              Email hello@jeddle.com or call 02 7908 3835
            </Typography>
          </li>
          <li>
            <Typography component="span">
              Book a virtual onboarding session:{' '}
              <Typography component="span" sx={{ fontWeight: 'bold' }}>
                <a
                  href="https://calendly.com/d/zhj-c6q-pkq/jeddle-demonstration?month=2025-02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule here
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
