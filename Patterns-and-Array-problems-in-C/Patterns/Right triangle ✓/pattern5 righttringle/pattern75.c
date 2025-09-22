#include "stdio.h"

int main() {

  int n = 5, k = 1;
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= k; j++) {
      printf("* ");
    }
    k = k == 1 ? k + 2 : k + 3;
    printf("\n");
  }
}