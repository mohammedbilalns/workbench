#include <stdio.h>

int main()
{
    int lineNumber, i, j;
    printf("Enter the number of lines: ");
    scanf("%d", &lineNumber);

    for (i = 1; i <= lineNumber; i++)
    {
        for (j = 1; j <= i; j++)
        {
            printf("*");
        }
        printf("\n");
    }
    for (i = lineNumber - 1; i >= 1; i--)
    {
        for (j = 1; j <= i; j++)
        {
            printf("*");
        }
        printf("\n");
    }
}