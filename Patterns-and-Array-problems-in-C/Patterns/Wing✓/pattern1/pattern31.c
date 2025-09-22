#include <stdio.h>
int main()
{
    int i, j, lineCount, k = 0;
    printf("Enter the number of lines: ");
    scanf("%d", &lineCount);

    for (i = 1; i <= 2 * lineCount - 1; i++)
    {
        i <= lineCount ? k++ : k--;
        for (j = 1; j <= 2 * lineCount - 1; j++)
        {
            if (j <= k || j >= 2 * lineCount - k)
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