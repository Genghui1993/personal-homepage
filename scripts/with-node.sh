#!/usr/bin/env bash
# 只用当前项目的 Node 版本（.nvmrc），不改 nvm 默认版本。
set -euo pipefail

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
# shellcheck disable=SC1091
. "$NVM_DIR/nvm.sh"

nvm use --silent
exec "$@"
