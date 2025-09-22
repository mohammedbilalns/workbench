#include "stdio.h"

int power(int number, int power) {
  int answer = 1, i;
  for (i = 1; i <= power; i++) {
    answer *= number;
  }

  return answer;
}

int main() {
  int number, digits[50], digitsCount = 0, lastDigit, i, rhs = 0;
  printf("Enter the numbe to check: ");
  scanf("%d", &number);

  int originalNumber = number;

  while (number > 0) {
    lastDigit = number % 10;
    digits[digitsCount] = lastDigit;
    digitsCount++;
    number = number / 10;
  }
  for (i = 0; i < digitsCount; i++) {
    rhs += power(digits[i], digitsCount);
  }

  if (rhs == originalNumber) {
    printf("%d is ArmStrong", originalNumber);
  } else {
    printf("%d is not ArmStrong", originalNumber);
  }
}