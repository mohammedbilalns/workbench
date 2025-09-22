#include <stdio.h>
int main()
{
    int i, j, lineCount, k;
    printf("Enter the number of lines: ");
    scanf("%d", &lineCount);

    for (i = 1; i <= lineCount; i++)
    {
        k = i;
        for (j = 1; j <= lineCount; j++)
        {
            if (j <= i)
            {
                printf("%c", 64 + k);
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