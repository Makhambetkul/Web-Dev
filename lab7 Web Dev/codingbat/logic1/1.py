def cigar_party(cigars, is_weekend):
    return (40<=cigars<60) or (cigars>60 and is_weekend==True)

cigars=int(input())
is_weekend=input()=='True'
print(cigar_party(cigars, is_weekend))