
// delete duplicate elements from the array
#include <stdio.h>

int main()
{

    int arr[] = {4, 5, 6, 3, 3, 2, 3, 4, 5, 6, 6};
    int arrSize = sizeof(arr) / sizeof(arr[0]);
    int i, j, k;

    for (i = 0; i < arrSize; i++)
    {

        for (j = i + 1; j < arrSize; j++)
        {
            if (arr[i] == arr[j])
            {

                for (k = j; k < arrSize - 1; k++)
                {
                    arr[k] = arr[k + 1];
                }
                arrSize--;
                j--; // keep j the same
            }
        }
    }

    for (i = 0; i < arrSize; i++)
    {
        printf("%d\t", arr[i]);
    }
}