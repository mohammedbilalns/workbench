#include <stdio.h>

int main()
{

    int lineCount, i, j;
    printf("Enter the number of lines: ");
    scanf("%d", &lineCount);

    for (i = 1; i <= lineCount; i++)
    {
        int coef = 1;
        for (j = 1; j <= lineCount - i; j++)
        {
            printf(" ");
        }
        for (j = 1; j <= i; j++)
        {
            printf("%d ", coef);
            coef = coef * (i - j) / j;
        }

        printf("\n");
    }
}