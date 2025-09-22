#include <stdio.h>

int main() {
  int linecount, i, j, k = 0;
  printf("number of lines: ");
  scanf("%d", &linecount);

  for (i = 1; i <= 2 * linecount - 1; i++) {
    (i <= linecount) ? k++ : k--;
    for (j = 1; j <= 2 * linecount - 1; j++) {
      if (j >= linecount - k + 1 && j <= linecount + k - 1) {
        printf("* ");
      } else {
        printf("  ");
      }
    }
    printf("\n");
  }
}