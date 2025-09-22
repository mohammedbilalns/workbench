#include <stdio.h>
#include <stdlib.h>
int main()
{

    int numberOfLines, i, j;
    printf("Enter the number of lines \n ");
    scanf("%d", &numberOfLines);
    system("clear");

    for (i = 1; i <= numberOfLines; i++)
    {
        for (j = 1; j <= numberOfLines - i + 1; j++)
        {
            printf("%d ", j);
        }

        printf("\n");
    }

    return 0;
}