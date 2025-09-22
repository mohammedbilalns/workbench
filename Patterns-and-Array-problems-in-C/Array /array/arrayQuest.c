#include <stdio.h>
#include <stdbool.h>
void sortAscending(int arr[], int size);                // sort array by ascending order
void displayArray(int arr[], int size);                 // display an array
void sortDescending(int arr[], int size);               // sort array by decending ordersssssssssssss
void largestElement(int arr[], int size);               // find the largest element
void reverse(int arr[], int size);                      // reverse an array
void mergeArraysSize(int arr1[], int arr2[], int size); // merge two arrays of same size into a new array
void reverseAndDeleteEven(int arr[], int size);         // reverse an array and delete even entries
bool isPrime(int n);                                    // check a number is prime
bool isEven(int n);                                     // check a number is even
int sumOfArray(int arr[], int size);                    // find the sum of an array
void averageOfPrimes(int arr1[], int size);             // find the average of primes in an array
float removeEvenAndReturnAverage(int arr[], int size);  // remove evens and return the averager of remaining elements

int main()
{

    int arr1[5] = {67, 14, 3, 2, 5}, arr2[5] = {43, 54, 65, 76, 87}, i, j;
    int sizeOfarr1 = sizeof(arr1) / sizeof(arr1[0]);

    // reverse(arr1, sizeOfarr1);
    // displayArray(arr1, sizeOfarr1);
    // sortAscending(arr1, sizeOfarr1);
    // sortDescending(arr1, sizeOfarr1);
    // largestElement(arr1, sizeOfarr1);
    // mergeArraysSize(arr1, arr2, sizeOfarr1);
    // averageOfPrimes(arr1, sizeOfarr1);
    // removeEvenAndReturnAverage(arr2, sizeOfarr1);
    reverseAndDeleteEven(arr1, sizeOfarr1);
}
void reverse(int arr[], int size)
{
    int i;
    for (i = 0; i < size / 2; i++)
    {
        arr[i] = arr[i] + arr[size - i - 1];
        arr[size - i - 1] = arr[i] - arr[size - i - 1];
        arr[i] = arr[i] - arr[size - i - 1];
    }
    displayArray(arr, size);
}

void displayArray(int arr[], int size)
{
    int i;
    printf("\n");
    for (i = 0; i < size; i++)
    {
        printf(" %d \t", arr[i]);
    }
}
void sortDescending(int arr[], int size)
{
    int i, j;
    for (i = 0; i < size - 1; i++)
    {
        for (j = i + 1; j < size; j++)
        {
            if (arr[j] > arr[i])
            {
                arr[i] = arr[i] + arr[j];
                arr[j] = arr[i] - arr[j];
                arr[i] = arr[i] - arr[j];
            }
        }
    }

    displayArray(arr, size);
}
void sortAscending(int arr[], int size)
{
    int i, j;

    for (i = 0; i < size - 1; i++)
    {
        for (j = i + 1; j < size; j++)
        {
            if (arr[j] < arr[i])
            {
                arr[i] = arr[i] + arr[j];
                arr[j] = arr[i] - arr[j];
                arr[i] = arr[i] - arr[j];
            }
            else
            {
                continue;
            }
        }
    }
    displayArray(arr, size);
}

void largestElement(int arr[], int size)
{
    int largest = arr[0], i;
    for (i = 1; i < size; i++)
    {
        if (arr[i] > largest)
        {
            largest = arr[i];
        }
    }

    printf("\n Largest numbe in the array is %d", largest);
}

void mergeArraysSize(int arr1[], int arr2[], int size)
{
    int mergedArr[2 * size], i;

    for (i = 0; i < 2 * size; i++)
    {
        if (i < size)
        {
            mergedArr[i] = arr1[i];
        }
        else
        {
            mergedArr[i] = arr2[i - size];
        }
    }
    displayArray(mergedArr, size * 2);
}

bool isPrime(int n)
{
    if (n <= 1)
    {
        return false;
    }
    else
    {
        for (int i = 2; i * i <= n; i++)
        {
            if (n % i == 0)
            {
                return false;
            }
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

int sumOfArray(int arr[], int size)
{
    int i, sum = 0;
    for (i = 0; i < size; i++)
    {
        sum = sum + arr[i];
    }
    return sum;
}

void averageOfPrimes(int arr[], int size)
{

    int sum = 0, count = 0, i;
    for (i = 0; i < size; i++)
    {
        if (isPrime(arr[i]))
        {
            printf("\n %d", arr[i]);
            sum = sum + arr[i];
            count++;
        }
    }
    printf("\n sum is %d", sum);
    printf("\n Average of primes is %f", (double)sum / count);
}

float removeEvenAndReturnAverage(int arr[], int size)
{
    int i, evenCount = 0;
    for (i = 0; i < size; i++)
    {
        if (isEven(arr[i]))
        {
            arr[i] = 0;
            evenCount++;
        }
    }
    int sizeOfNewArray = size - evenCount;
    printf("sum of remaining elements is %d\n", sumOfArray(arr, size));
    printf("No of remaingin elements is %d\n", sizeOfNewArray);
    printf("Average of remaingin elements is %f", (float)sumOfArray(arr, size) / sizeOfNewArray);
}

void reverseAndDeleteEven(int arr[], int size)
{
    int i;
    for (i = 0; i < size / 2; i++)
    {
        arr[i] = arr[i] + arr[size - i - 1];
        arr[size - i - 1] = arr[i] - arr[size - i - 1];
        arr[i] = arr[i] - arr[size - i - 1];
    }

    for (i = 0; i < size; i++)
    {
        if (isEven(arr[i]))
        {
            arr[i] = 0;
        }
    }
    printf("Reversed and even deleted array is \n ");
    displayArray(arr, size);
}