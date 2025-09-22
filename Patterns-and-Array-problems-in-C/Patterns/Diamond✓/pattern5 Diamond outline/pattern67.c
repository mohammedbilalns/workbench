#include "stdio.h"

int main() {

  int n = 5, k = 0;
  for (int i = 1; i <= 2 * n - 1; i++) {
    int k = i <= n ? k + 1 : k - 1;
    for (int j = 1; j <= 2 * n - 1; j++) {
      if (j == n - k + 1 || j == n + k - 1) {
        printf("*");
      } else {
        printf(" ");
      }
    }
    printf("\n");
  }
}