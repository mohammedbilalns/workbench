#include "stdio.h"

int main() {
  int number, i;
  printf("Enter the number: \n");
  scanf("%d", &number);
  printf("factors of %d are: ", number);

  for (i = 1; i <= number; i++) {
    if (number % i == 0) {
      printf("%d\t", i);
    }
  }

  return 0;
}