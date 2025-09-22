// sum and if sum greater than 100 delete evens else delete odds
#include <stdio.h>
#include <stdbool.h>

bool isEven(int n)
{
    if (n % 2 == 0)
    {
        return true;
    }
    return false;
}
int sumOfArray(int arr[], int size)
{
    int i, sum = 0;
    for (i = 0; i < size; i++)
    {
        sum = sum + arr[i];
    }
    return sum;
}
void displayArray(int arr[], int size)
{
    int i;
    for (i = 0; i < size; i++)
    {
        printf("%d\t", arr[i]);
    }
}
int main()
{
    int i;

    int arr[5] = {10, 5, 4, 3, 20};
    int sizeofarr = sizeof(arr) / sizeof(arr[0]);
    int sum = sumOfArray(arr, sizeofarr);

    if (sum > 100)
    {
        for (i = 0; i < sizeofarr; i++)
        {
            if (isEven(arr[i]))
            {
                arr[i] = 0;
            }
        }
    }
    else if (sum < 100)
    {
        for (i = 0; i < sizeofarr; i++)
        {
            if (!isEven(arr[i]))
            {
                arr[i] = 0;
            }
        }
    }

    displayArray(arr, sizeofarr);
}