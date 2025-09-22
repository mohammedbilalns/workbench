#include "stdio.h"

int main() {
  int number, i;
  unsigned long long factorial = 1;
  printf("enter the number : ");
  scanf("%d", &number);

  for (i = number; i >= 1; i--) {
    factorial *= i;
  }
  printf("Factorial of %d is %lld", number, factorial);

  return 0;
}