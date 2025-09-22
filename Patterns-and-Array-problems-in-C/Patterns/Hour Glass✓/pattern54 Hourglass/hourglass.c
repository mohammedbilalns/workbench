#include "stdio.h"

int main() {

  int n = 5;

  for (int i = 1; i <= 2 * n - 1; i++) {
    int l = 1;
    int k = i <= n ? i : 2 * n - i;
    for (int j = 1; j <= 2 * n - 1; j++) {
      if (j >= k && j <= 2 * n - k) {
        printf("%d ", l);
        l++;
      } else {
        printf("  ");
      }
    }
    printf("\n");
  }
}