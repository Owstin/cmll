#!/usr/bin/python3
import os

win = True if(os.name == "nt") else False

cwd = os.getcwd()
slash = "\\\\" if win else "/"
accent = "`"
cmllfilename = "cmll.txt"
scriptsdir = "scripts"

def generatecases():
    cases = []#["a3:", "a6:"]
    letters = ["a","b","c","d","e","f","g", "h"]
    for i in range(0, len(letters)):
        if(letters[i] == "a"):
            nums = [3, 6]
        elif(letters[i] == "h"):
            nums = [1, 2, 3, 6]
        else:
            nums = range(1, 7)
        for j in nums:
            cases.append(letters[i]+str(j)+":")
    return cases

cases = generatecases()

def accessfile(filepath):
    try:
        file = open(filepath, "r")
        file.close()
    except IOError as e:
        return False
    return True

def writecases(file):
    filestr = "";
    for i in range(0, len(cases)):
        newline = "\n"
        if(i < len(cases)-1):
            newline = "\n\n"
        filestr += cases[i]+newline

    file.write(filestr)

def isempty(file):
    #file = open(filepath, "r+")
    if(file.read(1) == ""):
        return True
    return False

def filestring(file):
    filestr = ""
    while True:
        c = file.read(1)
        if not c:
            break
        filestr += c
    return filestr

def changeext(filepath, newext):
    path = isolatepath(filepath)
    filestr = isolatefile(filepath)
    perpos = filestr.rfind(".")
    if(perpos != -1):
        return filestr[:perpos]+"."+newext
    else:
        return filestr+"."+newext

def isolatefile(filepath):
    slashpos = filepath.rfind(slash)
    if(slashpos == -1):
        return filepath
    else:
        return filepath[slashpos+1::]

def isolatepath(filepath):
    slashpos = filepath.rfind(slash)
    if(slashpos == -1):
        return ""
    else:
        return filepath[:slashpos+1]

def createfile(filepath, cases):
    if(not accessfile(filepath)):
        file = open(filepath, "w+")
        if(cases and isempty(file)):
            writecases(file)
        file.close()

    file = open(filepath, "r+")
    return file

cmllfile = createfile(cmllfilename, True)

cmlltext = filestring(cmllfile)
cmllfile.close()

jsfilepath = os.path.join(cwd, scriptsdir, changeext(cmllfilename, "js"))
jsfile = createfile(jsfilepath, False)

jsfiletext = "var cmllFullText = "+accent
for i in range(0, len(cmlltext)):
    jsfiletext += cmlltext[i]
jsfiletext += accent+";"

jsfile.write(jsfiletext)
