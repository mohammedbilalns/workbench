#include <stdio.h>

int main()
{
    int letterNumber, i, j;
    printf("Enter the  number of letters: ");
    scanf("%d", &letterNumber);

    for (i = 1; i <= letterNumber; i++)
    {

        for (j = 1; j <= i; j++)
        {
            printf("%c", 64 + j);
        }

        printf("\n");
    }
}