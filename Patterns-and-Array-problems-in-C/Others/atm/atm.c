#include <stdio.h>
#include <stdbool.h>
int main()
{

    int balanceAmount = 0, userChoice, amountFromUser, transactionList[10], transactionNumber = 0;
    bool isRunning = true;

    while (isRunning)
    {
        printf("Press 1 for deposit \n Press 2 for withdrawal \n Press 3 for viewing balance \n press 4 for viwing mini statement \n ");
        scanf("%d", &userChoice);

        switch (userChoice)
        {
        case 1:
            printf("Enter the amount to deposit \n");
            scanf("%d", &amountFromUser);
            balanceAmount += amountFromUser;
            transactionList[transactionNumber] = balanceAmount;
            printf("Your money is added and the current balance is: %d \n", balanceAmount);
            transactionNumber++;
            break;
        case 2:
            printf("Enter the amount to deposit \n");
            scanf("%d", &amountFromUser);
            balanceAmount -= amountFromUser;
            transactionList[transactionNumber] = balanceAmount;
            printf("Your money is debited and the current balance is: %d \n", balanceAmount);
            transactionNumber++;
            break;
        case 3:
            printf("Your Balance is: %d \n", balanceAmount);
            break;
        case 4:
            printf("Your last transcations are: ");
            for (int i = 0; i <= 10; i++)
            {
                printf("Transcation number %d: %d \n ", i, transactionList[i]);
            }

        default:
            break;
        }
        printf("Press 1 if you want to stop 2 if you want to continue : \n");
        scanf("%d", &userChoice);
        if (userChoice == 1)
        {
            break;
        }
        else if (userChoice == 2)
        {
            continue;
        }
        else
        {
            printf("Invalid choice \n ");
        }
    }
}
