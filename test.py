from bigO import bigO
def method1(lst):
    n = len(lst)
    total = 0
    for i in range(n):
        for j in range(1+i):
            if i+j in lst:
                total += lst[j]
        return total
tester = bigO()
result = tester.test(method1,"random")
print(result)
