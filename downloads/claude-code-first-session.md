# Your First Claude Code Session

A step-by-step checklist for your first session with Claude Code. Work through each step in order. Do not skip ahead.

---

## Before You Start

- [ ] You have a project with at least a few files (code, config, docs)
- [ ] You know what one small task you want to accomplish
- [ ] You have a terminal open

---

## Step 1: Install Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

**What to look for:** Installation completes without errors. You can run `claude --version` and see a version number.

**Done when:** `claude --version` returns output.

---

## Step 2: Navigate to Your Project Directory

```bash
cd /path/to/your/project
```

**What to look for:** You are in the root of your project. Run `ls` to confirm you see your project files.

**Done when:** You see familiar files in the listing.

---

## Step 3: Start a Session

```bash
claude
```

**What to look for:** Claude Code starts and shows a prompt. It may ask for authentication on first run.

**Done when:** You see the Claude Code input prompt.

---

## Step 4: Ask for a Project Summary

Type a prompt like:

> Summarize this project. What does it do, what's the tech stack, and what are the key files?

**What to look for:** Claude reads your files and produces a summary that roughly matches your understanding of the project. It should identify the language, framework, and main entry points.

**Done when:** The summary is recognizably your project.

---

## Step 5: Verify the Summary

Read Claude's summary carefully. Ask yourself:

- [ ] Did it identify the right language and framework?
- [ ] Did it find the main files?
- [ ] Did it understand what the project does?
- [ ] Did it get anything wrong?

If something is wrong, correct it. This is how Claude learns the project context.

**Done when:** You're satisfied the summary is accurate, or you've corrected the errors.

---

## Step 6: Give One Bounded Task

Pick something small and well-defined. Examples:

- "Add a 404 page that matches the existing site design."
- "Write a unit test for the `calculateTotal` function in `utils.js`."
- "Fix the typo in the footer of `index.html`."

Do not start with "refactor the entire codebase" or "add authentication." One task. Clear boundaries.

**What to look for:** Claude proposes changes, explains what it's doing, and asks for confirmation before writing files.

**Done when:** Claude has proposed a specific change.

---

## Step 7: Verify the Output

Review what Claude produced:

- [ ] Does the change do what you asked?
- [ ] Does it follow the existing patterns in your code?
- [ ] Did it touch only the files it needed to?
- [ ] Does the project still work? (Run it, build it, test it.)

**Done when:** The change is correct and the project works.

---

## Step 8: Stop

Exit the session:

```bash
/exit
```

Resist the urge to keep going. Your first session should be short and successful. You now know the workflow: context, task, verify. Everything else builds on this.

---

## What You Learned

After this session, you should understand:

- How Claude Code reads and understands a project
- How to give it a bounded task
- How to verify its output before accepting it
- That the loop is always: context, task, verify
