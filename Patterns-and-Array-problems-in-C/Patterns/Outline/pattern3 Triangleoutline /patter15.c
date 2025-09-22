#include <stdio.h>

int main()
{

    int lineCount, i, j;

    printf("Enter the number of lines: ");
    scanf("%d", &lineCount);

    for (i = 1; i <= lineCount; i++)
    {
        for (j = 1; j <= 2 * lineCount - 1; j++)
        {

            if (i == lineCount || j == lineCount - i + 1 || j == lineCount + i - 1)
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