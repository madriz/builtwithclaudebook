# Validation Rule Worksheet

Define quality gates for AI-generated code before accepting it into your project. Fill this out for each major feature or component Claude builds for you.

---

## Feature Details
- **Feature/Component Name:**
- **Date:**
- **Project:**

---

## Functional Validation

### Does it do what was asked?
- [ ] Core functionality works as described
- [ ] Edge cases handled (empty inputs, large data, etc.)
- [ ] Error states display meaningful messages
- [ ] All user flows complete without breaking

### Specific Functional Checks
| Check | Expected Behavior | Pass? |
|-------|-------------------|-------|
|       |                   | [ ]   |
|       |                   | [ ]   |
|       |                   | [ ]   |

---

## Code Quality Validation

### Readability
- [ ] Variable and function names are descriptive
- [ ] Code structure is logical and follows project conventions
- [ ] No unnecessary complexity or over-engineering
- [ ] Comments explain *why*, not *what* (where needed)

### Security
- [ ] No hardcoded secrets or API keys
- [ ] User input is validated/sanitized
- [ ] No SQL injection vulnerabilities
- [ ] No XSS vulnerabilities
- [ ] Authentication/authorization checks in place (if applicable)

### Performance
- [ ] No obvious N+1 queries or unnecessary loops
- [ ] Large data sets are paginated or lazy-loaded
- [ ] Images/assets are optimized
- [ ] No blocking operations on the main thread

---

## Integration Validation

### Does it fit the project?
- [ ] Follows existing code patterns and conventions
- [ ] Uses existing utilities/helpers (not reinventing)
- [ ] Compatible with current dependencies and versions
- [ ] Doesn't break existing functionality

### Dependency Check
- [ ] Any new dependencies are necessary and well-maintained
- [ ] No conflicting dependency versions introduced
- [ ] License compatibility verified

---

## Testing Validation

### Test Coverage
- [ ] Happy path tested
- [ ] Error/edge cases tested
- [ ] Integration points tested
- [ ] Manual testing completed in browser/device

### Test Results
| Test | Result | Notes |
|------|--------|-------|
|      |        |       |
|      |        |       |

---

## Deployment Validation

- [ ] Builds without errors
- [ ] No console errors or warnings
- [ ] Works on target devices/browsers
- [ ] Environment variables configured correctly

---

## Final Decision

- [ ] **ACCEPT** — Code meets all validation rules
- [ ] **REVISE** — Code needs changes (list below)
- [ ] **REJECT** — Code needs to be rewritten

### Revision Notes
<!--  What needs to change before acceptance? -->
-

---

## Lessons for Future Prompts
<!-- What should you include in prompts to avoid these issues next time? -->
-
