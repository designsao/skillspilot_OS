# SkillPilot OS — Sites Beta

A production-ready interactive beta for practical, measurable workplace AI adoption.

## Product surface

- Public landing, pricing, login, and signup routes
- Guided onboarding and six-factor readiness assessment
- Personalised dashboard and action plan
- Searchable prompt library and workflow playbooks
- Async practice sandbox with validation and failure handling
- Team analytics, certification, billing, and workspace settings
- Device-local global state with safe hydration and reset controls
- Responsive navigation, accessible forms, loading states, error states, and 404 fallback

## Local development

```bash
npm ci
npm run dev
```

The asynchronous data layer intentionally simulates network latency and offline errors. Entering `error` as the company name triggers the profile API error path for beta testing.
