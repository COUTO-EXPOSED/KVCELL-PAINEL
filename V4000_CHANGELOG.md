# KV CELL OS PREMIUM V4000.0 — Change Log

## Verification refresh — 2026-10-20

- Recompiled the current backend, smoke-test suite, and local bridge with the
  selected Python 3.13.9 interpreter.
- Re-ran the isolated regression suite successfully; its result covers public
  OS links, multi-device/edit/status flows, quote decisions, CRUD/integrity,
  financial-history preservation, migration, authentication, and retired
  routes.
- Rechecked the release archive contents before rebuilding it after this
  documentation refresh.

## Backend and persistence

- Added additive `service_devices` relations so an OS can hold multiple devices while the legacy `services.device_id` column remains populated for older clients.
- Added `service_status_history` and startup backfill for existing OS status and device records.
- Validated device existence, unit, and customer association when linking devices to an OS.
- Returned a stable public token and canonical URL from OS creation/listing; retained legacy token/numeric-ID public lookup.
- Updated OS status history for staff changes, public customer decisions, and cancellation.
- Removed internal OS notes from the public tracking page.
- Preserved OS finance rows by updating linked ledger rows in place; OS cancellation retains its record, status timeline, and ledger relationships.
- Persisted quote decisions and rejected repeat, terminal, or expired public quote responses.
- Disabled AI/MDM API and public MDM routes without dropping historical tables or business records.
- Added admin-only user listing/creation/update and backup export, manager/admin restrictions for financial reads/writes, excluded password hashes from user listings, and removed the default weak new-user password.
- Updated the health/server version to `4000.0`.

## Frontend and validation

- Activated V4000 navigation and OS create/edit screens after legacy frontend overrides, so the intended UI is the final runtime assignment.
- Added multi-device selection, technician, costs, checklist, parts/quality/price, photos, internal notes, public link, WhatsApp, print, status, and cancel controls to the active OS flow.
- Removed pricing/AI/MDM navigation entries while retaining other operational modules and the KV CELL black/yellow theme.
- Added `static/v4000.css` and linked it in the application shell to consistently style navigation, cards, tables, inputs, action buttons, and modals in the retained OLED black/yellow theme, with mobile layouts and reduced-motion support.
- Rebuilt the dashboard from live `/api/dashboard` data: OS status counts, pending quotes, today's appointments, stock alerts, finance/fiado totals, recent OSes/sales, activity, and shortcuts.
- Fixed narrow-screen sidebar positioning found during browser verification so the dashboard remains visible alongside a fixed compact sidebar.
- Fixed Desbloqueios navigation so it opens its own module rather than redirecting to OS.
- Removed Settings' request to the disabled AI status API; company and logo settings load independently of the retired integration.
- Added a page-level error state with retry/dashboard actions for API errors, including a clear message when the backend cannot be reached.
- Verified all 25 active navigation entries in Chromium against an isolated server; each rendered its own page without JavaScript errors.
- Replaced MDM-specific smoke coverage with isolated OS, migration, public link/status, quote, auth, and finance-preservation integration coverage.
- Updated deployment template and V4000 audit/progress/test documents using executed results and explicit limitations.

## Remaining limitations

- CRUD and relationships across all modules are not fully tested.
- Granular backend permissions are inconsistent.
- Dormant AI/MDM code and historical tables remain; only active navigation/routes are disabled.
- Physical ADB/WebUSB, hardware antivirus triage, production deployment, and Square Cloud persistence remain unverified.
