#include "stdio.h"

int main() {
  int n = 6;

  for (int i = 1; i <= 2 * n - 1; i++) {
    int k = i <= n ? i : 2 * n - i;
    for (int j = 1; j <= n; j++) {
      if (j >= k) {
        printf("*");
      } else {
        printf(" ");
      }
    }
    printf("\n");
  }
}