# Package Branching & Versioning Strategy

We will maintain two primary branches:

1. `develop`
2. `main`

## Develop Branch

The `develop` branch is used to create pre-patch versions during development.

## Main Branch

The `main` branch is used to maintain the latest stable code.

## Release Creation

We need to create releases to generate patch, minor, and major versions.

## Pull Requests

Individual pull requests (PRs) should be created to the `main` and `develop` branches from the fix branches. These PRs should include:

- Updates to the `CHANGELOG`
- Updates to the `package.json` file
- All test cases should pass
- All Sonar quality gates should pass

## PR Approvals

- PRs to the `develop` branch should have at least one approval.
- PRs to the `main` branch should have at least two client approvals.
