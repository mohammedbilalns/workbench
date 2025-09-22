#include "stdbool.h"
#include "stdio.h"

int power(int number, int power) {
  int result = 1;
  for (int i = 1; i <= power; i++) {
    result *= number;
  }
  return result;
} // find the power

bool isArmStrong(int n) {

  int lastdigit, digits[50], digitsIndex = 0, rhs = 0, i;
  int originalNumber = n;

  while (n > 0) {

    lastdigit = n % 10;
    digits[digitsIndex] = lastdigit;
    digitsIndex++;
    n = n / 10;
  }
  for (i = 0; i < digitsIndex; i++) {
    rhs += power(digits[i], digitsIndex);
  }
  return rhs == originalNumber ? true : false;
} // check a number is amstrong

int main() {
  int lowerLimit, higherLimit, i;
  printf("Enter the lower limit: ");
  scanf("%d", &lowerLimit);
  printf("Enter the upper limit: ");
  scanf("%d", &higherLimit);

  for (i = lowerLimit; i <= higherLimit; i++) {
    // ok
    if (isArmStrong(i)) {
      printf("%d is armstrong \n", i);
    }
  }
}