class Solution:
    def checkDivisibility(self, n: int) -> bool:
        m = n
        sum = 0
        product = 1

        while m > 0:
            sum += m % 10
            product *= m % 10
            m = m // 10

        return (n % (sum + product)) == 0
