# Deployment Readiness Checklist

Work through each section before, during, and after deployment. Do not skip items because "it's a small change." Small changes break production more often than large ones because they get less scrutiny.

---

## Pre-Deploy

### Code

- [ ] All tests pass locally
- [ ] No console errors or warnings in the browser
- [ ] Linting passes with no new warnings
- [ ] Environment variables are set (not hardcoded, not committed)
- [ ] Secrets are in the secrets manager, not in code or config files
- [ ] Database migrations run cleanly on a fresh database
- [ ] Feature has been tested in a preview/staging environment

### Review

- [ ] Changes reviewed (by another person or by yourself after a break)
- [ ] No debug code, console.logs, or TODO comments left in
- [ ] No test data or placeholder content in production paths
- [ ] Rollback plan identified: what do you revert if this breaks?

---

## Infrastructure

### Services

- [ ] All required services are running (database, cache, queue, CDN)
- [ ] Service versions match what was tested against
- [ ] Rate limits and quotas checked (API keys, third-party services)
- [ ] Backup taken before destructive changes (schema changes, data migrations)

### Networking

- [ ] Domain DNS is pointed correctly
- [ ] SSL certificate is valid and not expiring soon
- [ ] HTTPS redirect is working (HTTP requests redirect to HTTPS)
- [ ] CORS headers configured correctly for API endpoints

### Scaling

- [ ] Resource limits set (memory, CPU, connections)
- [ ] Auto-scaling configured if applicable
- [ ] Connection pooling set up for database connections

---

## Post-Deploy

### Verify (within 5 minutes of deploy)

- [ ] Site loads in a browser (not just curl, actually look at it)
- [ ] Login works (if applicable)
- [ ] Core user flow works end to end (signup, main action, result)
- [ ] API endpoints return expected responses
- [ ] No new errors in error tracking (Sentry, LogRocket, etc.)

### Monitor (within 1 hour of deploy)

- [ ] Error rate is not elevated compared to pre-deploy baseline
- [ ] Response times are within normal range
- [ ] No increase in 4xx or 5xx responses
- [ ] Background jobs are processing (if applicable)
- [ ] Email/notification delivery is working (if applicable)

### Confirm (within 24 hours of deploy)

- [ ] Search engine indexing is not broken (check Google Search Console)
- [ ] Analytics are recording data correctly
- [ ] No user reports of issues
- [ ] Scheduled tasks ran successfully (cron jobs, daily reports)

---

## If Something Goes Wrong

1. **Don't panic.** Most production issues look worse than they are.
2. **Revert first, investigate second.** Get back to a working state before debugging.
3. **Check the obvious.** Environment variables, DNS propagation, expired API keys.
4. **Document what happened.** Write it down while it's fresh. You'll thank yourself later.
