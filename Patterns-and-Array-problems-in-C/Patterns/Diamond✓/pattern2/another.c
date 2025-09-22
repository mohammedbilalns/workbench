#include <stdio.h>

int main()
{

    int i, j, k = 0, lineCount;
    printf("Enter the number of lines: ");
    scanf("%d", &lineCount);

    for (i = 1; i <= lineCount; i++)
    {
        if (lineCount % 2 == 0)
        {
            if (i <= lineCount / 2)
            {
                k++;
            }
            else if (i > lineCount / 2 + 1)
            {
                k--;
            }
        }
        else
        {
            (i <= (lineCount + 1) / 2) ? k++ : k--;
        }
        for (j = 1; j <= (lineCount + 1) / 2; j++)
        {
            if (j <= k)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
}