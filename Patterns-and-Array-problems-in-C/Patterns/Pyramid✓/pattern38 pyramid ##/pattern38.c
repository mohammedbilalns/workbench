#include <stdio.h>
int main()
{
    int i, j, lineCount, k;
    printf("Enter the number of lines: ");
    scanf("%d", &lineCount);

    for (i = 1; i <= lineCount; i++)
    {
        k = 1;
        for (j = 1; j <= 2 * lineCount - 1; j++)
        {

            if (j >= lineCount - i + 1 && j <= lineCount + i - 1)
            {

                if ((i + j) % 2 == 1)
                {
                    if (i % 2 == 1)
                    {
                        printf("%d", k);
                    }
                    else
                    {
                        printf("%c", 64 + k);
                    }
                    k++;
                }
                else
                {
                    printf(" ");
                }
            }
            else
            {

                printf(" ");
            }
        }
        printf("\n");
    }
}