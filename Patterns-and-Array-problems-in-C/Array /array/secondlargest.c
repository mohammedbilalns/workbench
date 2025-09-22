// second largest element in array

#include <stdio.h>

int main()
{

    int arr[7] = {4, 6, 8, 4, 3, 2, 3}, i;
    int largest = arr[0], secondLargest = arr[0];

    for (i = 0; i < 7; i++)
    {
        if (arr[i] > largest)
        {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] != largest)
        {
            secondLargest = arr[i];
        }
    }
    printf("Second largest element is: %d", secondLargest);
}