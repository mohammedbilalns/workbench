#include <stdio.h>
int main()
{
    int i, j, lineCount;
    printf("Enter the number of lines: ");
    scanf("%d", &lineCount);
    for (i = 1; i <= lineCount; i++)
    {

        for (j = 1; j <= 2 * lineCount - 1; j++)
        {

            if (j <= lineCount - i + 1 || j >= lineCount + i - 1)
            {
                printf("%c", 64 + j);
                        }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
}