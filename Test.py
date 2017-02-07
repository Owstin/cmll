#!/usr/bin/python3
import os
import string

def isFile(filepath):
    try:
        file = open(filepath, "r")
        file.close()
    except IOError as e:
        return False
    return True

def isEmpty(filepath):
    if not isFile(filepath):
        return True

    file = open(filepath, "r")
    while True:
        c = file.read(1)
        if(c not in string.whitespace):
            return False
        if not c:
            break
    file.close()
    return True

def generateCases():
    cases = []
    letters = ["a", "b", "c", "d", "e", "f", "g", "h"]
    for i in range(0, len(letters)):
        if(letters[i] == "a"):
            nums = [3, 6]
        elif(letters[i] == "h"):
            nums = [1, 2, 3, 6]
        else:
            nums = range(1, 7)
        for j in nums:
            cases.append(letters[i]+str(j))
    return cases

CASES = generateCases()
TOTAL_CASES = len(CASES)

def writeCases():
    fileStr = "";
    for i in range(0, TOTAL_CASES):
        newline = "\n\n"
        if(i == TOTAL_CASES-1):
            newline = "\n"
        fileStr += CASES[i]+":"+newline
    return fileStr

def isComplete(fileStr):
    text = fileStr
    colons = text.count(":")

    if not colons == TOTAL_CASES:
        return False

    pos = 0
    for i in range(0, TOTAL_CASES):
        cPos = text.find(":", pos)
        if(text[cPos-2:cPos+1] !=  CASES[i]):
            return False
        pos = cPos+1
    return True

def completeFile(str):
    pos = 0
    for i in range(0, TOTAL_CASES):
        cpos = str.find(":", pos)
        if(str[cpos-2:cpos] !=  CASES[i]):
            str = str[:cpos-2] + CASES[i] + ":\n" + str[cpos-3:]
        pos = cpos+1
    return str

def cleanText(str):
    for i in range(0, len(str)):
        if(str[i] not in string.whitespace):
            str = str[i:]
            break
    pos = 0
    while True:
        fpos = str.find("\n\n\n", pos)
        if(fpos == -1):
            break
        str = str[:fpos+2] + str[fpos+4:]
        pos = fpos
    return str

class Thing:
    def __init__(self, filepath):
        self.filepath = filepath
        self.fileText = ""
        if(isEmpty(self.filepath)):
            file = open(self.filepath, "w+")
            emptySet = writeCases()
            file.write(emptySet)
            file.close()
            self.fileText = emptySet
        else:
            file = open(self.filepath, "r")
            while True:
                c = file.read(1)
                if not c:
                    break
                self.fileText += c
            file.close()
            self.fileText = cleanText(self.fileText)
            if not isComplete(self.fileText):
                self.fileText = completeFile(self.fileText)

    def addAlg(self, algName, algText):
        if algName[:2] not in CASES:
            print("Invalid algorithm name")
            return

        if(self.fileText.find(algText) != -1):
            return

        LF = "\n"

        text = self.fileText
        colons = text.count(":")
        pos = 0
        for i in range(0, TOTAL_CASES):
            cpos =text.find(":", pos)
            if(text[cpos-2:cpos] == algName):
                break
            pos = cpos+1

        newLine = text.find("\n\n", cpos)
        self.fileText = text[:newLine+1] + algText + LF + text[newLine+1:]

    def updateFiles(self):
        file = open(self.filepath, "w+")
        file.write(self.fileText)
        file.close()

cmllFileName = "cmll.txt"
newThing = Thing(cmllFileName)
t = newThing.fileText
print(t)
