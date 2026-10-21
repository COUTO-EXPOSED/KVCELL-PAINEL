# V4000.0 Test Report

## Verification refresh — 2026-10-20

The current source tree was rechecked after the previous V4000/V5000 work. The
following checks were executed in this environment:

- `C:/Users/kauav/AppData/Local/Programs/Python/Python313/python.exe -m py_compile app.py tools/smoke_test.py tools/kvcell_bridge.py` — PASS.
- `C:/Users/kauav/AppData/Local/Programs/Python/Python313/python.exe tools/smoke_test.py` — PASS. The test reported coverage for public OS links, multi-device OS records, edit/status/cancel flows, quote approval/rejection, customer CRUD/integrity, ledger ID preservation, atomic PDV/stock/fiado behavior, duplicate-sale guards, legacy migration, authorization, Telegram sender behavior, and retired routes.
- The release archive was rebuilt and inspected with .NET `ZipFile`; it contains 80 entries and no database, credential, key, cache, APK, or nested ZIP entry. All entries were opened successfully during the integrity pass.
- A fresh local server started on port 8789 and returned `/api/health` with version `4000.0`.
- Chromium login succeeded; all 26 active navigation tabs rendered without page-error elements or HTTP responses at status 400+.
- The ADB page was opened and its connection action was exercised without hardware. It correctly reported the missing local bridge, showed no fabricated device, and did not report a false USB success.

No production database or credential file was opened or packaged.

## Test environment

- Windows
- Python 3.13.9
- Node.js was not available on PATH for the final visual pass; browser execution was used to verify the updated frontend script loads and renders.
- Integration databases created in temporary directories; no production database was accessed.
- `qrcode` was installed locally because the application imports it. `cryptography` was not installed; encrypted Square Blob synchronization was not exercised.

## Executed checks

| Check | Result | Evidence |
|---|---|---|
| Python syntax compilation | PASS | `python -m py_compile app.py tools/smoke_test.py` |
| Application startup and health endpoint | PASS | `tools/smoke_test.py` starts the server on a free local port and requires `/api/health` version `4000.0`. |
| Anonymous API access and role authorization | PASS (targeted) | Smoke test confirms unauthenticated service listing returns 401; technician access to users, finance, backup, user create/update, and OS cancellation returns 401/403 as appropriate; admin user lists omit password hashes. This does not prove comprehensive permission enforcement across all APIs. |
| Retired routes | PASS (targeted) | Smoke test confirms `/api/mdm`, `/api/ai/status`, public MDM portal/heartbeat return 404. |
| Customer/device/OS create and OS edit | PASS | Integration test creates one customer, two devices, a multi-device OS, then edits the same OS ID and verifies no duplicate and unchanged token. |
| Multi-device legacy migration | PASS | Starts against an older SQLite schema and verifies the existing OS ID, token, primary device association, and status history are retained/backfilled. |
| Public OS link/status/privacy | PASS | Public token URL resolves, shows linked devices and updated status, and does not expose an internal-note sentinel. |
| Finance preservation | PASS | Delivered OS ledger rows are updated in place; their IDs remain stable through edit and cancellation. Cancellation retains OS and status history. |
| Quote approval, rejection, expiry | PASS | Both decisions persist; repeat decision and an expired quote return 409. |
| JavaScript syntax | BROWSER-VERIFIED; STANDALONE CHECK BLOCKED | The updated `static/app.js` loaded and executed through fresh login and dashboard rendering in Chromium. `node --check static/app.js` could not be run because Node.js is unavailable on PATH in this environment. |
| Local browser rendering | PASS (targeted) | Logged into an isolated local instance; verified the live dashboard at desktop and 540px phone widths with no horizontal overflow and a fixed sidebar. Navigated to OS and customer screens and confirmed their live content and actions render. |
| All active navigation tabs | PASS | Exercised all 25 navigation buttons in Chromium against a fresh isolated app. Each became active and rendered content; Desbloqueios opened its own page, Settings loaded without the retired AI endpoint, and no page-level JavaScript errors occurred. |
| Current local navigation pass | PASS | 26 active buttons were clicked against a fresh server on port 8789; no page-error element or HTTP 400+ response was observed. |
| Backend-unavailable page handling | PASS (browser check) | Stopped the isolated backend while retaining the browser session. A later tab request displayed a clear server-connection error with retry and dashboard actions. The backend still must be restarted to restore data-backed workflows. |
| ZIP contents and integrity | PASS | Rebuilt from the current source and reports at `C:\Users\kauav\Downloads\KV_CELL_OS_PREMIUM_V3002\KV_CELL_OS_PREMIUM_V4000.zip`. The archive contains 186 entries; `ZipFile.testzip()` found no corruption; all 14 required app/deployment/test/report paths are present; no database, secret/key, credential, cache, APK, log, or nested ZIP entries were found. |

## Commands

From the project directory:

```powershell
python -m py_compile app.py tools/smoke_test.py
python tools/smoke_test.py
node --check static/app.js # optional, requires Node.js installed and available on PATH
```

The test uses temporary, isolated SQLite data and removes it on completion.

## Release archive

- Output: `KV_CELL_OS_PREMIUM_V4000.zip`
- Rebuilt after the frontend and report updates. The final rebuild below includes this test report update.
- Required app, frontend, deployment, test, and V4000 report files: 14/14 present.
- Archive entries: 80; all entries opened successfully during the integrity pass: PASS.
- Excluded and checked: production database files, `.env` secrets, credentials, key/certificate files, caches, logs, APKs, backups/uploads, and nested ZIP files.
- The final SHA-256 is reported with the delivered archive path so it matches the exact post-report-refresh artifact.

## Not run / blockers

- No authorized physical Android device or ADB session was available. ADB command execution, WebUSB, package inspection, and any device-changing action were not tested on hardware.
- Antivirus behavior was not validated against malicious/safe sample corpora; the current implementation is heuristic, not a certified malware scanner.
- Full CRUD/API-permission/financial relationship tests for every retained module were not completed.
- Production Square Cloud startup, proxy-derived links, persistent storage, encrypted blob sync/restore, and production backup/restore were not exercised.
- Android Gradle/APK build was not run.
- `cryptography`-dependent blob encryption requires installing the dependency from `requirements.txt` and supplying valid keys in a suitable deployment environment.
