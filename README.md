## Types and Interfaces for AIFLOW Projects

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
