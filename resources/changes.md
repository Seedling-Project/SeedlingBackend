# Temporary markdown file detailing some changes

## feature-branch (Andry)

### Commands used

#### For making a file with all the installed module dependencies

`pip freeze > requirements.txt`

#### For installing dependencies

`pip install -r requirements.txt`

#### This will set up the hooks locally based on the configuration specified in `.pre-commit-config.yaml` file

`pre-commit install`

#### Check all files and identify and fix issues before making the initial commit

`pre-commit run --all-files`

#### Steps taken so far (bootleg changelog):

1. Set up dependencies and config files
2. Update the .gitignore
3. Prepping for hooks
4. Removed prettier formatting since django file structure with template html breaks code
5. Testing
6. Had to ignore some rules for the dJlinter to cheese the linter
7. Passed

## hotfix-branch (Andry)

### Commands

`npx mrm@2 lint-staged` - supposed to install husky and lint-staged and have preconfigured hooks which I can customize to target js, jsx, html, and css

#### Steps taken so far:

1. Setting up prettier
2. Testing if husky and lint-staged work
3. Refactoring
   - Goal is to keep all the frontend stuff in one folder, there will be a max of two package.json files: one in root that has CI dependencies and one in frontend with frontend dependencies
4. Finish connecting react and django, now frontend devs are all set up in the frontend directory
5. Decided to discard husky and lint-staged for GitHub Actions solutions
