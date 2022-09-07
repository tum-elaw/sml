import sys, getopt

# give a filepath and the amount of footnotes as parameters
# place {i} in text to generate a link to the footnotes
# place {ii} at start of a footnote
# the first {i} ist then matched to the first {ii} in the footnotes and so on
def main():
    fname = ''
    amount = 0

    try:
        opts, args = getopt.getopt(sys.argv[1:], "f:n:h", ["filepath", "amount", "help"])
    except:
        print("footnotes.py -f <filepath> -n <amount>")
        sys.exit(2)

    for opt, arg in opts:
        if opt in ("-f", "--filepath"):
            fname = arg
        elif opt in ("-n", "--amount"):
            amount = int(arg)
        elif opt in ("-h", "--help"):
            print("footnotes.py -f <filepath> -n <amount>")
            sys.exit(2)

    print(f"filepath: {fname}\namount: {amount}\n")
    if fname == '' or amount == 0:
        print("footnotes.py -f <filepath> -n <amount>")
        sys.exit(2)

    cs = getFNotes(fname, amount)
    buildFNotes(fname, amount, cs)


def nth_repl(s, sub, repl, n):      #nth for possible future modifications
    find = s.find(sub)
    # If find is not -1 we have found at least one match for the substring
    i = find != -1
    # loop util we find the nth or we find no match
    while find != -1 and i != n:
        # find + 1 means we start searching from after the last match
        find = s.find(sub, find + 1)
        i += 1
    # If i is equal to n we found nth match so replace
    if i == n:
        return s[:find] + repl + s[find+len(sub):]
    return s

def getFNotes(fname, amount):
    f = open(fname, "r")
    t = f.read()
    f.close()
    if len(t) == 0:
        sys.exit(0)
    if t.count("{i}") < amount:
        print(t.count("{i}"))
        print(t.count("{ii}"))
        print("there were less {i} found than amount")
        sys.exit(2)
    if t.count("{ii}") < amount:
        print("there were less {ii} found than amount")
        sys.exit(2)
    i = 1
    cs = []
    x = t.split("Fußnoten")
    if len(x) != 2:
        print("There either are no Fußnoten or \"Fußnoten\" was found more than once")
        sys.exit(2)
    t = x[1]
    t = t.replace("\n", "")
    while i <= amount:
        c = t.split("{ii} ")
        if len(c) <= 1:
            print("there were less footnotes found than amount")
            sys.exit(2)
        cs.append(c[i])
        i += 1
    print(f"found {len(cs)} footnotes\n")
    return cs

def buildFNotes(fname, amount, cs):
    f = open(fname, "r")
    t = f.read()
    f.close()
    i = 1
    while i <= amount:
        s1 = f"<span class='tooltip'><sup><a id='{i}.1'>[[{i}]](#{i})</a></sup><span class='tooltiptext'>{cs[i-1]}</span></span>"
        t = nth_repl(t, "{i}", s1, 1)
        s2 = f"<a id=\"{i}\">[[{i}]](#{i}.1)</a> "
        t = nth_repl(t, "{ii} ", s2, 1)
        i += 1

    f = open(fname, "w")
    f.write(t)
    f.close()

if __name__ == "__main__":
    main()