#include "stdio.h"

int main() {

  int n = 4;
  for (int i = 1; i <= n; i++) {
    printf("*\n");
    for (int j = 1; j <= i; j++) {
      for (int k = 1; k <= 3; k++) {
        printf("*");
      }
      printf("\n");
    }
  }

  return 0;
}