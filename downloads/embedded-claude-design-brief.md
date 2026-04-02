# Embedded Claude Design Brief

Use this template when designing a product feature that embeds Claude directly into the user experience. This is not about using Claude as a development tool. This is about making Claude part of what your users interact with.

---

## Problem Definition

**What problem does embedded Claude solve for the user?**

_Be specific. "It makes the app smarter" is not a problem statement. "Users spend 20 minutes manually categorizing incoming support tickets" is._


**How do users solve this problem today (without Claude)?**


**What evidence do you have that this is a real problem?**
_(User complaints, support tickets, usage data, observation)_


---

## Data Access

**What data does Claude need access to?**

| Data Source | What Claude Sees | Why It Needs It |
|-------------|------------------|-----------------|
| | | |
| | | |
| | | |

**What data must Claude never see?**

| Data | Reason |
|------|--------|
| | |
| | |

---

## Actions

**What can Claude do?**

List every action Claude is allowed to take in your product.

- [ ] 
- [ ] 
- [ ] 

**What can Claude never do?**

List the hard constraints. These are non-negotiable.

- [ ] 
- [ ] 
- [ ] 

---

## User Interaction

**How does the user interact with Claude?**

_(Chat interface, inline suggestions, automated actions, review-and-approve workflow)_


**What does the user see?**

_(Does the user know they're interacting with Claude? Is the AI visible or invisible?)_


**Can the user override Claude's output?** _(yes / no)_

**How?**

---

## Operator Controls

**What does the operator (you) control?**

| Control | Setting |
|---------|---------|
| System prompt | |
| Available tools/actions | |
| Rate limits | |
| Content filtering | |
| Logging level | |

**What can you change without redeploying?**

**What requires a code change?**

---

## Failure Modes

**What happens if Claude is unavailable?**
_(e.g., API outage, rate limit, timeout)_


**What happens if Claude produces incorrect output?**


**What is the recovery path for the user?**


---

## Cost Model

**Estimated tokens per user interaction:**

**Estimated interactions per user per day:**

**Estimated monthly API cost at current user count:**

**Cost ceiling (max you're willing to spend per user per month):**

---

## Pre-Build Checklist

- [ ] Problem is validated with real user evidence
- [ ] Data access is documented and reviewed for sensitivity
- [ ] Action boundaries are defined (what Claude can and cannot do)
- [ ] User interaction model is designed
- [ ] Failure modes are handled
- [ ] Cost model is within budget
- [ ] Human override is available for all Claude actions
