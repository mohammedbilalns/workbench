#include <stdio.h>

int LinearSearch(int arr[], int numberToSearch, int arrSize)
{

    for (int i = 0; i < arrSize; i++)
    {
        if (arr[i] == numberToSearch)
        {
            return i;
        }
    }
    return -1;
}
int main()
{
    int numberToSearch;
    int arr[] = {4, 3, 3, 5, 67, 8, 8};
    int arrSize = sizeof(arr) / sizeof(arr[0]);

    printf("Enter the number to search:  ");
    scanf("%d", &numberToSearch);

    int searchedIndex = LinearSearch(arr, numberToSearch, arrSize);
    if (searchedIndex == -1)
    {
        printf("The number is not in the array ");
    }
    else
    {
        printf("The number is on the index :%d ", searchedIndex);
    }

    return 0;
}
