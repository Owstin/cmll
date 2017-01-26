#!/usr/bin/python3
cmllfilepath = "cmlll.txt"

def accessfile(filepath):
    try:
        file = open(filepath, "r")
        file.close()
    except IOError as e:
        return False
    return True

def writecases(filepath):
    file = open(cmllfilepath, "w+")
    cases = ["a3:", "a6:"]
    letters = ["b","c","d","e","f","g","h"]
    for i in range(0, len(letters)):
        for j in range(1, 7):
            cases.append(letters[i]+str(j)+":")

    filestr = "";
    for i in range(0, len(cases)):
        newline = "\n"
        if(i < len(cases)-1):
            newline = "\n\n"
        filestr += cases[i]+newline

    file.write(filestr)
    file.close

exists = accessfile(cmllfilepath)
if not exists:
    writecases(cmllfilepath)

cmllfile = open(cmllfilepath, "r+")
cmllstr = ""
while True:
    c = cmllfile.read(1)
    if not c:
        break
    cmllstr += c

print(cmllstr)
