# MCP Readiness Checklist

Before building an MCP (Model Context Protocol) integration, answer these questions. If you can't answer all of them, you're not ready to build it yet. Integrating Claude with external services without clear answers here leads to brittle, insecure, or pointless connections.

---

## 1. What External Service?

**Service name:**

**What it does:**

**Is there an existing API?** _(yes / no)_

**API documentation location:**

**Authentication method:** _(API key, OAuth, service account, other)_

---

## 2. What Data Flows?

Map the data movement. Every piece of data should have a clear direction.

**Data flowing INTO Claude (from the service):**

| Data | Format | Sensitivity Level |
|------|--------|-------------------|
| | | Low / Medium / High |
| | | Low / Medium / High |

**Data flowing OUT of Claude (to the service):**

| Data | Format | Sensitivity Level |
|------|--------|-------------------|
| | | Low / Medium / High |
| | | Low / Medium / High |

---

## 3. What Does Claude Need to Read?

List every piece of information Claude needs from the external service. Be specific.

- [ ] 
- [ ] 
- [ ] 

**Is any of this data sensitive?** _(PII, financial, health, credentials)_

**If yes, how is it handled?**

---

## 4. What Does Claude Need to Write?

List every action Claude should be able to take in the external service. This is where risk lives.

- [ ] 
- [ ] 
- [ ] 

**What is the worst thing that could happen if Claude takes the wrong action?**

**Can any of these actions be undone?**

---

## 5. Where Is the Human Review Point?

Every MCP integration needs at least one point where a human reviews what Claude is about to do before it does it. Where is yours?

**Human reviews before:**

**What does the human see at the review point?**

**Can the human reject or modify Claude's proposed action?** _(yes / no)_

---

## 6. What Happens If the Connection Fails?

Connections fail. APIs go down. Credentials expire. What happens to your application when this MCP integration is unavailable?

**Failure mode:** _(graceful degradation, error message, full stop)_

**User experience during failure:**

**How do you detect the failure?**

**How long can the integration be down before it matters?**

---

## Readiness Assessment

Answer honestly:

- [ ] I can answer all six sections above
- [ ] The data flows are documented and reviewed
- [ ] The human review point is defined
- [ ] The failure mode is acceptable
- [ ] I have tested the external API independently (without MCP)
- [ ] I understand the security implications of the data flowing through this integration

**If all boxes are checked:** You're ready to build.

**If any box is unchecked:** Address it first. Building without clarity here creates problems you'll discover in production.
