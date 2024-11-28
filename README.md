## Types and Interfaces for AIFLOW Projects

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
