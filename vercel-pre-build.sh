#!/bin/bash

# Ignore Vercel build step if the the branch is not main or dev
if [[ $VERCEL_GIT_COMMIT_REF != "main" && $VERCEL_GIT_COMMIT_REF != "dev" ]]; then
  echo "🛑 - Build cancelled"
  exit 0
fi