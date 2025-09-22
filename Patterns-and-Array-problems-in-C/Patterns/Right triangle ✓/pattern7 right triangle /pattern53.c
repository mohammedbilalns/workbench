#include "stdio.h"

int main() {
  int n = 4, i, j, number = 50;
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      printf("%d ", number);
      number = number - 5;
    }

    printf("\n");
  }

  return 0;
}