#include <stdio.h>
int main()
{
    int i, j, lineCount;
    printf("Enter the number of lines: ");
    scanf("%d", &lineCount);

    for (i = 1; i <= lineCount; i++)
    {
        for (j = 1; j <= 2 * lineCount; j++)
        {
            if (j >= lineCount - i + 1 && j <= 2 * lineCount - i + 1)
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