#include <stdio.h>
int main()
{
    int i, j, lineCount, k;
    printf("Enter the number of lines: ");
    scanf("%d", &lineCount);

    for (i = 1; i <= lineCount; i++)
    {
        k = lineCount - i;
        for (j = 1; j <= lineCount; j++)
        {
            if (j <= lineCount - i + 1)
            {
                printf("%d", k);
                k--;
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
}