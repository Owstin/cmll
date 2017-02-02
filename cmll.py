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
TOTAL_CASES = len(cases)

def hasAccess(filepath):
    try:
        file = open(filepath, "r")
        file.close()
    except IOError as e:
        return False
    return True

def writeCases():
    fileStr = "";
    for i in range(0, len(cases)):
        newline = "\n\n"
        if(i == len(cases)-1):
            newline = "\n"
        fileStr += cases[i]+newline

    return fileStr

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

#def openFile(filepath, cases):
#    if(not accessFile(filepath)):
#        file = open(filepath, "w+")
#        if(cases and isempty(file)):
#            writeCases(file)
#        file.close()
#
#    file = open(filepath, "r+")
#    return file

def isComplete(fileStr):
    totalCases = len(cases)

    text = fileStr
    colons = text.count(":")

    if not totalCases == colons:
        return false

    pos = 0
    for i in range(0, totalCases):
        cPos = text.find(":", pos)
        if(text[cPos-2:cPos+1] !=  cases[i]):
            return False
        pos = cPos+1
    return True

def readInputFile(filepath):
    fileStr = ""
    if not hasAccess(filepath):
        file = open(filepath, "w+")
        fileStr = writeCases()
        file.write(fileStr)
        return fileStr

    file = open(filepath, "r+")
    fileStr = fileString(file)
    file.close()
    return fileStr

def addAlg(algName, algText):
    LF = "\n"

    colons = cmllText.count(":")
    pos = 0
    cPos = 0
    for i in range(0, totalCases):
        cPos = cmllText.find(":", pos)
        if(cmllText[cPos-2:cPos] == updateCase):
            break
        pos = cPos+1

    newLine = cmllText.find("\n\n", cPos)
    cmllText = cmllText[:newLine+1] +updateAlg + LF + cmllText[newLine+1:]

def updateFile(filepath, str):
    file = open(filepath, "w+")
    file.write(str)
    file.close()
#cmllFile = openFile(cmllFileName, True)
#cmllText = fileString(cmllFile)
#cmllFile.close()

#jsFilePath = os.path.join(cwd, scriptsDir, changeExt(cmllFileName, "js"))
#jsFile = open(jsFilePath, "w+")

#jsStr = "var cmllFullText = "+accent
#for i in range(0, len(cmllText)):
#    jsStr += cmllText[i]
#jsStr += accent+";"
#jsFile.write(jsStr)
#jsFile.close()
cmllText = readInputFile(cmllFileName)

updateCase = "c1"
updateAlg = "r U R' U R U2 r'"
LF = "\n"

colons = cmllText.count(":")
pos = 0
cPos = 0
for i in range(0, TOTAL_CASES):
    cPos = cmllText.find(":", pos)
    if(cmllText[cPos-2:cPos] == updateCase):
        break
    pos = cPos+1

newLine = cmllText.find("\n\n", cPos)
cmllText = cmllText[:newLine+1] +updateAlg + LF + cmllText[newLine+1:]

updateFile(cmllFileName, cmllText)
