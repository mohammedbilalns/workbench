#include "stdio.h"

int main() {
  int n = 10, i, j;
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
      if (j <= i) {
        printf("* ");
      } else {
        printf("  ");
      }
    }
    for (j = 1; j <= n; j++) {
      if (j >= n - i + 1) {
        printf("* ");
      } else {
        printf(" ");
      }
    }
    printf("\n");
  }
}