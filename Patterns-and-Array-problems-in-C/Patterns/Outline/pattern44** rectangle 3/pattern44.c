#include <stdio.h>

void pattern(int lineCount) {
  int i, j;
  for (i = 1; i <= lineCount; i++) {
    for (j = 1; j <= lineCount; j++) {
      if (i == 1 || j == 1 || i == lineCount || j == lineCount || j == i ||
          j == lineCount - i + 1) {
        printf("* ");
      } else {
        printf("  ");
      }
    }
    printf("\n");
  }
}
int main() { pattern(9); }