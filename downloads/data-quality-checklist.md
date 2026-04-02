# Data Quality Checklist

Four layers of data quality validation. Each layer catches problems the previous one missed. Fill in rules specific to your project, then use this as a reference during development and review.

---

## Layer 1: Scraper / Ingestion Validation

Rules that run at the point where data enters your system. If it fails here, it never gets stored.

- [ ] Required fields are present and non-empty
- [ ] Data types match expectations (numbers are numbers, dates are dates)
- [ ] Values fall within expected ranges (e.g., price > 0, rating between 1-5)
- [ ] Duplicate detection before insert
- [ ] Source URL or identifier is recorded for traceability
- [ ] _Your rule:_
- [ ] _Your rule:_
- [ ] _Your rule:_

---

## Layer 2: Database Constraints

Rules enforced by the database itself. These are your last line of defense against bad data.

- [ ] NOT NULL on required columns
- [ ] UNIQUE constraints on natural keys (emails, slugs, external IDs)
- [ ] Foreign key constraints between related tables
- [ ] CHECK constraints for value ranges
- [ ] Default values set where appropriate
- [ ] Indexes on columns used in WHERE clauses and JOINs
- [ ] _Your constraint:_
- [ ] _Your constraint:_
- [ ] _Your constraint:_

---

## Layer 3: Daily Monitoring Checks

Automated checks that run on a schedule. They don't prevent bad data, but they tell you when something is wrong.

- [ ] Row count comparison: today vs. yesterday (flag if delta > expected threshold)
- [ ] Null rate per column (flag if above baseline)
- [ ] Freshness check: most recent record timestamp is within expected window
- [ ] Duplicate rate check
- [ ] Value distribution check (flag statistical outliers)
- [ ] _Your check:_
- [ ] _Your check:_
- [ ] _Your check:_

---

## Layer 4: Weekly QA Report

Manual or semi-automated review. A human looks at this and decides whether to investigate.

- [ ] Sample 10-20 records and verify against source
- [ ] Review any records flagged by daily monitoring
- [ ] Check data completeness: expected number of records vs. actual
- [ ] Review error logs for patterns
- [ ] Spot-check calculated fields (averages, totals, derived values)
- [ ] Compare key metrics to previous week
- [ ] _Your review item:_
- [ ] _Your review item:_
- [ ] _Your review item:_

---

## Notes

_Record any data quality issues you've encountered and how they were resolved. This becomes institutional knowledge._

| Date | Issue | Root Cause | Fix Applied |
|------|-------|------------|-------------|
| | | | |
| | | | |
| | | | |
