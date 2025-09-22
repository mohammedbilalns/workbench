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
            if ((i == 1 || j == 1 || i == lineCount || j == lineCount) || (i >= 3 && i <= lineCount - 2 && j >= 3 && j <= lineCount - 2) && (i == 3 || i == lineCount - 2 || j == 3 || j == lineCount - 2))
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
}