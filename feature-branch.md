## Commands used

### For making a file with all the installed module dependencies

```pip freeze > requirements.txt```

### For installing dependencies

```pip install -r requirements.txt```

### This will set up the hooks locally based on the configuration specified in ```.pre-commit-config.yaml``` file

```pre-commit install```

### Check all files and identify and fix issues before making the initial commit

```pre-commit run --all-files```

### Steps taken so far (bootleg changelog):

1. Set up dependencies and config files
2. Update the .gitignore
3. Prepping for hooks
4. Removed prettier formatting since django file structure with template html breaks code
5. testing

### TODO:

1. Discuss with Kyle if the [Black Formatter](https://black.readthedocs.io/en/stable/the_black_code_style/index.html) for python fits his preference
2. After setting up both Black hooks, test
3. If tests pass, open pr
