# Production Hygiene Checklist

Three checklists for three situations. Run the first before every deployment. Run the second monthly whether you think you need to or not. Run the third after any incident.

---

## Pre-Deployment Checklist

Run this every time you deploy. No exceptions for "small changes."

- [ ] Tests pass
- [ ] No hardcoded secrets in code or config
- [ ] Environment variables set correctly for production
- [ ] Database migrations tested against a copy of production data
- [ ] Rollback plan identified
- [ ] Monitoring dashboards open and showing baseline metrics
- [ ] Deployment window avoids peak traffic hours (if possible)
- [ ] Someone is available to respond if something breaks

---

## Monthly Review Checklist

Schedule this. Put it on your calendar. The things on this list degrade slowly and quietly.

### Infrastructure
- [ ] SSL certificates checked for upcoming expiration
- [ ] Domain registrations checked for upcoming expiration
- [ ] Hosting/cloud bills reviewed for unexpected charges
- [ ] Service dependencies checked for deprecation notices
- [ ] Backups verified: test a restore, not just that backups exist

### Security
- [ ] Dependencies scanned for known vulnerabilities (`npm audit`, `pip audit`, etc.)
- [ ] Access credentials rotated (API keys, database passwords)
- [ ] Unused accounts and access tokens removed
- [ ] Logs reviewed for suspicious patterns (login failures, unusual traffic)

### Performance
- [ ] Page load times checked against baseline
- [ ] Database query performance reviewed (slow query log)
- [ ] Disk usage and storage growth trending checked
- [ ] Error rates reviewed for upward trends

### Data
- [ ] Data quality checks passing (see Data Quality Checklist)
- [ ] Old/temporary data cleaned up
- [ ] Backup integrity verified

---

## Post-Failure Checklist

Run this after any production incident, no matter how small. The goal is not blame. The goal is to avoid the same failure twice.

### Immediate (within 1 hour of resolution)
- [ ] Service restored and verified working
- [ ] Affected users identified and communicated with (if applicable)
- [ ] Timeline of events documented while memory is fresh

### Within 24 Hours
- [ ] Root cause identified (not just the symptom)
- [ ] Contributing factors documented (what made the problem worse or delayed the fix?)
- [ ] Fix verified to address root cause, not just symptom

### Within 1 Week
- [ ] Preventive measures identified: what would have caught this earlier?
- [ ] Monitoring or alerting added for the failure mode
- [ ] Runbook updated if the resolution required steps not previously documented
- [ ] Checklist updated if a pre-deployment check would have prevented this

---

## Log

Track incidents and reviews here for reference.

| Date | Type | Summary | Action Taken |
|------|------|---------|--------------|
| | Pre-deploy / Monthly / Incident | | |
| | | | |
| | | | |
