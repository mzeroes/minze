#! /bin/bash
set -e
## common consts
RED='\033[0;31m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NO_COLOR='\033[0m'
APP_OS='android'

success(){
  echo -e "✅  ${GREEN}$1${NO_COLOR}"
}

# There are two secrets
# production and development
# defaults to development
APP_ENV=$NODE_ENV

if [ -z $APP_ENV ]; then
  APP_ENV='development'
fi
