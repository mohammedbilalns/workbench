#include <stdio.h>
#include <stdlib.h>

int main()
{

    int lineNumber, i, j, number = 1;
    printf("Enter the number of lines ");
    scanf("%d", &lineNumber);

    for (i = 0; i <= lineNumber; i++)
    {
        for (j = 1; j <= i; j++)
        {
            printf("%d ", number);
            number++;
        }

        printf("\n");
    }
}