#include <stdio.h>

int main()
{
    int i, j, lineNumber;
    printf("Enter number of lines: ");
    scanf("%d", &lineNumber);

    for (i = 1; i <= lineNumber; i++)

    {
        int k = 1;

        for (j = 1; j <= 2 * lineNumber - 1; j++)
        {
            if (j <= lineNumber - i + 1 || j >= lineNumber + i - 1)
            {
                printf("%c", 64 + k);
                if (j <= lineNumber - i)
                {
                    k++;
                }
                else if (j >= lineNumber + i - 1)
                {
                    k--;
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