#include "stdio.h"

int main() {

  int lineCount = 8;
  int i, j, k = 1, n = 1;

  for (i = 1; i <= lineCount; i++) {
    if (i % 3 == 0) {
      k = i + n;
      n++;
    } else if (i % 3 == 1) {
      k = i + 2;
    }

    for (j = 1; j <= i + 2; j++) {

      if (j <= k) {
        printf("* ");
      } else {
        printf("  ");
      }
    }

    printf("\n");
  }
}