#include "stdio.h"

int main() {

  int n = 5;
  for (int i = 1; i <= 2 * n; i++) {
    int k = i <= n ? i : 2 * n - i + 1;
    for (int j = 1; j <= 2 * n; j++) {
      if (j <= k || j >= 2 * n - k + 1) {
        printf("* ");
      } else {
        printf("  ");
      }
    }
    printf("\n");
  }
}