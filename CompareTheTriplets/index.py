def compareTriplets(a, b):
    # Write your code here
    alice = 0
    bob = 0
    if a[0] > b[0]:
        alice += 1
    elif a[0] == b [0]:
        alice += 0
        bob += 0
    else:
        bob += 1

    if a[1] == b[1]:
        alice += 0
        bob += 0
    elif a[1] > b[1]:
        alice += 1
    else:
        bob += 1
    if a[2] < b[2]:
        bob += 1
    elif a[2] == b[2]:
        bob += 0
        alice += 0
    else:
        alice += 1
    puntuacion = [alice, bob]
    return puntuacion
