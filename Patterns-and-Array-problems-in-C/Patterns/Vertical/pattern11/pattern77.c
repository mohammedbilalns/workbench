#include "stdio.h"

int main() {

  int n = 3;

  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
      for (int k = 1; k <= 2 * i; k++) {
        printf("*");
      }
      printf("\n");
    }
    if (i == n) {
      break;
    }
    for (int j = 1; j <= 3; j++) {
      printf("*\n");
    }
  }
}