# System Prompt Template

Four components. Define each one before starting a session. A system prompt that covers all four will produce more consistent and useful output than a long, unstructured paragraph.

---

## 1. Role

Who is Claude in this context? What expertise does it bring?

> _Example: You are a senior front-end developer with deep experience in React and accessibility standards._

**Your role definition:**


---

## 2. Task

What exactly should Claude produce? Be specific about the deliverable, not just the topic.

> _Example: Review the following React component and identify accessibility issues. For each issue, explain what's wrong and provide the corrected code._

**Your task definition:**


---

## 3. Output Specification

What format, structure, and level of detail do you expect?

> _Example: Return a numbered list. For each item, include: the issue (one sentence), the relevant WCAG guideline, and a code block with the fix._

**Your output specification:**


---

## 4. Constraints

What must Claude never do? What boundaries apply?

> _Example: Do not suggest changing the component's visual design. Do not add new dependencies. Only address accessibility issues, not code style._

**Your constraints:**


---

## Assembled System Prompt

_Copy the sections above into a single block to use as your system prompt._

```
[Role]

[Task]

[Output Specification]

[Constraints]
```

---

## Testing Your System Prompt

After assembling your system prompt, test it with a simple input:

1. Does the response match the role you defined?
2. Does the output match the format you specified?
3. Are the constraints respected?
4. If you ran the same prompt again, would you get a structurally similar response?

If any answer is no, revise the corresponding section and test again.
