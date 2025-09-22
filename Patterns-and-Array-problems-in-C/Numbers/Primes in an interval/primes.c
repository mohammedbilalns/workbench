#include "stdio.h"

int isprime(int n) {
  int i;
  if (n <= 1) {
    return 0;
  }
  for (i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return 0;
      break;
    }
  }
  return 1;
}

int main() {

  int upperLimit, lowerLimit, i;

  printf("Enter the upper limit: ");
  scanf("%d", &upperLimit);
  printf("Enter the lower limit: ");
  scanf("%d", &lowerLimit);

  for (i = lowerLimit; i <= upperLimit; i++) {
    if (isprime(i)) {
      printf("%d is prime \n", i);
    }
  }
}