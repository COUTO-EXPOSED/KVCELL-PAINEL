#!/usr/bin/env bash
set -e
PACKAGE="br.com.kvcell.finance.mdm"
RECEIVER="br.com.kvcell.mdmd.KVCellDeviceAdminReceiver"
adb devices
adb shell dpm set-device-owner "$PACKAGE/$RECEIVER"
echo "Device Owner configurado."
