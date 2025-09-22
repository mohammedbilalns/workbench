// replace primes with 0 and even with zero

#include <stdio.h>
#include <stdbool.h>

bool isPrime(int n)
{
    int i;
    if (n <= 1)
    {
        return false;
    }
    for (i = 2; i * i < n; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    return true;
}
bool isEven(int n)
{
    if (n % 2 == 0)
    {
        return true;
    }
    return false;
}
int main()
{
    int arr[5] = {44, 56, 7, 45, 23}, i;
    int arrSize = sizeof(arr) / sizeof(arr[0]);
    for (i = 0; i < arrSize; i++)
    {
        if (isEven(arr[i]))
        {
            arr[i] = 1;
        }
        if (isPrime(arr[i]))
        {
            arr[i] = 0;
        }
    }

    for (i = 0; i < arrSize; i++)
    {
        printf("%d\t", arr[i]);
    }
}