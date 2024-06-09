### PR Checklist

#### General
- [ ] **Title and Description**: Ensure the PR title is descriptive and includes a concise summary of changes.
- [ ] **Linked Issues**: Link relevant jira issues (if any) that the PR resolves or addresses.
- [ ] **Self-Review**: Perform a self-review to ensure the code meets the standards. Spend 10 minutes to test everything
- [ ] **Test**: Test your changes work correctly. Spend 10 minutes to test your changes before making PR.
- [ ] **Boundary Conditions**: Test every kind of input user can add. Large values, empty values, negative values etc. Component should be able handle and display it correctly.
- [ ] **Component**: Try very hard to use existing components, if there is none, create a GENERIC compoent. Explain in the PR if this is not followed. Make the props of the compoents generic and free of domain knowledge. No inline variables and styling.
- [ ] **State**: Carefully check if state is needed. Check each state variable.
- [ ] **Hooks**: Carefully check if hook is really. You must understand why it is being used and you should be able to explain it.
