#include <stdio.h>
#include <stdlib.h>

int main()
{

    int lineNumber, i, j, number = 0;
    printf("Enter the number of lines \n");
    scanf("%d", &lineNumber);

    for (i = 1; i <= lineNumber; i++)
    {
        for (j = 1; j <= lineNumber + i - 1; j++)
        {
            if (j <= lineNumber - i)
            {
                printf("  ");
            }
            else if (j <= lineNumber)
            {
                number++;
                printf("%d ", number);
            }
            else
            {
                number--;
                printf("%d ", number);
            }
        }

        printf("\n");
    }
}