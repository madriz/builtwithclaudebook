# Debugging Worksheet

Five steps. Work through them in order. Writing things down forces clarity and prevents you from chasing symptoms instead of causes.

---

## Step 1: Describe the Symptom

What exactly is happening? Not what you think is wrong. What you observe.

**What do you see?**
_(Error message, unexpected behavior, blank page, wrong data, crash)_


**When does it happen?**
_(Every time, intermittently, only on certain inputs, only in production)_


**What should happen instead?**


---

## Step 2: What Changed?

Something worked before and doesn't now. Or something is new and has never worked. Which is it?

**Last known working state:**
_(When did this last work? What version, what date, what conditions?)_


**What changed between then and now?**
_(Code changes, dependency updates, config changes, data changes, infrastructure changes)_


**If nothing changed:** Is this the first time anyone has tried this specific flow?


---

## Step 3: Hypothesis

Based on Steps 1 and 2, what do you think is causing the problem? Write it as a testable statement.

**"I believe the problem is caused by:"**


**"If I'm right, then I should be able to verify this by:"**


**"If I'm wrong, the most likely alternative is:"**


---

## Step 4: Investigation

Test your hypothesis. Do not fix anything yet. Gather evidence.

**What did you check?**


**What did you find?**


**Does the evidence support your hypothesis?** _(yes / no / partially)_


**If no:** Return to Step 3 with a new hypothesis based on what you learned.

---

## Step 5: Verify the Fix

Apply the fix, then verify it actually resolved the problem. A fix that makes the symptom disappear is not the same as a fix that addresses the root cause.

**What did you change?**


**Does the original symptom still occur?** _(yes / no)_


**Did the fix introduce any new issues?**


**How would you know if this problem came back?**
_(What monitoring, test, or check would catch a recurrence?)_


---

## Summary

Fill this in after the fix is verified. This becomes your reference if the problem recurs.

| Field | Answer |
|-------|--------|
| Symptom | |
| Root cause | |
| Fix applied | |
| Date resolved | |
| Time spent | |
| Lesson learned | |
