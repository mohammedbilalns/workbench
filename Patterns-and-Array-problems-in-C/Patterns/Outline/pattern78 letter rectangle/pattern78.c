#include <stdio.h>
int main() {
  int n = 6;

  for (int i = 1; i <= n + 1; i++) {
    for (int j = 1; j <= n; j++) {
      if (i == 1 || i == n + 1 || (j == 1 && i % 2 == 1) ||
          (j == n && i % 2 == 1)) {
        printf("* ");
      } else {
        printf("  ");
      }
    }
    printf("\n");
  }
}