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
6. Final checks for this branch then open pr

## addViteReact branch (Andry)

### Commands

`npm create vite@latest` - create React app using Vite

`npm update --save-dev` - update dependencies

`npm install @vitejs/plugin-react --save-dev` - required package for vite build
supposedly

`vite build` - create dist dir which is the equivalent to build directory
(requires vite command)

`vite preview` - I think this is like the equivalent to `npm run dev` (the
development server)

### Steps taken so far:

1. init React app using Vite and testing
2. Update dependencies for both back and front end (requirements.txt and
   package.json)
3. Change paths in django settings file to target new Vite files
   - specifically, settings.py (modified static files dir variable as well as
     static_files url and where program looks for templates)
4. Testing Django + Vite/React connection
5. Successfully confirmed connection

### Potential TO-DO

1. Vite was initialized with a linter that might conflict with superlinter.
   Theoretically they are both using the ruleset defined by eslint so maybe
   might not matter
