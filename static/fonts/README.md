# KV CELL V1100 — WebUSB ADB engine

This directory contains the browser-side ADB/WebUSB runtime extracted from the Tech OS Pro artifact supplied for this project and wired into the KV CELL V1100 adapter. The KV CELL UI does not depend on the Tech OS Pro visual application; only the browser-side ADB transport/runtime is reused as the technical reference/runtime.

Primary flow:
Chrome/Edge → WebUSB → ADB transport → ADB authentication → KV CELL session.
