# Shared Codebase Checklist

When two or more products share infrastructure, code, or services, changes to one can break the other. Use this checklist before making changes to any shared component.

---

## Context Setup

- [ ] CLAUDE.md references all products that share this codebase
- [ ] Each product's dependencies and entry points are documented
- [ ] Shared modules are identified and listed

**Products sharing this codebase:**

| Product | Entry Point | Key Dependencies |
|---------|-------------|------------------|
| | | |
| | | |

**Shared modules:**

| Module / File | Used By | What It Does |
|---------------|---------|--------------|
| | | |
| | | |

---

## Before Changing Shared Code

- [ ] Change is tested against Product A
- [ ] Change is tested against Product B
- [ ] No product-specific logic has been added to a shared module
- [ ] If adding a feature one product needs but the other doesn't: the change is backwards-compatible or feature-flagged
- [ ] Database schema changes are compatible with all products using the database
- [ ] API contract changes are compatible with all consumers

---

## Deployment

- [ ] Deployment order defined (which product deploys first, does it matter?)
- [ ] Each product deployed and verified independently
- [ ] No shared service was restarted without verifying impact on all products
- [ ] Health checks pass for all products after deploy

---

## Tracking & Attribution

- [ ] Analytics events are tagged with product identifier
- [ ] Affiliate tracking is per-product (not shared across products)
- [ ] Revenue attribution is correct (if applicable)
- [ ] Error tracking distinguishes between products
- [ ] Log entries include product context

---

## Ongoing Maintenance

- [ ] Dependency updates tested against all products before merging
- [ ] Shared module changes reviewed for cross-product impact
- [ ] Each product has its own staging/preview environment
- [ ] Breaking changes to shared code require a migration plan

---

## Decision Log

Record decisions about shared vs. product-specific code here.

| Date | Decision | Reasoning |
|------|----------|-----------|
| | | |
| | | |
| | | |
