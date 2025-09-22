// print all unique elements in an array.

#include <stdio.h>

int main()
{
    int arr[100];
    int arrSize;
    int i, j, isUnique;

    // get array size
    printf("Enter the size of the array:  ");
    scanf("%d", &arrSize);
    // check array size
    if (arrSize == 0)
    {
        printf("Array size can't be zero ");
        return 1;
    }
    else if (arrSize > 100)
    {
        printf("Array size cannot be greater  than 100 ");
        return 1;
    }
    // get array content
    printf("Enter the values in the array \n");
    for (i = 0; i < arrSize; i++)
    {
        scanf("%d", &arr[i]);
    }

    // check unique elements
    for (i = 0; i < arrSize; i++)
    {
        isUnique = 1;
        for (j = 0; j < arrSize; j++)
        {
            if (arr[i] == arr[j] && i != j)
            {
                isUnique = 0;
                break;
            }
        }

        if (isUnique == 1)
        {
            printf("Element %d is unique in the array \n ", arr[i]);
        }
    }
}