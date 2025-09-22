#include "stdbool.h"
#include "stdio.h"

bool isPrime(int n);
bool isArmStrong(int n);
int power(int n, int power);

int main() {
  int upperLimit, lowerLimit;
  printf("Enter the upper limit: ");

  return 0;
}

bool isPrime(int n) {
  int i;
  if (n < 1) {
    return false;
  }
  for (i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

bool isArmstrong(int n) {
  int initialNum = n, lastDigit, digits[50], digitsIndex = 0, i, rhs = 0;
  while (n > 0) {
    lastDigit = n % 10;
    digits[digitsIndex] = lastDigit;
    digitsIndex++;
    n = n / 10;
  }
  for (i = 0; i <= digitsIndex; i++) {
    rhs += power(digits[i], i + 1);
  }
  if (rhs != initialNum) {
    return false;
  }

  return true;
}
int power(int n, int power) {
  int result = 1, i;
  for (i = 1; i <= power; i++) {
    result *= n;
  }
  return result;
}