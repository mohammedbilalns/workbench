#include "stdbool.h"
#include "stdio.h"

int reverseNumber(int number) {
  int reversedNumber = 0, lastDigit;

  while (number > 0) {
    lastDigit = number % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    number = number / 10;
  }

  return reversedNumber;
}

int main() {

  int number;

  printf("Enter the number to check: ");
  scanf("%d", &number);
  int reverseNum = reverseNumber(number);
  number == reverseNum ? printf("%d is pallindrome", number)
                       : printf("%d is not pallindrome", number);
}