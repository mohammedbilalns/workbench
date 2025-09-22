
// search an element in array
#include <stdio.h>

int main()
{

	int limit, i, arr[100], searchTerm, findFlag = 0;
	printf("Enter the limit of the array \n ");
	scanf("%d", &limit);

	printf("Enter the values to put in arary  \n ");
	for (i = 0; i < limit; i++)
	{
		scanf("%d", &arr[i]);
	}
	printf("Array contain values: ");
	for (i = 0; i < limit; i++)
	{
		printf("%d \t", arr[i]);
	}

	printf("Enter the term to search; \n");
	scanf("%d", &searchTerm);
	for (i = 0; i < limit; i++)
	{
		if (searchTerm == arr[i])
		{
			findFlag = 1;
			break;
		}
	}
	if (findFlag == 1)
	{
		printf("%d is contained in the %d position of the array", searchTerm, i + 1);
	}
	else
	{
		printf("Search Term is not in the array ");
	}
}
