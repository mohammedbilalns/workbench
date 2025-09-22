#include "stdio.h"

int reverseNumber(int n) {
  int reversedNumber = 0;
  int num = n, lastDigit;
  while (num > 0) {
    lastDigit = num % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    num = num / 10;
  }

  return reversedNumber;
}

int main() {
  int number = 45215;
  int reversed = reverseNumber(number);
  printf("%d", reversed);
}