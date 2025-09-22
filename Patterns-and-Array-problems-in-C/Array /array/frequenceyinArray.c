
// frequency of each elements in the array
#include <stdio.h>

int main()
{
	int arr[10] = {4, 5, 6, 3, 3, 4, 5, 6, 6, 5};
	int arrSize = sizeof(arr) / sizeof(arr[0]);
	int isChecked[arrSize], i, j, count;
	for (i = 0; i <= arrSize; i++)
	{
		isChecked[i] = 0;
	}

	for (i = 0; i < arrSize; i++)
	{

		if (isChecked[i] == 0)
		{
			count = 1;
			for (j = i + 1; j < arrSize; j++)
			{
				if (arr[i] == arr[j])
				{
					count++;
					isChecked[j] = 1;
				}
			}
			printf("frequence of %d is %d \n ", arr[i], count);
		}
	}
}
