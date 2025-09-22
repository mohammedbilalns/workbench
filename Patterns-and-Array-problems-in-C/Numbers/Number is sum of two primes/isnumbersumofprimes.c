#include "stdio.h"

int isPrime(int n);
int main() {

  int numberToCheck, isSuccess = 0;
  printf("Enter the number to check: ");
  scanf("%d", &numberToCheck);

  for (int i = 2; i <= numberToCheck / 2; i++) {
    if (isPrime(i) == 1) {
      if (isPrime(numberToCheck - i) == 1) {
        isSuccess = 1;
        printf("%d = %d +%d", numberToCheck, i, numberToCheck - i);
        break;
      }
    }
  }
  if (isSuccess == 0) {
    printf("Can't write %d as a sum of two primes ", numberToCheck);
  }
}
int isPrime(int n) {
  if (n <= 1) {
    return 0;
  } else {
    for (int i = 2; i * i <= n; i++) {
      if (n % i == 0) {
        return 0;
      }
    }
  }
  return 1;
}