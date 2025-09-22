#include <stdio.h>

int main()
{
    int lineNumber, i, j;
    printf("enter the number of letters: ");
    scanf("%d", &lineNumber);

    for (i = lineNumber; i >= 1; i--)
    {

        for (j = 1; j <= i; j++)
        {
            printf("%c", 64 + j);
        }

        printf("\n");
    }
}