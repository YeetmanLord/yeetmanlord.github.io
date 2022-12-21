import pathlib

files = pathlib.Path('.').glob('**/*.html')

for file in files:
    contents = ""
    with open(file) as f:
        contents = f.read()
    contents = contents.replace("target=\"_top\"", 'target="docFrame"')
    with open(file, "w") as f:
        f.write(contents)