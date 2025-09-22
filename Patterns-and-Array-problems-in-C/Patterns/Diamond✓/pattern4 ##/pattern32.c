#include <stdio.h>
int main()
{
    int i, j, lineCount, k = 0, l;
    printf("Enter the number of lines: ");
    scanf("%d", &lineCount);

    for (i = 1; i <= 2 * lineCount - 1; i++)
    {
        (i <= lineCount) ? k++ : k--;
        l = k - 1;
        for (j = 1; j <= 2 * lineCount - 1; j++)
        {

            if (j >= lineCount - k + 1 && j <= lineCount + k - 1)
            {

                printf("%d ", l % 10);
                (j < lineCount) ? l++ : l--;
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
}