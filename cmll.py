#!/usr/bin/python3
import os

win = True if(os.name == "nt") else False

cwd = os.getcwd()
slash = "\\\\" if win else "/"
accent = "`"
cmllFileName = "cmll.txt"
scriptsDir = "scripts"

def generateCases():
    cases = []
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

cases = generateCases()

def accessFile(filepath):
    try:
        file = open(filepath, "r")
        file.close()
    except IOError as e:
        return False
    return True

def writeCases(file):
    filestr = "";
    for i in range(0, len(cases)):
        newline = "\n\n"
        if(i == len(cases)-1):
            newline = "\n"
        filestr += cases[i]+newline

    file.write(filestr)

def isEmpty(file):
    if(file.read(1) == ""):
        return True
    return False

def fileString(file):
    filestr = ""

    while True:
        c = file.read(1)
        if not c:
            break
        filestr += c
    return filestr

def changeExt(filepath, newext):
    path = isolatePath(filepath)
    filestr = isolateFile(filepath)
    perpos = filestr.rfind(".")
    if(perpos != -1):
        return filestr[:perpos]+"."+newext
    else:
        return filestr+"."+newext

def isolateFile(filepath):
    slashpos = filepath.rfind(slash)
    if(slashpos == -1):
        return filepath
    else:
        return filepath[slashpos+1::]

def isolatePath(filepath):
    slashpos = filepath.rfind(slash)
    if(slashpos == -1):
        return ""
    else:
        return filepath[:slashpos+1]

def openFile(filepath, cases):
    if(not accessFile(filepath)):
        file = open(filepath, "w+")
        if(cases and isempty(file)):
            writeCases(file)
        file.close()

    file = open(filepath, "r+")
    return file

def isComplete(file):
    totalCases = len(cases)

    text = filestring(file)
    colons = text.count(":")

    pos = 0
    for i in range(0, totalCases):
        cPos = text.find(":", pos)
        if(text[cPos-2:cPos+1] !=  cases[i]):
            return False
        pos = cPos+1
    return True

cmllFile = openFile(cmllFileName, True)
cmllText = fileString(cmllFile)
cmllFile.close()

jsFilePath = os.path.join(cwd, scriptsDir, changeExt(cmllFileName, "js"))
jsFile = open(jsFilePath, "w+")

jsStr = "var cmllFullText = "+accent
for i in range(0, len(cmllText)):
    jsStr += cmllText[i]
jsStr += accent+";"
jsFile.write(jsStr)
jsFile.close()
