# V5000 changelog

## Unreleased — targeted implementation and verification

- Corrected frontend page overrides for technician, supplier, appointment, and finance editing so typed fields and status selectors are actually used by the rendered controls.
- Added action controls for manually managed financial records and a linked-record indicator for source-generated entries.
- Rejected direct update/delete attempts on source-linked finance rows with HTTP 409; source records remain the supported path for changing those entries.
- Added validation for appointment and guarantee statuses.
- Added regression coverage for technician/supplier/appointment/guarantee CRUD, manual finance edit/delete, and protection of sale-linked financial entries.
- Added atomic `/api/pdv/checkout` processing across purchase state, sale records, inventory, cash entries, and credit receivables. Stale/repeated items reject the entire checkout; failed carts do not leave partial sales.
- Made purchase creation atomic across the purchase record, acquisition finance entry, and inventory. Editing a PDV-linked purchase does not add a second incoming-sales entry.
- Blocked physical deletion of sale history and purchases that still have linked inventory or financial history.
- Cleared stale client authentication state on 401 and prevented a render failure after the login screen replaces the application shell.
- Re-tested all 25 navigation destinations, targeted UI persistence, and backend outage/recovery.
- Added per-module API authorization based on the signed-in user's saved permissions, with user records refreshed from SQLite on each request so changed permissions apply without requiring a fresh login.
- Enforced unit boundaries for list/query results, inventory CSV export, creates, record updates/deletes, and fiado payments.
- Added user edit/delete controls for role, unit, active state, and module permissions; added safeguards against self-lockout and removing the last active administrator.
- Validated and normalized user email/name updates and surfaced duplicate-email conflicts as HTTP 400 responses.
- Ensured failed SQLite writes roll back and always close their connection, avoiding a follow-up request timeout after a uniqueness conflict.
- Expanded `tools/smoke_test.py` with permission allow/deny, immediate session grant/revocation, finance role restrictions, forged-unit create/move, cross-unit update, duplicate-email, and self-delete checks.
- Added an AMOLED dashboard finish in `static/v4000.css`: true-black canvas, refined gold glow, staggered metric/card entrances, animated hero light, focused hover interactions, and accessible focus states.
- Preserved `prefers-reduced-motion` by disabling the new ambient and entrance animations when the operating system requests reduced motion.
- Verified the updated stylesheet in the active browser, including rendered black background, `kv-rise-in` animation under normal motion preference, reduced-motion behavior, and the server health endpoint.
- Added optional Telegram activity delivery through `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`, with queued redacted log summaries, login/logout events, and rate-limited failed-login notices; no credential is stored in source.
- Added permission- and unit-checked OS/quote message endpoints and explicit UI controls that confirm before sharing customer information, then display a copyable client-ready text even when Telegram is not configured.
- Added per-item quote quality editing, exposed qualities and standard screen warranty/película terms on public quote pages, corrected public BRL formatting/device labels, and added reduced-motion-aware animation and print styling to customer portals.
- Added smoke assertions for OS/quote message output and authorization/privacy, and browser-tested the public portals and Telegram copy flow with a disposable local database. Test runs explicitly stripped Telegram credentials; no external Telegram message was sent.
- Removed the Crediário/MDM tab and MDM action from the Fiado interface without removing the standalone MDM module.
- Replaced prompt-based manual Fiado product creation with inline product name, price, and quantity fields; added validation that prevents saving invalid manual product rows.
- Added six external film compatibility references to the Películas page, including safe new-tab links and a reminder to confirm physical compatibility.
- Added `FILM_COMPATIBILITY_SOURCES.md` to new copies of both Tech OS Pro reference archives. The supplied originals were preserved, and both copies passed archive CRC checks.
- Browser-verified Fiado MDM removal, manual item persistence in a temporary promissory (then deleted the test row), invalid-submit blocking, and all six Películas links. JavaScript syntax check and `tools/smoke_test.py` passed.
- Added a KV CELL Diagnósticos module with an additive SQLite schema/index migration, authorized API CRUD, status/estimate/test validation, and customer-device-unit integrity checks. Estimates stay informational and do not create financial entries or OS records.
- Added Diagnósticos to the attendance navigation and per-user permission editor. The page includes customer/device selection, technician test checklist, filters, detail view, edit, status changes, and delete controls.
- Added smoke coverage for diagnostics CRUD, invalid estimate/status/unit-device input, module permissions, unit scope, and legacy database migration. Browser-tested create/view/edit/status/delete and persistence after reload on a disposable database. Python compilation, Node syntax validation, and the full smoke test passed.

## Release status

This is not a final V5000 release. Other retained-module CRUD, full visual redesign, hardware testing, deployment validation, and packaging are still incomplete. No V5000 ZIP was generated.
