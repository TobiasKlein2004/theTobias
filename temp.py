#This file just exist because I didn't wanted to switch over to sass for loops 
#but i need the loops so i just do them in python (thats not really smart working, i know) 

zells = int(input("zells: "))
zell_width = int(input(" Zell Width (px): "))

for i in range(zells):
    left = (zell_width * i) * -1
    hue = (360 / zells * i)
    angle = (360 / zells *i)
    print(".panel:nth-child(" + str(i +1) + ") {")
    print("    --left: " + str(int(left)) + "px" + ";")
    print("    --hue: " + str(int(hue)) + ";")
    print("    --angle: " + str(int(angle)) + "deg;")
    print("}\n")