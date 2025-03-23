def make_out_word(out, word):
    return out[:2]+word+out[2:4]

out=input()
word=input()
print(make_out_word(out, word))