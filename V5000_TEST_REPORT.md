# V5000 test report

**Result:** Targeted regressions passed; full release suite is incomplete.  
**Environment:** Windows, Python 3.13, Node 22, isolated local test databases.

## Commands executed

| Command | Result |
|---|---|
| `C:\Users\kauav\AppData\Local\Programs\Python\Python313\python.exe -m py_compile app.py tools\smoke_test.py` | PASS |
| `C:\Users\kauav\.copilot\session-state\5b8207c4-e28b-446a-8064-a21ae5f94acd\files\node22\node-v22.16.0-win-x64\node.exe --check static\app.js` | PASS |
| `C:\Users\kauav\AppData\Local\Programs\Python\Python313\python.exe tools\smoke_test.py` | PASS — `KV CELL REGRESSION SMOKE TEST: PASS` |

The regression test covers authentication, legacy schema migration, public OS token behavior, multi-device OS edits and status tracking, quote approval/rejection/cancellation, customer relationship protections, technician/supplier/appointment/guarantee updates, financial ledger ID preservation, linked-vs-manual finance edit/delete behavior, atomic purchase creation and PDV checkout, duplicate-sale conflicts, cart rollback, stock/cash consistency, and Fiado receivables. New diagnostics assertions cover create/list/edit/delete, status and estimate validation, incompatible unit/device updates, permission denial/grant, unit-scoped reads, and creation of the diagnostics table in a legacy database while preserving its existing OS/device relationship. Telegram additions verify the sender against a mocked `urlopen` success and HTTP 403 (including token-redaction), generated OS/quote text, item quality/prices, exclusion of internal notes, anonymous denial, allowed and denied module/unit access, and the no-credentials copy fallback. The smoke server explicitly removes Telegram credentials from its inherited environment; the suite makes no external Telegram requests.

Permission assertions additionally cover allowed/denied module endpoints, finance role restrictions even when a technician is explicitly granted the finance module, permission grants and revocations taking effect in an existing session, unit-scoped list results, rejecting forged-unit creates and cross-unit moves/updates, duplicate-email conflicts without stalling later requests, and preventing deletion of the active administrator account.

## Browser checks performed

- Repeated all 25 navigation destinations; each rendered content. Observed 31 API responses, with zero HTTP responses at or above 400.
- Created and edited an isolated technician through the UI; name and inactive status were reflected in the list.
- Created and edited an isolated supplier, appointment, and guarantee through the UI; values and status persisted through their API list endpoints.
- Created and edited a manual finance entry through the UI; the revised amount was shown and confirmed through the finance API.
- Created a used-device purchase through the UI, finalized checkout through the PDV, and verified the sold state, one sale row, and one incoming finance entry.
- Created a restricted user in the browser, edited module permissions, reloaded the application, and verified the saved selection. Signed in as that user and confirmed only the granted inventory navigation remained, the unit selector was restricted to LAGOS, inventory returned HTTP 200, and the ungranted services endpoint returned HTTP 403.
- Reloaded the user-facing browser with the AMOLED stylesheet and confirmed it was loaded, the dashboard uses a true-black background, entrance animation is active with normal motion preference, and the reduced-motion media preference disables animation. The isolated app health check returned HTTP 200.
- Saved a setting in the isolated port-8094 app, stopped the server, confirmed the connection-error screen and retry action, restarted on the same database, reauthenticated, and confirmed the setting persisted.
- After the session-recovery fix, the 401-to-login transition no longer produced the earlier `Cannot set properties of null` page error.
- On disposable local port 8111, opened the public OS and quote pages in the browser and checked device, quality, price, warranty, and action content. Logged into the isolated panel, confirmed the OS Telegram button prompts before sharing PII, then confirmed the no-credentials response shows a copyable client message.
- Reloaded the current frontend from the project source on port 8111. Confirmed Fiado has no MDM tab/action; saved an isolated promissory with a manual item, verified the serialized product in `/api/fiado` notes, then deleted the test row. Blank name/price was blocked; an explicit zero price remained valid.
- Opened the Fiado CRM & Cobrança tab and returned to Promissórias through the main navigation; both views rendered and no MDM control reappeared.
- Opened Películas and verified all six external source cards and URLs render with `target="_blank"` and `rel="noopener noreferrer"`.
- Opened the new Diagnósticos page and verified the navigation, empty state, filters and create control. Created a test diagnostic, viewed its details, edited findings/status, deleted it, then created a second isolated diagnostic and confirmed it remained after a full page reload before deleting it. The isolated app health endpoint returned HTTP 200; no production data was used.
- Created copies of both Tech OS Pro reference archives with `KV_CELL_FILM_COMPATIBILITY_SOURCES.md`; compared every original entry byte-for-byte, verified the new file contents, and passed ZIP CRC checks. Originals were not overwritten. Outputs: `techospro.com(2)_com_fontes_peliculas.zip` (124 entries; SHA-256 `6140f27f8545a97014537e22e750f6e1a63bfa9dba13e81be353bce4ccf80afe`) and `Tech_OS_PRO_com_fontes_peliculas.zip` (110 entries; SHA-256 `c8c14a8cf1351badd9450812eeaacb53866ceeea8429a3b71ab10636edbc86ec`).

## Not run / not verified

- Delivery to a real Telegram group, valid bot token, group permissions, and Square Cloud environment variables.
- Full CRUD and authorization coverage for every retained module.
- Browser-level deletion of users and testing the no-access page for a user with no module permissions.
- ADB/WebUSB/antivirus with connected, authorized hardware.
- Actual Square Cloud deployment or GitHub workflow execution.
- Full visual regression against every image/reference screen.
- Final V5000 application ZIP construction, extraction test, secret/database exclusion scan, and SHA-256 verification. The two Tech OS Pro reference copies are not V5000 application releases.

Do not interpret the navigation check as proof that every module's forms, buttons, data relationships, or CRUD workflows are complete.
