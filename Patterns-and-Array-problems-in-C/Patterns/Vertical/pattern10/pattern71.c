#include "stdio.h"

int main() {

  int n = 3;
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i - 1; j++) {
      printf("*\n");
    }
    for (int j = 1; j <= 2; j++) {
      for (int k = 1; k <= 3 * i; k++) {
        printf("*");
      }

      printf("\n");
    }
  }
}