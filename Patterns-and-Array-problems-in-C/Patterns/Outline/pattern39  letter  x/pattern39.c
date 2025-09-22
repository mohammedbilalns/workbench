#include <stdio.h>
int main()
{
    int i, j, lineCount;
    printf("Enter the number of lines: ");
    scanf("%d", &lineCount);
    for (i = 1; i <= lineCount; i++)
    {
        for (j = 1; j <= lineCount; j++)
        {

            if (j == i || j == lineCount - i + 1)
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