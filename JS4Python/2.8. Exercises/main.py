import math
def main(limit=10):
    prime_numbers = []
    for i in range(limit):
        isPrime = True
        num = i + 1
        for prime_num in prime_numbers:
            if prime_num == 1:
                continue
            if math.sqrt(num) < prime_num:
                break
            if num % prime_num == 0:
                isPrime = False
                break
        if isPrime:
            prime_numbers.append(num)

    return prime_numbers

prime_numbers = main()
print(prime_numbers)