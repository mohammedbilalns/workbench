#include <stdio.h>

int main()
{
    int lineCount, i, j, k = 0;
    printf("Enter the number of lines: ");
    scanf("%d", &lineCount);

    for (i = 1; i <= lineCount * 2; i++)
    {
        if (i <= lineCount)
        {
            k++;
        }
        else if (i > lineCount + 1)
        {
            k--;
        }

        for (j = 1; j <= lineCount * 2 + 1; j++)
        {
            if (j >= lineCount - k + 1 && j <= lineCount + k - 1)
            {
                printf(" ");
            }
            else
            {
                printf("*");
            }
        }
        printf("\n");
    }
    return 0;
}