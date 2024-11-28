## Types and Interfaces for AIFLOW Projects

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/geeesy/type-aiflow/ci.yml)
![NPM Version](https://img.shields.io/npm/v/%40geeesy%2Ftype-aiflow)
![NPM Last Update](https://img.shields.io/npm/last-update/%40geeesy%2Ftype-aiflow)

### Development

- Run before commit to git

```shell
npm run ci
```

### NPM

- Run before publishing to npm

```shell
npm run prepublishOnly
```

- Release a new version from local

```shell
# add a changeset
npx changeset

# commit the changes
git add .
git commit -m 'xxx'

# publish
npm run local-release
```
